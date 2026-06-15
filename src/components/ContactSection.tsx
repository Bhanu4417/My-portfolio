"use client";

import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="animate-fade-in-up delay-400 w-full max-w-3xl bg-[#FAFAFA] dark:bg-[#100F0F] px-2 sm:px-10 md:px-12 pt-10 sm:pt-16 pb-16 sm:pb-20 flex flex-col transition-colors duration-300">
      <h2 
        className="text-[40px] sm:text-[52px] md:text-[60px] leading-[1.1] font-normal text-zinc-900 dark:text-zinc-100 mb-3 sm:mb-5 transition-colors duration-300"
        style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
      >
        Let's work together.
      </h2>
      
      <p className="text-zinc-600 dark:text-zinc-400/90 text-sm sm:text-[15px] leading-relaxed max-w-md mb-8 sm:mb-10 transition-colors duration-300">
        Always excited to team up with amazing individuals for interesting projects. Let's bring our ideas to life!
      </p>

      <form className="flex flex-col gap-4 w-full">
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          {/* Name Input */}
          <div className="relative w-full group rounded-xl p-[1px] overflow-hidden bg-zinc-300 dark:bg-zinc-800/80 transition-colors duration-300">
            {/* Animated Full Border Highlight */}
            <div className="absolute inset-0 w-full h-full bg-zinc-500 dark:bg-zinc-400 origin-left scale-x-0 transition-transform duration-500 ease-out group-focus-within:scale-x-100 z-0"></div>
            
            <div className="relative z-10 w-full h-full bg-zinc-100 dark:bg-[#161616] rounded-[11px] transition-colors duration-300">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent px-4 py-3.5 text-[15px] text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none transition-colors duration-300"
              />
            </div>
          </div>
          
          {/* Email Input */}
          <div className="relative w-full group rounded-xl p-[1px] overflow-hidden bg-zinc-300 dark:bg-zinc-800/80 transition-colors duration-300">
            {/* Animated Full Border Highlight */}
            <div className="absolute inset-0 w-full h-full bg-zinc-500 dark:bg-zinc-400 origin-left scale-x-0 transition-transform duration-500 ease-out group-focus-within:scale-x-100 z-0"></div>
            
            <div className="relative z-10 w-full h-full bg-zinc-100 dark:bg-[#161616] rounded-[11px] transition-colors duration-300">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent px-4 py-3.5 text-[15px] text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none transition-colors duration-300"
              />
            </div>
          </div>
        </div>
        
        {/* Message Textarea */}
        <div className="relative w-full group rounded-xl p-[1px] overflow-hidden bg-zinc-300 dark:bg-zinc-800/80 transition-colors duration-300">
          {/* Animated Full Border Highlight */}
          <div className="absolute inset-0 w-full h-full bg-zinc-500 dark:bg-zinc-400 origin-left scale-x-0 transition-transform duration-500 ease-out group-focus-within:scale-x-100 z-0"></div>
          
          <div className="relative z-10 w-full h-full bg-zinc-100 dark:bg-[#161616] rounded-[11px] transition-colors duration-300">
            <textarea 
              placeholder="Message..." 
              className="w-full min-h-[140px] bg-transparent px-4 py-3.5 text-[15px] text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none resize-none block transition-colors duration-300"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-zinc-900 dark:bg-zinc-200 text-white dark:text-black font-semibold text-[15px] py-3.5 rounded-xl hover:bg-zinc-800 dark:hover:bg-white transition-colors mt-2 active:scale-[0.98]"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
