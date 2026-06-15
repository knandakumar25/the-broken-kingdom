import React from 'react';
import { motion } from 'framer-motion';

const Lore = () => {
  return (
    <div className="content-layer bg-obsidian-base min-h-screen text-on-surface flex flex-col antialiased relative overflow-x-hidden selection:bg-blood-lust/30 selection:text-etched-gold">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')] opacity-5"></div>

      <main className="flex-grow pt-24 relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden px-margin-mobile md:px-margin-desktop">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat hero-bg opacity-30 mix-blend-luminosity" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARzJPNqqbbQFuggGnA5SCIV444wlM-nlsPTTLkN73U7kE9q_yJtH5xhrBna-13V1humgfd7otJWqofKxSvXkJbf3qyyA-ySP-7Nim3GISGABA8KSTYoEwOe3vE5YfdDnhB1uTAwLPzmzsvnPcOBIHn2YJfc-phiJDqLtV--6kM1fcr_LLnquUAAdZC9jhKxNZKb_ilytinoXpJaXVZZq0nx1Fq7WfGSJcWUzgKv6-Oty5xmn1Hwxsn77TaR_iIxqr25hXP1dZq4kE')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8 px-4">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-display-lg-mobile font-display-lg-mobile md:text-display-lg md:font-display-lg text-etched-gold text-glow uppercase tracking-[0.1em]"
            >
              The Eternal Tragedy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto"
            >
              Once, the kingdom was a beacon of enlightenment. The Academy thrived, the Church sang of peace, and the Castle stood as an unbreakable shield against the dark.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center gap-4 mt-8"
            >
              <a 
                href="#chronicle"
                className="bg-obsidian-base border border-etched-gold text-etched-gold text-label-caps font-label-caps px-8 py-3 rounded-DEFAULT hover:bg-surface-container-highest transition-colors gold-glow uppercase tracking-widest"
              >
                Read the Scriptures
              </a>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="etched-divider">
            <span className="material-symbols-outlined etched-divider-icon" style={{ fontVariationSettings: "'FILL' 1" }}>
              swords
            </span>
          </div>
        </div>

        {/* Crucible of Prosperity Section (Bento Grid) */}
        <section id="chronicle" className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 scroll-mt-24">
          <div className="mb-12 text-center">
            <h2 className="text-headline-md font-headline-md text-primary mb-4 uppercase tracking-widest">
              The Era of Enlightenment
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl mx-auto">
              Before the Schism, commoners and nobles alike stood united. But a growing obsession with the legend of the Judge set in motion a descent into absolute fear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-4">
            {/* Large Feature Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-8 glass-obsidian gold-border-top rounded-lg p-6 md:p-8 flex flex-col justify-end min-h-[400px] relative overflow-hidden group cursor-pointer"
            >
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-40 transition-opacity duration-500 group-hover:opacity-60" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5WBvxv9olhmHFjJ6BgRzKhfg6JEEDh-AFG8mCGXs8LqWtg-Q2Foycc1qw10612W4jILHoOlAjW0KKUlyqEGQ2eEUHbq1aINhtFg_AzqMvqq3JCGb_Dqs_B46xb75uPrjDrIOWtK8R-8galcbVlXvZlzQ2N3xXugtJ5Em02mQZpgz6e9xBofjhaqTsXVAf-k9r45uajfLNHKAan8AaogI8q2x6NFNWdSG0re_RHms_k2lGWRgj-Mc6hYZ142e_MGM24qAtYjvHfbI')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-base via-obsidian-base/60 to-transparent z-10"></div>
              <div className="relative z-20 space-y-4">
                <span className="inline-block px-2 py-1 bg-surface-container-highest/80 text-etched-gold text-label-caps font-label-caps border border-outline-variant/50 rounded-sm">
                  Era of the First Light
                </span>
                <h3 className="text-headline-md font-headline-md text-primary">The Golden Dynasty</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Solunaris was once a great and prosperous kingdom. Commoners and Nobles alike came together to build a better future for everyone. But obsession over a legend—the Judge—drove the people to a golden age of fear, and eventually, to a ruin born of insanity.
                </p>
              </div>
            </motion.div>

            {/* Secondary Cards */}
            <div className="md:col-span-4 flex flex-col gap-gutter">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-obsidian gold-border-top rounded-lg p-6 flex-grow flex flex-col justify-center relative overflow-hidden gold-glow transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-etched-gold text-4xl mb-4 opacity-70">
                  menu_book
                </span>
                <h4 className="text-body-lg font-body-lg text-primary font-bold mb-2">The Academy's Prestige</h4>
                <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                  A place where scholars and teachers once thrived, studying the laws of magic before their teachings were rewritten in blood.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-obsidian border-l border-blood-lust rounded-lg p-6 flex-grow flex flex-col justify-center relative overflow-hidden crimson-glow transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-blood-lust text-4xl mb-4 opacity-70">
                  church
                </span>
                <h4 className="text-body-lg font-body-lg text-error font-bold mb-2">The Desecrated Holy Ground</h4>
                <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                  The Church sang of peace, but its holy halls and stained glass were desecrated, holding dark secrets about the Judge.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="etched-divider">
            <span className="material-symbols-outlined etched-divider-icon" style={{ fontVariationSettings: "'FILL' 1" }}>
              visibility
            </span>
          </div>
        </div>

        {/* The Fracture (Asymmetric Text & Image Layout) */}
        <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 space-y-6 pr-0 lg:pr-8"
            >
              <h2 className="text-headline-md font-headline-md text-error uppercase tracking-widest">
                The Great Fracture
              </h2>
              <div className="w-16 h-1 bg-blood-lust opacity-70"></div>
              <p className="text-body-lg font-body-lg text-on-surface-variant">
                Then came the Fracture. A betrayal born of royal blood, a spell cast in desperation, and a kingdom shattered into a thousand jagged pieces. Now, the crown lies in dust, and the only thing remaining is the choice of the Judge.
              </p>
              <p className="text-body-md font-body-md text-spectral-gray">
                The ghosts of the past wander the crumbling halls of the ruins, guarding secrets that should have stayed buried. Their silent voices whisper of the tragedy that befell Solunaris.
              </p>
              
              <ul className="space-y-4 mt-8 border-l border-outline-variant pl-4">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-blood-lust mr-3 mt-1">close</span>
                  <span className="text-body-md font-body-md text-on-surface">The Madness of King Solun</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-blood-lust mr-3 mt-1">close</span>
                  <span className="text-body-md font-body-md text-on-surface">The Summoning of the Harbinger of Fate</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-blood-lust mr-3 mt-1">close</span>
                  <span className="text-body-md font-body-md text-on-surface">The Shattering of the Spires of Balance</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative"
            >
              {/* Image container with offset border */}
              <div className="relative z-10 w-full aspect-[4/5] overflow-hidden rounded-sm glass-obsidian border border-outline-variant p-2">
                <div 
                  className="w-full h-full bg-cover bg-center opacity-85" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfBl0G-7SwEBxOAmulxmyGCrjutfFYn9G0E7ixKjQSv5q2IQ5mW0F0B1cLhL08z7JXIamGmIe5vagi8XoqI9U8S2A1n2wD6hIZN523wp6pk1cY5WfYLWrNMEfTLLtr35MZvQjg2W3gt2WKXPj3XOrT3M5MTVs8LvS7tE1-jV2uWtOIqZD2HtikD4X_N3BZqAnu8eyiCgjzACShkU-dup9HUPERiSLqMav58ziMsyIpRwph05BPZ2GCRIimg4w3IW0h5joHHgP_ccw')" }}
                ></div>
              </div>
              {/* Decorative element behind */}
              <div className="absolute -bottom-6 -right-6 w-full aspect-[4/5] border border-etched-gold/30 z-0 rounded-sm"></div>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="etched-divider">
            <span className="material-symbols-outlined etched-divider-icon" style={{ fontVariationSettings: "'FILL' 1" }}>
              hourglass_empty
            </span>
          </div>
        </div>

        {/* Timeline / Lineage */}
        <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 mb-24">
          <div className="text-center mb-16 px-4">
            <h2 className="text-headline-md font-headline-md text-primary mb-2 uppercase tracking-widest">
              Timeline of the Schism
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              The descent of Solunaris, from a beacon of peace to a graveyard of dust.
            </p>
          </div>

          <div className="relative border-l border-outline-variant/30 ml-8 md:ml-1/2 md:translate-x-1/2 space-y-12 px-4">
            
            {/* Timeline Item 1 */}
            <div className="relative pl-8 md:pl-0 md:w-1/2 md:-ml-[1px] md:pr-12 md:text-right group">
              <div className="absolute top-0 left-[-4px] md:left-auto md:right-[-5px] w-2 h-2 bg-etched-gold rounded-full transform rotate-45 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(226,194,133,0.8)] z-20"></div>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-obsidian border-l md:border-l-0 md:border-r border-etched-gold p-6 rounded-lg inline-block w-full max-w-md gold-glow transition-all text-left md:text-right cursor-pointer"
              >
                <span className="text-label-caps font-label-caps text-etched-gold opacity-70 mb-2 block">
                  1st Age - The Enlightenment
                </span>
                <h3 className="text-body-lg font-body-lg text-on-surface font-bold mb-3">
                  The Golden Spire
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                  Solunaris rises. The Academy, Church, and Castle stand as beacons of peace and wisdom, uniting commoner and noble alike.
                </p>
              </motion.div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-8 md:pl-12 md:w-1/2 group">
              <div className="absolute top-0 left-[-4px] w-2 h-2 bg-etched-gold rounded-full transform rotate-45 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(226,194,133,0.8)] z-20"></div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-obsidian border-l border-etched-gold p-6 rounded-lg inline-block w-full max-w-md gold-glow transition-all text-left cursor-pointer"
              >
                <span className="text-label-caps font-label-caps text-etched-gold opacity-70 mb-2 block">
                  2nd Age - The Fracture
                </span>
                <h3 className="text-body-lg font-body-lg text-on-surface font-bold mb-3">
                  Decay and Betrayal
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                  King Solun's descent into madness and desperation leads to a catastrophic spell that shatters the kingdom into a thousand pieces.
                </p>
              </motion.div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-8 md:pl-0 md:w-1/2 md:-ml-[1px] md:pr-12 md:text-right group">
              <div className="absolute top-0 left-[-4px] md:left-auto md:right-[-5px] w-2 h-2 bg-blood-lust rounded-full transform rotate-45 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(176,0,0,0.8)] z-20"></div>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-obsidian border-l md:border-l-0 md:border-r border-blood-lust p-6 rounded-lg inline-block w-full max-w-md crimson-glow transition-all text-left md:text-right cursor-pointer"
              >
                <span className="text-label-caps font-label-caps text-blood-lust opacity-70 mb-2 block">
                  3rd Age - The Aftermath
                </span>
                <h3 className="text-body-lg font-body-lg text-error font-bold mb-3">
                  Silence of the Fallen
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                  Restless spirits wander the Prison and Library, guarding ancient secrets while the Judge's shadow looms over the ruins.
                </p>
              </motion.div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default Lore;
