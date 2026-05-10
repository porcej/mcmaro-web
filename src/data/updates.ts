export type UpdateType = 'info' | 'alert' | 'success';

export interface Update {
  date: string;
  title: string;
  content: string;
  type: UpdateType;
}

export const updates: Update[] = [
  {
    date: 'May 9, 2026',
    title: 'Registration Now Open for 2026 MCM',
    content:
      "We're excited to announce that registration is now open for amateur radio volunteers for the 2026 Marine Corps Marathon! All positions are available. The mandatory pre-race briefing is scheduled for September 15, 2026, at 7:00 PM (location TBD). Visit our Volunteer page to register today.",
    type: 'info',
  },
  {
    date: 'April 22, 2026',
    title: 'Save the Date: Pre-Race Briefing September 15',
    content:
      "Mark your calendars! The mandatory pre-race briefing for all amateur radio volunteers will be held on Monday, September 15, 2026, at 7:00 PM. Exact location and virtual attendance options will be announced in June. This briefing is required for all volunteers and will cover radio procedures, position assignments, and emergency protocols.",
    type: 'alert',
  },
  {
    date: 'March 15, 2026',
    title: '2025 Season Recap and Thank You',
    content:
      'Thank you to all 35 amateur radio operators who supported the 2025 Marine Corps Marathon! Our team successfully processed over 200 messages, coordinated 8 medical responses, and maintained 100% uptime throughout the event. Special recognition to our Net Control team and first-time volunteers who did an outstanding job. See you in 2026!',
    type: 'success',
  },
  {
    date: 'February 1, 2026',
    title: 'New Equipment Programming Guide Available',
    content:
      "We've published a comprehensive guide for programming common amateur radio models with MCM frequencies. The guide includes step-by-step instructions for Yaesu, Kenwood, Icom, and Baofeng radios. Registered volunteers will receive this guide via email, and it will also be available at the pre-race briefing.",
    type: 'info',
  },
  {
    date: 'January 10, 2026',
    title: 'Frequency Coordination Complete for 2026',
    content:
      "We're pleased to announce that frequency coordination is complete for the 2026 Marine Corps Marathon. We'll be operating on dedicated 2-meter frequencies with full CTCSS/DCS encoding to minimize interference. Specific frequencies will be provided to registered volunteers in September.",
    type: 'success',
  },
  {
    date: 'December 5, 2025',
    title: 'Planning Underway for 2026 Season',
    content:
      "The MCM Amateur Radio Operations planning committee has begun preparations for the 2026 marathon season. We're evaluating lessons learned from 2025 and exploring new technologies to enhance our communications capabilities. If you have suggestions or feedback, please contact us!",
    type: 'info',
  },
  {
    date: 'November 15, 2025',
    title: 'Post-Event Survey Results',
    content:
      "Thank you to everyone who completed the post-event survey. Key findings: 95% of volunteers rated their experience as 'excellent' or 'very good,' 88% would volunteer again, and operators requested more pre-race hands-on training. We're incorporating this feedback into our 2026 planning.",
    type: 'info',
  },
  {
    date: 'October 27, 2025',
    title: 'Race Day Success - 2025 MCM Complete',
    content:
      "Yesterday's Marine Corps Marathon was a tremendous success thanks to our dedicated team of amateur radio volunteers! Despite challenging weather conditions, our operators maintained flawless communications throughout the event. All runners finished safely, and our team received commendations from MCM officials for professional, reliable service.",
    type: 'success',
  },
];
