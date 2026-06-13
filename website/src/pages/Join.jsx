import React from 'react';
import { motion } from 'framer-motion';
import { Skull, Monitor, Smartphone, Globe, Apple, Terminal, Eye } from 'lucide-react';

const Join = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="py-24 px-4 min-h-screen bg-obsidian text-ghost-white flex flex-col items-center justify-center relative">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative mb-6"
      >
        <Skull size={64} className="text-blood-red mb-4 mx-auto" />
        <div className="absolute inset-0 blur-2xl bg-blood-red/20 -z-10"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 className="font-gothic text-6xl text-decayed-gold mb-4 broken-text">Reclaim the Throne</h2>
        <p className="font-cinzel text-gray-400 text-sm tracking-wider">
          Choose your gateway to Solunaris. The kingdom has fallen, but your descent has just begun.
        </p>
      </motion.div>

      {/* Main Grid for Downloads */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 z-10"
      >
        {/* Play in Browser (Featured) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-12 lg:col-span-6 gold-border bg-black/40 backdrop-blur-md p-8 rounded-none border border-decayed-gold/40 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-decayed-gold/5 blur-3xl -z-10 group-hover:bg-decayed-gold/10 transition-all"></div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-decayed-gold/10 text-decayed-gold">
                <Globe size={32} />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-decayed-gold font-cinzel">Instant Play</span>
                <h3 className="font-gothic text-3xl text-white">Play in Browser</h3>
              </div>
            </div>
            <p className="font-serif italic text-gray-400 mb-8 text-base leading-relaxed">
              No installation required. Jump straight into the darkness of the Broken Kingdom. Works on desktop browsers.
            </p>
          </div>
          <a 
            href="/web-player/The Broken Kingdom.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-4 bg-decayed-gold text-black font-cinzel uppercase tracking-widest font-bold hover:bg-white transition-all duration-300 block shadow-lg shadow-decayed-gold/15"
          >
            Enter the Browser Realm
          </a>
        </motion.div>

        {/* Windows Download */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-6 lg:col-span-3 bg-white/5 backdrop-blur-md p-6 border border-white/10 hover:border-decayed-gold/40 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="p-3 bg-white/5 text-gray-400 w-fit mb-4">
              <Monitor size={24} />
            </div>
            <h4 className="font-cinzel uppercase text-lg text-white font-bold mb-2">Windows PC</h4>
            <p className="font-serif text-sm text-gray-400 mb-6">
              Full performance client with enhanced lighting and audio.
            </p>
          </div>
          <a 
            href="/downloads/Windows/The%20Broken%20Kingdom.exe"
            download
            className="w-full text-center py-3 bg-white/10 text-white font-cinzel text-xs uppercase tracking-widest hover:bg-decayed-gold hover:text-black transition-all duration-300 block border border-white/10 hover:border-transparent"
          >
            Download .EXE
          </a>
        </motion.div>

        {/* Linux Download */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-6 lg:col-span-3 bg-white/5 backdrop-blur-md p-6 border border-white/10 hover:border-decayed-gold/40 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="p-3 bg-white/5 text-gray-400 w-fit mb-4">
              <Terminal size={24} />
            </div>
            <h4 className="font-cinzel uppercase text-lg text-white font-bold mb-2">Linux x86_64</h4>
            <p className="font-serif text-sm text-gray-400 mb-6">
              Full performance standalone Linux binary.
            </p>
          </div>
          <a 
            href="/downloads/Linux/The%20Broken%20Kingdom.x86_64"
            download
            className="w-full text-center py-3 bg-white/10 text-white font-cinzel text-xs uppercase tracking-widest hover:bg-decayed-gold hover:text-black transition-all duration-300 block border border-white/10 hover:border-transparent"
          >
            Download Client
          </a>
        </motion.div>

        {/* Android Download */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-12 lg:col-span-6 bg-white/5 backdrop-blur-md p-6 border border-white/10 hover:border-decayed-gold/40 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div className="flex gap-4">
            <div className="p-4 bg-white/5 text-gray-400 h-fit">
              <Smartphone size={28} />
            </div>
            <div>
              <h4 className="font-cinzel uppercase text-lg text-white font-bold mb-1">Android Mobile</h4>
              <p className="font-serif text-sm text-gray-400 max-w-md">
                Take the battle on the go. Sideload the APK file directly to your Android device to play.
              </p>
            </div>
          </div>
          <a 
            href="/downloads/Android/The%20Broken%20Kingdom.apk"
            download
            className="w-full md:w-auto text-center px-8 py-3 bg-blood-red text-white font-cinzel text-xs uppercase tracking-widest hover:bg-red-700 transition-all duration-300 block border border-white/10 hover:border-transparent whitespace-nowrap"
          >
            Download .APK
          </a>
        </motion.div>

        {/* Apple Platforms (Coming Soon) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-12 lg:col-span-6 bg-black/20 backdrop-blur-md p-6 border border-white/5 flex flex-col justify-between"
        >
          <div>
            <span className="text-xs font-cinzel text-gray-500 uppercase tracking-widest block mb-3">En Route</span>
            <h4 className="font-cinzel text-lg text-gray-400 font-bold mb-3">Apple Platforms</h4>
            <div className="grid grid-cols-3 gap-4 text-center mt-2">
              <div className="bg-white/5 p-4 border border-white/5 opacity-60 flex flex-col items-center gap-2">
                <Apple size={20} className="text-gray-400" />
                <span className="text-[10px] font-cinzel uppercase tracking-widest text-gray-400">macOS</span>
              </div>
              <div className="bg-white/5 p-4 border border-white/5 opacity-60 flex flex-col items-center gap-2">
                <Smartphone size={20} className="text-gray-400" />
                <span className="text-[10px] font-cinzel uppercase tracking-widest text-gray-400">iOS</span>
              </div>
              <div className="bg-white/5 p-4 border border-white/5 opacity-60 flex flex-col items-center gap-2">
                <Eye size={20} className="text-gray-400" />
                <span className="text-[10px] font-cinzel uppercase tracking-widest text-gray-400">visionOS</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-[11px] font-serif italic text-gray-500 text-center">
            Currently undergoing sanctification for the Apple ecosystem. Coming soon.
          </div>
        </motion.div>

      </motion.div>

      {/* Warnings / Atmosphere */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full text-center text-xs font-cinzel text-gray-500 uppercase tracking-widest z-10"
      >
        <div className="flex flex-col items-center gap-2 p-4 border border-white/5 bg-black/10">
          <span className="text-blood-red text-lg">⚠</span>
          <p>Beware the Corrupted</p>
        </div>
        <div className="flex flex-col items-center gap-2 p-4 border border-white/5 bg-black/10">
          <span className="text-blood-red text-lg">⚠</span>
          <p>Trust no one in Solunaris</p>
        </div>
        <div className="flex flex-col items-center gap-2 p-4 border border-white/5 bg-black/10">
          <span className="text-blood-red text-lg">⚠</span>
          <p>The Judge is watching</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Join;
