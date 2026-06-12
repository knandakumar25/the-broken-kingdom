import React from 'react';
import { Crown } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 bg-black text-center relative overflow-hidden border-t border-decayed-gold/20">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-decayed-gold to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center mb-6">
          <Crown className="text-decayed-gold" size={48} />
        </div>
        <h2 className="font-gothic text-6xl text-decayed-gold mb-6">Your Fate Awaits</h2>
        <p className="font-cinzel text-gray-500 mb-10">
          Will you be the one to mend the crown, or will you feast on the remains of the Broken Kingdom?
        </p>

        <div className="flex justify-center gap-6 mb-20">
          <button className="px-10 py-4 bg-blood-red text-white font-cinzel uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-red-900/20 border border-white/10">
            Begin the Descent
          </button>
        </div>
      </div>

      <div className="text-xs text-zinc-600 font-serif tracking-widest uppercase">
        &copy; 2026 The Broken Kingdom | Devised in the Void
      </div>
    </footer>
  );
};

export default Footer;
