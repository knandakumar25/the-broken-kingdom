import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Oath sworn by ${formData.name}. Prepare for the descent!`);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="content-layer bg-obsidian-base min-h-screen text-on-surface flex flex-col antialiased texture-overlay relative overflow-x-hidden selection:bg-blood-lust selection:text-white">
      {/* Background radial gradient */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(176,0,0,0.05)_0%,transparent_70%)]" />

      <main className="flex-grow flex items-center justify-center py-24 px-margin-mobile md:px-margin-desktop relative z-10 w-full max-w-container-max-width mx-auto">
        {/* Background Castle Image */}
        <div 
          className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-cover bg-center" 
          alt="A dark fantasy landscape featuring ruins of an ancient gothic castle under a stormy, blood-red moonlit sky."
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtFwS4JolWspdwQeyt2bCDd5wjXW6qQcCo8KPb4M62-NrxxejbXjQHnuD47lD9c5MeDh0KMygGRc_W1KBgQiTXp2v-jSxfAK1YiUChYuBlEN5BskWmRSsAbiE6P-RHXiWLEovJPodpCPhvmd6sKi4QU5wIZ_eBVUlUSK2KAK07ToxBj9kmMUpbDE6faguxFR1AScR-LLzIqAq-gaxiD1n1dZx8o_MLaAXI4H6iNhA0iArpTpsmPkE2fgVI1sDCEXL8i_N34Uc_w78')" 
          }}
        />

        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 mt-8">
          {/* Left Column: Brand Context */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-6">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-etched-gold uppercase tracking-widest drop-shadow-[0_5px_15px_rgba(226,194,133,0.3)]"
            >
              The Broken Kingdom
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed"
            >
              The throne sits empty, surrounded by the ash of a fallen dynasty. Your bloodline calls you back to the ruins. Swear your oath, reclaim your birthright, and prepare for the descent.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:flex flex-col gap-6 mt-8 border-l border-outline-variant/30 pl-6 text-left"
            >
              <div className="flex items-center gap-4 group">
                <span className="material-symbols-outlined text-primary group-hover:text-blood-lust transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>
                  swords
                </span>
                <div>
                  <h3 className="font-headline-md text-on-surface text-lg">Brutal Combat</h3>
                  <p className="font-body-md text-on-surface-variant text-sm">Every strike carries the weight of a kingdom.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <span className="material-symbols-outlined text-primary group-hover:text-blood-lust transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>
                  castle
                </span>
                <div>
                  <h3 className="font-headline-md text-on-surface text-lg">Ancient Ruins</h3>
                  <p className="font-body-md text-on-surface-variant text-sm">Explore the forgotten halls of your ancestors.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Oath Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-surface-container/80 backdrop-blur-md border-t-2 border-primary p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.9)] gold-glow relative rounded-sm"
          >
            {/* Ornate corners */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary opacity-50 m-2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary opacity-50 m-2 pointer-events-none" />

            <div className="text-center mb-10">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-2 tracking-wide">
                Oath of Loyalty
              </h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-outline-variant"></div>
                <span className="material-symbols-outlined text-outline-variant text-sm rotate-45">change_history</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-outline-variant"></div>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                Inscribe your true name to the ledger of souls.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1 group">
                <label 
                  className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-widest block group-focus-within:text-primary transition-colors" 
                  htmlFor="name"
                >
                  Lineage Name
                </label>
                <input 
                  className="w-full bg-[#121212] border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface font-body-md py-3 px-2 transition-colors placeholder:text-outline-variant/30 outline-none" 
                  id="name" 
                  placeholder="e.g., Kaelen of House Vane" 
                  required 
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-1 group">
                <label 
                  className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-widest block group-focus-within:text-primary transition-colors" 
                  htmlFor="email"
                >
                  Raven's Mark (Email)
                </label>
                <input 
                  className="w-full bg-[#121212] border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface font-body-md py-3 px-2 transition-colors placeholder:text-outline-variant/30 outline-none" 
                  id="email" 
                  placeholder="your@bloodline.com" 
                  required 
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-1 group">
                <label 
                  className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-widest block group-focus-within:text-primary transition-colors" 
                  htmlFor="password"
                >
                  Seal of the Pact (Password)
                </label>
                <input 
                  className="w-full bg-[#121212] border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface font-body-md py-3 px-2 transition-colors placeholder:text-outline-variant/30 outline-none" 
                  id="password" 
                  placeholder="••••••••" 
                  required 
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>

              <div className="pt-6">
                <button 
                  className="w-full bg-obsidian-base border border-blood-lust hover:border-primary text-on-surface hover:text-etched-gold font-headline-md text-headline-md py-4 transition-all duration-300 relative overflow-hidden group crimson-glow" 
                  type="submit"
                >
                  <span className="relative z-10 uppercase tracking-widest">Join the Descent</span>
                  <div className="absolute inset-0 bg-blood-lust/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                </button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-outline-variant/20 text-center">
              <p className="text-label-caps font-label-caps text-on-surface-variant mb-4 uppercase">
                Commune with the Fallen
              </p>
              <div className="flex justify-center gap-6">
                <a aria-label="Discord" className="text-outline-variant hover:text-primary transition-colors" href="https://discord.gg/broken-kingdom" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
                </a>
                <a aria-label="Twitter" className="text-outline-variant hover:text-primary transition-colors" href="https://twitter.com/broken_kingdom" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>flutter_dash</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Join;
