import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Moon, Zap } from 'lucide-react';

const Factions = () => {
  const paths = [
    {
      name: "The Path of the Sun",
      desc: "A trail of destruction. Those who follow this path believe that the only way to cleanse Solunaris is to erase its memory entirely, leaving nothing but ash and silence.",
      alignment: "Destruction",
      color: "border-solar-gold text-solar-gold",
      bg: "bg-solar-gold/10",
      icon: <Zap className="text-solar-gold" />
    },
    {
      name: "The Path of the Moon",
      desc: "A journey of restoration. These seekers strive to mend the shattered ruins and heal the spirits of the fallen, hoping to bring back the glory of the Solar Dynasty.",
      alignment: "Restoration",
      color: "border-lunar-silver text-lunar-silver",
      bg: "bg-lunar-silver/10",
      icon: <Moon className="text-lunar-silver" />
    },
    {
      name: "The Neutral Ground",
      desc: "A delicate balance between light and void. A path for those who refuse to commit to either total ruin or total restoration, walking the thin line of judgment.",
      alignment: "Balance",
      color: "border-shattered-quartz text-shattered-quartz",
      bg: "bg-shattered-quartz/10",
      icon: <Shield className="text-shattered-quartz" />
    },
  ];

  return (
    <div className="py-24 px-8 max-w-7xl mx-auto bg-obsidian text-ghost-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-gothic text-5xl md:text-7xl text-center text-solar-gold mb-8"
      >
        The Judge's Verdict
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-xl italic text-gray-400 max-w-3xl mx-auto mb-20"
      >
        The fate of the kingdom is not written in stone, but in your choices. Every action tips the scale toward restoration or ruin.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {paths.map((path, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`p-8 rounded-lg border-2 ${path.color} ${path.bg} backdrop-blur-sm relative group overflow-hidden`}
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-2xl rounded-full group-hover:bg-white/10 transition-all"></div>

            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-obsidian border border-shattered-quartz shadow-lg">
                {React.cloneElement(path.icon, { size: 48 })}
              </div>
            </div>

            <h3 className="font-gothic text-4xl text-center mb-4">{path.name}</h3>
            <p className="text-center text-lg leading-relaxed text-gray-300 mb-8 font-serif italic">
              {path.desc}
            </p>

            <div className="flex justify-center">
              <span className="font-cinzel text-xs uppercase tracking-widest px-4 py-1 border border-shattered-quartz rounded-full text-shattered-quartz">
                {path.alignment}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative group"
        >
          <img
            src="/assets/images/stitch/screen6_The_Endless_War_Factions_image.png"
            alt="Allegiance Chart"
            className="w-full max-w-4xl rounded-lg gold-border grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-obsidian bg-opacity-40">
             <span className="font-cinzel text-solar-gold text-2xl">View the Scales of Fate</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Factions;
