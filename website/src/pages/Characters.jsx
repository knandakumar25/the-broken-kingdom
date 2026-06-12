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
    <div className="py-24 px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-gothic text-5xl text-center text-decayed-gold mb-16"
      >
        Cast of the Tragedy
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cast.map((char, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`group relative p-8 gold-border bg-zinc-900/50 backdrop-blur-sm ${char.color}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-black rounded-full border border-zinc-700 group-hover:scale-110 transition-transform overflow-hidden w-16 h-16 flex items-center justify-center">
                {char.img ? <img src={char.img} alt={char.name} className="w-full h-full object-contain" /> : char.icon}
              </div>
              <div>
                <h3 className="font-gothic text-2xl text-white">{char.name}</h3>
                <p className="font-cinzel text-xs uppercase tracking-widest text-gray-500">{char.title}</p>
              </div>
            </div>
            <p className="text-gray-300 italic leading-relaxed mb-6">
              "{char.quote}"
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              {char.desc}
            </p>
            <div className="absolute bottom-0 right-0 w-12 h-12 opacity-10 group-hover:opacity-30 transition-opacity">
               <Crown size={48} className="text-decayed-gold -mr-4 -mb-4" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
