
import React from 'react';
import { Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Folagbade Daniel",
  title: "Digital Growth Specialist & Venture Builder",
  location: "Lagos, Nigeria",
  bio: "I'm a Digital Manager with a heart for building systems that work for people. From scaling fintech platforms to architecting award-winning web designs, I focus on radical clarity and measurable growth.",
  linkedin: "https://www.linkedin.com/in/folagbadedan/",
  twitter: "https://x.com/Fiolagbade",
  instagram: "https://www.instagram.com/folagbadedan/",
  whatsapp: "https://wa.link/r6wa55",
  email: "daniel@youmaximize.com",
};

export const EXPERIENCE = [
  {
    role: "Digital Marketing Manager",
    company: "PearMonie",
    period: "Apr 2025 - Present",
    description: "I drive the digital growth strategy, bridging the gap between high-end fintech solutions and the people who need them.",
    achievements: [
      "Architecting user-centric digital funnels",
      "Managing multi-channel performance marketing",
      "Leading brand expansion through data-driven storytelling"
    ]
  },
  {
    role: "Digital Manager",
    company: "CITISQUARE AFRICA",
    period: "Mar 2024 - Feb 2025",
    description: "Successfully oversaw the digital ecosystem for Africa's emerging real estate marketplace, establishing the foundational roadmap for property discovery and verification.",
    achievements: [
      "Scaled organic reach across key African markets",
      "Automated critical lead-gen and CRM workflows",
      "Resigned in 2025 to focus on enterprise growth roles"
    ]
  },
  {
    role: "Founder & Lead Strategist",
    company: "Youmaximize",
    period: "Apr 2019 - Present",
    description: "My personal laboratory for digital growth. Helping brands cut through the noise with practical SEO and systems that scale.",
    achievements: [
      "Guided 50+ brands to page-one search results",
      "Pioneered high-impact growth frameworks",
      "Built a hub for digital marketing education"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Culbeed Media",
    description: "A high-traffic entertainment and news platform. I designed and built this media engine to deliver real-time news and entertainment content to a global audience.",
    url: "https://culbeedmedia.com/",
    tags: ["Media", "News", "Entertainment"],
    icon: "fa-clapperboard",
    color: "from-red-500 to-orange-600",
  },
  {
    title: "Let-A-Header",
    description: "A professional letterhead maker for business. I developed this SaaS tool to help founders generate perfectly branded, typo-free PDF documents in seconds.",
    url: "https://let-a-header2.vercel.app/",
    tags: ["SaaS", "Productivity", "Venture"],
    icon: "fa-file-signature",
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "Colours of Wellbeing",
    description: "A custom web design project for a psychotherapy and wellness platform. Focused on creating a serene, trustworthy digital sanctuary for mental health professionals.",
    url: "https://coloursofwellbeing.com",
    tags: ["Web Design", "Wellness", "Client Work"],
    icon: "fa-heart-pulse",
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Fudes Alpha Ent.",
    description: "Professional web design and digital branding for a USA-based DJ and entertainment service. Built to showcase high-end event production and vibes.",
    url: "https://www.fudesalphaent.com",
    tags: ["Web Design", "Entertainment", "Client Work"],
    icon: "fa-compact-disc",
    color: "from-amber-400 to-orange-600",
  },
  {
    title: "Youmaximize Blog",
    description: "My flagship platform for sharing deep-dive insights on SEO, digital growth, and the business of venture building.",
    url: "https://www.youmaximize.com/blog",
    tags: ["SEO", "Growth", "Venture"],
    icon: "fa-feather",
    color: "from-purple-500 to-fuchsia-600",
  },
  {
    title: "Lands of Nigeria",
    description: "Nigeria's authoritative real estate research hub. Providing verified insights and property data for local and diaspora investors.",
    url: "https://www.landsofnigeria.com",
    tags: ["Real Estate", "Data", "Venture"],
    icon: "fa-map-location-dot",
    color: "from-emerald-500 to-green-600",
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Technical Craft",
    items: ["WordPress Artistry", "React / Modern JS", "Cloud Ops", "AI Integration"],
  },
  {
    category: "Growth Intel",
    items: ["Strategic SEO", "Content Architecture", "Funnel Optimization", "Market Research"],
  },
  {
    category: "Business Strategy",
    items: ["Venture Building", "Event Tech", "PropTech Innovation", "Project Leadership"],
  },
];
