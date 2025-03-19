import React from 'react';
import { Modal } from './ui/modal';
import { Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    // For now, just close the modal
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-[#030706] border border-gray-800 rounded-lg p-6 md:p-8 w-[90vw] sm:w-[450px] md:w-[550px] text-white">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-medium tracking-tight mb-4">Contact Bianhua</h2>
        <p className="text-[14px] sm:text-[15px] md:text-[16.59px] leading-[22px] sm:leading-[24px] md:leading-[27px] tracking-normal font-medium text-[#808080] mb-6">
          Fill out this form and we'll get back to you as soon as possible.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-[14px] font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full bg-[#030706] border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-white text-[14px] sm:text-[15px]"
              placeholder="Your name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-[14px] font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full bg-[#030706] border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-white text-[14px] sm:text-[15px]"
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-[14px] font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-[#030706] border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-white resize-none text-[14px] sm:text-[15px]"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full px-4 sm:px-6 py-2 text-[14px] sm:text-[16px] bg-transparent border border-white rounded-full hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 mt-6"
          >
            <span>Send Message</span>
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </form>
      </div>
    </Modal>
  );
} 