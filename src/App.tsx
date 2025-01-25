import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <Router>
      <nav className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-lg font-bold">News Aggregator</h1>
          <div className="flex gap-4">
            <Link to="/" className="hover:underline font-bold">Home</Link>
            <Link to="/settings" className="hover:underline font-bold font-size-big">Settings</Link>
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
