import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian text-ghost-white">
      <div
        className="absolute inset-0 w-full h-full z-0 opacity-30 grayscale contrast-125 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/images/MenuBG.png)' }}
      ></div>

      <div className="text-center z-10 px-4 relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-gothic text-7xl md:text-9xl mb-4 broken-text text-solar-gold italic">
            The Broken Kingdom
          </h1>
          <p className="font-cinzel text-lg md:text-2xl tracking-widest text-gray-400 italic max-w-2xl mx-auto mb-12">
            "Solunaris: Where crowns lie in dust and the silence of the fallen screams of betrayal."
          </p>

          <div className="hero-section bg-void-indigo bg-opacity-20 p-12 rounded-lg border border-solar-gold mb-16">
            <h2 className="text-4xl font-cinzel text-solar-gold mb-4">Judgment Awaits</h2>
            <p className="text-xl text-ghost-white mb-8 max-w-xl mx-auto">
              The kingdom has fallen. Only ruins and echoes remain. As the Judge, will you bring a final end to this tragedy, or restore the light of Solunaris?
            </p>
            <Link to="/join" className="btn-primary inline-block px-8 py-3 font-cinzel uppercase tracking-widest text-obsidian">
              Reclaim the Throne
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="feature-item p-6 border border-shattered-quartz bg-obsidian bg-opacity-50 rounded-lg">
              <h3 className="text-2xl font-cinzel text-solar-gold mb-2">The Path of the Sun</h3>
              <p className="text-ghost-white opacity-80">A trail of destruction. Clear the wreckage and erase the memories of a failed dynasty.</p>
            </div>
            <div className="feature-item p-6 border border-shattered-quartz bg-obsidian bg-opacity-50 rounded-lg">
              <h3 className="text-2xl font-cinzel text-solar-gold mb-2">The Path of the Moon</h3>
              <p className="text-ghost-white opacity-80">A journey of restoration. Rebuild the ruins and heal the spirits of the fallen.</p>
            </div>
            <div className="feature-item p-6 border border-shattered-quartz bg-obsidian bg-opacity-50 rounded-lg">
              <h3 className="text-2xl font-cinzel text-solar-gold mb-2">The Final Verdict</h3>
              <p className="text-ghost-white opacity-80">Your choices shape the world. Every ruin rebuilt or destroyed leads to a different destiny.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20"
        >
          <img
            src="/assets/images/stitch/screen5_The_Broken_Kingdom_Redesign_image.png"
            alt="Main Landing Page Concept"
            className="w-full max-w-4xl mx-auto rounded-lg border-2 border-solar-gold shadow-2xl"
          />
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-solar-gold">
          <ArrowDown size={32} />
        </div>
      </div>
    </div>
  );
};

export default Home;
