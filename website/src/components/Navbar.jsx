import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black to-transparent">
      <Link to="/" className="flex items-center gap-2 group">
        <Crown className="text-decayed-gold group-hover:rotate-12 transition-transform" size={28} />
        <span className="font-gothic text-3xl text-decayed-gold tracking-widest">
          THE BROKEN KINGDOM
        </span>
      </Link>

      <div className="hidden md:flex space-x-8 font-cinzel text-sm uppercase tracking-tighter">
        <Link to="/lore" className="hover:text-decayed-gold transition-colors">The Lore</Link>
        <Link to="/factions" className="hover:text-decayed-gold transition-colors">The War</Link>
        <Link to="/ruins" className="hover:text-decayed-gold transition-colors">The Ruins</Link>
        <Link to="/join" className="bg-decayed-gold text-black px-4 py-1 font-bold hover:bg-white transition-all">
          Enter the Void
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
