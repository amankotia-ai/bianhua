import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';

// Box sizes are tuned per logo so they read at a similar visual weight
const CLIENT_LOGOS = [
  { name: '108 Bespoke', src: '/client-logos/logo-1.png', box: 'w-16 h-14' },
  { name: 'Svamitva', src: '/client-logos/logo-2.png', box: 'w-12 h-12' },
  { name: 'Lavendel Consulting', src: '/client-logos/logo-3.png', box: 'w-24 h-9' },
  { name: 'Rashtriya Raksha University', src: '/client-logos/logo-4.png', box: 'w-14 h-14' },
  { name: 'IBM', src: '/client-logos/logo-5.png', box: 'w-24 h-8' },
  { name: 'AceNgage', src: '/client-logos/logo-6.png', box: 'w-28 h-10' },
  { name: '2gethr', src: '/client-logos/logo-7.png', box: 'w-28 h-8' },
  { name: 'RMZ Galleria', src: '/client-logos/logo-8.png', box: 'w-24 h-8' },
  { name: 'Wowlabz', src: '/client-logos/logo-9.png', box: 'w-24 h-8' },
  { name: 'Christ University', src: '/client-logos/logo-10.png', box: 'w-28 h-10' },
  { name: 'Laudco Media', src: '/client-logos/logo-11.png', box: 'w-24 h-8' },
  { name: 'Embassy Group', src: '/client-logos/logo-12.png', box: 'w-12 h-12' },
];

// Divider lines between cells: 2 columns on mobile, 4 from md up
function cellBorders(index: number, total: number) {
  const right = ['border-r', 'md:border-r', 'border-r', ''][index % 4];
  const bottom =
    index < total - 4 ? 'border-b' : index < total - 2 ? 'border-b md:border-b-0' : '';
  return `${right} ${bottom}`;
}

export function Partners() {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);
  const [partnersSectionY, setPartnersSectionY] = useState(0);
  const partnersSectionRef = useRef<HTMLElement>(null);
  const partnersContentRef = useRef<HTMLDivElement>(null);
  const [hasPartnersShownOnce, setHasPartnersShownOnce] = useState(false);
  
  // Update window height on client side
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update partners section position
  useEffect(() => {
    if (partnersSectionRef.current) {
      const rect = partnersSectionRef.current.getBoundingClientRect();
      setPartnersSectionY(window.scrollY + rect.top);
    }
    
    const handleScroll = () => {
      if (partnersSectionRef.current) {
        const rect = partnersSectionRef.current.getBoundingClientRect();
        setPartnersSectionY(window.scrollY + rect.top);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  
  // Partners section opacity based on scroll position
  const partnersOpacity = useTransform(
    scrollY,
    [
      partnersSectionY - windowHeight * 0.9, // Start fading in (increased from 0.8)
      partnersSectionY - windowHeight * 0.5, // Fully visible (increased from 0.3)
      partnersSectionY + windowHeight * 0.3, // Start fading out (decreased from 0.5)
      partnersSectionY + windowHeight * 0.7  // Fully invisible (decreased from 0.9)
    ],
    [0, 1, 1, 0]
  );

  const fadeInVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.section 
      ref={partnersSectionRef}
      style={{ opacity: partnersOpacity }}
      className="py-16 sm:py-20 px-2 sm:px-8 md:px-16 bg-[#030706]"
    >
      <div 
        ref={partnersContentRef}
        className="max-w-[95%] sm:max-w-[80%] md:max-w-[40rem] mx-auto"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          onAnimationComplete={() => setHasPartnersShownOnce(true)}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="space-y-12"
        >
          <div className="max-w-3xl">
            <motion.h2
              variants={fadeInVariants}
              className="text-[28px] sm:text-[32px] md:text-[36px] font-medium tracking-tight text-left text-white mb-4"
            >
              Our Clients
            </motion.h2>
          </div>
          
          <motion.div 
            variants={fadeInVariants}
            className="rounded-[4px] overflow-hidden border border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4">
              {CLIENT_LOGOS.map((logo, index) => (
                <motion.div
                  key={logo.src}
                  variants={fadeInVariants}
                  className={`flex items-center justify-center py-8 px-6 border-white/10 ${cellBorders(index, CLIENT_LOGOS.length)}`}
                >
                  <div className={`${logo.box} flex items-center justify-center`}>
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
} 