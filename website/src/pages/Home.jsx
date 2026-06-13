import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full z-0 opacity-30 grayscale contrast-125 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/images/MenuBG.png)' }}
      ></div>

      <div className="text-center z-10 px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-gothic text-7xl md:text-9xl mb-4 broken-text text-decayed-gold italic">
            The Broken Kingdom
          </h1>
          <p className="font-cinzel text-xl md:text-2xl tracking-widest text-gray-400 italic max-w-2xl mx-auto mb-8">
            "Solunaris: Where crowns lie in dust and the silence of the fallen screams of betrayal."
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/join" className="gold-border px-8 py-3 font-cinzel uppercase tracking-widest hover:bg-decayed-gold hover:text-black transition-all duration-500 text-white inline-block">
              Reclaim the Throne
            </Link>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20"
        >
          {/* Images removed as per user request */}
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-decayed-gold">
        <ArrowDown size={32} />
      </div>
    </div>
  );
};

export default Home;
