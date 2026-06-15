import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed w-full z-50 bg-background/95 dark:bg-background/95 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] full-width top-0">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max-width mx-auto">
        <Link 
          to="/" 
          className="text-headline-md font-headline-md text-etched-gold uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-etched-gold" style={{ fontVariationSettings: "'FILL' 1" }}>
            castle
          </span>
          The Broken Kingdom
        </Link>

        {/* Web Nav Links */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link 
              to="/lore" 
              className={`font-label-caps hover:text-etched-gold hover:bg-surface-container-highest/50 transition-all px-3 py-2 rounded-DEFAULT ${
                isLinkActive('/lore') ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant'
              }`}
            >
              Lore
            </Link>
          </li>
          <li>
            <Link 
              to="/factions" 
              className={`font-label-caps hover:text-etched-gold hover:bg-surface-container-highest/50 transition-all px-3 py-2 rounded-DEFAULT ${
                isLinkActive('/factions') ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant'
              }`}
            >
              Verdict
            </Link>
          </li>
          <li>
            <Link 
              to="/characters" 
              className={`font-label-caps hover:text-etched-gold hover:bg-surface-container-highest/50 transition-all px-3 py-2 rounded-DEFAULT ${
                isLinkActive('/characters') ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant'
              }`}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link 
              to="/ruins" 
              className={`font-label-caps hover:text-etched-gold hover:bg-surface-container-highest/50 transition-all px-3 py-2 rounded-DEFAULT ${
                isLinkActive('/ruins') ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant'
              }`}
            >
              Ruins
            </Link>
          </li>
        </ul>

        <Link 
          to="/join" 
          className="hidden md:block bg-obsidian-base border border-etched-gold/50 text-etched-gold font-label-caps text-label-caps px-6 py-2 hover:text-etched-gold hover:bg-surface-container-highest/50 transition-all hover:scale-95 duration-200 ease-in-out shadow-heavy-smoky gold-inner-glow uppercase tracking-wider"
        >
          Reclaim the Throne
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
