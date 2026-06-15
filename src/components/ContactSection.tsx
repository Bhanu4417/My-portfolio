"use client";

import React from 'react';

import { submitContactForm } from '../app/actions';

export default function ContactSection() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const result = await submitContactForm(data);

      if (result.success) {
        setStatus("success");
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form Error:", error);
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="animate-fade-in-up delay-400 w-full max-w-3xl bg-[#FAFAFA] dark:bg-[#100F0F] px-2 sm:px-10 md:px-12 pt-10 sm:pt-16 pb-16 sm:pb-20 flex flex-col transition-colors duration-300">
      
      {/* Available for work badge */}
      <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[#0F2A1A] dark:bg-[#0F2A1A] w-fit mb-5 transition-colors duration-300">
        <div className="relative flex h-2 w-2 items-center justify-center ml-0.5">
          <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-[#34D399] opacity-60"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34D399]"></span>
        </div>
        <span style={{ 
          fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif',
          fontWeight: 500,
          color: 'rgb(250, 250, 250)',
          fontSize: '13px',
          lineHeight: '18px',
          letterSpacing: '0.01em'
        }}>
          Available for work
        </span>
      </div>

      <h2 
        className="text-[40px] sm:text-[52px] md:text-[60px] leading-[1.1] font-normal text-zinc-900 dark:text-zinc-100 mb-3 sm:mb-5 transition-colors duration-300"
        style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
      >
        Let's work together.
      </h2>
      
      <p className="text-zinc-600 dark:text-zinc-400/90 text-sm sm:text-[15px] leading-relaxed max-w-md mb-8 sm:mb-10 transition-colors duration-300">
        Always excited to team up with amazing individuals for interesting projects. Let's bring our ideas to life!
      </p>

      {status === "success" ? (
        <div className="flex flex-col items-center justify-center py-10 px-6 w-full rounded-2xl bg-zinc-100 dark:bg-[#161616] border border-zinc-200 dark:border-zinc-800/80 transition-colors duration-300 animate-fade-in-up">
          <div className="w-14 h-14 bg-zinc-900 dark:bg-zinc-200 text-white dark:text-black rounded-full flex items-center justify-center mb-4 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 
            className="text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-100 text-center mb-2"
            style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
          >
            Thanks For Contacting
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-center text-sm sm:text-[15px]">
            Form submitted! I will get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            {/* Name Input */}
            <div className="relative w-full group rounded-xl p-[1px] overflow-hidden bg-zinc-300 dark:bg-zinc-800/80 transition-colors duration-300">
              <div className="absolute inset-0 w-full h-full bg-zinc-500 dark:bg-zinc-400 origin-left scale-x-0 transition-transform duration-500 ease-out group-focus-within:scale-x-100 z-0"></div>
              
              <div className="relative z-10 w-full h-full bg-zinc-100 dark:bg-[#161616] rounded-[11px] transition-colors duration-300">
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Name" 
                  className="w-full bg-transparent px-4 py-3.5 text-[15px] text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none transition-colors duration-300"
                />
              </div>
            </div>
            
            {/* Email Input */}
            <div className="relative w-full group rounded-xl p-[1px] overflow-hidden bg-zinc-300 dark:bg-zinc-800/80 transition-colors duration-300">
              <div className="absolute inset-0 w-full h-full bg-zinc-500 dark:bg-zinc-400 origin-left scale-x-0 transition-transform duration-500 ease-out group-focus-within:scale-x-100 z-0"></div>
              
              <div className="relative z-10 w-full h-full bg-zinc-100 dark:bg-[#161616] rounded-[11px] transition-colors duration-300">
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Email" 
                  className="w-full bg-transparent px-4 py-3.5 text-[15px] text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none transition-colors duration-300"
                />
              </div>
            </div>
          </div>
          
          {/* Message Textarea */}
          <div className="relative w-full group rounded-xl p-[1px] overflow-hidden bg-zinc-300 dark:bg-zinc-800/80 transition-colors duration-300">
            <div className="absolute inset-0 w-full h-full bg-zinc-500 dark:bg-zinc-400 origin-left scale-x-0 transition-transform duration-500 ease-out group-focus-within:scale-x-100 z-0"></div>
            
            <div className="relative z-10 w-full h-full bg-zinc-100 dark:bg-[#161616] rounded-[11px] transition-colors duration-300">
              <textarea 
                name="message"
                required
                placeholder="Message..." 
                className="w-full min-h-[140px] bg-transparent px-4 py-3.5 text-[15px] text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none resize-none block transition-colors duration-300"
              />
            </div>
          </div>

          {/* Status Messages */}
          {status === "error" && (
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
          )}

          <button 
            type="submit" 
            disabled={status === "submitting"}
            className="w-full flex justify-center items-center gap-2 bg-zinc-900 dark:bg-zinc-200 text-white dark:text-black font-normal text-[22px] tracking-wide py-3.5 rounded-xl hover:bg-zinc-800 dark:hover:bg-white transition-colors mt-2 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
          >
            {status === "submitting" ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      )}
    </section>
  );
}
