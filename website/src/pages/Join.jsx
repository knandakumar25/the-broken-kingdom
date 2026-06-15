import React from 'react';
import { motion } from 'framer-motion';

const Join = () => {
  return (
    <div className="py-24 px-4 min-h-screen bg-obsidian text-ghost-white flex flex-col items-center justify-center relative">
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-gothic text-6xl text-solar-gold mb-4 broken-text"
        >
          Reclaim the Throne
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cinzel text-gray-400 text-lg tracking-wider italic"
        >
          The kingdom has fallen, but your descent has just begun. Will you be the one to restore Solunaris, or oversee its final erasure?
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-md p-8 rounded-lg gold-border bg-void-indigo bg-opacity-10 backdrop-blur-sm relative z-10"
      >
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="font-cinzel text-sm uppercase tracking-widest text-solar-gold">
              Chosen Name
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your name..."
              className="ds-input w-full p-3 outline-none focus:border-solar-gold transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-cinzel text-sm uppercase tracking-widest text-solar-gold">
              Celestial Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="email@solunaris.com"
              className="ds-input w-full p-3 outline-none focus:border-solar-gold transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-cinzel text-sm uppercase tracking-widest text-solar-gold">
              Void-Seal Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="ds-input w-full p-3 outline-none focus:border-solar-gold transition-colors"
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full py-4 font-cinzel uppercase tracking-widest text-obsidian text-lg"
          >
            Begin Ascent
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="font-serif italic text-gray-500 text-sm">
            Already an heir? <a href="/home" className="text-solar-gold hover:underline">Return to the Spire</a>
          </p>
        </div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-void-indigo opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-solar-gold opacity-10 blur-3xl rounded-full"></div>
      </div>
    </div>
  );
};

export default Join;
