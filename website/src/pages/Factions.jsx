import React from 'react';
import { motion } from 'framer-motion';

const Factions = () => {
  return (
    <div className="content-layer bg-obsidian-base min-h-screen text-on-surface flex flex-col antialiased texture-obsidian selection:bg-blood-lust selection:text-white relative overflow-x-hidden">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')] opacity-5"></div>

      <main className="flex-grow flex flex-col items-center w-full relative z-10">
        
        {/* Hero Section */}
        <header className="w-full relative min-h-[512px] flex items-center justify-center overflow-hidden border-b border-outline-variant/20 px-margin-mobile md:px-margin-desktop pt-20">
          {/* Background Image with Texture Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
              alt="A grim, heavily textured landscape of a ruined battlefield shrouded in thick, smoky mist under a blood-red sky." 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsyBiz2ARncCk8rCq-af--_x7FALQDWoGG1M6pI5SolFYyRn2pzdt7j2iKBhLIRn4R2QHwtRN7xJ5McGzTHWSp6LSG9IC49G9taAJ84Y6HVYUdR71rA64TllgBIczCxMpBwsAWiT6Ret57fLWTotppueWVehqrAtOABTJOA39cHUQ8fyXb-Q6pG1U8xjU5VBrHuoVEEVGTvUTjScj2mAQCEDozlpUL_Lc7-jRotBlepQbwQ3Gucdz5F0btcMZyrU958E8LUP5R00c"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-base via-obsidian-base/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-container-max-width py-24 flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-label-caps text-label-caps text-blood-lust tracking-[0.2em] uppercase mb-4 relic-pulse flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">swords</span>
              The Endless War
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display-lg text-display-lg-mobile md:text-display-lg text-etched-gold mb-6 uppercase tracking-wider drop-shadow-[0_5px_15px_rgba(0,0,0,1)]"
            >
              Factions of the Ruin
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto text-center"
            >
              Three dominant powers vie for control over the scarred remnants of the kingdom. Discipline, exile, and fanaticism clash in a perpetual struggle where only ash remains.
            </motion.p>
            <div className="w-24 mt-12 flex items-center justify-center opacity-70">
              <div className="divider-fade"></div>
              <span className="material-symbols-outlined text-etched-gold mx-2" style={{ fontVariationSettings: "'FILL' 1" }}>
                change_history
              </span>
              <div className="divider-fade"></div>
            </div>
          </div>
        </header>

        {/* Factions Bento Grid */}
        <section className="w-full max-w-container-max-width px-margin-mobile md:px-margin-desktop py-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-4">
            
            {/* The Iron Vanguard - Dominant/Large Card */}
            <motion.article 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-1 md:col-span-12 relative bg-surface-container-low border-t-sharp-gold shadow-heavy-smoky gold-inner-glow overflow-hidden group rounded-sm"
            >
              {/* Texture/Bg */}
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23e2c285\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')]"></div>
              <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                {/* Emblem Area */}
                <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative border border-outline-variant/30 rounded-full flex items-center justify-center bg-obsidian-base shadow-inner overflow-hidden">
                  <img 
                    className="absolute inset-0 w-full h-full object-cover rounded-full opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" 
                    alt="A gothic-style emblem forged in dark iron and accented with tarnished gold." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcQGmKef2YhxtA4bnHXPy_1IDuT8eOlUgdQimG-vjGsnIiq9j6By-D4MfxyV0cc66Z-aDOk3iwmX7HdBrmnIkAJB7I_zOd99ITj0Mina8eVVbuqGyyW8g2C564lRKZOKCW_W3DjVFvtG4fMTZOtB2OfMmrCDNgMKZprmrSKEzvZRijW47afzt_o_mWujMtA76K-ZRBQB2vnxLwqH8WEHo_f8_5GVHyZlMIGZgn5htI4XqUFRDYkpx4wmHd-UDdoshZtnFS-_XEmUY"
                  />
                  <span className="material-symbols-outlined text-7xl text-etched-gold relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>
                    shield
                  </span>
                </div>
                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-surface-container-highest text-etched-gold font-label-caps text-label-caps px-2 py-1 rounded-sm uppercase tracking-widest border border-outline-variant/20 shadow-sm">
                      Dominant Force
                    </span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-etched-gold mb-4 uppercase tracking-wide">
                    The Iron Vanguard
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface mb-6">
                    The remnants of the old royal guard, now functioning as a martial meritocracy. They hold the capital ruins and rely on impenetrable shield-walls and brutal discipline.
                  </p>
                  <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/20 pt-4">
                    <div>
                      <h4 className="font-label-caps text-label-caps text-outline uppercase mb-1">Combat Style</h4>
                      <p className="font-body-md text-body-md text-inverse-surface">Phalanx Defense, Heavy Artillery</p>
                    </div>
                    <div>
                      <h4 className="font-label-caps text-label-caps text-outline uppercase mb-1">Territory</h4>
                      <p className="font-body-md text-body-md text-inverse-surface">The High Citadel, Iron Marches</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* The Drowned Court - Half Width */}
            <motion.article 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-1 md:col-span-6 relative bg-surface-container-lowest border-l-sharp-gold shadow-heavy-smoky overflow-hidden flex flex-col group rounded-sm"
            >
              <div className="p-8 flex flex-col h-full z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded bg-obsidian-base border border-tertiary-container/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      water_drop
                    </span>
                  </div>
                  <span className="bg-[#0f172a] text-tertiary font-label-caps text-label-caps px-2 py-1 rounded-sm uppercase tracking-widest border border-tertiary-container/20">
                    Exiled
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-tertiary mb-3 uppercase tracking-wide">
                  The Drowned Court
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">
                  Aristocrats cast into the Sunken Basin, warped by abyssal depths. They fight with fluid, unpredictable strikes and utilize toxic mists and corrupted water magic.
                </p>
                <div className="bg-surface-container-low p-4 rounded-sm border border-outline-variant/10">
                  <div className="mb-2">
                    <h4 className="font-label-caps text-label-caps text-outline uppercase mb-1 inline-block w-24">Combat:</h4>
                    <span className="font-body-md text-body-md text-inverse-surface">Guerilla, Abyssal Magic</span>
                  </div>
                  <div>
                    <h4 className="font-label-caps text-label-caps text-outline uppercase mb-1 inline-block w-24">Territory:</h4>
                    <span class="font-body-md text-body-md text-inverse-surface">The Sunken Basin</span>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Zealots of Ash - Half Width */}
            <motion.article 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-1 md:col-span-6 relative bg-surface-container-lowest border-l-sharp-gold border-blood-lust shadow-heavy-smoky crimson-inner-glow overflow-hidden flex flex-col group rounded-sm"
            >
              {/* Subtle fire texture background noise */}
              <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'fireNoise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.02\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23fireNoise)\'/%3E%3C/svg%3E')]"></div>
              <div className="p-8 flex flex-col h-full z-10 relative">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded bg-obsidian-base border border-error-container/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blood-lust text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      local_fire_department
                    </span>
                  </div>
                  <span className="bg-[#2a0808] text-error font-label-caps text-label-caps px-2 py-1 rounded-sm uppercase tracking-widest border border-error-container/20">
                    Fanatical
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-error mb-3 uppercase tracking-wide">
                  Zealots of Ash
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">
                  Cinder-worshippers who view the ruin as a necessary purification. They are reckless, employing overwhelming numbers, pyromancy, and scorched-earth tactics.
                </p>
                <div className="bg-surface-container-low p-4 rounded-sm border border-outline-variant/10">
                  <div className="mb-2">
                    <h4 className="font-label-caps text-label-caps text-outline uppercase mb-1 inline-block w-24">Combat:</h4>
                    <span className="font-body-md text-body-md text-inverse-surface">Swarm Tactics, Pyromancy</span>
                  </div>
                  <div>
                    <h4 className="font-label-caps text-label-caps text-outline uppercase mb-1 inline-block w-24">Territory:</h4>
                    <span className="font-body-md text-body-md text-inverse-surface">The Cinder Wastes</span>
                  </div>
                </div>
              </div>
            </motion.article>

          </div>
        </section>

      </main>
    </div>
  );
};

export default Factions;
