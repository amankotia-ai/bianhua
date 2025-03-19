import React from 'react';
import { motion, Variants } from 'framer-motion';

export function Testimonials() {
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
    <section className="min-h-fit py-16 sm:py-20 px-4 sm:px-8 md:px-16 bg-[#030706]">
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
                      undergone a 'Bianhua' - a metamorphosis."
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
                      "Choosing Bianhua for our corporate training has been the best decision we've 
                      made this year. Jyoti's unparalleled expertise and her commitment to 
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
                      "The personalized approach Jyoti takes with each individual makes the Bianhua 
                      experience truly special. She has helped me rediscover my professional identity 
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
                  undergone a 'Bianhua' - a metamorphosis."
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
                  "Choosing Bianhua for our corporate training has been the best decision we've 
                  made this year. Jyoti's unparalleled expertise and her commitment to 
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
                  "The personalized approach Jyoti takes with each individual makes the Bianhua 
                  experience truly special. She has helped me rediscover my professional identity 
                  and approach challenges with newfound confidence."
                </p>
              </div>
              <p className="text-[14px] font-medium text-gray-400">Rahul S</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 