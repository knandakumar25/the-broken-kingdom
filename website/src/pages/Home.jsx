import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="content-layer bg-obsidian-base min-h-screen text-on-surface flex flex-col antialiased selection:bg-primary/30 selection:text-primary overflow-x-hidden relative">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')] opacity-5"></div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-margin-mobile pt-20 overflow-hidden">
        {/* Background Image with Hero Pattern Overlay */}
        <div className="absolute inset-0 z-[-1] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bottom from-transparent to-obsidian-base z-10"></div>
          <motion.img 
            initial={{ scale: 1.1, opacity: 0.3 }}
            animate={{ scale: 1.0, opacity: 0.4 }}
            transition={{ duration: 10, ease: "easeOut" }}
            alt="The Broken Kingdom landscape" 
            className="w-full h-full object-cover mix-blend-luminosity" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUfL6nVVrC85WiaYWcr5NuYJYhJGHeAIf0LZIucLMWODr-HPqcwcHhKEC6WcmgLxgpftfu7bafWck4Pycvw0DZz-IZXlFQG_WRiNLMdqLlps849onDjsHBijQAJItqQ3bHJiiqjwPj_7UKIwHyfvoFBnHKSTIdQ67HuFp6lAwjggZqDj8HYH6J3uSSO8VhuQ4dbbEK5gR1wnb-1o67XcWbYKLFcGa32iWkyM9v86Oy6TJAZbZcqWKEDACxv-BiyRfsSX2DwNvgJE0"
          />
        </div>
        
        <div className="max-w-[800px] flex flex-col items-center gap-8 mt-12 z-10 px-4">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 0.2 }}
            className="material-symbols-outlined text-etched-gold text-[48px]" 
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            swords
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display-lg text-display-lg-mobile md:text-[80px] text-etched-gold uppercase tracking-[0.1em] leading-tight drop-shadow-2xl"
          >
            The Broken Kingdom
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body-lg text-body-lg text-on-surface-variant italic max-w-2xl mx-auto"
          >
            "Solunaris: Where crowns lie in dust and the silence of the fallen screams of betrayal."
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              to="/join" 
              className="btn-obsidian mt-8 px-10 py-4 font-label-caps text-[14px] tracking-[0.2em] uppercase rounded flex items-center gap-3"
            >
              Reclaim the Throne
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 animate-bounce opacity-50 z-10">
          <span className="material-symbols-outlined text-etched-gold">south</span>
        </div>
      </header>

      {/* Content Wrapper for Grid Alignment */}
      <main className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-24 flex flex-col gap-32 z-10 relative">
        
        {/* LORE SECTION */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="scroll-mt-32" 
          id="lore"
        >
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="font-headline-md text-[32px] text-etched-gold uppercase tracking-widest border-b border-outline-variant/30 pb-4 inline-block">
                The Lore
              </h2>
              <p className="font-body-md text-on-surface-variant drop-cap text-justify leading-relaxed">
                Forged in the crucible of a forgotten age, Solunaris was a beacon of prosperity before the Great Schism. The lineage of the High Kings, once thought eternal, shattered overnight when the Obsidian Court betrayed the crown. Now, remnants of ancient magic seep through the cracked earth, and the whispers of dead monarchs haunt the howling winds.
              </p>
              <p className="font-body-md text-on-surface-variant text-justify leading-relaxed opacity-80">
                To uncover the truth is to court madness. The archives have burned, leaving only fractured parables etched into the very stones of the ruined capital.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-primary/5 rounded blur-2xl transform translate-x-4 translate-y-4"></div>
              <div className="card-gothic p-2">
                <img 
                  alt="Ruined Archway" 
                  className="w-full h-auto aspect-square object-cover grayscale sepia-[.3] opacity-80" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu823FtxEsPQ-IDqtzfL8hoG218dyP7snWmFIYU0PiSwhiFZxOjhNnnw8XJXgQ_V1lD54uH8UeArZwQ_wLxkrhpAf6Z3nI8Sf4e9yJozZaYbUuPtEsBjSVYxAYiAhvtPjKzYAkLmSsxae48X2cxIw72GvSg5Q7BHN7eMs0nKwsHv3NhbTtmYxXWtP3Z3HWr3s_nv_NtCUX1725PcZm7CWP50ZrxY4AYG6YffIKCFpF1G93Wv93aE8tkzUBnOe9Nw68kaTTsJgcy24"
                />
              </div>
            </div>
          </div>
        </motion.section>

        <div className="ornate-divider">
          <span className="material-symbols-outlined text-outline-variant mx-4 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
            change_history
          </span>
        </div>

        {/* WAR SECTION (Bento Grid) */}
        <section className="scroll-mt-32" id="war">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-[32px] text-etched-gold uppercase tracking-widest">The Great Divide</h2>
            <p className="font-body-md text-outline mt-4 max-w-xl mx-auto italic">
              Forces collide over the ashes of Solunaris, awaiting the final verdict.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Item 1 - The Judge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-gothic p-8 md:col-span-2 flex flex-col justify-end min-h-[300px] relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-base via-obsidian-base/80 to-transparent z-10"></div>
                <img 
                  alt="The Judge" 
                  className="w-full h-full object-cover opacity-35 group-hover:opacity-45 transition-opacity duration-700 mix-blend-luminosity" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvIh2X9smViVfr7LTj_6MaVxRR5Uqp5Jq_CI-mK3vRoyjobQaEFpe60_q0qcEjPeDDvH2mSodW9hVg3PkC5zTcPgKpxxUqy2Xns1AUZn_fZh0Fovpy-1WZOZUqaoVRvht7rsW2qBCs9sJ3BW8pCE5vlwMtVXtSMJkcZ9dyFE2OQcoOeepwpdfGAB3MsXaZQ5hHfG6nl3CsyFYe9763JOOI1NYImWXymUxkqnEk275vbzRXIoccx0Fm3sTN_9OVr7baXDM0p27po3A"
                />
              </div>
              <div className="relative z-20">
                <div className="inline-block px-3 py-1 bg-surface-container/80 text-primary font-label-caps text-[10px] uppercase border border-outline/30 mb-4 backdrop-blur-sm">
                  Harbinger of Fate
                </div>
                <h3 className="font-headline-md text-on-surface text-2xl mb-2">The Judge</h3>
                <p className="font-body-md text-on-surface-variant text-sm max-w-md">
                  A being of myth and terror who wields a scythe and the power of the sun and moon. It is said the Judge arrives only when a kingdom has truly fallen.
                </p>
              </div>
            </motion.div>

            {/* Bento Item 2 - King Solun */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-gothic p-8 flex flex-col justify-between min-h-[300px] group border-t-secondary-container cursor-pointer"
            >
              <div>
                <span className="material-symbols-outlined text-secondary-container text-[32px] mb-4">crown</span>
                <h3 className="font-headline-md text-on-surface text-xl mb-2">King Solun</h3>
              </div>
              <p className="font-body-md text-on-surface-variant text-sm">
                Once a beacon of hope, Solun's descent into insanity and desperation shattered his kingdom. His legacy is one of betrayal and dust.
              </p>
            </motion.div>

            {/* Bento Item 3 - The Ruins */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-gothic p-8 flex flex-col justify-between min-h-[300px] group cursor-pointer"
            >
              <div>
                <span className="material-symbols-outlined text-tertiary text-[32px] mb-4">castle</span>
                <h3 className="font-headline-md text-on-surface text-xl mb-2">Ruins of Solunaris</h3>
              </div>
              <p className="font-body-md text-on-surface-variant text-sm">
                Eight monuments to a fallen age, including the Academy, Prison, and Castle, holding secrets that should remain buried.
              </p>
            </motion.div>

            {/* Bento Item 4 - The Verdict */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-gothic p-8 md:col-span-2 flex flex-col justify-center items-center text-center min-h-[300px] border-t-outline-variant bg-surface-container-low"
            >
              <h3 className="font-display-lg text-[20px] md:text-[24px] text-outline mb-4 italic">
                "Whether to erase the scars of the past or to let the kingdom sleep in its shattered silence."
              </h3>
              <Link 
                to="/factions" 
                className="text-etched-gold font-label-caps uppercase text-xs tracking-widest border-b border-etched-gold/30 hover:border-etched-gold pb-1 transition-colors"
              >
                Explore the Divide
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="ornate-divider">
          <span className="material-symbols-outlined text-outline-variant mx-4 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
            change_history
          </span>
        </div>

        {/* FINAL DESCENT / CTA */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 text-center flex flex-col items-center gap-8"
        >
          <span className="material-symbols-outlined text-etched-gold text-[40px] opacity-70">diamond</span>
          <h2 className="font-display-lg text-display-lg-mobile md:text-[56px] text-etched-gold tracking-widest uppercase">
            Your Fate Awaits
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto uppercase tracking-widest text-xs opacity-70">
            Will you be the one to mend the crown, or will you feast on the remains of the Broken Kingdom?
          </p>
          <div className="mt-8">
            <Link 
              to="/join" 
              className="btn-descent px-12 py-5 font-headline-md text-[16px] tracking-[0.15em] uppercase rounded flex flex-col items-center gap-1 group"
            >
              Begin the Descent
              <span className="h-1 w-0 bg-blood-lust group-hover:w-full transition-all duration-500 ease-out mt-1"></span>
            </Link>
          </div>
        </motion.section>

      </main>
    </div>
  );
};

export default Home;
