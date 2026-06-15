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
              alt="Desolate battlefield with blood-red skies and obsidian ruins." 
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
              <span className="material-symbols-outlined text-[16px]">scale</span>
              The Great Divide
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
              Two opposing forces vie for the ultimate verdict over the scarred remnants of Solunaris. Restoration or Ruin—the final fate of the kingdom rests in the scales.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter px-4">
            
            {/* The Judge - Column 1 */}
            <motion.article 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-surface-container-lowest border-t-sharp-gold shadow-heavy-smoky gold-inner-glow overflow-hidden flex flex-col group rounded-lg"
            >
              {/* Subtle gold grid texture */}
              <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23e2c285\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')]"></div>
              
              <div className="p-8 md:p-12 flex flex-col h-full z-10">
                <div className="flex justify-between items-start mb-8">
                  {/* Emblem circular container */}
                  <div className="w-24 h-24 rounded-full border border-outline-variant/30 flex items-center justify-center bg-obsidian-base shadow-inner overflow-hidden relative">
                    <img 
                      className="absolute inset-0 w-full h-full object-contain p-2 opacity-50 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                      alt="The Judge Sigil" 
                      src="/assets/images/judge.png"
                    />
                    <span className="material-symbols-outlined text-4xl text-etched-gold relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>
                      scale
                    </span>
                  </div>
                  <span className="bg-[#0f172a] text-primary font-label-caps text-label-caps px-3 py-1 rounded-sm uppercase tracking-widest border border-outline-variant/20">
                    Fate & Balance
                  </span>
                </div>
                
                <h3 className="font-headline-md text-headline-md text-etched-gold mb-4 uppercase tracking-wide">
                  The Judge
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-8 leading-relaxed">
                  A being of myth and terror who wields the scythe of destiny and the powers of the sun and moon. The Judge arrives only when a kingdom has truly fallen, to weigh its remains and deliver the final verdict.
                </p>
                
                <div className="bg-surface-container-low p-6 rounded-sm border border-outline-variant/10 space-y-4">
                  <div className="flex border-b border-outline-variant/20 pb-3">
                    <h4 className="font-label-caps text-label-caps text-outline uppercase w-28">Combat Style:</h4>
                    <span className="font-body-md text-body-md text-inverse-surface">Scythe of Destiny, Mending Moon Light, Blazing Sun Wrath</span>
                  </div>
                  <div className="flex">
                    <h4 className="font-label-caps text-label-caps text-outline uppercase w-28">Territory:</h4>
                    <span className="font-body-md text-body-md text-inverse-surface">The Spire of Balance</span>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* King Solun - Column 2 */}
            <motion.article 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-surface-container-lowest border-t-sharp-gold border-blood-lust shadow-heavy-smoky crimson-inner-glow overflow-hidden flex flex-col group rounded-lg"
            >
              {/* Subtle fire texture */}
              <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'fireNoise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.02\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23fireNoise)\'/%3E%3C/svg%3E')]"></div>
              
              <div className="p-8 md:p-12 flex flex-col h-full z-10 relative">
                <div className="flex justify-between items-start mb-8">
                  {/* Emblem circular container */}
                  <div className="w-24 h-24 rounded-full border border-outline-variant/30 flex items-center justify-center bg-obsidian-base shadow-inner overflow-hidden relative">
                    <img 
                      className="absolute inset-0 w-full h-full object-contain p-2 opacity-50 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                      alt="King Solun Sigil" 
                      src="/assets/images/king.PNG"
                    />
                    <span className="material-symbols-outlined text-4xl text-blood-lust relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>
                      crown
                    </span>
                  </div>
                  <span className="bg-[#2a0808] text-error font-label-caps text-label-caps px-3 py-1 rounded-sm uppercase tracking-widest border border-error-container/20">
                    Madness & Ruin
                  </span>
                </div>
                
                <h3 className="font-headline-md text-headline-md text-error mb-4 uppercase tracking-wide">
                  King Solun
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-8 leading-relaxed">
                  Once a beacon of hope for Solunaris, King Solun's descent into insanity and desperation shattered his own kingdom. Now he rules over a silent graveyard of dust, refusing to surrender his broken crown.
                </p>
                
                <div className="bg-surface-container-low p-6 rounded-sm border border-outline-variant/10 space-y-4">
                  <div className="flex border-b border-outline-variant/20 pb-3">
                    <h4 className="font-label-caps text-label-caps text-outline uppercase w-28">Combat Style:</h4>
                    <span className="font-body-md text-body-md text-inverse-surface">The Shattered Crown, Void Conjuring, Hollow Legion</span>
                  </div>
                  <div className="flex">
                    <h4 className="font-label-caps text-label-caps text-outline uppercase w-28">Territory:</h4>
                    <span className="font-body-md text-body-md text-inverse-surface">The Crumbling Castle</span>
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
