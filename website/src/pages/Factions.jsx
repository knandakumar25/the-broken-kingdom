import React from 'react';
import { motion } from 'framer-motion';
import { Sword, Bomb, Shield, Crown, Footprints, Coins } from 'lucide-react';

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
          className="flex-1 knight-gradient p-12 flex flex-col justify-center items-center text-center group cursor-pointer transition-all duration-500"
        >
          <div className="mb-6 p-4 bg-white/10 rounded-full text-white group-hover:scale-125 transition-transform">
            <Sword size={48} />
          </div>
          <h3 className="font-gothic text-6xl text-white group-hover:scale-110 transition-transform">The Knights</h3>
          <p className="font-cinzel text-white opacity-80 mt-4 mb-8">Order. Honor. Blood.</p>
          <ul className="text-left space-y-4 font-serif text-white opacity-90">
            <li className="flex items-center gap-3"><Sword size={16} className="text-decayed-gold" /> Disciplined Phalanxes</li>
            <li className="flex items-center gap-3"><Shield size={16} className="text-decayed-gold" /> Unyielding Fortresses</li>
            <li className="flex items-center gap-3"><Crown size={16} className="text-decayed-gold" /> The Royal Standard</li>
          </ul>
        </motion.div>

        <motion.div
          whileHover={{ flex: 1.1 }}
          className="flex-1 goblin-gradient p-12 flex flex-col justify-center items-center text-center group cursor-pointer transition-all duration-500"
        >
          <div className="mb-6 p-4 bg-green-400/10 rounded-full text-green-400 group-hover:scale-125 transition-transform">
            <Bomb size={48} />
          </div>
          <h3 className="font-gothic text-6xl text-green-400 group-hover:scale-110 transition-transform">The Goblins</h3>
          <p className="font-cinzel text-green-200 opacity-80 mt-4 mb-8">Chaos. Cunning. Greed.</p>
          <ul className="text-left space-y-4 font-serif text-green-100 opacity-90">
            <li className="flex items-center gap-3"><Bomb size={16} className="text-green-400" /> Volatile Alchemy</li>
            <li className="flex items-center gap-3"><Footprints size={16} className="text-green-400" /> Swarming Ambush</li>
            <li className="flex items-center gap-3"><Coins size={16} className="text-green-400" /> Stolen Relics</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Factions;
