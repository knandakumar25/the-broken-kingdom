import React from 'react';
import { motion } from 'framer-motion';

const Characters = () => {
  const characters = [
    {
      name: "Kaelen Vance",
      title: "The Exiled Blade",
      desc: "Stripped of his titles after the Fall of Aethelgard, Vance wanders the ash wastes seeking a death worthy of his lineage. His blade, forged from the bones of a betrayed king, hums with restless spirits.",
      allegiance: "None",
      themeColor: "border-etched-gold",
      tagBg: "bg-surface-container-highest/80 border-outline-variant/50 text-etched-gold",
      textColor: "text-primary",
      btnColor: "text-etched-gold hover:text-primary",
      bgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUOB-tgjNIlpj70f7jnT8nCO5RShWOqU930IGBIBZSvhX0-JaKPhbrMJF6kYLKGivB0JYl34TgGj2bBilVyj2JLnvHmIE2VWpW2bfiSg-likFH7OoDLVTtNuMgM9bOyPAOWHg-3otMdAKKS-KFDdL9x7F8hXDuMDfl3MmWZ6viNsUbtAht7CmX6HzhuBT7dKjEdui4utO_jRPlbTJYDeyhPrFaYqhhJ1rogKFVie_DsK7ABBYl4i5AvYBrM1QX9GixNWjo8MDnask"
    },
    {
      name: "Morgath",
      title: "Weaver of Agony",
      desc: "She does not seek to conquer the kingdom; she seeks to unravel it. Feeding on the collective despair of the surviving factions, Morgath's rituals require sacrifices that even the old gods deemed abhorrent.",
      allegiance: "The Void",
      themeColor: "border-blood-lust",
      tagBg: "bg-blood-lust/20 border-blood-lust/50 text-secondary",
      textColor: "text-secondary",
      btnColor: "text-blood-lust hover:text-error",
      bgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvIh2X9smViVfr7LTj_6MaVxRR5Uqp5Jq_CI-mK3vRoyjobQaEFpe60_q0qcEjPeDDvH2mSodW9hVg3PkC5zTcPgKpxxUqy2Xns1AUZn_fZh0Fovpy-1WZOZUqaoVRvht7rsW2qBCs9sJ3BW8pCE5vlwMtVXtSMJkcZ9dyFE2OQcoOeepwpdfGAB3MsXaZQ5hHfG6nl3CsyFYe9763JOOI1NYImWXymUxkqnEk275vbzRXIoccx0Fm3sTN_9OVr7baXDM0p27po3A"
    },
    {
      name: "Elias the Hollow",
      title: "Keeper of Truths",
      desc: "Trading his physical eyes for the sight of the Beyond, Elias documents the dying breaths of the kingdom. He holds the lost prophecies, waiting for a champion ruthless enough to enact them.",
      allegiance: "History",
      themeColor: "border-etched-gold",
      tagBg: "bg-surface-container-highest/80 border-outline-variant/50 text-etched-gold",
      textColor: "text-primary",
      btnColor: "text-etched-gold hover:text-primary",
      bgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2G9ox1IFSpue19LmuD4Ga6CkUdho9Ofh78YHRokpO9Kc4AXIfB9SYk1XpPnsQ_jRB7volijHY_IPhhEu4qhZmDN4Jfk0OUI5ZYsEcIo0P_J_m8pbV1MFfrXj7Oil94hkHp4O5rTrZSBZCySVOh4M7L17L-QRFcv24wmkbvPnnWpIECclc4rTsbMKHVSeuolPXEC6KFXWsoHHQpZrh-1LDdJ_6Dg7xVlcEULtplOtNxtiy7jItDY4IoS3opKSvA7Sb7UNCnxj9tOM"
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
            The Architects of Ruin
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
            Every soul in the Broken Kingdom carries the weight of past sins. Discover the forged destinies of those who command the remaining light, and those who feast in the shadows.
          </motion.p>
        </section>

        {/* Characters Grid */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter px-4">
          {characters.map((char, index) => (
            <motion.article 
              key={char.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
              <div className={`absolute inset-0 bg-obsidian-base/90 backdrop-blur-sm content-overlay p-6 flex flex-col justify-end border-t ${char.themeColor}`}>
                <div className="space-y-4">
                  <h2 className={`text-headline-md font-headline-md ${char.textColor}`}>
                    {char.name}
                  </h2>
                  <p className="text-body-md font-body-md text-on-surface-variant line-clamp-4">
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
