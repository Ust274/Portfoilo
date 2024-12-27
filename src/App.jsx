import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

function App() {
  return (
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
    </div>
  );
}

export default App;