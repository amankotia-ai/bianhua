import React from 'react';

export const ImageCarousel: React.FC = () => {
  const LOGO_BASE = '/client-logos/carousel_images/';

  const FIXED_IMAGES = [
    'IMG_9711.jpg', // First
    'IMG_0072.jpg', // Second
    'IMG_9640.jpg', // Third
  ];

  // Random selection of the rest of the images
  const OTHER_IMAGES = [
    'IMG_9680.jpg', 'IMG_3714.JPEG', 'IMG_0063.JPG', 'IMG_9546.jpg', 'IMG_3442.jpg',
    'IMG_9697.JPG', 'IMG_3722.JPEG', 'IMG_9637.jpg', 'IMG_3379.jpg', 'IMG_9688.JPG',
    'IMG_3714 (1).JPEG', 'IMG_9570.jpg', 'IMG_4967.JPG', 'IMG_9662.jpg', 'IMG_3439.jpg',
    'IMG_9681.jpg', 'IMG_3704.JPEG', 'IMG_9668.jpg', 'IMG_9585.jpg', 'IMG_9695.JPG'
  ];

  const images = [...FIXED_IMAGES, ...OTHER_IMAGES].map(name => `${LOGO_BASE}${encodeURIComponent(name)}`);

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
              animation: scroll 80s linear infinite; /* Slowed down significantly */
              width: max-content; /* Ensure container fits all images */
            }
            
            @media (min-width: 640px) {
              .animate-scroll {
                animation: scroll 100s linear infinite;
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
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="h-full w-auto object-contain"
                  style={{ borderRadius: 0 }}
                />
              </div>
            </div>
          ))}
          {/* Duplicate set of images for seamless loop */}
          {images.map((image, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 px-2.5">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="h-full w-auto object-contain"
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

