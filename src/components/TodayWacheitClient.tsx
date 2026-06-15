"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiHtml5, SiCss, SiPython, SiNodedotjs, SiGo, SiRust } from 'react-icons/si';

const formatTime = (seconds: number) => {
  if (seconds === 0) return '00h 00m';
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  return `${hrs.toString().padStart(2, '0')}h ${mins.toString().padStart(2, '0')}m`;
};

const getLangIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes('typescript')) return <SiTypescript className="text-blue-500 shrink-0" />;
  if (lower.includes('javascript')) return <SiJavascript className="text-yellow-400 shrink-0" />;
  if (lower.includes('react')) return <SiReact className="text-cyan-400 shrink-0" />;
  if (lower.includes('next')) return <SiNextdotjs className="text-black dark:text-white shrink-0" />;
  if (lower.includes('html')) return <SiHtml5 className="text-orange-500 shrink-0" />;
  if (lower.includes('css')) return <SiCss className="text-blue-400 shrink-0" />;
  if (lower.includes('python')) return <SiPython className="text-blue-500 shrink-0" />;
  if (lower.includes('node')) return <SiNodedotjs className="text-green-500 shrink-0" />;
  if (lower.includes('go')) return <SiGo className="text-cyan-500 shrink-0" />;
  if (lower.includes('rust')) return <SiRust className="text-orange-600 shrink-0" />;
  return <div className="w-3 h-3 rounded-full bg-zinc-400 shrink-0" />;
};

const getLangColor = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes('typescript')) return 'bg-blue-500';
  if (lower.includes('javascript')) return 'bg-yellow-400';
  if (lower.includes('react')) return 'bg-cyan-400';
  if (lower.includes('next')) return 'bg-black dark:bg-white';
  if (lower.includes('html')) return 'bg-orange-500';
  if (lower.includes('css')) return 'bg-blue-400';
  if (lower.includes('python')) return 'bg-blue-500';
  if (lower.includes('node')) return 'bg-green-500';
  if (lower.includes('go')) return 'bg-cyan-500';
  if (lower.includes('rust')) return 'bg-orange-600';
  return 'bg-zinc-400';
};

export default function TodayWacheitClient({ seconds, languages }: { seconds: number, languages: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const timeStr = formatTime(seconds);

  return (
    <div className="relative" ref={containerRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-[10px] border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 dark:bg-[#1D1D1C] shadow-sm transition-colors duration-300 hover:bg-zinc-200 dark:hover:bg-[#252524] outline-none cursor-pointer"
        title="Today's Coding Time"
      >
        <span className="relative flex h-2 w-2">
          {seconds > 0 ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39d353] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#26a641]"></span>
            </>
          ) : (
            <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-400 dark:bg-zinc-600"></span>
          )}
        </span>
        <span className="text-[11px] sm:text-[12px] font-medium text-zinc-600 dark:text-zinc-300 tracking-wide font-mono mt-[1px]">
          {timeStr}
        </span>
      </button>

      <div 
        className={`fixed sm:absolute top-[75px] sm:top-[calc(100%+0.5rem)] left-1/2 sm:left-auto right-auto sm:right-0 -translate-x-1/2 sm:translate-x-0 w-[calc(100%-24px)] sm:w-[350px] max-w-[350px] bg-white dark:bg-[#100F0F] border border-zinc-200 dark:border-zinc-800/80 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex p-4 sm:p-5 z-50 origin-top sm:origin-top-right transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-3 scale-95 pointer-events-none'
        }`}
      >
        
        <a 
          href="https://www.wacheit.com/profile/bhanu4417"
          target="_blank"
          rel="noopener noreferrer"
          className="w-auto pr-3.5 sm:pr-4 border-r border-zinc-200 dark:border-zinc-800/80 flex flex-col items-center justify-center gap-2.5 shrink-0 group hover:opacity-90 transition-opacity"
        >
          <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] border-2 border-zinc-200 dark:border-[#3a3a3a] p-1.5 overflow-hidden bg-zinc-50 dark:bg-[#242424] shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] dark:shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <Image 
              src="https://raw.githubusercontent.com/Bhanu4417/WacheIt-assets/main/2.svg" 
              alt="WacheIt Profile" 
              width={56} 
              height={56} 
              className="w-full h-full object-contain"
              unoptimized
            />
          </div>
          <div className="flex items-center gap-1 mt-1">
            <span 
              style={{
                fontFamily: 'var(--font-space-mono), monospace',
                fontWeight: 900,
                fontSize: '11px',
                lineHeight: '16px'
              }}
              className="text-center tracking-tight whitespace-nowrap text-zinc-600 dark:text-gray-400"
            >
              @Bhanu4417
            </span>
            <svg className="w-3 h-3 text-zinc-500 dark:text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </a>

        <div className="flex-1 flex flex-col pl-4 sm:pl-5">
          <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Today's Stack</h4>
          <div className="flex flex-col gap-3.5 overflow-y-auto max-h-[85px] custom-scrollbar pr-1">
            {languages && languages.length > 0 ? languages.map((lang, idx) => (
              <div key={idx} className="flex flex-col gap-1.5 w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    {getLangIcon(lang.name)}
                    <span 
                      className="text-[10.5px] sm:text-[11.5px] font-medium text-zinc-700 dark:text-zinc-300 capitalize truncate" 
                      title={lang.name}
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {lang.name}
                    </span>
                  </div>
                  <span 
                    className="text-[12px] sm:text-[13px] text-zinc-600 dark:text-zinc-300 pl-2 shrink-0 font-medium"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    {formatTime(lang.totalSeconds)}
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-[3px] overflow-hidden opacity-80">
                  <div 
                    className={`h-full rounded-full ${getLangColor(lang.name)}`} 
                    style={{ width: `${seconds > 0 ? Math.min(100, (lang.totalSeconds / seconds) * 100) : 0}%` }}
                  />
                </div>
              </div>
            )) : (
              <span className="text-[12px] text-zinc-500 italic">No language data yet</span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
