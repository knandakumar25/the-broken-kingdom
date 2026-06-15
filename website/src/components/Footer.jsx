import React from 'react';
import { Crown } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 bg-obsidian text-center relative overflow-hidden border-t border-solar-gold/20">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-solar-gold to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center mb-6">
          <Crown className="text-solar-gold" size={48} />
        </div>
        <h2 className="font-gothic text-6xl text-solar-gold mb-6">Your Fate Awaits</h2>
        <p className="font-cinzel text-gray-400 mb-10 italic">
          Will you be the one to mend the crown, or will you feast on the remains of the Broken Kingdom?
        </p>

        <div className="flex justify-center gap-6 mb-20">
          <button className="btn-primary px-10 py-4 text-obsidian font-cinzel uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-solar-gold/15 border border-solar-gold/20">
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
