"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const transitioning = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = async () => {
    if (transitioning.current) return;
    transitioning.current = true;

    const isDark = resolvedTheme === "dark";
    const nextTheme = isDark ? "light" : "dark";

    // Get exact center of the button for the circle origin
    const btn = buttonRef.current;
    const rect = btn!.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Radius big enough to cover farthest screen corner from origin
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Fallback for browsers without View Transitions
    if (!document.startViewTransition) {
      setTheme(nextTheme);
      transitioning.current = false;
      return;
    }

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
    });

    // Wait for both old & new snapshots to be ready
    await transition.ready;

    // Animate the NEW theme expanding as a circle from the button
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 900,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );

    await transition.finished;
    transitioning.current = false;
  };

  if (!mounted) {
    return <div className="w-5 h-5 sm:w-[1.125rem] sm:h-[1.125rem]" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      aria-label="Toggle Theme"
      className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white flex items-center justify-center"
    >
      {isDark ? (
        <LuSun className="w-5 h-5 sm:w-[1.125rem] sm:h-[1.125rem]" />
      ) : (
        <LuMoon className="w-5 h-5 sm:w-[1.125rem] sm:h-[1.125rem]" />
      )}
    </button>
  );
}
