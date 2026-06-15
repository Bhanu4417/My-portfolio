import React from 'react';

// Server Component
export default async function GithubGraph() {
  let data: any = null;
  try {
    const res = await fetch("https://github-contributions-api.deno.dev/Bhanu4417.json", {
      next: { revalidate: 3600 }
    });
    data = await res.json();
  } catch (error) {
    console.error("Failed to fetch GitHub contributions", error);
  }

  if (!data || !data.contributions || data.contributions.length === 0) {
    return null;
  }

  // The Deno API returns an array of weeks (usually 53)
  const originalWeeks = data.contributions;
  const totalContributions = data.totalContributions || 0;

  // Find the week that contains December 27th to left-align the data
  let firstActiveWeekIndex = 0;
  for (let w = 0; w < originalWeeks.length; w++) {
    if (originalWeeks[w].some((day: any) => day.date.includes("-12-27"))) {
      firstActiveWeekIndex = w;
      break;
    }
  }

  // Slice off the inactive weeks at the beginning
  let adjustedWeeks = originalWeeks.slice(firstActiveWeekIndex);

  // Pad the first week if it has fewer than 7 days (aligns the days correctly to Sunday)
  if (adjustedWeeks.length > 0 && adjustedWeeks[0].length < 7) {
    const daysToAdd = 7 - adjustedWeeks[0].length;
    let firstDateObj = new Date(adjustedWeeks[0][0].date);
    for (let i = 0; i < daysToAdd; i++) {
      firstDateObj.setDate(firstDateObj.getDate() - 1);
      adjustedWeeks[0].unshift({
        date: firstDateObj.toISOString().split('T')[0],
        contributionCount: 0,
        contributionLevel: "NONE" // Transparent or empty before data started
      });
    }
  }

  // Pad the last existing week if it has fewer than 7 days (fixes the black blocks misalignment)
  if (adjustedWeeks.length > 0) {
    const lastExistingWeek = adjustedWeeks[adjustedWeeks.length - 1];
    if (lastExistingWeek.length < 7) {
      const daysToAdd = 7 - lastExistingWeek.length;
      let lastDateObj = new Date(lastExistingWeek[lastExistingWeek.length - 1].date);
      for (let i = 0; i < daysToAdd; i++) {
        lastDateObj.setDate(lastDateObj.getDate() + 1);
        lastExistingWeek.push({
          date: lastDateObj.toISOString().split('T')[0],
          contributionCount: 0,
          contributionLevel: "FUTURE"
        });
      }
    }
  }

  // If there's a last real date, we use it to calculate future dates for padded weeks
  let lastRealDateObj = new Date();
  if (adjustedWeeks.length > 0 && adjustedWeeks[adjustedWeeks.length - 1].length > 0) {
    const lastDay = adjustedWeeks[adjustedWeeks.length - 1];
    lastRealDateObj = new Date(lastDay[lastDay.length - 1].date);
  }

  // Pad the right side with future empty blocks to maintain the full 53-week width
  const targetWeeksLength = originalWeeks.length;
  while (adjustedWeeks.length < targetWeeksLength) {
    const emptyWeek = [];
    for (let i = 0; i < 7; i++) {
      lastRealDateObj.setDate(lastRealDateObj.getDate() + 1);
      const futureDateStr = lastRealDateObj.toISOString().split('T')[0];
      emptyWeek.push({
        date: futureDateStr,
        contributionCount: 0,
        contributionLevel: "FUTURE"
      });
    }
    adjustedWeeks.push(emptyWeek);
  }
  
  // Calculate month labels
  const monthLabels: { index: number, label: string }[] = [];
  let lastMonth = -1;

  adjustedWeeks.forEach((week: any[], weekIndex: number) => {
    // Check the first day of the week to see if month changed
    if (week.length > 0) {
      const firstDay = new Date(week[0].date);
      const currentMonth = firstDay.getMonth();
      
      if (currentMonth !== lastMonth && firstDay.getDate() <= 7) {
        lastMonth = currentMonth;
        monthLabels.push({ index: weekIndex, label: firstDay.toLocaleString('default', { month: 'short' }) });
      }
    }
  });

  // Helper to get GitHub dark mode colors based on contribution level
  const getColor = (level: string, count: number) => {
    if (level === "FUTURE") return 'bg-zinc-200 dark:bg-[#161b22] border border-zinc-200 dark:border-white/5 opacity-60 transition-colors duration-300'; // future greyish
    if (count === 0 || level === "NONE") return 'bg-zinc-200 dark:bg-[#161b22] border border-zinc-200 dark:border-white/5 transition-colors duration-300'; // empty github dark
    if (level === "FIRST_QUARTILE") return 'bg-[#9be9a8] dark:bg-[#0e4429] border border-[#9be9a8] dark:border-[#0e4429] transition-colors duration-300'; 
    if (level === "SECOND_QUARTILE") return 'bg-[#40c463] dark:bg-[#006d32] border border-[#40c463] dark:border-[#006d32] transition-colors duration-300'; 
    if (level === "THIRD_QUARTILE") return 'bg-[#30a14e] dark:bg-[#26a641] border border-[#30a14e] dark:border-[#26a641] transition-colors duration-300'; 
    if (level === "FOURTH_QUARTILE") return 'bg-[#216e39] dark:bg-[#39d353] border border-[#216e39] dark:border-[#39d353] transition-colors duration-300'; 
    return 'bg-[#216e39] dark:bg-[#39d353] border border-[#216e39] dark:border-[#39d353] transition-colors duration-300'; // fallback
  };

  const formatContributions = (count: number) => {
    if (count === 0) return 'No contributions';
    if (count === 1) return '1 contribution';
    return `${count} contributions`;
  };

  return (
    <div className="w-full flex flex-col border-y border-zinc-200 dark:border-zinc-800/60 py-8 overflow-hidden transition-colors duration-300">
      <div className="flex justify-between items-end mb-6">
        <h3 className="text-2xl sm:text-3xl font-normal text-zinc-900 dark:text-zinc-100 transition-colors duration-300" style={{ fontFamily: 'var(--font-instrument-serif), serif' }}>
          GitHub
        </h3>
        <div className="flex items-baseline gap-1.5 pb-1">
          <span className="text-lg sm:text-xl text-zinc-800 dark:text-zinc-200 transition-colors duration-300" style={{ fontFamily: 'var(--font-noto-serif), serif' }}>
            {totalContributions}
          </span>
          <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 transition-colors duration-300" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            contributions
          </span>
        </div>
      </div>

      <div className="flex w-full">
        {/* Day Labels */}
        <div className="flex flex-col gap-[3px] text-[10px] text-zinc-500 pr-3 pt-[32px]">
          <span className="h-[10px] leading-[10px] opacity-0">Sun</span>
          <span className="h-[10px] leading-[10px]">Mon</span>
          <span className="h-[10px] leading-[10px] opacity-0">Tue</span>
          <span className="h-[10px] leading-[10px]">Wed</span>
          <span className="h-[10px] leading-[10px] opacity-0">Thu</span>
          <span className="h-[10px] leading-[10px]">Fri</span>
          <span className="h-[10px] leading-[10px] opacity-0">Sat</span>
        </div>

        {/* Scrollable Container configured properly to prevent overflow */}
        <div className="flex flex-col flex-1 overflow-x-auto pb-4 pt-2 relative">
          <div className="min-w-max">
            {/* Month Labels */}
            <div className="flex relative h-[24px] text-[10px] text-zinc-500 overflow-visible">
              {monthLabels.map((m, i) => (
                <div key={i} className="absolute" style={{ left: `calc(${m.index} * 13px)` }}>
                  {m.label}
                </div>
              ))}
            </div>

            {/* Grid */}
            <div className="flex gap-[3px] relative">
              {adjustedWeeks.map((week: any[], wIndex: number) => (
                <div key={wIndex} className="flex flex-col gap-[3px]">
                  {week.map((day: any, dIndex: number) => {
                    const isFuture = day.contributionLevel === "FUTURE";
                    return (
                      <div key={dIndex} className="relative group">
                        <div
                          className={`w-[10px] h-[10px] rounded-[2px] transition-colors ${getColor(day.contributionLevel, day.contributionCount)} ${!isFuture ? 'hover:ring-[1px] hover:ring-zinc-300 z-10 cursor-default' : ''}`}
                        />
                        {/* Custom CSS Tooltip */}
                        {!isFuture && (
                          <div className={`absolute bottom-full mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 bg-white dark:bg-[#24292f] border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 text-[11px] px-2 py-1 rounded shadow-lg whitespace-nowrap ${wIndex < 8 ? "left-0" : wIndex > adjustedWeeks.length - 8 ? "right-0" : "left-1/2 -translate-x-1/2"}`}>
                            <span className="font-medium text-black dark:text-white mr-1">{formatContributions(day.contributionCount)}</span>
                            <span className="text-zinc-500 dark:text-zinc-400">on {day.date}</span>
                            {/* Downward triangle arrow */}
                            <div className={`absolute top-full border-4 border-transparent border-t-white dark:border-t-[#24292f] ${wIndex < 8 ? "left-[1px]" : wIndex > adjustedWeeks.length - 8 ? "right-[1px]" : "left-1/2 -translate-x-1/2"}`} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
