import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <nav className="bg-slate-900/50 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-xl font-bold">Portfolio</Link>
          <div className="space-x-4">
            <Link to="/" className="text-white hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/projects" className="text-white hover:text-blue-400 transition-colors">Projects</Link>
          
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <AnimatedCursor
      innerSize={12} // Increased inner size for better visibility
      outerSize={20} // Increased outer size for proportionate scaling
      color="193, 11, 111" // Retained original color
      outerAlpha={0.3} // Slightly more opaque outer circle
      innerScale={1} // Made inner scaling consistent and proportional
      outerScale={6} // Slightly increased outer scaling for a smoother hover effect
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 16, // Custom targets get larger inner size
            outerSize: 24, // Custom targets get larger outer size
            color: '255, 255, 255', // A white cursor for custom elements
            outerAlpha: 0.4, // Slightly more opaque for custom targets
            innerScale: 1.2, // Slightly larger scaling for emphasis
            outerScale: 6.5 // More dramatic scaling for custom targets
          }
        }
      ]}
    />
     
    </div>
    </>
  );
}

export default App;