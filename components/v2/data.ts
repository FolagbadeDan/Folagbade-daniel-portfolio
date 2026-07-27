/**
 * Content for the redesign. Identity/links come from ../../constants so there
 * is a single source of truth shared with the original design.
 */

/**
 * Live screenshots of Folagbade's own sites, via WordPress.com mShots (free,
 * no API key). The first request for a given URL+size queues the capture and
 * returns a 400x300 placeholder; subsequent requests serve the real image.
 *
 * To drop the third-party dependency later: save these as PNGs into /public
 * and swap the strings for local paths. Nothing else needs to change.
 */
const shot = (url: string, w: number, h: number) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${w}&h=${h}`;

// Culbeed Media removed: the site is down (expired TLS certificate, host
// unreachable). Re-add it here and to PROJECTS below once it is back up.
export const SITES = {
  pearmonie: 'https://pearmonie.com/',
  lands: 'https://www.landsofnigeria.com/',
  cutler: 'https://www.cutlerandwinston.com/',
  brats: 'https://www.blockchainbrats.com/',
  colours: 'https://coloursofwellbeing.com/',
  fudes: 'https://www.fudesalphaent.com/',
  letAHeader: 'https://let-a-header2.vercel.app/',
  youmaximize: 'https://www.youmaximize.com/blog',
};

/** Desktop crop, narrow/mobile layout, and full hero shot of the same site. */
const shotTrio = (url: string) => ({
  colOneTop: shot(url, 560, 420),
  colOneBottom: shot(url, 480, 800),
  colTwo: shot(url, 1280, 900),
});

export interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Websites & Code',
    description:
      'High-converting sites in WordPress, Webflow, and Next.js — built around landing pages and funnels that turn visitors into customers, not just pages that look good.',
  },
  {
    number: '02',
    name: 'Performance Marketing',
    description:
      'Google and Meta campaigns run against real numbers. Acquisition, cost per customer, and the conversion-rate work that makes every click go further.',
  },
  {
    number: '03',
    name: 'SEO & AI Search',
    description:
      'Ranking on Google and showing up in AI answers. Technical SEO, content strategy, and AEO/GEO so your brand is found wherever people are searching now.',
  },
  {
    number: '04',
    name: 'Automation',
    description:
      'Make.com, n8n, and Zapier workflows that capture leads, follow up, and update your CRM on their own — so growth keeps running while you sleep.',
  },
  {
    number: '05',
    name: 'Creative & Content',
    description:
      'Copywriting, content strategy, video, and design that give the whole system something worth clicking on and a voice people remember.',
  },
];

export interface ProjectCard {
  number: string;
  category: string;
  name: string;
  url: string;
  images: { colOneTop: string; colOneBottom: string; colTwo: string };
}

export interface ProjectTile {
  number: string;
  category: string;
  name: string;
  url: string;
  image: string;
}

/**
 * Four headline projects get the full sticky-stacking treatment. Every card is
 * an 85vh scroll step, so stacking all of them made the section ~6,600px tall
 * on desktop and buried the footer; the rest go in a compact grid below.
 */
export const PROJECT_CARDS: ProjectCard[] = [
  {
    number: '01',
    category: 'Client · Fintech',
    name: 'Pearmonie',
    url: SITES.pearmonie,
    images: shotTrio(SITES.pearmonie),
  },
  {
    number: '02',
    category: 'Venture · Real Estate',
    name: 'Lands of Nigeria',
    url: SITES.lands,
    images: {
      colOneTop:
        'https://landsofnigeria.com/wp-content/uploads/2021/07/Lagos-Nigeria-aerial-view-homes-and-roads.jpg',
      colOneBottom:
        'https://landsofnigeria.com/wp-content/uploads/2022/08/ATLANTIC-GRACE-MANOR.jpg',
      colTwo: shot(SITES.lands, 1280, 900),
    },
  },
  {
    number: '03',
    category: 'Client · PR',
    name: 'Cutler & Winston',
    url: SITES.cutler,
    images: {
      colOneTop:
        'https://cutlerandwinston.com/wp-content/uploads/2026/03/female-and-male-marketing-experts-meet-together-and-collaborate-creat-advertising-campaign-sit-in.jpg',
      colOneBottom:
        'https://cutlerandwinston.com/wp-content/uploads/2026/03/close-up-of-business-people-analysis-charts-and-graphs-of-marketing-on-laptop-and-paperwork.jpg',
      colTwo: shot(SITES.cutler, 1280, 900),
    },
  },
  {
    number: '04',
    category: 'Client · Web3',
    name: 'Blockchain Brats',
    url: SITES.brats,
    images: shotTrio(SITES.brats),
  },
];

export const PROJECT_TILES: ProjectTile[] = [
  {
    number: '05',
    category: 'Client · Healthcare',
    name: 'Colours of Wellbeing',
    url: SITES.colours,
    image: shot(SITES.colours, 840, 540),
  },
  {
    number: '06',
    category: 'Client · Events',
    name: 'Fudes Alpha Ent.',
    url: SITES.fudes,
    image: shot(SITES.fudes, 840, 540),
  },
  {
    number: '07',
    category: 'Product',
    name: 'Let-A-Header',
    url: SITES.letAHeader,
    image: shot(SITES.letAHeader, 840, 540),
  },
  {
    number: '08',
    category: 'Venture · Content',
    name: 'YouMaximize Blog',
    url: SITES.youmaximize,
    image: shot(SITES.youmaximize, 840, 540),
  },
];

/**
 * Marquee tiles: every one is a real Folagbade project. Split across two rows
 * that scroll in opposite directions; each row is tripled for a seamless loop.
 */
const marqueeShot = (url: string) => shot(url, 840, 540);

export const MARQUEE_ROW_ONE = [
  marqueeShot(SITES.pearmonie),
  marqueeShot(SITES.lands),
  marqueeShot(SITES.cutler),
  marqueeShot(SITES.brats),
];

export const MARQUEE_ROW_TWO = [
  marqueeShot(SITES.colours),
  marqueeShot(SITES.fudes),
  marqueeShot(SITES.letAHeader),
  marqueeShot(SITES.youmaximize),
];

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_TAGLINE =
  'a digital growth manager building websites, campaigns, and automations that turn traffic into customers';

export const ABOUT_TEXT =
  "With more than six years of experience in digital growth, i focus on websites, performance marketing, and automation, i truly enjoy working with businesses that want the whole system to work together, not just the pieces. Let's build something that grows!";
