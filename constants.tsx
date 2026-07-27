
import React from 'react';
import { ExperienceItem, Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Folagbade Daniel",
  title: "Digital Marketing & Growth Manager",
  location: "Lagos, Nigeria",
  locationLong: "Lagos, Nigeria — working remotely worldwide",
  availability: "Remote from Lagos",
  currentRole: "Digital Marketing Manager @ PearMonie",
  bio: "Most businesses have a website and some ads and a mailing list — but none of it talks to each other. That's where growth leaks out.",
  linkedin: "https://www.linkedin.com/in/folagbadedan/",
  twitter: "https://x.com/Fiolagbade",
  github: "https://github.com/folagbadedan",
  instagram: "https://www.instagram.com/folagbadedan/",
  whatsapp: "https://wa.link/r6wa55",
  email: "daniel@youmaximize.com",
  // ACTION NEEDED: save your CV as public/cv.pdf for this link to resolve.
  // Until that file exists the footer's CV link 404s. Swap for a public
  // Drive/Dropbox URL instead if you'd rather not host the file here.
  resumeUrl: "/cv.pdf",
};

// Fourth stat slot: uncomment and fill with a number you can defend
// (ad spend managed, traffic lifted, leads generated). The grid adapts to 3 or 4.
export const STATS = [
  { value: '6+',   label: 'Years in digital growth' },
  { value: '50+',  label: 'Brands scaled' },
  { value: '10K+', label: 'Monthly blog readers' },
  // { value: '₦XXM+', label: 'Ad spend managed' },
];

export const TRUSTED_BY = [
  "PEARMONIE",
  "CITISQUARE AFRICA",
  "CULBEED MEDIA",
  "YOUMAXIMIZE",
  "LANDS OF NIGERIA",
  "CUTLER & WINSTON",
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Digital Marketing Manager",
    company: "PearMonie",
    period: "Apr 2025 - Present",
    description: "I own growth for PearMonie, a fintech product — driving user acquisition and turning campaigns into measurable business results.",
    achievements: [
      "Design and launch acquisition campaigns across paid and organic channels",
      "Manage advertising and social to bring in new users at lower cost per acquisition",
      "Build content and funnels that move users from signup to active use"
    ]
  },
  {
    role: "Digital Manager",
    company: "Citisquare Africa",
    period: "Mar 2024 - Feb 2025",
    description: "I ran the online presence for a growing real estate marketplace and built the systems that captured and nurtured buyer leads automatically.",
    achievements: [
      "Grew organic traffic through SEO and content",
      "Built lead-capture and CRM automation workflows that followed up with buyers without manual work",
      "Ranked the site on Google's first page for high-intent property searches"
    ]
  },
  {
    // Set the real dates below, then delete `draft: true` to publish this role.
    draft: true,
    role: "Growth Manager",
    company: "Culbeed Media",
    period: "CONFIRM DATES",
    description: "I led audience and content growth for a media brand across YouTube, Instagram, and the web.",
    achievements: [
      "Grew social following and watch time through a repeatable content system",
      "Designed and built the Culbeed Media news platform for fast, real-time publishing",
      "Turned content into a durable traffic and engagement channel"
    ]
  },
  {
    role: "Founder & Digital Marketing Consultant",
    company: "YouMaximize",
    period: "Apr 2019 - Present",
    description: "I help small business owners and creators get found and grow online — building fast websites, running SEO, and setting up automations so they can focus on the business.",
    achievements: [
      "Helped 50+ businesses reach page one of search results",
      "Built automated content and marketing systems for clients",
      "Grew an educational blog to 10,000+ monthly readers"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Culbeed Media",
    description: "Designed and built a fast, real-time news and entertainment platform built to handle high-traffic publishing.",
    url: "https://culbeedmedia.com/",
    tags: ["Media", "News", "WordPress"],
    icon: "fa-clapperboard",
    color: "from-red-500 to-orange-600",
  },
  {
    title: "Let-A-Header",
    description: "A tool I built that generates clean, professional letterheads in seconds — productizing a task businesses used to outsource.",
    url: "https://let-a-header2.vercel.app/",
    tags: ["App", "Productivity"],
    icon: "fa-file-signature",
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "Blockchain Brats",
    description: "A Next.js community platform for a Web3 audience, with a system to grow membership and reward active members.",
    url: "https://www.blockchainbrats.com/",
    tags: ["Next.js", "Web3", "Community"],
    icon: "fa-cube",
    color: "from-lime-400 to-emerald-600",
    featured: true,
  },
  {
    title: "Cutler & Winston",
    description: "A high-end reputation-management and PR platform for public figures, blending strategic comms with AI-driven insight.",
    url: "https://www.cutlerandwinston.com/",
    tags: ["Brand", "PR", "AI"],
    icon: "fa-shield-halved",
    color: "from-yellow-600 to-amber-700",
  },
  {
    title: "Colours of Wellbeing",
    description: "A calm, welcoming site for a mental-health clinic, designed to build trust and make booking effortless.",
    url: "https://coloursofwellbeing.com",
    tags: ["WordPress", "Healthcare"],
    icon: "fa-heart-pulse",
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Fudes Alpha Ent.",
    description: "A booking-focused site for a US-based DJ and event service, designed to convert visitors into bookings.",
    url: "https://www.fudesalphaent.com",
    tags: ["WordPress", "Bookings"],
    icon: "fa-compact-disc",
    color: "from-amber-400 to-orange-600",
  },
  {
    title: "Youmaximize Blog",
    description: "My personal blog where I share simple, practical advice on marketing, growing a business, and working smarter.",
    url: "https://www.youmaximize.com/blog",
    tags: ["Blog", "Marketing", "Business"],
    icon: "fa-feather",
    color: "from-purple-500 to-fuchsia-600",
  },
  {
    title: "Lands of Nigeria",
    description: "A research platform delivering verified real-estate information to diaspora investors.",
    url: "https://www.landsofnigeria.com",
    tags: ["Content", "SEO", "Real Estate"],
    icon: "fa-map-location-dot",
    color: "from-emerald-500 to-green-600",
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Websites & Code",
    icon: "fa-code",
    items: ["WordPress", "Webflow", "React & Next.js", "Landing pages & funnels", "UI/UX"],
  },
  {
    category: "Marketing",
    icon: "fa-chart-line",
    items: ["SEO & AI-search (AEO/GEO)", "Google Ads", "Meta Ads", "GA4 & Looker Studio", "Conversion rate optimization"],
  },
  {
    category: "Automation",
    icon: "fa-robot",
    items: ["Make.com", "n8n", "Zapier", "AI workflows", "CRM & lead automation"],
  },
  {
    category: "Creative & Content",
    icon: "fa-film",
    items: ["Copywriting", "Content strategy", "Video editing", "Graphic design"],
  },
];

export const TECH_STACK = "WordPress · Webflow · Next.js · Make.com · n8n · Google Ads · Meta Ads · GA4 · Ahrefs · SEMrush";
