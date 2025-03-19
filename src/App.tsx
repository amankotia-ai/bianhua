import React, { useEffect, useState } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import '@fontsource/inter';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import { ArrowRight, Image, Award, Briefcase, GraduationCap, Shirt, Smile, MessageSquare, Palette, Users, CircleDot, Building, HeadphonesIcon, Video, Scissors } from 'lucide-react';
import { AnimatedGroupPreset } from './components/AnimatedGroupDemo';
import { ContactModal } from './components/ContactModal';

function App() {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  // Update window height on client side
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Hero section opacity based on scroll position
  const heroOpacity = useTransform(
    scrollY, 
    [0, windowHeight * 0.5, windowHeight * 0.8], 
    [1, 0.8, 0]
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
  const text2 = "She is a NABET and Scottish Qualifications Authority certified trainer. Bianhua was founded on the firm belief in 'metamorphosis'.";

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
        {/* Navigation */}
        <nav className="absolute top-0 w-full flex justify-between items-center p-4 sm:p-6 z-20">
          <motion.div 
            className="w-10 h-10 sm:w-12 sm:h-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://i.ibb.co/zVNvB2k9/sz-Ho-M2-H42j-Lyqq1-IQCCgdc25c.png" 
              alt="Logo" 
              className="w-full h-full rounded-full"
            />
          </motion.div>
          <motion.div 
            className="flex gap-4 sm:gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="#" className="text-xs sm:text-sm hover:text-gray-300 transition-colors">About</a>
            <a href="#" className="text-xs sm:text-sm hover:text-gray-300 transition-colors">Community</a>
            <a href="#" className="text-xs sm:text-sm hover:text-gray-300 transition-colors">Stack</a>
          </motion.div>
        </nav>

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
              src="https://i.ibb.co/zVNvB2k9/sz-Ho-M2-H42j-Lyqq1-IQCCgdc25c.png"
              alt="Jyoti Portrait"
              className="h-[70vh] sm:h-[80vh] md:h-[90vh] w-auto object-contain"
            />
          </motion.div>

          {/* Text and Buttons */}
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-0 right-0 px-4 sm:px-8 md:px-16 mx-auto text-center sm:text-left sm:left-0 sm:right-auto max-w-[90%] sm:max-w-[80%] md:max-w-[24rem] z-10">
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
                className="flex-1 sm:flex-initial px-3 sm:px-6 py-2 text-[12px] sm:text-[16px] border border-white rounded-full hover:bg-white hover:text-black transition-colors whitespace-nowrap"
                onClick={() => setIsContactModalOpen(true)}
              >
                Contact Bianhua
              </button>
              <button className="flex-1 sm:flex-initial px-3 sm:px-6 py-2 text-[12px] sm:text-[16px] flex items-center justify-center gap-1 sm:gap-2 hover:text-gray-300 transition-colors whitespace-nowrap">
                View Expertise
                <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="min-h-[70vh] sm:min-h-[85vh] md:min-h-screen py-8 pb-0 sm:pb-2 md:pb-6 sm:py-12 md:py-16 px-2 sm:px-8 md:px-16">
        <div className="max-w-[95%] sm:max-w-[80%] md:max-w-[40rem] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
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
              About Bianhua
            </motion.h2>
            
            {/* First paragraph */}
            <motion.p 
              variants={fadeInUpVariants}
              className="text-[14px] sm:text-[15px] md:text-[16.59px] leading-[22px] sm:leading-[24px] md:leading-[27px] tracking-normal font-medium"
            >
              While her personal journey began on a different path, the serendipitous discovery of the Daoist Buddhist word "Bianhua" (meaning metamorphosis) solidified her dream of training people in the transformation of their own images — from their self-perception and emotions to the visual impressions they project in personal, professional, and business settings.
            </motion.p>
            
            {/* Second paragraph */}
            <motion.p 
              variants={fadeInUpVariants}
              className="text-[14px] sm:text-[15px] md:text-[16.59px] leading-[22px] sm:leading-[24px] md:leading-[27px] tracking-normal font-medium"
            >
              Bianhua is a training company that specializes in Image Management and Soft Skills training for individuals, facilitators, and management across all industries. Jyoti understands that any metamorphosis is a journey, emphasizing her role as a guide to inspire individuals to be the best versions of themselves.
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
      </section>

      {/* Animated Group Examples Section */}
      <section className="py-0 sm:py-4 md:py-8">
        <div className="px-1 sm:px-8 md:px-16 mx-auto">
          <div className="max-w-[98%] sm:max-w-[80%] md:max-w-full mx-auto">
            <AnimatedGroupPreset />
          </div>
        </div>
      </section>

      {/* Areas of Expertise Section */}
      <section className="min-h-screen py-12 sm:py-16 md:py-20 px-2 sm:px-8 md:px-16 bg-black">
        <div className="max-w-[95%] sm:max-w-[80%] md:max-w-[40rem] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
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
                className="px-6 py-2 text-[14px] sm:text-[16px] border border-white rounded-full hover:bg-white hover:text-black transition-colors"
                onClick={() => setIsContactModalOpen(true)}
              >
                Contact Bianhua
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;