import React from 'react';
import { motion } from 'framer-motion';

const Lore = () => {
  return (
    <div className="py-24 px-8 max-w-5xl mx-auto bg-obsidian text-ghost-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-gothic text-5xl md:text-7xl text-center text-solar-gold mb-16"
      >
        The Lore: Solunaris History
      </motion.h1>

      <div className="space-y-12 text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-2xl leading-relaxed text-gray-300 italic"
        >
          "Hello traveler, welcome to Solunaris. It’s been a while since anybody has passed through here. I apologize for the sorry state of this place but... you’re welcome to take a look around."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl leading-relaxed text-gray-300 italic"
        >
          Solunaris was once a great and prosperous kingdom. Commoners and Nobles alike came together to build a better future for everyone. But obsession over a legend—the Judge—drove the people to a golden age of fear, and eventually, to a ruin born of insanity.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl leading-relaxed text-gray-300 italic"
        >
          Now, the crown lies in dust, and the only thing remaining is the choice of the Judge. Whether to erase the scars of the past or to let the kingdom sleep in its shattered silence.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="gold-border p-4 bg-void-indigo bg-opacity-10 rounded-lg"
          >
            <img
              src="/assets/images/stitch/screen1_The_Lore_Solunaris_History_image.png"
              alt="The Scholar's Notes"
              className="w-full h-auto rounded-sm grayscale contrast-125"
            />
            <p className="mt-4 font-cinzel text-solar-gold italic text-center">Observations of the Chronicler</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="gold-border p-4 bg-void-indigo bg-opacity-10 rounded-lg"
          >
            <div className="aspect-video flex items-center justify-center bg-obsidian border border-shattered-quartz rounded-sm">
              <span className="text-shattered-quartz font-cinzel italic text-center">"The depiction in the stained glass looked a bit familiar..."</span>
            </div>
            <p className="mt-4 font-cinzel text-solar-gold italic text-center">The Stained Glass Mystery</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Lore;
