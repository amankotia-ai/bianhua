"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedGroup } from "../components/ui/animated-group";
import { Modal } from "../components/ui/modal";

export function AnimatedGroupPreset() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 1.0,
        rootMargin: "0px 0px -30% 0px" 
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  const images = [
    {
      src: "https://images.beta.cosmos.so/fc6fdd93-552c-47e6-98aa-b8fb3ba070a2?format=jpeg",
      alt: "impressionist painting, uploaded to Cosmos"
    },
    {
      src: "https://images.beta.cosmos.so/cb674d14-ebd1-4408-bab1-79df895017b6?format=jpeg",
      alt: "impressionist painting, uploaded to Cosmos"
    },
    {
      src: "https://images.beta.cosmos.so/e5a6c3ed-82ad-4084-9a11-1eccd7bc91aa?format=jpeg",
      alt: "impressionist painting, uploaded to Cosmos"
    },
    {
      src: "https://images.beta.cosmos.so/4d02a1e7-d1f2-4575-86a9-bed243e59132?format=jpeg",
      alt: "impressionist painting, uploaded to Cosmos"
    }
  ];
  
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };
  
  return (
    <div ref={ref}>
      {isVisible && (
        <AnimatedGroup
          className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 p-4 sm:p-6 md:p-8 md:grid-cols-3 lg:grid-cols-4"
          preset="scale"
        >
          {images.map((image, index) => (
            <div 
              key={index}
              className="cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => handleImageClick(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-auto w-full rounded-[4px]"
              />
            </div>
          ))}
        </AnimatedGroup>
      )}
      
      <Modal isOpen={selectedImage !== null} onClose={closeModal}>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-h-[85vh] max-w-full object-contain"
          />
        )}
      </Modal>
    </div>
  );
}

export function AnimatedGroupCustomVariants() {
  return (
    <AnimatedGroup
      className="grid grid-cols-2 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4"
      variants={{
        container: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
            },
          },
        },
        item: {
          hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 1.2,
              type: "spring",
              bounce: 0.3,
            },
          },
        },
      }}
    >
      <img
        src="https://images.beta.cosmos.so/fc6fdd93-552c-47e6-98aa-b8fb3ba070a2?format=jpeg"
        alt="impressionist painting, uploaded to Cosmos"
        className="h-auto w-full rounded-[4px]"
      />
      <img
        src="https://images.beta.cosmos.so/cb674d14-ebd1-4408-bab1-79df895017b6?format=jpeg"
        alt="impressionist painting, uploaded to Cosmos"
        className="h-auto w-full rounded-[4px]"
      />
      <img
        src="https://images.beta.cosmos.so/e5a6c3ed-82ad-4084-9a11-1eccd7bc91aa?format=jpeg"
        alt="impressionist painting, uploaded to Cosmos"
        className="h-auto w-full rounded-[4px]"
      />
      <img
        src="https://images.beta.cosmos.so/4d02a1e7-d1f2-4575-86a9-bed243e59132?format=jpeg"
        alt="impressionist painting, uploaded to Cosmos"
        className="h-auto w-full rounded-[4px]"
      />
    </AnimatedGroup>
  );
}

export function AnimatedGroupCustomVariants2() {
  return (
    <AnimatedGroup
      className="grid h-full grid-cols-2 gap-8 p-12 md:grid-cols-3 lg:grid-cols-4"
      variants={{
        container: {
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        },
        item: {
          hidden: {
            opacity: 0,
            filter: "blur(12px)",
            y: -60,
            rotateX: 90,
          },
          visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            rotateX: 0,
            transition: {
              type: "spring",
              bounce: 0.3,
              duration: 1,
            },
          },
        },
      }}
    >
      <div key={1}>
        <img
          src="/national_geographic_logo.svg"
          alt="Apple Music logo"
          className="h-auto w-full"
        />
      </div>
      <div key={2}>
        <img src="/sony_logo.svg" alt="Chrome logo" className="h-auto w-full" />
      </div>
      <div key={3}>
        <img
          src="/strava_logo.svg"
          alt="Strava logo"
          className="h-auto w-full"
        />
      </div>
      <div key={4}>
        <img
          src="/nintendo_logo.svg"
          alt="Nintendo logo"
          className="h-auto w-full"
        />
      </div>
    </AnimatedGroup>
  );
} 