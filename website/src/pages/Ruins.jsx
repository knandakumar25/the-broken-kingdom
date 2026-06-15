import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Ruins = () => {
  const buildings = [
    { name: "The Academy", desc: "Where the laws of magic were rewritten in blood. Once a beacon of prestige, now a monument to forgotten knowledge.", color: "bg-royal-purple", img: "/assets/images/Academy.png" },
    { name: "The Prison", desc: "A cold void where the forgotten scream eternally. Rumors suggest prisoners disappeared as the kingdom fell.", color: "bg-zinc-800", img: "/assets/images/Prison.png" },
    { name: "The Castle", desc: "A jagged spire of grief and lost majesty. The final stronghold of a broken dynasty.", color: "bg-blood-red", img: "/assets/images/castle.png" },
    { name: "The Church", desc: "Holy ground now desecrated by the broken. Its stained glass holds a secret about the Judge.", color: "bg-decayed-gold", img: "/assets/images/Church.png" },
    { name: "The Theatre", desc: "A stage for tragedies, where the actors never left the scene. A mirror of the kingdom's fall.", color: "bg-indigo-900", img: "/assets/images/Theater.png" },
    { name: "The Library", desc: "Dusty archives of a forgotten age, holding secrets that should remain buried.", color: "bg-emerald-900", img: "/assets/images/Library.png" },
    { name: "The Cookhouse", desc: "The scent of feast and famine lingers in the air. Once fed the masses, now feeds only the wind.", color: "bg-orange-900", img: "/assets/images/Cookhouse.png" },
    { name: "The Farm", desc: "Fields of ash where nothing grows but sorrow. The heart of Solunaris's sustenance, now dead.", color: "bg-amber-900", img: "/assets/images/Farm.png" },
  ];

  return (
    <div className="py-24 px-8 max-w-7xl mx-auto bg-obsidian text-ghost-white">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-gothic text-5xl text-center text-solar-gold mb-16"
      >
        Ruins of the Realm
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-xl italic text-gray-400 max-w-3xl mx-auto mb-16"
      >
        Eight monuments to a fallen age. Will you rebuild them to restore the light, or dismantle them to erase the shame?
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {buildings.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden gold-border cursor-pointer bg-zinc-900"
          >
            <div className={`h-64 ${b.color} overflow-hidden relative bg-opacity-20`}>
              <img
                src={b.img}
                className="w-full h-full object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                alt={b.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4 text-solar-gold opacity-50">
                <MapPin size={20} />
              </div>
            </div>
            <div className="p-8 text-center">
              <h4 className="font-cinzel text-2xl text-solar-gold">{b.name}</h4>
              <p className="text-base italic text-gray-400 mt-4 leading-relaxed">{b.desc}</p>
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
            src="/assets/images/stitch/screen3_The_Ruins_World_Locations_image.png"
            alt="World Map of the Ruins"
            className="w-full max-w-4xl rounded-lg gold-border grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-obsidian bg-opacity-40">
             <span className="font-cinzel text-solar-gold text-2xl">Explore the Map</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Ruins;
