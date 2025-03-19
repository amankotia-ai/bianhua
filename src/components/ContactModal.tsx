import React from 'react';
import { Modal } from './ui/modal';
import { Calendar, Mail, X, Copy, Instagram } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const handleEmailCopy = () => {
    navigator.clipboard.writeText('jo@bianhua.biz');
    // Could add toast notification here
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-[#0f0f0f] rounded-xl w-[90vw] sm:w-[420px] text-white relative overflow-hidden shadow-xl">
        {/* Close button (X) in the top-right corner */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 p-1.5 text-gray-500 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-medium mb-6">Contact</h2>
          
          {/* Email section */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3 text-gray-400">Email</h3>
            <div className="flex items-center justify-between bg-[#161616] rounded-lg p-3">
              <div className="flex items-center gap-2">
                <Mail className="text-gray-400" size={16} />
                <span className="text-sm text-gray-200">jo@bianhua.biz</span>
              </div>
              <div className="flex">
                <button 
                  onClick={handleEmailCopy}
                  className="p-1.5 text-gray-500 hover:text-white transition-colors"
                  aria-label="Copy email"
                >
                  <Copy size={14} />
                </button>
                <a 
                  href="mailto:jo@bianhua.biz"
                  className="p-1.5 text-gray-500 hover:text-white transition-colors"
                  aria-label="Send email"
                >
                  <Mail size={14} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Book a time section */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3 text-gray-400">Book a time</h3>
            <button className="flex items-center justify-center gap-2 w-full bg-[#161616] hover:bg-[#1c1c1c] text-white py-3 px-4 rounded-lg transition-colors text-sm">
              <Calendar className="h-4 w-4" />
              <span>Book a time</span>
            </button>
          </div>
          
          {/* Stay in touch section */}
          <div>
            <h3 className="text-sm font-medium mb-3 text-gray-400">Stay in touch</h3>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/bianhua_official_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#161616] hover:bg-[#1c1c1c] text-white py-3 px-4 rounded-lg transition-colors text-sm"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/jyoti-pathania-salwan-0ab4b678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#161616] hover:bg-[#1c1c1c] text-white py-3 px-4 rounded-lg transition-colors text-sm"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="shrink-0">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 00.1.4V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
} 