import React from 'react';

export const ImageCarousel: React.FC = () => {
  const images = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png',
    '/images/7.png',
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-0 bg-[#030706] overflow-hidden">
      <div className="relative">
        <style>
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
            
            @media (min-width: 640px) {
              .animate-scroll {
                animation: scroll 25s linear infinite;
              }
            }
            
            @media (min-width: 768px) {
              .animate-scroll {
                animation: scroll 30s linear infinite;
              }
            }
            
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}
        </style>
        
        <div className="flex animate-scroll">
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 px-2.5">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="h-[300px] sm:h-[400px] md:h-[500px] w-auto object-cover"
                  style={{ borderRadius: 0 }}
                />
              </div>
            </div>
          ))}
          {/* Duplicate set of images for seamless loop */}
          {images.map((image, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 px-2.5">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="h-[300px] sm:h-[400px] md:h-[500px] w-auto object-cover"
                  style={{ borderRadius: 0 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

