import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Skull, Crown, Ghost, ShieldAlert } from 'lucide-react';

const Characters = () => {
  const cast = [
    {
      name: "The Scholar",
      title: "The Chronicler of Ruin",
      desc: "A former teacher of the Academy, now the last keeper of Solunaris's history. He guides travellers through the wreckage, warning them of the paths they tread.",
      img: "/assets/images/scholar.PNG",
      icon: <BookOpen className="text-royal-purple" size={40} />,
      color: "border-royal-purple",
      quote: "Perhaps some things are best left forgotten."
    },
    {
      name: "The Judge",
      title: "The Harbinger of Fate",
      desc: "A being of myth and terror who wields a scythe and the power of the sun and moon. It is said the Judge arrives only when a kingdom has truly fallen.",
      img: "/assets/images/judge.png",
      icon: <Skull className="text-blood-red" size={40} />,
      color: "border-blood-red",
      quote: "Judgment is not a choice; it is an inevitability."
    },
    {
      name: "King Solun",
      title: "The Fallen Sovereign",
      desc: "Once a beacon of hope, Solun's descent into insanity and desperation shattered his kingdom. His legacy is one of betrayal and dust.",
      img: "/assets/images/king.PNG",
      icon: <Crown className="text-decayed-gold" size={40} />,
      color: "border-decayed-gold",
      quote: "The crown is but a gilded cage for the mad."
    },
    {
      name: "The Spirits",
      title: "Echoes of the Past",
      desc: "Shattered remnants of the people who once thrived in Solunaris. They wander the ruins, trapped in a loop of their final, tragic moments.",
      img: "/assets/images/Spirit World NPCs/Female 1.PNG",
      icon: <Ghost className="text-zinc-400" size={40} />,
      color: "border-zinc-500",
      quote: "Do you remember the sun before it turned cold?"
    },
    {
      name: "Corrupted Spirits",
      title: "Hollowed Commoners",
      desc: "Former farmers and peasants of Solunaris, now consumed by corruption. They wander the blighted fields and ruins, trapped in a mindless frenzy.",
      img: "/assets/images/corrupted_farmer_idle.png",
      icon: <Ghost className="text-green-600" size={40} />,
      color: "border-green-900",
      quote: "Their silence is more deafening than their screams."
    },
  ];

  return (
    <div className="py-24 px-8 max-w-7xl mx-auto bg-obsidian text-ghost-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-gothic text-5xl md:text-7xl text-center text-solar-gold mb-8"
      >
        Cast of the Tragedy
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-xl italic text-gray-400 max-w-3xl mx-auto mb-20"
      >
        The fate of the kingdom rests in the hands of a few brave souls and cunning schemers.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {cast.map((char, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`p-8 rounded-lg border-2 ${char.color} ${char.color.replace('border-', 'bg-').replace('royal-purple', 'royal-purple/10').replace('blood-red', 'blood-red/10').replace('decayed-gold', 'decayed-gold/10').replace('zinc-500', 'zinc-500/10').replace('green-900', 'green-900/10')} backdrop-blur-sm relative group overflow-hidden`}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-obsidian border border-shattered-quartz shadow-lg">
                {char.img ? (
                  <img src={char.img} alt={char.name} className="w-12 h-12 object-cover rounded-full" />
                ) : (
                  char.icon
                )}
              </div>
            </div>

            <h3 className="font-gothic text-4xl text-center mb-2">{char.name}</h3>
            <p className="font-cinzel text-xs uppercase tracking-widest text-center text-solar-gold mb-6">
              {char.title}
            </p>
            <p className la la="text-center text-lg leading-relaxed text-gray-300 mb-8 font-serif italic">
              "{char.quote}"
            </p>
            <p className="text-center text-base text-ghost-white opacity-80 leading-relaxed">
              {char.desc}
            </p>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-all"></div>
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
            src="/assets/images/stitch/screen7_The_Cast_Characters_of_Solunaris_image.png"
            alt="Character Concept Art Gallery"
            className="w-full max-w-4xl rounded-lg gold-border grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-obsidian bg-opacity-40">
             <span className="font-cinzel text-solar-gold text-2xl">Explore the Gallery</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Characters;
