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
      innerSize={12} 
      outerSize={20}
      color="193, 11, 111"
      outerAlpha={0.3} 
      innerScale={1} 
      outerScale={6} 
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
            innerSize: 16,
            outerSize: 24, 
            color: '255, 255, 255', 
            outerAlpha: 0.4, 
            innerScale: 1.2,
            outerScale: 6.5 
          }
        }
      ]}
    />
     
    </div>
    </>
  );
}

export default App;