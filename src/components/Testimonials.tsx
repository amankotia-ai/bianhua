import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';

export function Testimonials() {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);
  const [testimonialSectionY, setTestimonialSectionY] = useState(0);
  const testimonialSectionRef = useRef<HTMLElement>(null);
  const testimonialContentRef = useRef<HTMLDivElement>(null);
  const [hasTestimonialShownOnce, setHasTestimonialShownOnce] = useState(false);
  
  // Update window height on client side
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update testimonial section position
  useEffect(() => {
    if (testimonialSectionRef.current) {
      const rect = testimonialSectionRef.current.getBoundingClientRect();
      setTestimonialSectionY(window.scrollY + rect.top);
    }
    
    const handleScroll = () => {
      if (testimonialSectionRef.current) {
        const rect = testimonialSectionRef.current.getBoundingClientRect();
        setTestimonialSectionY(window.scrollY + rect.top);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  
  // Testimonial section opacity based on scroll position
  const testimonialOpacity = useTransform(
    scrollY,
    [
      testimonialSectionY - windowHeight * 0.9, // Start fading in (increased from 0.8)
      testimonialSectionY - windowHeight * 0.5, // Fully visible (increased from 0.3)
      testimonialSectionY + windowHeight * 0.3, // Start fading out (decreased from 0.5)
      testimonialSectionY + windowHeight * 0.7  // Fully invisible (decreased from 0.9)
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
      ref={testimonialSectionRef}
      style={{ opacity: testimonialOpacity }}
      className="min-h-fit py-16 sm:py-20 px-4 sm:px-8 md:px-16 bg-[#030706]"
    >
      <div 
        ref={testimonialContentRef}
        className="max-w-[95%] sm:max-w-[80%] md:max-w-[40rem] mx-auto"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          onAnimationComplete={() => setHasTestimonialShownOnce(true)}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Section title */}
          <motion.h2
            variants={fadeInVariants}
            className="text-[24px] sm:text-[28px] md:text-[32px] font-medium tracking-tight text-left text-white"
          >
            What Our Clients Say
          </motion.h2>

          {/* Mobile: Horizontal scroll */}
          <div className="block md:hidden">
            <div 
              className="relative overflow-x-auto pb-4 -mx-4 px-4" 
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <div 
                className="flex space-x-2 pl-0 pr-8"
                style={{ 
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {/* First testimonial - Mobile */}
                <motion.div 
                  variants={fadeInVariants}
                  className="bg-[rgb(24,24,24)] rounded-[4px] p-6 flex flex-col w-[80%] flex-shrink-0"
                >
                  <div className="flex-grow">
                    <p className="text-[16px] leading-relaxed text-white font-medium mb-8">
                      "Before meeting Jyoti, I struggled with confidence and had a blurred sense of self. 
                      With her incredible guidance and expertise in Image and Soft Skills, I have truly 
                      undergone a complete transformation."
                    </p>
                  </div>
                  <p className="text-[14px] font-medium text-gray-400">Lakshmi R</p>
                </motion.div>

                {/* Second testimonial - Mobile */}
                <motion.div 
                  variants={fadeInVariants}
                  className="bg-[rgb(24,24,24)] rounded-[4px] p-6 flex flex-col w-[80%] flex-shrink-0"
                >
                  <div className="flex-grow">
                    <p className="text-[16px] leading-relaxed text-white font-medium mb-8">
                      "Working with Jyoti for our corporate training has been the best decision we've 
                      made this year. Her unparalleled expertise and commitment to 
                      transformation are evident in the way our team now communicates, collaborates, and 
                      presents themselves."
                    </p>
                  </div>
                  <p className="text-[14px] font-medium text-gray-400">Ashwath M</p>
                </motion.div>
                
                {/* Third testimonial - Mobile */}
                <motion.div 
                  variants={fadeInVariants}
                  className="bg-[rgb(24,24,24)] rounded-[4px] p-6 flex flex-col w-[80%] flex-shrink-0"
                >
                  <div className="flex-grow">
                    <p className="text-[16px] leading-relaxed text-white font-medium mb-8">
                      "The personalized approach Jyoti takes with each individual is truly exceptional. 
                      She has helped me rediscover my professional identity 
                      and approach challenges with newfound confidence."
                    </p>
                  </div>
                  <p className="text-[14px] font-medium text-gray-400">Rahul S</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Desktop: Vertical stack layout */}
          <div className="hidden md:flex flex-col space-y-4">
            {/* First testimonial - Desktop */}
            <motion.div 
              variants={fadeInVariants}
              className="bg-[rgb(24,24,24)] rounded-[4px] p-8 flex flex-col"
            >
              <div className="flex-grow">
                <p className="text-[18px] leading-relaxed text-white font-medium mb-8">
                  "Before meeting Jyoti, I struggled with confidence and had a blurred sense of self. 
                  With her incredible guidance and expertise in Image and Soft Skills, I have truly 
                  undergone a complete transformation."
                </p>
              </div>
              <p className="text-[14px] font-medium text-gray-400">Lakshmi R</p>
            </motion.div>

            {/* Second testimonial - Desktop */}
            <motion.div 
              variants={fadeInVariants}
              className="bg-[rgb(24,24,24)] rounded-[4px] p-8 flex flex-col"
            >
              <div className="flex-grow">
                <p className="text-[18px] leading-relaxed text-white font-medium mb-8">
                  "Working with Jyoti for our corporate training has been the best decision we've 
                  made this year. Her unparalleled expertise and commitment to 
                  transformation are evident in the way our team now communicates, collaborates, and 
                  presents themselves."
                </p>
              </div>
              <p className="text-[14px] font-medium text-gray-400">Ashwath M</p>
            </motion.div>
            
            {/* Third testimonial - Desktop */}
            <motion.div 
              variants={fadeInVariants}
              className="bg-[rgb(24,24,24)] rounded-[4px] p-8 flex flex-col"
            >
              <div className="flex-grow">
                <p className="text-[18px] leading-relaxed text-white font-medium mb-8">
                  "The personalized approach Jyoti takes with each individual is truly exceptional. 
                  She has helped me rediscover my professional identity 
                  and approach challenges with newfound confidence."
                </p>
              </div>
              <p className="text-[14px] font-medium text-gray-400">Rahul S</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
} 