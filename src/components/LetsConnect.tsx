import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export function LetsConnect() {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);
  const [connectSectionY, setConnectSectionY] = useState(0);
  const connectSectionRef = useRef<HTMLElement>(null);
  const connectContentRef = useRef<HTMLDivElement>(null);
  const [hasConnectShownOnce, setHasConnectShownOnce] = useState(false);
  
  // Update window height on client side
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update connect section position
  useEffect(() => {
    if (connectSectionRef.current) {
      const rect = connectSectionRef.current.getBoundingClientRect();
      setConnectSectionY(window.scrollY + rect.top);
    }
    
    const handleScroll = () => {
      if (connectSectionRef.current) {
        const rect = connectSectionRef.current.getBoundingClientRect();
        setConnectSectionY(window.scrollY + rect.top);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  
  // Connect section opacity based on scroll position
  const connectOpacity = useTransform(
    scrollY,
    [
      connectSectionY - windowHeight * 0.8, // Start fading in
      connectSectionY - windowHeight * 0.3, // Fully visible
      connectSectionY + windowHeight * 0.5, // Start fading out
      connectSectionY + windowHeight * 0.9  // Fully invisible
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
      ref={connectSectionRef}
      style={{ opacity: connectOpacity }}
      className="py-16 sm:py-20 px-2 sm:px-8 md:px-16 bg-[#030706]"
    >
      <div 
        ref={connectContentRef}
        className="max-w-[95%] sm:max-w-[80%] md:max-w-[40rem] mx-auto"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          onAnimationComplete={() => setHasConnectShownOnce(true)}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="space-y-8"
        >
          {/* Title */}
          <motion.h2
            variants={fadeInVariants}
            className="text-[24px] sm:text-[28px] md:text-[32px] font-medium tracking-tight"
          >
            Let's Connect
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            variants={fadeInVariants}
            className="text-[14px] sm:text-[15px] md:text-[16.59px] leading-[22px] sm:leading-[24px] md:leading-[27px] tracking-normal font-medium"
          >
            Join hands with Bianhua and embark on a journey of transformation with Jyoti, your guide to being the best version of yourself. Elevate your image and skills today.
          </motion.p>
          
          {/* Contact Information */}
          <motion.div 
            variants={fadeInVariants}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <p className="text-[14px] sm:text-[15px] md:text-[16.59px] font-medium">jo.pathania@gmail.com</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <p className="text-[14px] sm:text-[15px] md:text-[16.59px] font-medium">+91 9769370964</p>
            </div>
          </motion.div>
          
          {/* Social Media Links */}
          <motion.div 
            variants={fadeInVariants}
            className="flex gap-3"
          >
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#161616] hover:bg-[#1c1c1c] text-white py-3 px-4 rounded-lg transition-colors text-sm"
            >
              <Instagram className="h-4 w-4" />
              <span>Instagram</span>
            </a>
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#161616] hover:bg-[#1c1c1c] text-white py-3 px-4 rounded-lg transition-colors text-sm"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="shrink-0">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 00.1.4V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
} 