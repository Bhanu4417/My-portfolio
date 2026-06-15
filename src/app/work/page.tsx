import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { 
  SiNextdotjs, SiReact, SiJavascript, SiTypescript, 
  SiNodedotjs, SiExpress, SiMongodb, SiSocketdotio, 
  SiTailwindcss, SiFramer, SiVercel 
} from "react-icons/si";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
};

const projects = [
  {
    title: "Wacheit",
    description: "An AI-native workflow tracker designed to streamline your productivity with intelligent task sync and beautifully seamless data visualization.",
    image: "/wacheit.png",
    link: "https://wacheit.com",
    stack: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "WebSockets", icon: SiSocketdotio, color: "#ffffff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ]
  },
  {
    title: "Klyne",
    description: "An automated content generator according to the mood and platform type for new-gen content generation.",
    image: "/klyne.png",
    link: "#", // Replace with real link
    status: "In Development",
    stack: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ]
  },
  {
    title: "Wacheit Quest",
    description: "A personal blog website where I post daily updates, thoughts, and design descriptions about my current work.",
    image: "/quest.png",
    link: "https://wachequest.vercel.app/",
    stack: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ]
  }
];

export default function WorkPage() {
  return (
    <div className="w-full px-1 sm:px-4 flex flex-col items-center gap-0">
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-zinc-100 to-transparent dark:from-zinc-900/20 dark:to-transparent -z-10 transition-colors duration-300"></div>

      <main className="w-full max-w-4xl bg-[#FAFAFA] dark:bg-[#100F0F] px-4 sm:px-10 md:px-12 pt-6 sm:pt-8 md:pt-10 pb-20 sm:pb-24 flex flex-col min-h-screen transition-colors duration-300">
        
        {/* Header Section */}
        <div className="animate-fade-in-up delay-100 flex flex-col gap-4 sm:gap-5 mb-10 sm:mb-14 border-b border-zinc-200 dark:border-zinc-800/60 pb-6 sm:pb-8">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors duration-300"
            style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
          >
            My Work
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-[15px] sm:text-[16px] leading-relaxed max-w-2xl font-sans transition-colors duration-300">
            A showcase of my recent projects, blending high-fidelity interfaces with robust backend logic. Each project was designed to solve a specific problem with precision and scale.
          </p>
        </div>

        {/* Projects List (1 Column) */}
        <div className="animate-fade-in-up delay-300 flex flex-col gap-16 sm:gap-20 w-full">
          {projects.map((project, idx) => (
            <div key={idx} className="flex flex-col w-full">
              {/* Project Title */}
              <h2 className="text-3xl sm:text-5xl text-zinc-900 dark:text-zinc-100 mb-6 sm:mb-8 transition-colors duration-300" style={{ fontFamily: 'var(--font-instrument-serif), serif' }}>
                {project.title}
              </h2>

              {/* Image Box */}
              <div className="relative w-full rounded-2xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#0a0a0a] overflow-hidden mb-6 sm:mb-8 transition-colors duration-300 group">
                <div className="relative w-full aspect-video sm:aspect-[16/10] transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.02]">
                  <Image 
                    src={project.image} 
                    alt={`${project.title} mockup`}
                    fill
                    unoptimized={true}
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Bottom Section: Tech & Button */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 sm:gap-10">
                {/* Description & Tech Stack */}
                <div className="flex flex-col gap-4 sm:max-w-[70%]">
                  <p className="text-sm sm:text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.stack.map((tech, tIdx) => (
                      <div 
                        key={tIdx} 
                        className="flex items-center gap-1.5 px-2 py-1 rounded-md border border-dashed border-zinc-300 dark:border-zinc-600/70 bg-white dark:bg-zinc-900/40 cursor-default transition-colors duration-300 shadow-sm dark:shadow-none"
                      >
                        <tech.icon className={`w-3.5 h-3.5 opacity-90 rounded-[3px] ${tech.color === '#ffffff' ? 'text-zinc-900 dark:text-white' : ''}`} style={tech.color !== '#ffffff' ? { color: tech.color } : undefined} />
                        <span className="text-[10px] sm:text-[11px] text-zinc-800 dark:text-zinc-300 font-medium tracking-wide transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visit Button or Status */}
                {project.status ? (
                  <div className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-2.5 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 font-medium text-sm shadow-sm dark:shadow-none whitespace-nowrap">
                    <span className="relative flex h-2.5 w-2.5 mr-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                    </span>
                    {project.status}
                  </div>
                ) : (
                  <Link 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium text-sm transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap shadow-md dark:shadow-white/10"
                  >
                    Visit Project <FiArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
