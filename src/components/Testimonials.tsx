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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-10% 0px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="max-w-7xl mx-auto"
      >
        {/* Section title */}
        <motion.h2
          variants={fadeInVariants}
          className="text-[24px] sm:text-[28px] md:text-[32px] font-medium tracking-tight text-left text-white mb-8"
        >
          What Our Clients Say
        </motion.h2>

        {/* Testimonials horizontal scroll */}
        <div 
          className="relative overflow-x-auto pb-4" 
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div 
            className="flex space-x-6 md:space-x-8 pl-0 pr-4"
            style={{ 
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {/* First testimonial */}
            <motion.div 
              variants={fadeInVariants}
              className="bg-[#212020] rounded-[4px] p-6 sm:p-8 flex flex-col w-[85%] sm:w-[350px] md:w-[450px] flex-shrink-0"
            >
              <div className="flex-grow">
                <p className="text-[16px] sm:text-[18px] leading-relaxed text-white font-medium mb-8">
                  "Before meeting Jyoti, I struggled with confidence and had a blurred sense of self. 
                  With her incredible guidance and expertise in Image and Soft Skills, I have truly 
                  undergone a 'Bianhua' - a metamorphosis."
                </p>
              </div>
              <p className="text-[14px] font-medium text-gray-400">Lakshmi R</p>
            </motion.div>

            {/* Second testimonial */}
            <motion.div 
              variants={fadeInVariants}
              className="bg-[#212020] rounded-[4px] p-6 sm:p-8 flex flex-col w-[85%] sm:w-[350px] md:w-[450px] flex-shrink-0"
            >
              <div className="flex-grow">
                <p className="text-[16px] sm:text-[18px] leading-relaxed text-white font-medium mb-8">
                  "Choosing Bianhua for our corporate training has been the best decision we've 
                  made this year. Jyoti's unparalleled expertise and her commitment to 
                  transformation are evident in the way our team now communicates, collaborates, and 
                  presents themselves."
                </p>
              </div>
              <p className="text-[14px] font-medium text-gray-400">Ashwath M</p>
            </motion.div>
            
            {/* Optional: Add more testimonials */}
            <motion.div 
              variants={fadeInVariants}
              className="bg-[#212020] rounded-[4px] p-6 sm:p-8 flex flex-col w-[85%] sm:w-[350px] md:w-[450px] flex-shrink-0"
            >
              <div className="flex-grow">
                <p className="text-[16px] sm:text-[18px] leading-relaxed text-white font-medium mb-8">
                  "The personalized approach Jyoti takes with each individual makes the Bianhua 
                  experience truly special. She has helped me rediscover my professional identity 
                  and approach challenges with newfound confidence."
                </p>
              </div>
              <p className="text-[14px] font-medium text-gray-400">Rahul S</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 