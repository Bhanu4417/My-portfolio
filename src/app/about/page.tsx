import Image from "next/image";
import ProfileImage from "../../components/ProfileImage";
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiFramer, 
  SiReact, SiJavascript, SiNodedotjs, SiBun, SiPostgresql, SiMongodb, SiRedis,
  SiGit, SiDocker, SiFigma, SiExpress, SiTldraw, SiGithub
} from "react-icons/si";
import { FiBox, FiTerminal } from "react-icons/fi";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
      <div className="w-full px-1 sm:px-4 flex flex-col items-center gap-0 flex-1">
        {/* Main Content Box */}
        <main className="animate-fade-in-up delay-100 w-full max-w-3xl bg-[#FAFAFA] dark:bg-[#100F0F] px-4 sm:px-10 md:px-12 pt-2 sm:pt-4 md:pt-6 pb-12 sm:pb-16 flex flex-col transition-colors duration-300 flex-1 border-b border-zinc-200 dark:border-zinc-800/60">
          
          <div className="flex flex-col gap-4 sm:gap-6 w-full">
            
            {/* Top row: Image & Name */}
            <div className="flex items-center gap-5 sm:gap-8 animate-fade-in-up delay-200">
              {/* Left: Image */}
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 shrink-0 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <ProfileImage
                  src="/Mr.png"
                  alt="Bhanu Nagar"
                  sizes="(max-width: 640px) 80px, 112px"
                  className="object-cover relative z-10"
                  priority={true}
                />
              </div>

              {/* Right: Name & Title */}
              <div className="flex flex-col justify-center min-w-0">
                <h1
                  className="text-2xl sm:text-4xl text-zinc-900 dark:text-white transition-colors duration-300 tracking-wide"
                  style={{ fontFamily: 'var(--font-instrument-serif), serif', fontWeight: 400 }}
                >
                  Bhanu Nagar
                </h1>
                <h2 
                  className="mt-1 sm:mt-2 tracking-wide"
                  style={{ 
                    fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', 
                    fontWeight: 500, 
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: 'lab(66.128 -0.0000298023 0.0000119209)'
                  }}
                >
                  Systems-Focused Full Stack Engineer
                </h2>
              </div>
            </div>

            {/* Bottom: Content Paragraphs */}
            <div 
              className="flex flex-col gap-6 transition-colors duration-300 animate-fade-in-up delay-300 text-justify text-zinc-700 dark:text-[#d9d9d9]"
              style={{ 
                fontFamily: 'var(--font-instrument-serif), serif', 
                fontWeight: 400, 
                fontStyle: 'normal',
                fontSize: '20px',
                lineHeight: '1.4',
                letterSpacing: '0.01em'
              }}
            >
              <p>
                I am a Systems-Focused Full Stack Engineer specializing in the architecture of data-intensive products. I build end-to-end systems that synchronize complex data streams across diverse platform layers, pairing high-fidelity interfaces with robust backend logic.
              </p>
              <p>
                My work is centered on the intersection of Real-Time Telemetry, Secure Infrastructure, and Distributed State. From engineering high-performance database aggregation pipelines to integrating secure global payment gateways, I prioritize data integrity and system scalability. I build products that not only function, but perform with precision and stand out through intentional, high-contrast design.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800/60 mt-6 sm:mt-8 mb-6 sm:mb-8 transition-colors duration-300 animate-fade-in-up delay-400"></div>

            {/* Education Section */}
            <div className="flex flex-col gap-4 animate-fade-in-up delay-400">
              <h3 
                className="text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-wide"
                style={{ fontFamily: 'var(--font-instrument-serif), serif', fontWeight: 400 }}
              >
                Education
              </h3>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mt-2">
                <div className="flex flex-col">
                  <span className="text-zinc-900 dark:text-white font-semibold tracking-wide text-[15px] sm:text-[16px]">
                    B.Tech in Computer Science & Engineering
                  </span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[14px] sm:text-[15px] mt-1">
                    Netaji Subhas University of Technology
                  </span>
                </div>
                <div className="text-zinc-500 dark:text-zinc-400 text-[14px] sm:text-[15px] font-mono tracking-wide">
                  2025 — 2029
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800/60 mt-8 sm:mt-12 mb-8 sm:mb-12 transition-colors duration-300 animate-fade-in-up delay-500"></div>

            {/* Tech Stack & Tools Section */}
            <div className="flex flex-col gap-8 animate-fade-in-up delay-500">
              <div className="flex flex-col gap-2">
                <h3 
                  className="text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-wide"
                  style={{ fontFamily: 'var(--font-instrument-serif), serif', fontWeight: 400 }}
                >
                  Tech Stack & Tools
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-[14px] sm:text-[15px]">
                  A collection of my favorite tools for development, and design.
                </p>
              </div>

              {/* Current Stack - Horizontal */}
              <div className="flex flex-col gap-4">
                <h4 className="tracking-wider uppercase text-zinc-900 dark:text-white" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 600, fontSize: '11px', lineHeight: '17px' }}>Current Stack</h4>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-3"><div className="w-7 h-7 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-800/50"><SiTypescript className="w-4 h-4 text-zinc-700 dark:text-zinc-300" /></div><span className="text-zinc-700 dark:text-zinc-300" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '21px' }}>TypeScript</span></div>
                  <div className="flex items-center gap-3"><div className="w-7 h-7 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-800/50"><SiNextdotjs className="w-4 h-4 text-zinc-700 dark:text-zinc-300" /></div><span className="text-zinc-700 dark:text-zinc-300" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '21px' }}>Next.js</span></div>
                  <div className="flex items-center gap-3"><div className="w-7 h-7 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-800/50"><SiTailwindcss className="w-4 h-4 text-zinc-700 dark:text-zinc-300" /></div><span className="text-zinc-700 dark:text-zinc-300" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '21px' }}>Tailwind CSS</span></div>
                  <div className="flex items-center gap-3"><div className="w-7 h-7 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-800/50"><SiMongodb className="w-4 h-4 text-zinc-700 dark:text-zinc-300" /></div><span className="text-zinc-700 dark:text-zinc-300" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '21px' }}>MongoDB</span></div>
                </div>
              </div>

              {/* 3-Column Grid for other tools */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mt-2">
                
                {/* Column 1: Frontend */}
                <div className="flex flex-col gap-4">
                  <h4 className="tracking-wider uppercase text-zinc-900 dark:text-white" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 600, fontSize: '11px', lineHeight: '17px' }}>Frontend</h4>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3"><div className="w-7 h-7 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-800/50"><SiReact className="w-4 h-4 text-zinc-700 dark:text-zinc-300" /></div><span className="text-zinc-700 dark:text-zinc-300" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 500, fontSize: '13px', lineHeight: '20px' }}>React</span></div>
                    <div className="flex items-center gap-3"><div className="w-7 h-7 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-800/50"><SiTailwindcss className="w-4 h-4 text-zinc-700 dark:text-zinc-300" /></div><span className="text-zinc-700 dark:text-zinc-300" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 500, fontSize: '13px', lineHeight: '20px' }}>Tailwind CSS</span></div>
                    <div className="flex items-center gap-3"><div className="w-7 h-7 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-800/50"><SiJavascript className="w-4 h-4 text-zinc-700 dark:text-zinc-300" /></div><span className="text-zinc-700 dark:text-zinc-300" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 500, fontSize: '13px', lineHeight: '20px' }}>JavaScript</span></div>
                    <div className="flex items-center gap-3"><div className="w-7 h-7 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-800/50"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-4 h-4 text-zinc-700 dark:text-zinc-300"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="currentColor" strokeWidth="25" strokeLinecap="round" d="M208 128l-80 80M192 40L40 192"/></svg></div><span className="text-zinc-700 dark:text-zinc-300" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 500, fontSize: '13px', lineHeight: '20px' }}>shadcn/ui</span></div>
                    <div className="flex items-center gap-3"><div className="w-7 h-7 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-800/50"><SiFramer className="w-4 h-4 text-zinc-700 dark:text-zinc-300" /></div><span className="text-zinc-700 dark:text-zinc-300" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 500, fontSize: '13px', lineHeight: '20px' }}>Motion</span></div>
                  </div>
                </div>

                {/* Column 2: Backend */}
                <div className="flex flex-col gap-4">
                  <h4 className="tracking-wider uppercase text-zinc-900 dark:text-white" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 600, fontSize: '11px', lineHeight: '17px' }}>Backend & Database</h4>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3"><div className="w-7 h-7 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-800/50"><SiNodedotjs className="w-4 h-4 text-zinc-700 dark:text-zinc-300" /></div><span className="text-zinc-700 dark:text-zinc-300" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 500, fontSize: '13px', lineHeight: '20px' }}>Node.js</span></div>
                    <div className="flex items-center gap-3"><div className="w-7 h-7 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-800/50"><SiExpress className="w-4 h-4 text-zinc-700 dark:text-zinc-300" /></div><span className="text-zinc-700 dark:text-zinc-300" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 500, fontSize: '13px', lineHeight: '20px' }}>Express</span></div>
                    <div className="flex items-center gap-3"><div className="w-7 h-7 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-800/50"><SiMongodb className="w-4 h-4 text-zinc-700 dark:text-zinc-300" /></div><span className="text-zinc-700 dark:text-zinc-300" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 500, fontSize: '13px', lineHeight: '20px' }}>MongoDB</span></div>
                  </div>
                </div>

                {/* Column 3: Dev & Design Tools */}
                <div className="flex flex-col gap-4">
                  <h4 className="tracking-wider uppercase text-zinc-900 dark:text-white" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 600, fontSize: '11px', lineHeight: '17px' }}>Dev & Design Tools</h4>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3"><div className="w-7 h-7 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-800/50"><SiGithub className="w-4 h-4 text-zinc-700 dark:text-zinc-300" /></div><span className="text-zinc-700 dark:text-zinc-300" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 500, fontSize: '13px', lineHeight: '20px' }}>GitHub</span></div>
                    <div className="flex items-center gap-3"><div className="w-7 h-7 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-800/50"><SiFigma className="w-4 h-4 text-zinc-700 dark:text-zinc-300" /></div><span className="text-zinc-700 dark:text-zinc-300" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 500, fontSize: '13px', lineHeight: '20px' }}>Figma</span></div>
                    <div className="flex items-center gap-3"><div className="w-7 h-7 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-800/50"><SiTldraw className="w-4 h-4 text-zinc-700 dark:text-zinc-300" /></div><span className="text-zinc-700 dark:text-zinc-300" style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 500, fontSize: '13px', lineHeight: '20px' }}>tldraw</span></div>
                  </div>
                </div>

              </div>
            </div>
            {/* Divider */}
            <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800/60 mt-8 sm:mt-12 mb-8 sm:mb-12 transition-colors duration-300 animate-fade-in-up delay-[600ms]"></div>

            {/* Quote Box */}
            <div className="relative w-full rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-[#151515]/50 px-4 py-8 sm:px-8 sm:py-10 overflow-hidden flex flex-col justify-center transition-colors duration-300 animate-fade-in-up delay-[600ms]">
              {/* Huge background quotes */}
              <div className="absolute top-2 left-4 sm:top-3 sm:left-6 text-[80px] sm:text-[110px] leading-none text-zinc-300 dark:text-zinc-800/50 font-serif font-bold select-none pointer-events-none tracking-tighter transition-colors duration-300" style={{ transform: 'translateY(-10px)' }}>
                “
              </div>
              
              <div className="relative z-10 w-full flex flex-col gap-2 sm:gap-3 pl-8 sm:pl-12 pr-4">
                <p className="text-zinc-700 dark:text-zinc-300/90 text-[13px] sm:text-[15px] font-mono italic leading-relaxed transition-colors duration-300 text-justify sm:text-left">
                  "there's always someone who wants to slow you down then"
                </p>
                <p className="text-zinc-500 dark:text-zinc-500 text-[12px] sm:text-[13px] font-mono italic text-right mt-1 sm:mt-2 transition-colors duration-300">
                  – Mark Zuckerberg
                </p>
              </div>
            </div>

          </div>

        </main>
      </div>
  );
}
