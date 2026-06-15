import React from 'react';
import { motion } from 'framer-motion';

const Lore = () => {
  return (
    <div className="content-layer bg-obsidian-base min-h-screen text-on-surface flex flex-col antialiased relative overflow-x-hidden selection:bg-blood-lust/30 selection:text-etched-gold">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')] opacity-5"></div>

      <main className="flex-grow pt-24">
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
              The Annals of Solunaris
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto"
            >
              Before the ash, there was gold. Before the silence, there were oaths. Delve into the fractured history of a kingdom torn asunder by pride and blood.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center gap-4 mt-8"
            >
              <button className="bg-obsidian-base border border-etched-gold text-etched-gold text-label-caps font-label-caps px-8 py-3 rounded-DEFAULT hover:bg-surface-container-highest transition-colors gold-glow uppercase tracking-widest">
                Read the Scriptures
              </button>
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
        <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16">
          <div className="mb-12 text-center">
            <h2 className="text-headline-md font-headline-md text-primary mb-4 uppercase tracking-widest">
              The Crucible of Prosperity
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl mx-auto">
              An era when the spires touched the heavens and the vaults brimmed with starlight. Yet, within the brilliance, shadows lengthened.
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
                <h3 className="text-headline-md font-headline-md text-primary">The Golden Zenith</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Under the reign of High King Aethelgard, Solunaris reached its terrifying peak. The mastery of aether-forging led to unparalleled wealth, but demanded sacrifices that history erased.
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
                <h4 className="text-body-lg font-body-lg text-primary font-bold mb-2">The Aether Accords</h4>
                <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                  The binding pacts that harnessed the chaotic energies of the void, written in the blood of the willing.
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
                  bloodtype
                </span>
                <h4 className="text-body-lg font-body-lg text-error font-bold mb-2">The Hidden Toll</h4>
                <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                  Prosperity required anchors. The lower districts sank deeper into darkness to elevate the high spires.
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

        {/* The Betrayal (Asymmetric Text & Image Layout) */}
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
                Betrayal of the Obsidian Court
              </h2>
              <div className="w-16 h-1 bg-blood-lust opacity-70"></div>
              <p className="text-body-lg font-body-lg text-on-surface-variant">
                When the Aether reserves dwindled, the Council of Elders did not look outward for salvation; they looked inward, to the veins of their own people. The Night of the Red Moons marked the beginning of the Great Schism.
              </p>
              <p className="text-body-md font-body-md text-spectral-gray">
                Lord Malakor, once the Keeper of the Accords, shattered the Obsidian Throne. His rebellion was not one of liberation, but of darker ambition. He sought to replace the dwindling aether with soul-stuff, plunging the kingdom into a civil war from which it would never recover.
              </p>
              
              <ul className="space-y-4 mt-8 border-l border-outline-variant pl-4">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-blood-lust mr-3 mt-1">close</span>
                  <span className="text-body-md font-body-md text-on-surface">The Severing of the Ley Lines</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-blood-lust mr-3 mt-1">close</span>
                  <span className="text-body-md font-body-md text-on-surface">Massacre at the Sun Spire</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-blood-lust mr-3 mt-1">close</span>
                  <span className="text-body-md font-body-md text-on-surface">The Exile of the True Heirs</span>
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
              Lineage of the Damned
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              The reign of the High Kings, from zenith to ruin.
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
                  1st Age - The Dawn
                </span>
                <h3 className="text-body-lg font-body-lg text-on-surface font-bold mb-3">
                  King Aethelgard the Bright
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                  Forged the kingdom from warring tribes. Established the Obsidian Court and built the first spires.
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
                  2nd Age - The Zenith
                </span>
                <h3 className="text-body-lg font-body-lg text-on-surface font-bold mb-3">
                  Queen Valerius the Architect
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                  Discovered the Aether wells. Initiated the Great Expansion, driving the city deeper underground.
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
                  3rd Age - The Fall
                </span>
                <h3 className="text-body-lg font-body-lg text-error font-bold mb-3">
                  King Malakor the Usurper
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                  Shattered the throne. Unleashed the Void horrors upon the lower districts to secure his power.
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
