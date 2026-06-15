import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-obsidian bg-opacity-80 backdrop-blur-md border-b border-solar-gold/20">
      <Link to="/" className="flex items-center gap-2 group">
        <Crown className="text-solar-gold group-hover:rotate-12 transition-transform" size={28} />
        <span className="font-gothic text-3xl text-solar-gold tracking-widest">
          THE BROKEN KINGDOM
        </span>
      </Link>

      <div className="hidden md:flex space-x-8 font-cinzel text-sm uppercase tracking-widest text-ghost-white">
        <Link to="/lore" className="hover:text-solar-gold transition-colors duration-300">The Lore</Link>
        <Link to="/factions" className="hover:text-solar-gold transition-colors duration-300">The Verdict</Link>
        <Link to="/characters" className="hover:text-solar-gold transition-colors duration-300">The Cast</Link>
        <Link to="/ruins" className="hover:text-solar-gold transition-colors duration-300">The Ruins</Link>
        <Link to="/join" className="btn-primary px-4 py-1 font-bold text-obsidian hover:bg-white transition-all">
          Reclaim the Throne
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
