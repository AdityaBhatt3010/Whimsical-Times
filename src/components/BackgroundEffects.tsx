import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Pulsing background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 animate-pulse-slow opacity-20" />
      
      {/* Floating glyphs */}
      <div className="absolute top-32 right-20 text-pink-400 opacity-20 animate-float-delayed text-xl">◆</div>
      <div className="absolute bottom-20 left-20 text-blue-400 opacity-25 animate-float text-3xl">◊</div>
      <div className="absolute top-1/2 right-10 text-purple-300 opacity-15 animate-float-slow text-4xl">✦</div>
      <div className="absolute bottom-32 right-32 text-pink-300 opacity-20 animate-float-delayed text-2xl">●</div>
      
      {/* Scrolling text */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden opacity-40">
        <div className="whitespace-nowrap animate-scroll-right text-white font-mono text-xs py-2">
          🚨 BREAKING NEWS • DIMENSION SHIFT DETECTED • TIME LOOP CONFIRMED • REALITY BREACH IN SECTOR 7 • 
          TOASTER SENTIENCE UPRISING • GRAVITY MALFUNCTION REPORTED • DREAM POLICE ON PATROL • CATS PLOTTING WORLD DOMINATION • 
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-40">
        <div className="whitespace-nowrap animate-scroll-left text-white font-mono text-xs py-2">
          🌀 CATS DECLARE INDEPENDENCE • QUANTUM COFFEE SHORTAGE • PARALLEL UNIVERSE WIFI DOWN • 
          INTERDIMENSIONAL PIZZA DELIVERY DELAYED • REALITY.EXE STOPPED WORKING • CHAOS LEVEL: MAXIMUM • GNOMES DETECTED • 
        </div>
      </div>
      
      {/* Glitch effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-px bg-green-400 absolute top-1/4 animate-glitch-1"></div>
        <div className="w-full h-px bg-purple-400 absolute top-1/2 animate-glitch-2"></div>
        <div className="w-full h-px bg-pink-400 absolute top-3/4 animate-glitch-3"></div>
      </div>
      
      {/* Random floating newspaper pieces */}
      <div className="absolute top-20 right-1/4 opacity-20 animate-float-slow">
        <div className="w-8 h-12 bg-white transform rotate-12 shadow-lg">
          <div className="p-1 text-xs">📰</div>
        </div>
      </div>
      
      <div className="absolute bottom-1/3 left-1/4 opacity-15 animate-float-delayed">
        <div className="w-6 h-8 bg-white transform -rotate-6 shadow-lg">
          <div className="p-1 text-xs">🗞️</div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundEffects;