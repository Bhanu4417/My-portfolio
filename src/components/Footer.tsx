"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { SiGithub, SiX, SiThreads } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";

const WacheitIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="1.5 1.5 21 21" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 4.5H8C6.9 4.5 6 5.4 6 6.5V10C6 11.1 5.1 12 4 12C5.1 12 6 12.9 6 14V17.5C6 18.6 6.9 19.5 8 19.5H9" />
    <path d="M15 19.5H16C17.1 19.5 18 18.6 18 17.5V14C18 12.9 18.9 12 20 12C18.9 12 18 11.1 18 10V6.5C18 5.4 17.1 4.5 16 4.5H15" />
    <circle cx="12" cy="10.5" r="1.6" />
    <path d="M11.2 14.2C11.2 15.8 12.6 16.6 12.6 17.8C12.6 18.6 12.1 19.2 11.2 19.6" />
  </svg>
);

export default function Footer() {
  const roles = ["Frontend Developer", "UI Designer", "Backend Developer"];
  const [roleIndex, setRoleIndex] = useState(0);

  const navigateLinks = [
    "Home", "Projects", "Blog"
  ];

  const socialLinks = [
    { icon: SiGithub, href: "https://github.com/Bhanu4417" },
    { icon: SiX, href: "https://x.com/bhanu4417" },
    { icon: WacheitIcon, href: "https://www.wacheit.com/profile/bhanu4417" },
    { icon: FiLinkedin, href: "#" },
    { icon: SiThreads, href: "https://www.threads.com/@bhanu___2908?hl=en" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <footer className="w-full bg-zinc-100 dark:bg-[#161615] border-t border-zinc-200 dark:border-zinc-800/60 flex justify-center font-sans transition-colors duration-300" style={{ fontFamily: 'var(--font-hanken-grotesk), "Hanken Grotesk", sans-serif' }}>
      <div className="w-full max-w-3xl px-6 sm:px-10 md:px-12 pt-8 sm:pt-10 pb-8 sm:pb-10 flex flex-col md:flex-row justify-between gap-12 md:gap-8">
        
        {/* Left Section */}
        <div className="flex flex-col justify-between h-full min-h-[120px] w-full md:w-1/2">
          {/* Image & Title & Role */}
          <div className="flex items-center gap-3.5">
            {/* Small Profile Image */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800/80 shrink-0 shadow-[0_0_10px_rgba(250,204,21,0.05)] transition-colors duration-300">
              <Image 
                src="/Mr.png" 
                alt="Bhanu" 
                fill 
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <h2 className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-200 tracking-wide transition-colors duration-300">Bhanu.</h2>
              <div className="h-[20px] overflow-hidden relative">
                <div 
                  className="flex flex-col transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${roleIndex * 20}px)` }}
                >
                  {roles.map((role, i) => (
                    <span key={i} className="text-[12.5px] text-zinc-600 dark:text-zinc-500 h-[20px] flex items-center transition-colors duration-300">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright & Tagline */}
          <div className="flex flex-col gap-1 mt-8">
            <p className="text-[12px] text-zinc-500 dark:text-zinc-400 transition-colors duration-300">© 2026 Bhanu. All Rights Reserved.</p>
            <p className="text-[10.5px] text-zinc-500 transition-colors duration-300">Powered by curiosity, shipped at midnight, and fueled by caffeine.</p>
          </div>
        </div>

        {/* Right Section: Navigate & Connect */}
        <div className="flex flex-col gap-8 w-full md:w-auto md:justify-end">
          
          {/* Navigate Block */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[9.5px] font-semibold text-zinc-500 tracking-widest uppercase">Navigate</h3>
            <div className="flex flex-wrap gap-4">
              {navigateLinks.map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-[13px] text-zinc-600 dark:text-[#909092] hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Block */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[9.5px] font-semibold text-zinc-500 tracking-widest uppercase">Connect</h3>
            <div className="flex flex-wrap gap-2.5 w-fit">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-[10px] bg-white dark:bg-[#1D1D1C] border border-zinc-200 dark:border-zinc-800/80 text-zinc-500 dark:text-[#909092] hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-[#252524] transition-all hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm"
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
