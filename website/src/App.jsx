import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lore from './pages/Lore';
import Factions from './pages/Factions';
import Ruins from './pages/Ruins';
import Characters from './pages/Characters';
import Join from './pages/Join';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-obsidian">
        <div className="grain"></div>
        <Navbar />

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lore" element={<Lore />} />
            <Route path="/factions" element={<Factions />} />
            <Route path="/ruins" element={<Ruins />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
