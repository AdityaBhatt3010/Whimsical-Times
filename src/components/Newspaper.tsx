import React, { useState } from 'react';

interface Story {
  headline: string;
  content: string;
  category: string;
  image?: string;
}

interface NewspaperProps {
  story: Story;
  onTorn: () => void;
}

const Newspaper: React.FC<NewspaperProps> = ({ story, onTorn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTearing, setIsTearing] = useState(false);
  
  const newsImages = [
    'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ];
  
  const randomImage = newsImages[Math.floor(Math.random() * newsImages.length)];

  React.useEffect(() => {
    // Auto-open the newspaper after a brief delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (!isOpen) return;
    
    setIsTearing(true);
    
    // Complete the tear after animation
    setTimeout(() => {
      onTorn();
    }, 800);
  };

  return (
    <div 
      className={`relative cursor-pointer transition-all duration-1000 ${
        isOpen ? 'w-[600px] h-[800px]' : 'w-48 h-64'
      } ${isTearing ? 'animate-tear' : ''}`}
      onClick={handleClick}
    >
      {/* Newspaper background */}
      <div className={`absolute inset-0 bg-white shadow-2xl border-2 border-purple-400 glow-purple transition-all duration-1000 ${
        isOpen ? 'rotate-0' : 'rotate-3'
      }`}>
        
        {/* Header */}
        <div className="bg-black text-white p-4 border-b-4 border-red-600">
          <h1 className="text-center font-bold text-2xl tracking-wider">
            WHIMSICAL NEWS
          </h1>
          <p className="text-center text-sm opacity-80">
            Daily Chaos • Edition #{Math.floor(Math.random() * 999) + 1} • Dimension Unknown
          </p>
        </div>
        
        {/* Content */}
        {isOpen && (
          <div className="p-6 space-y-4 h-full overflow-y-auto">
            {/* Category badge */}
            <div className="bg-red-600 text-white px-3 py-1 text-sm font-bold inline-block animate-pulse">
              {story.category}
            </div>
            
            {/* Main headline */}
            <h2 className="font-bold text-2xl text-black leading-tight animate-float border-b-2 border-red-600 pb-2">
              {story.headline}
            </h2>
            
            {/* News image */}
            <div className="w-full h-48 border-2 border-gray-400 overflow-hidden bg-gray-100">
              <img 
                src={randomImage} 
                alt="News story" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="text-xs text-gray-600 p-1 bg-white bg-opacity-80">
                Photo: Whimsical News Archives
              </div>
            </div>
            
            {/* Article text in columns */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-sm text-black leading-relaxed animate-subtle-float">
                  {story.content}
                </p>
                
                {/* Fake additional content */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  Authorities are investigating the incident while residents are advised to avoid all kitchen appliances manufactured after 1985. "This is clearly a case of temporal misconduct," said Detective Sarah Williams.
                </p>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-gray-700 leading-relaxed">
                  The Department of Interdimensional Affairs has issued a statement warning citizens about the dangers of unauthorized time travel. "We cannot stress enough how important it is to obtain proper permits before attempting any chronological displacement," said spokesperson Dr. Marcus Chen.
                </p>
                
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3">
                  <p className="text-xs font-bold text-yellow-800">BREAKING UPDATE:</p>
                  <p className="text-xs text-yellow-700">More developments expected as this story unfolds across multiple timelines.</p>
                </div>
              </div>
            </div>
            
            {/* Bottom section */}
            <div className="border-t-2 border-gray-400 pt-4 mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm text-purple-700 italic animate-pulse">
                  Click anywhere to continue to next story...
                </div>
                <div className="text-xs text-gray-500">
                  Page 1 of ∞ • Continued on Page Ω
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Closed state - realistic newspaper preview */}
        {!isOpen && (
          <div className="p-3 space-y-2">
            {/* Mini headline */}
            <div className="border-b border-red-600 pb-1">
              <h3 className="font-bold text-sm leading-tight">REALITY BREAKS</h3>
              <p className="text-xs text-gray-600">Chaos levels rising...</p>
            </div>
            
            {/* Mini image */}
            <div className="h-20 bg-gray-200 border border-gray-400 overflow-hidden">
              <img 
                src={randomImage} 
                alt="Preview" 
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            
            {/* Text lines */}
            <div className="grid grid-cols-2 gap-1">
              <div className="space-y-1">
                <div className="h-1 bg-black w-full"></div>
                <div className="h-1 bg-black w-3/4"></div>
                <div className="h-1 bg-black w-1/2"></div>
              </div>
              <div className="space-y-1">
                <div className="h-1 bg-black w-5/6"></div>
                <div className="h-1 bg-black w-full"></div>
                <div className="h-1 bg-black w-2/3"></div>
              </div>
            </div>
          </div>
        )}
        
        {/* Newspaper fold line */}
        <div className="absolute inset-y-0 left-1/2 w-px bg-gray-300 opacity-30"></div>
        
        {/* Realistic newspaper aging effects */}
        <div className="absolute inset-0 bg-yellow-50 opacity-20 pointer-events-none"></div>
        <div className="absolute top-2 right-2 w-4 h-4 bg-brown-200 opacity-30 rounded-full"></div>
        <div className="absolute bottom-4 left-3 w-2 h-2 bg-brown-200 opacity-20 rounded-full"></div>
      </div>
      
      {/* Tear effect overlay */}
      {isTearing && (
        <div className="absolute inset-0 bg-black opacity-90 flex items-center justify-center">
          <div className="text-purple-400 text-4xl animate-spin">📰</div>
          <div className="text-red-400 text-2xl animate-pulse ml-2">💥</div>
        </div>
      )}
    </div>
  );
};

export default Newspaper;