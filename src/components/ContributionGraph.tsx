import React from 'react';

// Server Component
export default async function ContributionGraph() {
  let data = [];
  try {
    const res = await fetch("https://api.wacheit.com/api/share/contributions/bhanu4417", {
      next: { revalidate: 3600 }
    });
    const json = await res.json();
    if (json && json.data) {
      data = json.data;
    }
  } catch (error) {
    console.error("Failed to fetch contributions", error);
  }

  if (!data || data.length === 0) {
    return null;
  }

  // Sort data by date
  data.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Today
  const today = new Date();
  
  // Start date is the first date in the dataset
  const firstDate = new Date(data[0].date);
  
  // Ensure the grid starts on a Sunday for the first week
  const startDate = new Date(firstDate);
  startDate.setDate(startDate.getDate() - startDate.getDay());

  // Make the grid exactly 52 weeks (364 days) long starting from startDate
  // This satisfies "start green on the left" and "fill full width with future"
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 364);

  // Create a map of date strings to seconds
  const dataMap = new Map();
  data.forEach((item: any) => {
    dataMap.set(item.date, item.seconds);
  });

  // Calculate total time
  let totalSeconds = 0;
  
  // Calculate weeks
  const weeks = [];
  let currentDate = new Date(startDate);
  
  const monthLabels = [];
  let lastMonth = -1;

  let weekIndex = 0;
  while (currentDate <= endDate) {
    const week = [];

    for (let i = 0; i < 7; i++) {
      const dateStr = currentDate.toISOString().split('T')[0];
      const currentMonth = currentDate.getMonth();
      
      // Add month label if the month changes
      if (currentMonth !== lastMonth && currentDate.getDate() <= 7) {
        lastMonth = currentMonth;
        monthLabels.push({ index: weekIndex, label: currentDate.toLocaleString('default', { month: 'short' }) });
      }

      const isValid = currentDate >= firstDate && currentDate <= today;
      const isFuture = currentDate > today;
      const seconds = dataMap.get(dateStr) || 0;
      
      if (isValid && !isFuture) {
        totalSeconds += seconds;
      }
      
      week.push({
        date: dateStr,
        seconds: seconds,
        isValid,
        isFuture
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    weeks.push(week);
    weekIndex++;
  }

  // Format total time
  const totalHrs = Math.floor(totalSeconds / 3600);
  const totalMins = Math.floor((totalSeconds % 3600) / 60);

  // Helper to get color based on seconds
  const getColor = (seconds: number, isValid: boolean, isFuture: boolean) => {
    if (!isValid && !isFuture) return 'bg-transparent'; // padding before firstDate
    if (isFuture) return 'bg-zinc-200 dark:bg-[#161b22] border border-zinc-200 dark:border-white/5 opacity-60 transition-colors duration-300'; // future greyish
    if (seconds === 0) return 'bg-zinc-200 dark:bg-[#161b22] border border-zinc-200 dark:border-white/5 transition-colors duration-300'; // empty github dark
    if (seconds < 3600) return 'bg-[#9be9a8] dark:bg-[#0e4429] border border-[#9be9a8] dark:border-[#0e4429] transition-colors duration-300'; // < 1 hr
    if (seconds < 10800) return 'bg-[#40c463] dark:bg-[#006d32] border border-[#40c463] dark:border-[#006d32] transition-colors duration-300'; // < 3 hrs
    if (seconds < 18000) return 'bg-[#30a14e] dark:bg-[#26a641] border border-[#30a14e] dark:border-[#26a641] transition-colors duration-300'; // < 5 hrs
    return 'bg-[#216e39] dark:bg-[#39d353] border border-[#216e39] dark:border-[#39d353] transition-colors duration-300'; // >= 5 hrs
  };

  const formatHours = (seconds: number) => {
    if (seconds === 0) return 'No coding time';
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    if (hrs === 0) return `${mins}m`;
    return `${hrs}h ${mins}m`;
  };

  return (
    <div className="w-full flex flex-col pt-8 pb-0 overflow-hidden">
      <div className="flex justify-between items-end mb-6">
        <h3 className="text-2xl sm:text-3xl font-normal text-zinc-900 dark:text-zinc-100 transition-colors duration-300" style={{ fontFamily: 'var(--font-instrument-serif), serif' }}>
          WacheIt
        </h3>
        <div className="flex items-baseline gap-1.5 pb-1">
          <span className="text-lg sm:text-xl text-zinc-800 dark:text-zinc-200 transition-colors duration-300" style={{ fontFamily: 'var(--font-noto-serif), serif' }}>
            {totalHrs}h {totalMins}m
          </span>
          <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 transition-colors duration-300" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            total time
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
              {weeks.map((week, wIndex) => (
                <div key={wIndex} className="flex flex-col gap-[3px]">
                  {week.map((day, dIndex) => (
                    <div key={dIndex} className="relative group">
                      <div
                        className={`w-[10px] h-[10px] rounded-[2px] transition-colors ${getColor(day.seconds, day.isValid, day.isFuture)} ${!day.isFuture && day.isValid ? 'hover:ring-[1px] hover:ring-zinc-300 z-10 cursor-default' : ''}`}
                      />
                      {/* Custom CSS Tooltip */}
                      {(!day.isFuture && day.isValid) && (
                        <div className={`absolute bottom-full mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 bg-white dark:bg-[#24292f] border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 text-[11px] px-2 py-1 rounded shadow-lg whitespace-nowrap ${wIndex < 8 ? "left-0" : wIndex > weeks.length - 8 ? "right-0" : "left-1/2 -translate-x-1/2"}`}>
                          <span className="text-zinc-500 dark:text-zinc-400 mr-1">{day.date}</span>
                          <span className="font-medium text-black dark:text-white">{formatHours(day.seconds)}</span>
                          {/* Downward triangle arrow */}
                          <div className={`absolute top-full border-4 border-transparent border-t-white dark:border-t-[#24292f] ${wIndex < 8 ? "left-[1px]" : wIndex > weeks.length - 8 ? "right-[1px]" : "left-1/2 -translate-x-1/2"}`} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
