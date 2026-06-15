import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Ruins = () => {
  const locations = {
    castle: {
      name: "The Castle",
      desc: "A jagged spire of grief and lost majesty. The final stronghold of a broken dynasty, now haunted by the memories of King Solun's descent into madness.",
      danger: "Extreme Danger",
      status: "Shattered Spire",
      img: "/assets/images/castle.png"
    },
    academy: {
      name: "The Academy",
      desc: "Where the laws of magic were rewritten in blood. Once a beacon of prestige and magic study, now a dark monument to forbidden, dangerous secrets.",
      danger: "High Danger",
      status: "Desolate Spire",
      img: "/assets/images/Academy.png"
    },
    prison: {
      name: "The Prison",
      desc: "A cold void where the forgotten scream eternally. Rumors suggest prisoners disappeared into the void as the kingdom fell, leaving only hollow cells behind.",
      danger: "High Danger",
      status: "Lost Abyss",
      img: "/assets/images/Prison.png"
    }
  };

  const [selectedLocation, setSelectedLocation] = useState(locations.castle);

  const buildings = [
    { name: "The Academy", desc: "Where the laws of magic were rewritten in blood. Once a beacon of prestige, now a monument to forgotten knowledge.", color: "bg-royal-purple/20", border: "border-royal-purple", img: "/assets/images/Academy.png", danger: "High Danger", leagues: "14 Leagues" },
    { name: "The Prison", desc: "A cold void where the forgotten scream eternally. Rumors suggest prisoners disappeared as the kingdom fell.", color: "bg-zinc-800/20", border: "border-zinc-700", img: "/assets/images/Prison.png", danger: "High Danger", leagues: "22 Leagues" },
    { name: "The Castle", desc: "A jagged spire of grief and lost majesty. The final stronghold of a broken dynasty.", color: "bg-blood-red/20", border: "border-blood-red", img: "/assets/images/castle.png", danger: "Extreme Danger", leagues: "0 Leagues" },
    { name: "The Church", desc: "Holy ground now desecrated by the broken. Its stained glass holds a secret about the Judge.", color: "bg-decayed-gold/20", border: "border-decayed-gold", img: "/assets/images/Church.png", danger: "Medium Danger", leagues: "8 Leagues" },
    { name: "The Theatre", desc: "A stage for tragedies, where the actors never left the scene. A mirror of the kingdom's fall.", color: "bg-indigo-900/20", border: "border-indigo-800", img: "/assets/images/Theater.png", danger: "Medium Danger", leagues: "19 Leagues" },
    { name: "The Library", desc: "Dusty archives of a forgotten age, holding secrets that should remain buried.", color: "bg-emerald-900/20", border: "border-emerald-800", img: "/assets/images/Library.png", danger: "Low Danger", leagues: "11 Leagues" },
    { name: "The Cookhouse", desc: "The scent of feast and famine lingers in the air. Once fed the masses, now feeds only the wind.", color: "bg-orange-900/20", border: "border-orange-800", img: "/assets/images/Cookhouse.png", danger: "Low Danger", leagues: "5 Leagues" },
    { name: "The Farm", desc: "Fields of ash where nothing grows but sorrow. The heart of Solunaris's sustenance, now dead.", color: "bg-amber-900/20", border: "border-amber-800", img: "/assets/images/Farm.png", danger: "Low Danger", leagues: "31 Leagues" }
  ];

  return (
    <div className="content-layer bg-obsidian-base min-h-screen text-on-surface flex flex-col antialiased relative overflow-x-hidden selection:bg-blood-lust/30 selection:text-etched-gold">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')] opacity-5"></div>

      <main className="flex-grow w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 z-10 relative">
        
        {/* Page Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto px-4 mt-12">
          <span className="inline-block bg-surface-container-high text-etched-gold font-label-caps text-label-caps px-3 py-1 rounded-sm mb-6 border border-outline-variant/30 tracking-widest uppercase">
            Cartography of the Fallen
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display-lg text-display-lg-mobile md:text-display-lg text-etched-gold mb-6 drop-shadow-[0_0_15px_rgba(226,194,133,0.2)]"
          >
            Ruins of the Realm
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body-lg text-body-lg text-on-surface-variant opacity-85 leading-relaxed"
          >
            Eight monuments to a fallen age. Will you rebuild them to restore the light, or dismantle them to erase the shame? Explore the remnants of Solunaris.
          </motion.p>
          <div className="divider-ornate">
            <span className="material-symbols-outlined divider-ornate-icon">explore</span>
          </div>
        </div>

        {/* Featured Map Section (Glassmorphism / Large Feature) */}
        <section className="mb-24 px-4">
          <div className="obsidian-card rounded-lg flex flex-col lg:flex-row group transition-all duration-500 gold-glow-hover">
            <div className="w-full lg:w-2/3 h-[400px] lg:h-[450px] relative overflow-hidden bg-surface-container">
              <img 
                alt="A dark fantasy map of the ruins" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-102 transition-transform duration-1000 ease-in-out mix-blend-luminosity" 
                src="/assets/images/solunaris_map.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-base via-transparent to-transparent lg:bg-gradient-to-r"></div>
              
              {/* Map Markers for original key locations */}
              <div 
                className="absolute top-[38%] left-[48%] group/marker cursor-pointer"
                onClick={() => setSelectedLocation(locations.castle)}
              >
                <div className="w-4 h-4 rounded-full bg-blood-lust border-2 border-etched-gold animate-pulse"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-surface-container-highest border border-outline-variant/50 px-3 py-1 rounded-sm opacity-100 transition-opacity whitespace-nowrap z-20">
                  <span className="font-label-caps text-label-caps text-etched-gold">The Castle</span>
                </div>
              </div>
              
              <div 
                className="absolute top-[28%] left-[25%] group/marker cursor-pointer"
                onClick={() => setSelectedLocation(locations.academy)}
              >
                <div className="w-3.5 h-3.5 rounded-full bg-royal-purple border-2 border-etched-gold/50 cursor-pointer"></div>
                <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-surface-container-highest border border-outline-variant/50 px-3 py-1 rounded-sm opacity-100 transition-opacity whitespace-nowrap z-20">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">The Academy</span>
                </div>
              </div>

              <div 
                className="absolute top-[60%] left-[35%] group/marker cursor-pointer"
                onClick={() => setSelectedLocation(locations.prison)}
              >
                <div className="w-3.5 h-3.5 rounded-full bg-zinc-600 border border-etched-gold/50 cursor-pointer"></div>
                <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-surface-container-highest border border-outline-variant/50 px-3 py-1 rounded-sm opacity-100 transition-opacity whitespace-nowrap z-20">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">The Prison</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center relative z-10">
              <motion.div 
                key={selectedLocation.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-blood-lust" style={{ fontVariationSettings: "'FILL' 1" }}>
                    location_on
                  </span>
                  <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest">
                    {selectedLocation.status}
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-etched-gold uppercase tracking-wide">
                  {selectedLocation.name}
                </h2>
                <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">
                  {selectedLocation.desc}
                </p>
                <div className="flex gap-2">
                  <span className="text-xs font-label-caps text-outline border border-outline-variant/40 px-2.5 py-1 rounded-sm">
                    {selectedLocation.danger}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bento Grid Gallery - Eight Locations */}
        <div className="mb-12 flex justify-between items-end border-b border-outline-variant/20 pb-4 px-4">
          <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wider">
            Fractured Domains
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter px-4">
          {buildings.map((b, i) => (
            <motion.article 
              key={b.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              className={`obsidian-card border-t-2 ${b.border} rounded-lg group cursor-pointer gold-glow-hover flex flex-col h-[420px]`}
            >
              <div className={`h-1/2 relative overflow-hidden ${b.color} flex items-center justify-center p-4`}>
                <img 
                  alt={b.name} 
                  className="w-4/5 h-4/5 object-contain grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  src={b.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-base to-transparent"></div>
                <div className="absolute top-4 right-4 bg-obsidian-base/80 text-etched-gold font-label-caps text-[9px] px-2 py-0.5 rounded-sm uppercase tracking-wider border border-outline-variant/30">
                  {b.danger}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between relative z-10 bg-surface-container-low/40">
                <div>
                  <h4 className="font-headline-md text-[18px] text-etched-gold mb-2 uppercase tracking-wide">{b.name}</h4>
                  <p className="text-xs text-on-surface-variant line-clamp-4 leading-relaxed italic">
                    "{b.desc}"
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 border-t border-outline-variant/20 pt-4">
                  <span className="text-[10px] font-label-caps text-outline flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">distance</span> 
                    {b.leagues} from Spire
                  </span>
                  <span className="material-symbols-outlined text-etched-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    chevron_right
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </main>
    </div>
  );
};

export default Ruins;
