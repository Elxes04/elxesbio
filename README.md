# Elxes Bio

A personal portfolio website built with React and a dark neon visual theme.

## Description

This is a portfolio site created using Create React App and Tailwind CSS. It includes profile information, a list of technologies, passions, and social contacts presented with a modern glassmorphism-inspired interface.

## Key Features

- Responsive layout for mobile and desktop
- Dark theme with neon accents and glass-like cards
- Animated UI elements using `framer-motion`
- Passion and social contact sections
- Custom visual effects for a distinctive presentation

## Installation

```bash
npm install
```

## Development

```bash
npm start
```

Then open `http://localhost:3000` in your browser.

## Production Build

```bash
npm run build
```

This command generates the `build` folder ready for deployment.

## Project Structure

- `public/` - static files and `index.html`
- `src/index.js` - React app entry point
- `src/index.css` - global styles and theme settings
- `src/data/App.js` - main app component
- `src/data/profileData.js` - profile data, passions, and social links
- `src/data/components/Card.jsx` - reusable card component with animation

## Main Dependencies

- `react`, `react-dom`
- `react-scripts`
- `tailwindcss`, `postcss`, `autoprefixer`
- `lucide-react` for icons
- `framer-motion` for animations

## Notes

- Update `src/index.css` to customize the visual theme.
- Edit `src/data/profileData.js` to change profile information, passions, or social links.
