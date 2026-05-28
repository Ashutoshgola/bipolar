import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react'; // Keeping only the generic arrow

export default function Footer() {
  return (
    <footer className="bg-white text-[#1a1a1a] py-16 px-6 md:px-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* LEFT: Address */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Address</h4>
            <div className="text-sm leading-relaxed font-medium text-gray-600">
              <p>Bipolar Factory Private Limited,</p>
              <p>2/118, First Floor, Nehru Nagar,</p>
              <p>Koundampalayam Road,</p>
              <p>Edayarpalayam, Coimbatore,</p>
              <p>Tamil Nadu 641025</p>
            </div>
          </div>

          {/* MIDDLE: Contact Us */}
          <div className="flex flex-col items-center justify-center space-y-6">
             <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Contact Below</h4>
             <motion.a
                href="mailto:hello@bipolarfactory.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#f25f2c] text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 shadow-lg shadow-orange-100 transition-all"
             >
                Contact Us
                <ArrowUpRight className="w-5 h-5" />
             </motion.a>
          </div>

          {/* RIGHT: Socials (Using SVG Paths for stability) */}
          <div className="flex flex-col md:items-end space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 md:text-center w-full">Socials</h4>
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/bipolarfactory" className="bg-black p-3 rounded-full text-white hover:bg-[#f25f2c] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* X / Twitter */}
              <a href="https://x.com/bipolarfactory" className="bg-black p-3 rounded-full text-white hover:bg-[#f25f2c] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/31221841/" className="bg-black p-3 rounded-full text-white hover:bg-[#f25f2c] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-center items-center gap-2">
          <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
            © 2026 Bipolar Factory. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}