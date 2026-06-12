import React from 'react';
import { motion } from 'framer-motion';
import { Skull } from 'lucide-react';

const Join = () => {
  return (
    <div className="py-24 flex flex-col items-center justify-center text-center px-4 min-h-[80vh]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative"
      >
        <Skull size={80} className="text-blood-red mb-8" />
        <div className="absolute inset-0 blur-2xl bg-blood-red/20 -z-10"></div>
      </motion.div>

      <h2 className="font-gothic text-6xl text-decayed-gold mb-6">Your Fate Awaits</h2>
      <p className="font-cinzel text-gray-500 mb-12 max-w-xl mx-auto">
        Will you be the one to mend the crown, or will you feast on the remains of the Broken Kingdom?
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-12 py-5 bg-blood-red text-white font-cinzel uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-red-900/40 border border-white/10"
      >
        Begin the Descent
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-sm font-cinzel text-gray-600 uppercase tracking-tighter"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-blood-red">⚠</span>
          <p>Beware the Corrupted</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-blood-red">⚠</span>
          <p>Trust no one in Solunaris</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-blood-red">⚠</span>
          <p>The Judge is watching</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Join;
