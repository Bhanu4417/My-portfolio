import React from 'react';
import TodayWacheitClient from './TodayWacheitClient';

export default async function TodayWacheitTime() {
  let seconds = 0;
  let languages: any[] = [];

  try {
    const res = await fetch("https://api.wacheit.com/api/share/contributions/bhanu4417", {
      next: { revalidate: 60 }
    });
    const json = await res.json();
    if (json && json.data) {
      if (json.todayDetails) {
        seconds = json.todayDetails.seconds || 0;
        if (json.todayDetails.languages) {
          languages = json.todayDetails.languages;
        }
      }
    }
  } catch (error) {
    console.error("Failed to fetch today's Wacheit time", error);
  }

  return <TodayWacheitClient seconds={seconds} languages={languages} />;
}
