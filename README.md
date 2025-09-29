# Salicylic Acid Production Plant - Interactive 3D Visualization

A modern, interactive web application showcasing the Kolbe-Schmitt process for salicylic acid production with realistic 3D equipment models.

## Features

- **Interactive 3D Models**: Explore detailed 3D models of each piece of equipment
- **Process Flow Diagram**: Interactive diagram with clickable equipment hotspots
- **Technical Specifications**: Comprehensive design data and operating parameters
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Glass-morphism effects and smooth animations
- **Educational Content**: Detailed descriptions of each unit operation

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **3D Graphics**: Three.js + React Three Fiber
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/username/salicylic-acid-plant-3d.git
cd salicylic-acid-plant-3d
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── components/          # React components
│   ├── HomePage.tsx    # Main landing page
│   ├── EquipmentPage.tsx # Equipment detail page
│   ├── ModelViewer.tsx # 3D model viewer
│   ├── FlowDiagram.tsx # Interactive flow diagram
│   └── EquipmentCard.tsx # Equipment overview cards
├── data/               # Equipment data and specifications
├── types/              # TypeScript type definitions
├── styles/             # CSS and styling
└── assets/             # Static assets and 3D models

public/
├── models/             # 3D model files (.glb format)
└── images/             # Process diagrams and equipment images
```

## Equipment Covered

The application includes detailed 3D models and specifications for:

1. **Storage Tanks**: NaOH, Phenol, CO2, H2SO4, Water
2. **Reactors**: CSTR, Autoclave, Acidification Tank
3. **Separation Equipment**: Flash Tank, Centrifuge, Crystallizer
4. **Processing Equipment**: Dryer, Dilution Tank, Sublimation Tank
5. **Utilities**: Compressor, Pumps

## Process Overview

The Kolbe-Schmitt process consists of three main reaction stages:

1. **Primary Reaction (CSTR)**: Phenol + NaOH → Sodium Phenoxide + H2O
2. **Secondary Reaction (Autoclave)**: Sodium Phenoxide + CO2 → Sodium Salicylate
3. **Final Reaction (Acidification)**: Sodium Salicylate + H2SO4 → Salicylic Acid

## 3D Model Controls

- **Rotate**: Left click and drag
- **Zoom**: Mouse wheel or pinch gesture
- **Pan**: Right click and drag
- **Reset**: Click the reset button
- **Auto-rotation**: Models rotate automatically when not being interacted with

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

1. Build the project
2. Push the `dist` folder to your GitHub repository
3. Enable GitHub Pages in repository settings
4. Set source to `dist` folder

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

## Technical Details

### Performance Optimizations

- Lazy loading of 3D models
- Optimized bundle splitting
- Progressive enhancement for 3D features
- Efficient re-rendering with React Three Fiber

### Browser Compatibility

- Modern browsers with WebGL support
- Fallback content for unsupported browsers
- Progressive enhancement approach

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Chemical Engineering principles and data
- Three.js community for 3D graphics capabilities
- React Three Fiber for React integration
- Tailwind CSS for styling utilities

