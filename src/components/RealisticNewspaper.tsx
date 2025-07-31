import React from 'react';

interface RealisticNewspaperProps {
  isSmall?: boolean;
}

const RealisticNewspaper: React.FC<RealisticNewspaperProps> = ({ isSmall = false }) => {
  const images = [
    'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ];
  
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  return (
    <div className={`w-full h-full bg-white shadow-2xl transform rotate-1 ${isSmall ? 'text-xs' : 'text-sm'}`}>
      {/* Newspaper header */}
      <div className="bg-black text-white p-2 text-center border-b-4 border-red-600">
        <h1 className={`font-bold ${isSmall ? 'text-xs' : 'text-lg'} tracking-wider`}>
          WHIMSICAL NEWS
        </h1>
        <div className={`${isSmall ? 'text-xs' : 'text-sm'} opacity-80`}>
          Daily Chaos • Edition #{Math.floor(Math.random() * 999) + 1}
        </div>
      </div>
      
      {/* Main content area */}
      <div className="p-3 space-y-2">
        {/* Headline */}
        <div className="border-b-2 border-red-600 pb-2">
          <h2 className={`font-bold ${isSmall ? 'text-xs' : 'text-base'} leading-tight`}>
            REALITY BREAKS DOWN
          </h2>
          <p className={`${isSmall ? 'text-xs' : 'text-sm'} text-gray-600`}>
            Local man discovers universe is simulation
          </p>
        </div>
        
        {/* Image placeholder */}
        <div className={`${isSmall ? 'h-16' : 'h-24'} bg-gray-200 border border-gray-400 overflow-hidden`}>
          <img 
            src={randomImage} 
            alt="News" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        
        {/* Article columns */}
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <div className={`h-1 bg-black ${isSmall ? 'w-full' : 'w-full'}`}></div>
            <div className={`h-1 bg-black ${isSmall ? 'w-3/4' : 'w-5/6'}`}></div>
            <div className={`h-1 bg-black ${isSmall ? 'w-1/2' : 'w-4/5'}`}></div>
            <div className={`h-1 bg-black ${isSmall ? 'w-2/3' : 'w-3/4'}`}></div>
          </div>
          <div className="space-y-1">
            <div className={`h-1 bg-black ${isSmall ? 'w-5/6' : 'w-full'}`}></div>
            <div className={`h-1 bg-black ${isSmall ? 'w-full' : 'w-4/5'}`}></div>
            <div className={`h-1 bg-black ${isSmall ? 'w-1/3' : 'w-2/3'}`}></div>
            <div className={`h-1 bg-black ${isSmall ? 'w-3/4' : 'w-5/6'}`}></div>
          </div>
        </div>
        
        {/* Bottom section */}
        {!isSmall && (
          <div className="border-t border-gray-400 pt-2 mt-2">
            <div className="flex justify-between items-center">
              <div className="text-xs text-red-600 font-bold">BREAKING</div>
              <div className="text-xs text-gray-500">Page 1 of ∞</div>
            </div>
          </div>
        )}
      </div>
      
      {/* Newspaper fold line */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-gray-300 opacity-50"></div>
    </div>
  );
};

export default RealisticNewspaper;