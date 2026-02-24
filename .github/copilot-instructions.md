# Copilot Instructions - React Website Project

## Project Overview
This is a React web application built with Vite, designed for building a modern website. The project uses React for the UI framework and Vite as the build tool for fast development and optimized production builds.

## Technology Stack
- **Framework**: React 18
- **Build Tool**: Vite 7.3.1
- **Package Manager**: npm
- **Development Server**: Vite dev server (HMR - Hot Module Replacement enabled)

## Getting Started

### Available Scripts

- `npm run dev` - Start the development server on http://localhost:5173
- `npm run build` - Build the project for production in the `dist/` directory
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

### Development Workflow
1. Run `npm run dev` to start the development server
2. The browser will automatically refresh when you save changes (Hot Module Replacement)
3. Edit files in `src/` to update the website
4. When ready for production, run `npm run build`

## Project Structure
```
src/
  ├── App.jsx        - Main React component
  ├── App.css        - Main component styles
  ├── index.css      - Global styles
  └── main.jsx       - Entry point
public/              - Static assets
vite.config.js       - Vite configuration
eslint.config.js     - ESLint configuration
package.json         - Project dependencies and scripts
```

## Key Features
- **Fast Refresh**: Changes reflect instantly in the browser during development
- **Optimized Builds**: Production build includes code splitting and minification
- **ESLint Integration**: Code quality checks are configured
- **Modern JavaScript**: Uses ES6+ syntax with Babel/SWC

## Development Best Practices
- Keep components modular and reusable
- Use CSS modules or CSS-in-JS for styling
- Follow the ESLint rules configured in eslint.config.js
- Test your changes using `npm run preview` before production deployment

## Troubleshooting
- If port 5173 is in use, Vite will use the next available port
- Clear `node_modules/` and run `npm install` if dependencies issues occur
- Check `npm audit` for security vulnerabilities and update packages as needed
