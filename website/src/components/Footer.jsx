import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest text-primary dark:text-primary full-width bottom-0 border-t border-outline-variant/20 relative z-10 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-12 max-w-container-max-width mx-auto gap-gutter">
        <div className="text-label-caps font-label-caps text-etched-gold flex items-center gap-2 mb-4 md:mb-0 uppercase tracking-widest">
          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            castle
          </span>
          <span>© 1242 The Broken Kingdom. All souls accounted for.</span>
        </div>
        <nav className="flex gap-6">
          <a 
            className="text-on-surface-variant text-body-md font-body-md hover:text-blood-lust transition-colors opacity-80 hover:opacity-100" 
            href="#"
          >
            Privacy Scroll
          </a>
          <a 
            className="text-on-surface-variant text-body-md font-body-md hover:text-blood-lust transition-colors opacity-80 hover:opacity-100" 
            href="#"
          >
            Terms of Conquest
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
