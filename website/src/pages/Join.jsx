import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Monitor, Terminal, Smartphone, Apple, Eye } from 'lucide-react';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="content-layer bg-obsidian-base min-h-screen text-on-surface flex flex-col antialiased texture-overlay relative overflow-x-hidden selection:bg-blood-lust selection:text-white">
      {/* Background radial gradient */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(176,0,0,0.05)_0%,transparent_70%)]" />

      <main className="flex-grow flex flex-col items-center justify-center py-24 px-margin-mobile md:px-margin-desktop relative z-10 w-full max-w-container-max-width mx-auto gap-24">
        {/* Background Castle Image */}
        <div 
          className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-cover bg-center" 
          alt="Ruins of the Castle under a crimson sky"
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtFwS4JolWspdwQeyt2bCDd5wjXW6qQcCo8KPb4M62-NrxxejbXjQHnuD47lD9c5MeDh0KMygGRc_W1KBgQiTXp2v-jSxfAK1YiUChYuBlEN5BskWmRSsAbiE6P-RHXiWLEovJPodpCPhvmd6sKi4QU5wIZ_eBVUlUSK2KAK07ToxBj9kmMUpbDE6faguxFR1AScR-LLzIqAq-gaxiD1n1dZx8o_MLaAXI4H6iNhA0iArpTpsmPkE2fgVI1sDCEXL8i_N34Uc_w78')" 
          }}
        />

        {/* Section 1: Sign up oath form */}
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
                  scale
                </span>
                <div>
                  <h3 className="font-headline-md text-on-surface text-lg">The Judge's Path</h3>
                  <p className="font-body-md text-on-surface-variant text-sm">Swear your oath to restoration, or lead the world into total ruin.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <span className="material-symbols-outlined text-primary group-hover:text-blood-lust transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>
                  castle
                </span>
                <div>
                  <h3 className="font-headline-md text-on-surface text-lg">Ruins of Solunaris</h3>
                  <p className="font-body-md text-on-surface-variant text-sm">Explore the forgotten spires of the Castle, Academy, and Prison.</p>
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

        {/* Section 2: Downloads & Web Player */}
        <div className="w-full max-w-5xl flex flex-col items-center gap-12 z-10 mt-12">
          <div className="text-center space-y-4">
            <h2 className="font-headline-md text-[28px] text-etched-gold uppercase tracking-widest">
              Reclaim the Spire: Play & Downloads
            </h2>
            <p className="font-body-md text-on-surface-variant text-sm max-w-xl mx-auto">
              Descend into the trial instantly through your browser, or install the full-fidelity standalone client on your device.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            {/* Play in Browser (Featured Card) */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-12 lg:col-span-6 border border-etched-gold/40 bg-surface-container/60 backdrop-blur-md p-8 flex flex-col justify-between relative overflow-hidden group shadow-heavy-smoky gold-inner-glow rounded-sm"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-etched-gold/5 blur-3xl -z-10 group-hover:bg-etched-gold/10 transition-all"></div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-surface-container-highest border border-outline-variant/30 text-etched-gold rounded-sm">
                    <Globe size={32} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-etched-gold font-label-caps block">Instant Play</span>
                    <h3 className="font-headline-md text-2xl text-on-surface uppercase">Play in Browser</h3>
                  </div>
                </div>
                <p className="font-body-md text-on-surface-variant text-sm mb-8 leading-relaxed">
                  No installation required. Jump straight into the darkness of the Broken Kingdom. Requires a desktop browser.
                </p>
              </div>
              <a 
                href="/web-player/The Broken Kingdom.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-4 bg-etched-gold text-obsidian font-label-caps uppercase tracking-widest font-bold hover:bg-white transition-all duration-300 block shadow-lg shadow-etched-gold/15"
              >
                Enter the Browser Realm
              </a>
            </motion.div>

            {/* Windows Download */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-6 lg:col-span-3 bg-surface-container-low/80 backdrop-blur-md p-6 border border-outline-variant/30 hover:border-etched-gold/40 transition-all duration-300 flex flex-col justify-between shadow-heavy-smoky rounded-sm"
            >
              <div>
                <div className="p-3 bg-surface-container-highest border border-outline-variant/30 text-outline-variant w-fit mb-4 rounded-sm">
                  <Monitor size={24} />
                </div>
                <h4 className="font-headline-md uppercase text-base text-on-surface font-bold mb-2">Windows PC</h4>
                <p className="font-body-md text-xs text-on-surface-variant mb-6 leading-relaxed">
                  Full performance standalone client with enhanced lighting and custom audio effects.
                </p>
              </div>
              <a 
                href="/downloads/Windows/The%20Broken%20Kingdom.exe"
                download
                className="w-full text-center py-3 bg-surface-container-highest text-on-surface hover:text-obsidian hover:bg-etched-gold font-label-caps text-xs uppercase tracking-widest transition-all duration-300 block border border-outline-variant/30 hover:border-transparent rounded-sm"
              >
                Download .EXE
              </a>
            </motion.div>

            {/* Linux Download */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-6 lg:col-span-3 bg-surface-container-low/80 backdrop-blur-md p-6 border border-outline-variant/30 hover:border-etched-gold/40 transition-all duration-300 flex flex-col justify-between shadow-heavy-smoky rounded-sm"
            >
              <div>
                <div className="p-3 bg-surface-container-highest border border-outline-variant/30 text-outline-variant w-fit mb-4 rounded-sm">
                  <Terminal size={24} />
                </div>
                <h4 className="font-headline-md uppercase text-base text-on-surface font-bold mb-2">Linux x86_64</h4>
                <p className="font-body-md text-xs text-on-surface-variant mb-6 leading-relaxed">
                  Standalone Linux build compiled for standard desktop environments.
                </p>
              </div>
              <a 
                href="/downloads/Linux/The%20Broken%20Kingdom.x86_64"
                download
                className="w-full text-center py-3 bg-surface-container-highest text-on-surface hover:text-obsidian hover:bg-etched-gold font-label-caps text-xs uppercase tracking-widest transition-all duration-300 block border border-outline-variant/30 hover:border-transparent rounded-sm"
              >
                Download Client
              </a>
            </motion.div>

            {/* Android Download */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-12 lg:col-span-6 bg-surface-container-low/80 backdrop-blur-md p-6 border border-outline-variant/30 border-t-blood-lust crimson-inner-glow hover:border-t-blood-lust transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-heavy-smoky rounded-sm"
            >
              <div className="flex gap-4">
                <div className="p-4 bg-surface-container-highest border border-outline-variant/30 text-outline-variant h-fit rounded-sm">
                  <Smartphone size={28} />
                </div>
                <div>
                  <h4 className="font-headline-md uppercase text-base text-on-surface font-bold mb-1">Android Mobile</h4>
                  <p className="font-body-md text-xs text-on-surface-variant max-w-md leading-relaxed">
                    Take the battle on the go. Sideload the APK file directly to your mobile device to play.
                  </p>
                </div>
              </div>
              <a 
                href="/downloads/Android/The%20Broken%20Kingdom.apk"
                download
                className="w-full md:w-auto text-center px-8 py-3 bg-blood-lust hover:bg-red-700 text-white font-label-caps text-xs uppercase tracking-widest transition-all duration-300 block border border-blood-lust/30 hover:border-transparent rounded-sm whitespace-nowrap"
              >
                Download .APK
              </a>
            </motion.div>

            {/* Apple Platforms */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-12 lg:col-span-6 bg-surface-container-low/40 backdrop-blur-md p-6 border border-outline-variant/10 flex flex-col justify-between rounded-sm opacity-60"
            >
              <div>
                <span className="text-[10px] font-label-caps text-outline uppercase tracking-widest block mb-3">En Route</span>
                <h4 className="font-headline-md text-base text-outline font-bold mb-3 uppercase">Apple Platforms</h4>
                <div className="grid grid-cols-3 gap-4 text-center mt-2">
                  <div className="bg-surface-container-low p-4 border border-outline-variant/20 flex flex-col items-center gap-2 rounded-sm">
                    <Apple size={20} className="text-outline" />
                    <span className="text-[9px] font-label-caps uppercase tracking-widest text-outline">macOS</span>
                  </div>
                  <div className="bg-surface-container-low p-4 border border-outline-variant/20 flex flex-col items-center gap-2 rounded-sm">
                    <Smartphone size={20} className="text-outline" />
                    <span className="text-[9px] font-label-caps uppercase tracking-widest text-outline">iOS</span>
                  </div>
                  <div className="bg-surface-container-low p-4 border border-outline-variant/20 flex flex-col items-center gap-2 rounded-sm">
                    <Eye size={20} className="text-outline" />
                    <span className="text-[9px] font-label-caps uppercase tracking-widest text-outline">visionOS</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-[10px] font-body-md italic text-outline-variant text-center leading-relaxed">
                Currently undergoing sanctification for the Apple ecosystem. Coming soon.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Join;
