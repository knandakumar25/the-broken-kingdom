import React from 'react';
import { motion } from 'framer-motion';

const Characters = () => {
  const characters = [
    {
      name: "The Scholar",
      title: "The Chronicler of Ruin",
      desc: "A former teacher of the Academy, now the last keeper of Solunaris's history. He guides travellers through the wreckage, warning them of the paths they tread.",
      quote: "Perhaps some things are best left forgotten.",
      allegiance: "History",
      themeColor: "border-royal-purple",
      tagBg: "bg-royal-purple/20 border-royal-purple/50 text-purple-300",
      textColor: "text-purple-300",
      btnColor: "text-purple-300 hover:text-purple-100",
      bgUrl: "/assets/images/scholar.PNG"
    },
    {
      name: "The Judge",
      title: "The Harbinger of Fate",
      desc: "A being of myth and terror who wields a scythe and the power of the sun and moon. It is said the Judge arrives only when a kingdom has truly fallen.",
      quote: "Judgment is not a choice; it is an inevitability.",
      allegiance: "Balance",
      themeColor: "border-blood-red",
      tagBg: "bg-blood-red/20 border-blood-red/50 text-red-300",
      textColor: "text-red-300",
      btnColor: "text-red-300 hover:text-red-100",
      bgUrl: "/assets/images/judge.png"
    },
    {
      name: "King Solun",
      title: "The Fallen Sovereign",
      desc: "Once a beacon of hope, Solun's descent into insanity and desperation shattered his kingdom. His legacy is one of betrayal and dust.",
      quote: "The crown is but a gilded cage for the mad.",
      allegiance: "Ruin",
      themeColor: "border-decayed-gold",
      tagBg: "bg-surface-container-highest/80 border-outline-variant/50 text-etched-gold",
      textColor: "text-primary",
      btnColor: "text-etched-gold hover:text-primary",
      bgUrl: "/assets/images/king.PNG"
    },
    {
      name: "The Spirits",
      title: "Echoes of the Past",
      desc: "Shattered remnants of the people who once thrived in Solunaris. They wander the ruins, trapped in a loop of their final, tragic moments.",
      quote: "Do you remember the sun before it turned cold?",
      allegiance: "The Departed",
      themeColor: "border-zinc-500",
      tagBg: "bg-zinc-800/30 border-zinc-700/50 text-zinc-300",
      textColor: "text-zinc-300",
      btnColor: "text-zinc-300 hover:text-zinc-100",
      bgUrl: "/assets/images/Spirit World NPCs/Female 1.PNG"
    },
    {
      name: "Corrupted Spirits",
      title: "Hollowed Commoners",
      desc: "Former farmers and peasants of Solunaris, now consumed by corruption. They wander the blighted fields and ruins, trapped in a mindless frenzy.",
      quote: "Their silence is more deafening than their screams.",
      allegiance: "Decay",
      themeColor: "border-green-900",
      tagBg: "bg-green-900/20 border-green-800/50 text-green-300",
      textColor: "text-green-300",
      btnColor: "text-green-300 hover:text-green-100",
      bgUrl: "/assets/images/corrupted_farmer_idle.png"
    }
  ];

  return (
    <div className="content-layer bg-obsidian-base min-h-screen text-on-surface flex flex-col antialiased relative overflow-x-hidden">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')] opacity-5"></div>
      
      <main className="flex-grow flex flex-col items-center w-full px-margin-mobile md:px-margin-desktop py-24 max-w-container-max-width mx-auto space-y-16 md:space-y-24 relative z-10">
        
        {/* Hero Section */}
        <section className="w-full text-center space-y-6 max-w-3xl mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-primary tracking-widest uppercase" 
            style={{ textShadow: "0 4px 24px rgba(233, 193, 118, 0.2)" }}
          >
            Cast of the Tragedy
          </motion.h1>
          
          <div className="flex items-center justify-center space-x-4 opacity-70">
            <div className="h-px bg-gradient-to-r from-transparent to-etched-gold w-16 md:w-32"></div>
            <span className="material-symbols-outlined text-etched-gold" style={{ fontSize: "16px" }}>swords</span>
            <div className="h-px bg-gradient-to-l from-transparent to-etched-gold w-16 md:w-32"></div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body-lg font-body-lg text-on-surface-variant"
          >
            The fate of the kingdom rests in the hands of a few brave souls, mad monarchs, and lingering spirits. Explore their dossiers below.
          </motion.p>
        </section>

        {/* Characters Grid */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter px-4 justify-center">
          {characters.map((char, index) => (
            <motion.article 
              key={char.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className={`group relative bg-surface-container-low border-t ${char.themeColor} rounded-sm overflow-hidden card-reveal h-[450px] shadow-[0_20px_40px_rgba(0,0,0,0.6)] cursor-pointer`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 image-layer bg-cover bg-center" 
                style={{ backgroundImage: `url('${char.bgUrl}')` }}
                alt={`Portrayal of ${char.name}, the ${char.title}`}
              ></div>
              
              {/* Persistent Gradient overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-base via-obsidian-base/60 to-transparent"></div>
              
              {/* Default State Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 space-y-2">
                <span className={`inline-block px-3 py-1 border text-label-caps font-label-caps rounded-sm backdrop-blur-sm ${char.tagBg}`}>
                  {char.title}
                </span>
                <h2 className={`text-headline-md font-headline-md ${char.textColor}`}>
                  {char.name}
                </h2>
              </div>
              
              {/* Hover Reveal Content */}
              <div className={`absolute inset-0 bg-obsidian-base/95 backdrop-blur-sm content-overlay p-6 flex flex-col justify-end border-t ${char.themeColor}`}>
                <div className="space-y-4">
                  <h2 className={`text-headline-md font-headline-md ${char.textColor}`}>
                    {char.name}
                  </h2>
                  <p className="text-sm text-etched-gold italic leading-relaxed">
                    "{char.quote}"
                  </p>
                  <p className="text-body-md font-body-md text-on-surface-variant line-clamp-4 leading-relaxed">
                    {char.desc}
                  </p>
                  <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                    <span className="text-label-caps font-label-caps text-on-surface">
                      Allegiance: {char.allegiance}
                    </span>
                    <button className={char.btnColor}>
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

      </main>
    </div>
  );
};

export default Characters;
