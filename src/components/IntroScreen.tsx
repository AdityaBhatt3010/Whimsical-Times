import React, { useState, useEffect } from 'react';

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [fadeTagline, setFadeTagline] = useState(false);
  const [zoomBlur, setZoomBlur] = useState(false);

  useEffect(() => {
    // Show logo immediately
    setShowLogo(true);
    
    // Show tagline after 1 second
    const taglineTimer = setTimeout(() => {
      setShowTagline(true);
    }, 1000);

    // Start zoom/blur effect after 4 seconds
    const zoomTimer = setTimeout(() => {
      setZoomBlur(true);
    }, 4000);

    // Fade tagline after 5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeTagline(true);
    }, 5000);

    // Complete intro after 7 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 7000);

    return () => {
      clearTimeout(taglineTimer);
      clearTimeout(zoomTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-all duration-3000 ${
          zoomBlur ? 'scale-110 blur-sm' : 'scale-100'
        }`}
        style={{
          backgroundImage: 'url("https://wallpapers.com/images/hd/whimsical-bridge-at-night-3ukzhsk4yxecynep.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      {/* Logo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div 
          className={`text-center transition-all duration-2000 ${
            showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4 animate-flicker">
            Whimsical News
          </h1>
          
          <div 
            className={`transition-all duration-1000 delay-1000 ${
              showTagline && !fadeTagline ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-xl md:text-2xl text-purple-300 font-mono tracking-widest animate-pulse">
              where noir meets chaos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;