
import React from 'react';
import { Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Folagbade Daniel",
  title: "Digital Marketing Manager",
  location: "Lagos, Nigeria",
  bio: "I help businesses grow their online presence, reach more people, and increase sales. With over 6 years of experience, I build websites, run effective marketing campaigns, and set up simple automations that help businesses run smoother.",
  linkedin: "https://www.linkedin.com/in/folagbadedan/",
  twitter: "https://x.com/Fiolagbade",
  github: "https://github.com/folagbadedan",
  instagram: "https://www.instagram.com/folagbadedan/",
  whatsapp: "https://wa.link/r6wa55",
  email: "daniel@youmaximize.com",
};

export const EXPERIENCE = [
  {
    role: "Digital Marketing Manager",
    company: "PearMonie",
    period: "Apr 2025 - Present",
    description: "I lead the marketing efforts for PearMonie. I focus on getting the word out, bringing in new users, and turning our marketing campaigns into real business growth.",
    achievements: [
      "Designed and launched campaigns to attract new users",
      "Managed advertising and organic social media marketing",
      "Created helpful content to grow the brand and get more people using the product"
    ]
  },
  {
    role: "Digital Manager",
    company: "CITISQUARE AFRICA",
    period: "Mar 2024 - Feb 2025",
    description: "I managed the online presence for a growing real estate marketplace. I helped them reach a larger audience and set up systems to automatically capture and follow up with potential buyers.",
    achievements: [
      "Increased the number of visitors finding the website naturally",
      "Set up automation workflows to handle leads and customer relationships",
      "Got the website ranking higher on Google for key property searches"
    ]
  },
  {
    role: "Digital Marketing Manager",
    company: "YouMaximize",
    period: "Apr 2019 - Present",
    description: "I help small business owners and creators get more visibility online. I build clear, easy-to-use websites, run SEO campaigns, and create automation workflows so they can focus on their business instead of doing manual tasks.",
    achievements: [
      "Helped over 50 businesses rank on the first page of search results",
      "Built automated content creation systems",
      "Grew an educational blog to over 10,000 readers"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Culbeed Media",
    description: "A popular news and entertainment website. I designed and built this platform to deliver fast, real-time news to readers everywhere.",
    url: "https://culbeedmedia.com/",
    tags: ["Media", "News", "Entertainment"],
    icon: "fa-clapperboard",
    color: "from-red-500 to-orange-600",
  },
  {
    title: "Let-A-Header",
    description: "A simple tool that helps business owners quickly generate clean, professional letterheads in seconds.",
    url: "https://let-a-header2.vercel.app/",
    tags: ["App", "Productivity", "Business"],
    icon: "fa-file-signature",
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "Blockchain Brats",
    description: "A website built for a Web3 community. I created a system to help them grow their followers and reward active members.",
    url: "https://www.blockchainbrats.com/",
    tags: ["Next.js", "Web3", "Community"],
    icon: "fa-cube",
    color: "from-lime-400 to-emerald-600",
    featured: true,
  },
  {
    title: "Cutler & Winston",
    description: "A high-end reputation management and PR platform. I built this to help public figures and brands manage their public image using strategic communication and AI-driven insights.",
    url: "https://www.cutlerandwinston.com/",
    tags: ["Reputation Management", "PR", "WordPress"],
    icon: "fa-shield-halved",
    color: "from-yellow-600 to-amber-700",
  },
  {
    title: "Colours of Wellbeing",
    description: "A custom website for a mental health and wellness clinic. The design focuses on being calm, welcoming, and easy to use.",
    url: "https://coloursofwellbeing.com",
    tags: ["Web Design", "Wellness", "Clinic"],
    icon: "fa-heart-pulse",
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Fudes Alpha Ent.",
    description: "A modern website built for a professional DJ and event service in the USA, designed to showcase their work and get more bookings.",
    url: "https://www.fudesalphaent.com",
    tags: ["Web Design", "Entertainment", "Events"],
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
    description: "A research website that provides clear, verified information about real estate properties for people looking to invest.",
    url: "https://www.landsofnigeria.com",
    tags: ["Real Estate", "Research", "Directory"],
    icon: "fa-map-location-dot",
    color: "from-emerald-500 to-green-600",
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Websites & Code",
    icon: "fa-code",
    items: ["WordPress Design", "React & Next.js", "Web Development", "UI/UX Basics"],
  },
  {
    category: "Marketing",
    icon: "fa-chart-line",
    items: ["Social Media", "Paid Ads", "Search Engine Optimization (SEO)", "Getting More Customers"],
  },
  {
    category: "Automation",
    icon: "fa-robot",
    items: ["Make.com", "Zapier & n8n", "AI Workflows", "Saving Time"],
  },
  {
    category: "Creative Work",
    icon: "fa-film",
    items: ["Video Editing", "Writing Content", "Graphic Design", "Telling Stories"],
  },
];
