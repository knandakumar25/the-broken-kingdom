import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Ruins = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    name: "The Shattered Capital",
    desc: "The epicenter of the great sundering. Massive obsidian chunks float unnaturally in the heavy air, tethered by residual magics of a forgotten royal bloodline. The streets, once paved with gold, are now choked with ash and restless spirits.",
    danger: "Extreme Danger",
    status: "Undiscovered"
  });

  const locations = {
    capital: {
      name: "The Shattered Capital",
      desc: "The epicenter of the great sundering. Massive obsidian chunks float unnaturally in the heavy air, tethered by residual magics of a forgotten royal bloodline. The streets, once paved with gold, are now choked with ash and restless spirits.",
      danger: "Extreme Danger",
      status: "Undiscovered"
    },
    spires: {
      name: "Sunless Spires",
      desc: "Once observatories for the royal mages, these towers now pierce a permanent layer of toxic clouds. The air is thin, and the echoes of mad ravings still bounce between the crumbling pillars.",
      danger: "High Danger",
      status: "Explored"
    }
  };

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
            The Ruins
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body-lg text-body-lg text-on-surface-variant opacity-80 leading-relaxed"
          >
            Behold the remnants of a shattered era. Once-great spires now pierce a sunless sky, and the capital lies fractured beneath the weight of its own hubris. Tread carefully, for history rarely sleeps.
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
                alt="A dark fantasy map" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-102 transition-transform duration-1000 ease-in-out mix-blend-luminosity" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW4jgW95SXDk5K8HddlW5kyXgKk5LCrTTk87IYEYR9lA4B6wUWMmGvKfczm-6goXlpIcOP2osNcIPPTP8-joBwcdmVCIp2uVrJ_M_MaglnHTCVEd-AtuuNVOpFt0F72S_75klUy_HY9uyL17OqZO91pXjdPqYrwiTpbqVRHNTIR-ac1OCB_MBee-i5Uy7QsrVABnQMZZXSx8Myz3GTkalqwn9F4i5siYwiqCbFVMOoeQvTd0dkggRafF4SoDFPfrktAkTGiXA4KO4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-base via-transparent to-transparent lg:bg-gradient-to-r"></div>
              
              {/* Map Markers (Interactive elements) */}
              <div 
                className="absolute top-[30%] left-[40%] group/marker cursor-pointer"
                onClick={() => setSelectedLocation(locations.capital)}
              >
                <div className="w-4 h-4 rounded-full bg-blood-lust border-2 border-etched-gold animate-pulse"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-surface-container-highest border border-outline-variant/50 px-3 py-1 rounded-sm opacity-100 transition-opacity whitespace-nowrap">
                  <span className="font-label-caps text-label-caps text-etched-gold">The Shattered Capital</span>
                </div>
              </div>
              
              <div 
                className="absolute top-[60%] left-[70%] group/marker cursor-pointer"
                onClick={() => setSelectedLocation(locations.spires)}
              >
                <div className="w-3 h-3 rounded-full bg-surface-variant border border-etched-gold/50"></div>
                <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-surface-container-highest border border-outline-variant/50 px-3 py-1 rounded-sm opacity-100 transition-opacity whitespace-nowrap">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">Sunless Spires</span>
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
                <button className="self-start flex items-center gap-2 text-etched-gold font-label-caps text-label-caps border-b border-etched-gold/30 pb-1 hover:border-etched-gold transition-colors group/btn uppercase tracking-wider">
                  Explore Region
                  <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">
                    arrow_right_alt
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bento Grid Gallery */}
        <div className="mb-12 flex justify-between items-end border-b border-outline-variant/20 pb-4 px-4">
          <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wider">
            Fractured Domains
          </h3>
          <div className="flex gap-2">
            <button className="p-2 bg-surface-container-highest rounded-sm text-etched-gold hover:bg-surface-bright transition-colors">
              <span className="material-symbols-outlined text-[20px]">grid_view</span>
            </button>
            <button className="p-2 bg-transparent rounded-sm text-outline hover:text-etched-gold transition-colors">
              <span className="material-symbols-outlined text-[20px]">view_list</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter px-4">
          {/* Card 1 */}
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="obsidian-card rounded-lg group cursor-pointer gold-glow-hover flex flex-col h-[400px]"
          >
            <div className="h-1/2 relative overflow-hidden bg-surface-container-lowest">
              <img 
                alt="Sunless Spires" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt4h9dht_ef1ThmroXLRBPqDNmic9y2XR-FStN6c515FKD8w0wv3uBqB6wK1H2P8xGatLjhVDq6ALj4mphzySN0OHk3gEt7ScOHGHXmp1vQIuGcMdwB30HIbyedjG0A9RRqL7gNDdzzZFDtDSG4f87BLz6DxrTVzr3MevqiMtWPzdUg9dkBRGejHh_19P8bXsbWXKNP36D1JMD249HRoUOmDBTHBQuJgBf8lTHffi0NfXvmJ0jkscIHWHmk1bHJQMM7ByrEck46SY"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent"></div>
              <div className="absolute top-4 right-4 bg-blood-lust text-on-error font-label-caps text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider border border-blood-lust/50 shadow-[0_0_10px_rgba(176,0,0,0.5)]">
                High Danger
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between relative z-10">
              <div>
                <h4 className="font-headline-md text-[20px] text-etched-gold mb-2 uppercase tracking-wide">Sunless Spires</h4>
                <p className="text-sm text-on-surface-variant line-clamp-3">
                  Once observatories for the royal mages, these towers now pierce a permanent layer of toxic clouds. The air is thin, and the echoes of mad ravings still bounce between the crumbling pillars.
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 border-t border-outline-variant/20 pt-4">
                <span className="text-xs font-label-caps text-outline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">distance</span> 
                  42 Leagues
                </span>
                <span className="material-symbols-outlined text-etched-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  chevron_right
                </span>
              </div>
            </div>
          </motion.article>

          {/* Card 2 */}
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="obsidian-card rounded-lg group cursor-pointer gold-glow-hover flex flex-col h-[400px]"
          >
            <div className="h-1/2 relative overflow-hidden bg-surface-container-lowest">
              <img 
                alt="The Drowned Archives" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBba0DPJNcdcUTQCiUXXnYfFl2V6P5oqu8mfUwVWqwnDURUtHAhbCvwV29A_sK0Q7ncqZ1VwSLXqNLw5i_fS_E5msmLsJOWT03lHa8HMPdytQj0hmMGhiYFOPbSQ7RRSh4xSoHUH_aREDeNorHqTqHNWIQeDUvbHFTvOsY0J66SWNAilZwTGOl8Cdk_1pX_NGtsjwfFHFoTzcph6Rchyu-c6vfuCHos-oJaUo5v0Yv2iRMadAH6Pm4uv4xr0qD2YOLAJWL-8J8jYmk"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent"></div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between relative z-10">
              <div>
                <h4 className="font-headline-md text-[20px] text-etched-gold mb-2 uppercase tracking-wide">Drowned Archives</h4>
                <p className="text-sm text-on-surface-variant line-clamp-3">
                  The lower levels of the capital flooded when the levee broke during the siege. Priceless tomes of forbidden magic now dissolve in the murky depths, guarded by things that adapted to the dark water.
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 border-t border-outline-variant/20 pt-4">
                <span className="text-xs font-label-caps text-outline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">distance</span> 
                  12 Leagues
                </span>
                <span className="material-symbols-outlined text-etched-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  chevron_right
                </span>
              </div>
            </div>
          </motion.article>

          {/* Card 3 */}
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="obsidian-card rounded-lg group cursor-pointer gold-glow-hover flex flex-col h-[400px]"
          >
            <div className="h-1/2 relative overflow-hidden bg-surface-container-lowest">
              <img 
                alt="Ashen Wastes" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFKc7iOcNtCrSRBGfZEiLr18Y8cJeWE1LZsai7al0leTwO-3Ott4uUVf5k5bd1GMEM1VpwDUG4ZDD4jVPGVgyyzlv8IR_AWGaKqFh-0JojS1ezwDvr38BCwwAIi_y7BEDzqnbCnrdgNsC3UEVFJBc4kO_VHTuofSqOcf4WcZ-g_UGrJmbZclxIKUzBqtdIe8gb-gB9iW4Vb10vdSvHekB2SAjcyYoevcsREo0zfPwM-abwdiIJJSli0Gd0dbNDzDT7EZUldRyE9xI"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent"></div>
              <div className="absolute top-4 right-4 bg-surface-container text-etched-gold font-label-caps text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider border border-etched-gold/30">
                Explored
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between relative z-10">
              <div>
                <h4 className="font-headline-md text-[20px] text-etched-gold mb-2 uppercase tracking-wide">The Ashen Wastes</h4>
                <p className="text-sm text-on-surface-variant line-clamp-3">
                  Once the verdant King's Wood, scorched by dragon fire during the rebellion. The ground is a deep bed of pale grey ash that hides deep fissures and dormant embers.
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 border-t border-outline-variant/20 pt-4">
                <span className="text-xs font-label-caps text-outline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">distance</span> 
                  89 Leagues
                </span>
                <span className="material-symbols-outlined text-etched-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  chevron_right
                </span>
              </div>
            </div>
          </motion.article>
        </div>

      </main>
    </div>
  );
};

export default Ruins;
