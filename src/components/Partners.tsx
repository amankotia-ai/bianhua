import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';

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
              {/* First row */}
              {/* 2gethr */}
              <motion.div 
                variants={fadeInVariants}
                className="flex items-center justify-center py-8 px-6 border-r border-b border-white/10"
              >
                <div className="w-28 sm:w-32 h-8 flex items-center justify-center">
                  <img 
                    src="/client-logos/logo-1.png" 
                    alt="2gethr" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </motion.div>
              {/* Laudco Media */}
              <motion.div 
                variants={fadeInVariants}
                className="flex items-center justify-center py-8 px-6 border-r border-b border-white/10"
              >
                <div className="w-24 sm:w-28 h-8 flex items-center justify-center">
                  <img 
                    src="/client-logos/logo-2.png" 
                    alt="Laudco Media" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </motion.div>
              {/* PNRAO */}
              <motion.div 
                variants={fadeInVariants}
                className="flex items-center justify-center py-8 px-6 border-r border-b border-white/10"
              >
                <div className="w-20 sm:w-24 h-10 flex items-center justify-center">
                  <img 
                    src="/client-logos/logo-3.png" 
                    alt="PNRAO" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </motion.div>
              {/* Legato */}
              <motion.div 
                variants={fadeInVariants}
                className="flex items-center justify-center py-8 px-6 border-b border-white/10"
              >
                <div className="w-32 sm:w-36 h-8 flex items-center justify-center">
                  <img 
                    src="/client-logos/logo-4.png" 
                    alt="Legato" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </motion.div>
              
              {/* Second row */}
              {/* AceEngage */}
              <motion.div 
                variants={fadeInVariants}
                className="flex items-center justify-center py-8 px-6 border-r border-b md:border-b-0 border-white/10"
              >
                <div className="w-28 sm:w-32 h-10 flex items-center justify-center">
                  <img 
                    src="/client-logos/logo-5.png" 
                    alt="AceEngage" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </motion.div>
              {/* Wowlabz */}
              <motion.div 
                variants={fadeInVariants}
                className="flex items-center justify-center py-8 px-6 border-r border-b md:border-b-0 border-white/10"
              >
                <div className="w-28 sm:w-32 h-8 flex items-center justify-center">
                  <img 
                    src="/client-logos/logo-6.png" 
                    alt="Wowlabz" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </motion.div>
              {/* RMZ Galleria */}
              <motion.div 
                variants={fadeInVariants}
                className="flex items-center justify-center py-8 px-6 border-r border-b md:border-b-0 border-white/10"
              >
                <div className="w-32 sm:w-36 h-8 flex items-center justify-center">
                  <img 
                    src="/client-logos/logo-7.png" 
                    alt="RMZ Galleria" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </motion.div>
              {/* Christ University */}
              <motion.div 
                variants={fadeInVariants}
                className="flex items-center justify-center py-8 px-6 border-b md:border-b-0 border-white/10"
              >
                <div className="w-32 sm:w-36 h-10 flex items-center justify-center">
                  <img 
                    src="/client-logos/logo-8.png" 
                    alt="Christ University" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
} 