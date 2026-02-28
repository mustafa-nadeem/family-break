import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './CloudIntro.css'

/*
 * CloudIntro — Cinematic cloud reveal using real PNG cloud photos
 *
 * APPROACH: Many copies of 2 real cloud PNG images scattered at
 * different sizes, positions, opacities, flips, and z-depths.
 * Stacked densely to fill the entire screen with realistic clouds.
 *
 * Layers:
 *   back  — large, blurred, lower opacity (distant clouds)
 *   mid   — medium, slightly blurred
 *   front — crisp, full opacity (closest)
 *   edge  — extends ABOVE the overlay for curved cloud-top on descent
 *
 * TIMING:
 *   HOLD_MS    — 1800ms pause before reveal
 *   REVEAL_SEC — 1.5s descent
 */

const HOLD_MS = 800
const REVEAL_SEC = 2.5
const REVEAL_EASE = [0.76, 0, 0.24, 1]

/* Two real cloud PNG images from /public/clouds/ */
const CLOUD_IMAGES = [
  '/clouds/—Pngtree—cloud weather climate_8186751.png',
  '/clouds/—Pngtree—white cloud weather climate_8186765.png',
]

/* Seeded PRNG for deterministic layout */
function seededRng(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

/*
 * Generate cloud placements for a layer.
 * Each cloud: { src, x(vw), y(vh), w(vw), h(auto via CSS), opacity, flipX, zIndex }
 */
function generateClouds(count, yMin, yMax, wMin, wMax, opMin, opMax, seed) {
  const rand = seededRng(seed)
  const clouds = []

  for (let i = 0; i < count; i++) {
    clouds.push({
      src: CLOUD_IMAGES[Math.floor(rand() * CLOUD_IMAGES.length)],
      x: -15 + rand() * 120, // spread beyond viewport edges
      y: yMin + rand() * (yMax - yMin),
      w: wMin + rand() * (wMax - wMin),
      opacity: opMin + rand() * (opMax - opMin),
      flipX: rand() > 0.5,
      zIndex: Math.floor(rand() * 3),
    })
  }

  return clouds
}

/* Edge clouds — extend above the overlay (negative y) for curved top */
function generateEdgeClouds(count, seed) {
  const rand = seededRng(seed)
  const clouds = []

  for (let i = 0; i < count; i++) {
    clouds.push({
      src: CLOUD_IMAGES[Math.floor(rand() * CLOUD_IMAGES.length)],
      x: -10 + (i / count) * 110 + (rand() - 0.5) * 15,
      y: -18 + rand() * 14, // -18vh to -4vh — extends above top
      w: 20 + rand() * 28,
      opacity: 0.85 + rand() * 0.15,
      flipX: rand() > 0.5,
      zIndex: 0,
    })
  }

  return clouds
}

function renderClouds(clouds, className) {
  return clouds.map((c, i) => (
    <img
      key={`${className}-${i}`}
      src={c.src}
      alt=""
      className={`cloud-img ${className}`}
      draggable={false}
      style={{
        left: `${c.x}vw`,
        top: `${c.y}vh`,
        width: `${c.w}vw`,
        opacity: c.opacity,
        transform: c.flipX ? 'scaleX(-1)' : 'none',
        zIndex: c.zIndex,
      }}
    />
  ))
}

function CloudIntro({ onComplete }) {
  const [phase, setPhase] = useState('hold')

  /* Dense coverage — lots of large, high-opacity overlapping clouds */
  const backClouds = useMemo(
    () => generateClouds(22, -15, 90, 35, 70, 0.7, 1.0, 42),
    [],
  )
  const midClouds = useMemo(
    () => generateClouds(20, -10, 85, 30, 60, 0.75, 1.0, 293),
    [],
  )
  const frontClouds = useMemo(
    () => generateClouds(18, -12, 80, 25, 50, 0.85, 1.0, 617),
    [],
  )
  const edgeClouds = useMemo(() => generateEdgeClouds(14, 777), [])

  /* Preload cloud images */
  useEffect(() => {
    CLOUD_IMAGES.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    const id = setTimeout(() => setPhase('reveal'), HOLD_MS)
    return () => clearTimeout(id)
  }, [])

  const handleAnimEnd = useCallback(() => {
    if (phase === 'reveal') {
      setPhase('done')
      onComplete?.()
    }
  }, [phase, onComplete])

  if (phase === 'done') return null

  const revealing = phase === 'reveal'

  return (
    <AnimatePresence>
      <motion.div
        key="cloud-intro"
        className="cloud-intro"
        initial={{ y: 0 }}
        animate={{ y: revealing ? '250vh' : 0 }}
        transition={{ duration: REVEAL_SEC, ease: REVEAL_EASE }}
        onAnimationComplete={handleAnimEnd}
      >
        {/* Back layer — large, blurred, distant clouds */}
        <motion.div
          className="cloud-layer cloud-layer--back"
          animate={revealing ? { y: '-6%' } : { x: [0, 12, 0] }}
          transition={
            revealing
              ? { duration: REVEAL_SEC, ease: REVEAL_EASE }
              : { duration: 30, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          {renderClouds(backClouds, 'cloud-img--back')}
        </motion.div>

        {/* Mid layer */}
        <motion.div
          className="cloud-layer cloud-layer--mid"
          animate={revealing ? { y: '-12%' } : { x: [0, -7, 0] }}
          transition={
            revealing
              ? { duration: REVEAL_SEC, ease: REVEAL_EASE }
              : { duration: 22, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          {renderClouds(midClouds, 'cloud-img--mid')}
        </motion.div>

        {/* Front layer — crisp, closest */}
        <motion.div
          className="cloud-layer cloud-layer--front"
          animate={revealing ? { y: '-20%' } : { x: [0, 5, 0] }}
          transition={
            revealing
              ? { duration: REVEAL_SEC, ease: REVEAL_EASE }
              : { duration: 16, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          {renderClouds(frontClouds, 'cloud-img--front')}
        </motion.div>

        {/* Edge layer — extends above for curved cloud top */}
        <div className="cloud-layer cloud-layer--edge">
          {renderClouds(edgeClouds, 'cloud-img--edge')}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CloudIntro
