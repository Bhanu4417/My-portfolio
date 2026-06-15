import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import TodayWacheitTime from "./TodayWacheitTime";

export default function Navbar() {
  return (
    <nav className="animate-fade-in-up sticky top-0 z-50 w-full flex items-center justify-center py-4 sm:py-5 mb-0 sm:mb-2 bg-white/70 dark:bg-[#100F0F]/70 backdrop-blur-xl">
      <div className="w-full max-w-3xl px-3 sm:px-10 md:px-12 flex items-center justify-between">
        <div className="flex gap-4 sm:gap-6 tracking-wide" style={{ fontFamily: 'var(--font-hanken-grotesk), "Hanken Grotesk", sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '20px', color: 'rgb(144, 144, 146)' }}>
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</Link>
          <Link href="/work" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Projects</Link>
        </div>
        <div className="flex items-center gap-3">
          <TodayWacheitTime />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
