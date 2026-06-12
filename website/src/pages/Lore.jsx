import React from 'react';
import { motion } from 'framer-motion';

const Lore = () => {
  return (
    <div className="py-24 px-8 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-gothic text-5xl text-center text-decayed-gold mb-16"
      >
        The Eternal Tragedy
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-6 text-lg leading-relaxed text-gray-300 italic">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="border-l-2 border-blood-red pl-4"
          >
            Once, the kingdom was a beacon of enlightenment. The Academy thrived, the Church sang of peace, and the Castle stood as an unbreakable shield against the dark.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="border-l-2 border-decayed-gold pl-4"
          >
            Then came the Fracture. A betrayal born of royal blood, a spell cast in desperation, and a kingdom shattered into a thousand jagged pieces.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="border-l-2 border-royal-purple pl-4"
          >
            Now, only ruins remain. The ghosts of the past wander the halls of the Prison and the Library, guarding secrets that should have stayed buried.
          </motion.p>
        </div>

        <div className="relative">
          <motion.div
            whileHover={{ rotate: 0 }}
            className="gold-border p-2 rounded-sm rotate-3 transition-transform duration-500"
          >
            <img
              src="/assets/buildings/Castle.png"
              className="grayscale contrast-125"
              alt="The Ruin"
            />
          </motion.div>
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blood-red -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Lore;
