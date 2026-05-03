# ENGINPILOT Website

A production-grade, physics-governed website for ENGINPILOT - Operating System for Physical Assets.

## Overview

This website showcases ENGINPILOT's capabilities through:
- **Hero System**: Dynamic 3D system graph visualization using Three.js
- **Architecture**: Interactive layered stack representation
- **Use Cases**: Timeline-based scenario simulations
- **Capabilities**: System domains, integration surfaces, and scale metrics
- **Platform**: Feature highlights and CTAs

## Tech Stack

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first styling
- **Three.js** - 3D graphics for system visualization
- **D3.js** - Data visualization (ready for integration)
- **Framer Motion** - Animation and motion effects

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── layout.jsx          # Root layout
│   ├── page.jsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── SystemGraphHero.jsx # 3D hero section
│   ├── EnginStack.jsx      # Architecture layers
│   ├── UseCases.jsx        # Scenario timelines
│   ├── TrustLayer.jsx      # Capabilities grid
│   ├── PlatformSection.jsx # Feature highlights
│   └── Footer.jsx          # Footer
├── tailwind.config.js      # Tailwind configuration
└── next.config.js          # Next.js configuration
```

## Design System

### Color Palette (Physics-First)
- **Deep Space**: `#02070F` - Primary background
- **System Surface**: `#0B1220` - Secondary background
- **Panel Layer**: `#111827` - Component background
- **Electric Blue**: `#2F80FF` - Primary signal/active state
- **Neon Cyan**: `#00E5FF` - Data flow indicator
- **Amber**: `#FFB020` - Warning state
- **System Green**: `#22C55E` - Healthy/stable state

### Typography
- **Headings**: Inter (700)
- **Body**: Inter (400-600)
- **Mono/Data**: JetBrains Mono

### Animation Principles
- State transitions (not decorative)
- System reactions to data changes
- Data flow visualization
- Minimal, purposeful motion

## Key Features

### 1. System Graph Hero
3D animated visualization using Three.js showing:
- Layered system architecture
- Node connectivity
- Physics-based interactions
- Real-time rendering

### 2. ENGIN Stack
Interactive layered architecture with:
- Expandable layers
- Detailed capability breakdowns
- Visual flow indicators
- Scale metrics

### 3. Use Case Scenarios
Timeline-based scenario simulations featuring:
- Temporal progression control
- State transitions
- Event visualization
- Metric displays

### 4. Capabilities Matrix
System capabilities organized by:
- Physics domains covered
- Integration surfaces
- Scalability metrics
- Enterprise trust indicators

## Customization

### Colors
Modify in `tailwind.config.js` under `theme.extend.colors`

### Typography
Adjust font sizes in `tailwind.config.js` under `theme.extend.fontSize`

### Animations
Edit animation keyframes in `tailwind.config.js` or Framer Motion configs

## Performance Optimization

- Three.js canvas is automatically optimized for viewport
- Images should be optimized with Next.js Image component (when added)
- CSS is minified by Tailwind in production
- Code-splitting handled by Next.js

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2024 ENGINPILOT. All rights reserved.
