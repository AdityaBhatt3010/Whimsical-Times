import React, { useState, useEffect } from 'react';
import Newspaper from './Newspaper';
import { mockNews } from '../data/mockNews';
import RealisticNewspaper from './RealisticNewspaper';

interface FallingNewspaper {
  id: number;
  x: number;
  rotation: number;
  delay: number;
  landed: boolean;
}

const NewspaperStack: React.FC = () => {
  const [fallingNewspapers, setFallingNewspapers] = useState<FallingNewspaper[]>([]);
  const [stackedNewspapers, setStackedNewspapers] = useState<number[]>([]);
  const [currentNewspaperIndex, setCurrentNewspaperIndex] = useState(0);
  const [showCurrentNewspaper, setShowCurrentNewspaper] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    // Show background immediately
    setShowBackground(true);
    
    // Create falling newspapers
    const newspapers: FallingNewspaper[] = [];
    for (let i = 0; i < 5; i++) {
      newspapers.push({
        id: i,
        x: Math.random() * 200 - 100, // Random horizontal offset
        rotation: Math.random() * 30 - 15, // Random rotation
        delay: i * 500, // Stagger the falling
        landed: false,
      });
    }
    setFallingNewspapers(newspapers);

    // Start the falling animation
    newspapers.forEach((newspaper, index) => {
      setTimeout(() => {
        setFallingNewspapers(prev => 
          prev.map(n => n.id === newspaper.id ? { ...n, landed: true } : n)
        );
        
        // Add to stack after landing
        setTimeout(() => {
          setStackedNewspapers(prev => [...prev, newspaper.id]);
          
          // Show the first newspaper for reading
          if (index === newspapers.length - 1) {
            setTimeout(() => {
              setShowCurrentNewspaper(true);
            }, 500);
          }
        }, 600); // Wait for bounce animation
      }, newspaper.delay);
    });
  }, []);

  const handleNewspaperTorn = () => {
    setShowCurrentNewspaper(false);
    
    // Remove current newspaper and show next
    setTimeout(() => {
      setCurrentNewspaperIndex(prev => prev + 1);
      if (currentNewspaperIndex + 1 < mockNews.length) {
        setShowCurrentNewspaper(true);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      {showBackground && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm"
          style={{
            backgroundImage: 'url("https://wallpapers.com/images/hd/whimsical-bridge-at-night-3ukzhsk4yxecynep.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        />
      )}
      
      {/* Floor indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-900 via-pink-900 to-blue-900 opacity-30" />
      
      {/* Falling newspapers */}
      {fallingNewspapers.map((newspaper) => (
        <div
          key={newspaper.id}
          className={`absolute w-48 h-64 transition-all duration-1000 ease-out ${
            newspaper.landed 
              ? `bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce-once` 
              : '-top-44 left-1/2 transform -translate-x-1/2'
          }`}
          style={{
            transform: `translateX(calc(-50% + ${newspaper.x}px)) rotate(${newspaper.rotation}deg)`,
            zIndex: 10 - newspaper.id,
            transitionDelay: `${newspaper.delay}ms`,
          }}
        >
          <RealisticNewspaper isSmall={true} />
        </div>
      ))}
      
      {/* Interactive newspaper */}
      {showCurrentNewspaper && currentNewspaperIndex < mockNews.length && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Newspaper
            story={mockNews[currentNewspaperIndex]}
            onTorn={handleNewspaperTorn}
          />
        </div>
      )}
    </div>
  );
};

export default NewspaperStack;