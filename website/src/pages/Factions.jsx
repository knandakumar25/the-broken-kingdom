import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Sun, Moon, Crown, Flame, Skull } from 'lucide-react';

const Factions = () => {
  return (
    <div className="py-24 bg-black/50">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-gothic text-5xl text-center text-decayed-gold mb-16"
      >
        The Great Divide
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-0 h-auto md:h-[700px]">
        <motion.div
          whileHover={{ flex: 1.1 }}
          className="flex-1 judge-gradient p-12 flex flex-col justify-center items-center text-center group cursor-pointer transition-all duration-500"
        >
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
            <img
              src="/assets/images/judge.png"
              alt="The Judge"
              className="relative z-10 w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute -bottom-2 -right-2 p-2 bg-black rounded-full text-white group-hover:rotate-12 transition-transform">
              <Scale size={20} />
            </div>
          </div>
          <h3 className="font-gothic text-6xl text-white group-hover:scale-110 transition-transform">The Judge</h3>
          <p className="font-cinzel text-white opacity-80 mt-4 mb-8">Fate. Balance. Judgment.</p>
          <ul className="text-left space-y-4 font-serif text-white opacity-90">
            <li className="flex items-center gap-3"><Scale size={16} className="text-decayed-gold" /> Scythe of Destiny</li>
            <li className="flex items-center gap-3"><Moon size={16} className="text-decayed-gold" /> Mending Moon Light</li>
            <li className="flex items-center gap-3"><Sun size={16} className="text-decayed-gold" /> Blazing Sun Wrath</li>
          </ul>
        </motion.div>


        <motion.div
          whileHover={{ flex: 1.1 }}
          className="flex-1 king-gradient p-12 flex flex-col justify-center items-center text-center group cursor-pointer transition-all duration-500"
        >
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full"></div>
            <img
              src="/assets/images/king.PNG"
              alt="King Solun"
              className="relative z-10 w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute -bottom-2 -right-2 p-2 bg-black rounded-full text-red-500 group-hover:rotate-12 transition-transform">
              <Crown size={20} />
            </div>
          </div>
          <h3 className="font-gothic text-6xl text-red-500 group-hover:scale-110 transition-transform">King Solun</h3>
          <p className="font-cinzel text-red-200 opacity-80 mt-4 mb-8">Decay. Madness. Ruin.</p>
          <ul className="text-left space-y-4 font-serif text-red-100 opacity-90">
            <li className="flex items-center gap-3"><Crown size={16} className="text-red-500" /> The Shattered Crown</li>
            <li className="flex items-center gap-3"><Flame size={16} className="text-red-500" /> Void Conjuring</li>
            <li className="flex items-center gap-3"><Skull size={16} className="text-red-500" /> Hollow Legion</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Factions;
