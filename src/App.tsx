import React, { useEffect, useState, useRef } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import '@fontsource/inter';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import { ArrowRight, Image, Award, Briefcase, GraduationCap, Shirt, Smile, MessageSquare, Palette, Users, CircleDot, Building, HeadphonesIcon, Video, Scissors } from 'lucide-react';
import { ContactModal } from './components/ContactModal';
import { Testimonials } from './components/Testimonials';
import { Partners } from './components/Partners';
import { LetsConnect } from './components/LetsConnect';
import { ImageCarousel } from './components/ImageCarousel';

function App() {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [expertiseSectionY, setExpertiseSectionY] = useState(0);
  const expertiseSectionRef = useRef<HTMLElement>(null);
  const expertiseContentRef = useRef<HTMLDivElement>(null);
  const [hasExpertiseShownOnce, setHasExpertiseShownOnce] = useState(false);
  const [aboutSectionY, setAboutSectionY] = useState(0);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const aboutContentRef = useRef<HTMLDivElement>(null);
  const [hasAboutShownOnce, setHasAboutShownOnce] = useState(false);
  
  // Update window height on client side
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update expertise section position
  useEffect(() => {
    if (expertiseSectionRef.current) {
      const rect = expertiseSectionRef.current.getBoundingClientRect();
      setExpertiseSectionY(window.scrollY + rect.top);
    }
    
    const handleScroll = () => {
      if (expertiseSectionRef.current) {
        const rect = expertiseSectionRef.current.getBoundingClientRect();
        setExpertiseSectionY(window.scrollY + rect.top);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  
  // Update about section position
  useEffect(() => {
    if (aboutSectionRef.current) {
      const rect = aboutSectionRef.current.getBoundingClientRect();
      setAboutSectionY(window.scrollY + rect.top);
    }
    
    const handleScroll = () => {
      if (aboutSectionRef.current) {
        const rect = aboutSectionRef.current.getBoundingClientRect();
        setAboutSectionY(window.scrollY + rect.top);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  
  // Hero section opacity based on scroll position
  const heroOpacity = useTransform(
    scrollY, 
    [0, windowHeight * 0.5, windowHeight * 0.8], 
    [1, 0.8, 0]
  );

  // Expertise section opacity based on scroll position
  const expertiseOpacity = useTransform(
    scrollY,
    [
      expertiseSectionY - windowHeight * 0.9, // Start fading in (increased from 0.8)
      expertiseSectionY - windowHeight * 0.5, // Fully visible (increased from 0.3)
      expertiseSectionY + windowHeight * 0.3, // Start fading out (decreased from 0.5)
      expertiseSectionY + windowHeight * 0.7  // Fully invisible (decreased from 0.9)
    ],
    [0, 1, 1, 0]
  );

  // About section opacity based on scroll position
  const aboutOpacity = useTransform(
    scrollY,
    [
      aboutSectionY - windowHeight * 0.9, // Start fading in (increased from 0.8)
      aboutSectionY - windowHeight * 0.5, // Fully visible (increased from 0.3)
      aboutSectionY + windowHeight * 0.3, // Start fading out (decreased from 0.5)
      aboutSectionY + windowHeight * 0.7  // Fully invisible (decreased from 0.9)
    ],
    [0, 1, 1, 0]
  );

  // Word animation for text
  const textVariants: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };
  
  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 5
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const fadeInUpVariants: Variants = {
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

  const text1 = "Jyoti is an Image, Etiquette, and Soft Skills coach with over two decades of experience.";
  const text2 = "She is a NABET and Scottish Qualifications Authority certified trainer dedicated to helping individuals and organizations unlock their full potential.";

  // Split texts into words
  const words1 = text1.split(" ");
  const words2 = text2.split(" ");

  return (
    <div className="bg-[#030706] text-white font-inter overflow-x-hidden min-h-screen">
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      
      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity }}
        className="h-screen relative"
      >
        {/* Main Content */}
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 2.5,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.3
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img 
              src="/images/hero-image.webp"
              alt="Jyoti Portrait"
              className="h-[70vh] sm:h-[80vh] md:h-[90vh] w-auto object-contain -mt-24 sm:mt-0 pb-12 sm:pb-0"
            />
          </motion.div>

          {/* Text and Buttons */}
          <div className="absolute bottom-12 sm:bottom-12 md:bottom-16 left-0 right-0 px-4 sm:px-8 md:px-16 mx-auto text-center sm:text-left sm:left-0 sm:right-auto max-w-[90%] sm:max-w-[80%] md:max-w-[32rem] z-10">
            <div className="space-y-0 mb-4 sm:mb-6">
              <motion.p 
                className="text-[14px] sm:text-[16.59px] leading-[20px] sm:leading-[25.2px] tracking-normal font-medium"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {words1.map((word, index) => (
                  <React.Fragment key={`word1-${index}`}>
                    <motion.span className="text-white inline-block" variants={wordVariants}>
                      {word}
                    </motion.span>
                    {index !== words1.length - 1 && <span> </span>}
                  </React.Fragment>
                ))}
                {" "}
                {words2.map((word, index) => (
                  <React.Fragment key={`word2-${index}`}>
                    <motion.span className="text-[#808080] inline-block" variants={wordVariants}>
                      {word}
                    </motion.span>
                    {index !== words2.length - 1 && <span> </span>}
                  </React.Fragment>
                ))}
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-row gap-2 sm:gap-3 justify-center sm:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 1.2
              }}
            >
              <button 
                className="w-auto px-4 sm:px-6 py-2 text-[14px] font-semibold sm:text-[16px] border border-white rounded-full hover:bg-white hover:text-black transition-colors whitespace-nowrap"
                onClick={() => setIsContactModalOpen(true)}
              >
                Get in Touch
              </button>
              <a 
                href="#expertise"
                className="w-auto px-4 sm:px-6 py-2 text-[14px] font-semibold sm:text-[16px] flex items-center justify-center gap-1 sm:gap-2 hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                View Expertise
                <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={aboutSectionRef}
        style={{ opacity: aboutOpacity }}
        className="min-h-[70vh] sm:min-h-[85vh] md:min-h-screen py-8 sm:py-12 md:py-16 px-2 sm:px-8 md:px-16"
      >
        <div 
          ref={aboutContentRef}
          className="max-w-[95%] sm:max-w-[80%] md:max-w-[40rem] mx-auto"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            onAnimationComplete={() => setHasAboutShownOnce(true)}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="space-y-4 sm:space-y-8 md:space-y-12"
          >
            {/* Title */}
            <motion.h2
              variants={fadeInUpVariants}
              className="text-[24px] sm:text-[28px] md:text-[32px] font-medium tracking-tight"
            >
              About Jyoti
            </motion.h2>
            
            {/* First paragraph */}
            <motion.p 
              variants={fadeInUpVariants}
              className="text-[14px] sm:text-[15px] md:text-[16.59px] leading-[22px] sm:leading-[24px] md:leading-[27px] tracking-normal font-medium"
            >
              Jyoti Pathania Salwan is an Image and Etiquette Coach who helps professionals and leaders present their best selves — inside and out.
            </motion.p>
            
            {/* Second paragraph */}
            <motion.p 
              variants={fadeInUpVariants}
              className="text-[14px] sm:text-[15px] md:text-[16.59px] leading-[22px] sm:leading-[24px] md:leading-[27px] tracking-normal font-medium"
            >
              She works with individuals and corporate teams to elevate your executive presence, refine your communication, and build the confidence that fuels lasting impact.
            </motion.p>
            
            {/* Third paragraph */}
            <motion.p 
              variants={fadeInUpVariants}
              className="text-[14px] sm:text-[15px] md:text-[16.59px] leading-[22px] sm:leading-[24px] md:leading-[27px] tracking-normal font-medium"
            >
              What sets her approach apart is that she doesn't just focus on appearance — she helps you align your inner confidence with your outer presentation, so you project authenticity and authority.
            </motion.p>
            
            {/* Fourth paragraph */}
            <motion.p 
              variants={fadeInUpVariants}
              className="text-[14px] sm:text-[15px] md:text-[16.59px] leading-[22px] sm:leading-[24px] md:leading-[27px] tracking-normal font-medium"
            >
              With a strong background in Grooming & Soft Skills, Jyoti brings both strategy and substance to every session.
            </motion.p>
            
            {/* Fifth paragraph */}
            <motion.p 
              variants={fadeInUpVariants}
              className="text-[14px] sm:text-[15px] md:text-[16.59px] leading-[22px] sm:leading-[24px] md:leading-[27px] tracking-normal font-medium"
            >
              Her clients have reported a stronger leadership presence, improved client relationships, and greater career visibility within months of working with her.
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="flex flex-row justify-between gap-4 py-0 sm:py-2 md:py-4"
            >
              {/* 80+ */}
              <motion.div variants={fadeInUpVariants} className="flex flex-col items-center">
                <span className="text-[36px] sm:text-[65px] md:text-[80px] font-light tracking-tighter">80<sup>+</sup></span>
                <span className="text-[12px] sm:text-[15px] md:text-[16.59px] font-medium text-center">Satisfied Clients</span>
              </motion.div>
              
              {/* 60+ */}
              <motion.div variants={fadeInUpVariants} className="flex flex-col items-center">
                <span className="text-[36px] sm:text-[65px] md:text-[80px] font-light tracking-tighter">60<sup>+</sup></span>
                <span className="text-[12px] sm:text-[15px] md:text-[16.59px] font-medium text-center">Workshops Delivered</span>
              </motion.div>
              
              {/* 1000+ */}
              <motion.div variants={fadeInUpVariants} className="flex flex-col items-center">
                <span className="text-[36px] sm:text-[65px] md:text-[80px] font-light tracking-tighter">1000<sup>+</sup></span>
                <span className="text-[12px] sm:text-[15px] md:text-[16.59px] font-medium text-center">Individuals Trained</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Image Carousel Section */}
      <ImageCarousel />

      {/* Areas of Expertise Section */}
      <motion.section 
        id="expertise"
        ref={expertiseSectionRef}
        style={{ opacity: expertiseOpacity }}
        className="min-h-fit pt-4 sm:pt-8 md:pt-12 pb-8 sm:pb-12 md:pb-16 px-2 sm:px-8 md:px-16 bg-[#030706] scroll-mt-16"
      >
        <div 
          ref={expertiseContentRef} 
          className="max-w-[95%] sm:max-w-[80%] md:max-w-[40rem] mx-auto"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            onAnimationComplete={() => setHasExpertiseShownOnce(true)}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="space-y-8 sm:space-y-12 md:space-y-16"
          >
            {/* Title */}
            <motion.h2
              variants={fadeInUpVariants}
              className="text-[24px] sm:text-[28px] md:text-[32px] font-medium tracking-tight"
            >
              Areas of Expertise
            </motion.h2>
            
            {/* Expertise Grid */}
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-2 gap-x-2 gap-y-6 sm:gap-x-8 sm:gap-y-8 md:gap-x-12"
            >
              {/* Expertise Items */}
              <motion.div variants={fadeInUpVariants} className="flex items-center gap-2 sm:gap-3">
                <Image className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[14px] sm:text-[14px] md:text-[16.59px] font-medium">Image Management</p>
              </motion.div>
              
              <motion.div variants={fadeInUpVariants} className="flex items-center gap-2 sm:gap-3">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[14px] sm:text-[14px] md:text-[16.59px] font-medium">Executive Presence</p>
              </motion.div>
              
              <motion.div variants={fadeInUpVariants} className="flex items-center gap-2 sm:gap-3">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[14px] sm:text-[14px] md:text-[16.59px] font-medium">Interview Skills</p>
              </motion.div>
              
              <motion.div variants={fadeInUpVariants} className="flex items-center gap-2 sm:gap-3">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[14px] sm:text-[14px] md:text-[16.59px] font-medium">Campus to Corporate</p>
              </motion.div>
              
              <motion.div variants={fadeInUpVariants} className="flex items-center gap-2 sm:gap-3">
                <Shirt className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[14px] sm:text-[14px] md:text-[16.59px] font-medium">Corporate Styling</p>
              </motion.div>
              
              <motion.div variants={fadeInUpVariants} className="flex items-center gap-2 sm:gap-3">
                <Smile className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[14px] sm:text-[14px] md:text-[16.59px] font-medium">First Impressions</p>
              </motion.div>
              
              <motion.div variants={fadeInUpVariants} className="flex items-center gap-2 sm:gap-3">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[14px] sm:text-[14px] md:text-[16.59px] font-medium">Communication</p>
              </motion.div>
              
              <motion.div variants={fadeInUpVariants} className="flex items-center gap-2 sm:gap-3">
                <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[14px] sm:text-[14px] md:text-[16.59px] font-medium">Personal Style</p>
              </motion.div>
              
              <motion.div variants={fadeInUpVariants} className="flex items-center gap-2 sm:gap-3">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[14px] sm:text-[14px] md:text-[16.59px] font-medium">Business Etiquette</p>
              </motion.div>
              
              <motion.div variants={fadeInUpVariants} className="flex items-center gap-2 sm:gap-3">
                <CircleDot className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[14px] sm:text-[14px] md:text-[16.59px] font-medium">Workplace Etiquette</p>
              </motion.div>
              
              <motion.div variants={fadeInUpVariants} className="flex items-center gap-2 sm:gap-3">
                <Building className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[14px] sm:text-[14px] md:text-[16.59px] font-medium">Corp. Communication</p>
              </motion.div>
              
              <motion.div variants={fadeInUpVariants} className="flex items-center gap-2 sm:gap-3">
                <HeadphonesIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[14px] sm:text-[14px] md:text-[16.59px] font-medium">Listening Skills</p>
              </motion.div>
              
              <motion.div variants={fadeInUpVariants} className="flex items-center gap-2 sm:gap-3">
                <Video className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[14px] sm:text-[14px] md:text-[16.59px] font-medium">Virtual Meetings</p>
              </motion.div>
              
              <motion.div variants={fadeInUpVariants} className="flex items-center gap-2 sm:gap-3">
                <Scissors className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[14px] sm:text-[14px] md:text-[16.59px] font-medium">Bespoke Clothing</p>
              </motion.div>
            </motion.div>
            
            {/* Contact Button */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 1.2 // Add delay to make it appear after expertise items
                  }
                }
              }}
              className="pt-4 sm:pt-8"
            >
              <button 
                className="w-auto px-4 sm:px-6 py-2 text-[14px] font-semibold sm:text-[16px] border border-white rounded-full hover:bg-white hover:text-black transition-colors"
                onClick={() => setIsContactModalOpen(true)}
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Partners Section */}
      <Partners />

      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Let's Connect Section */}
      <LetsConnect />
    </div>
  );
}

export default App;