// Mock data for /final — HerCircle, single-direction redesign per client brief.
// Extends concepts from v2 mock with brief-specific 12-winner gallery,
// 8 brand discount partners, Share The Dignity impact stats.

export type FinalTier = {
  id: string;
  name: string;
  monthly: number;
  weekly: number;
  tagline: string;
  entries: number;
  perks: readonly string[];
  featured?: boolean;
};

export const finalTiers: readonly FinalTier[] = [
  {
    id: "insider",
    name: "Insider",
    monthly: 9.99,
    weekly: 9.99,
    tagline: "Step into the Circle. Discover what it feels like to belong.",
    entries: 1,
    perks: [
      "1 entry to the weekly draw",
      "Members-only newsletter (twice monthly)",
      "Preview access to partner discounts",
      "Standing invitation to seasonal events",
    ],
  },
  {
    id: "edit",
    name: "The Edit",
    monthly: 29.99,
    weekly: 29.99,
    tagline: "Most-loved seat at the table. Five entries, full access.",
    entries: 5,
    perks: [
      "5 entries to every weekly draw",
      "Full discount vault — eight curated brands",
      "Priority RSVP to all in-person events",
      "Quarterly Edit drop posted to your door",
      "All Insider perks",
    ],
    featured: true,
  },
  {
    id: "circle",
    name: "Circle",
    monthly: 49.99,
    weekly: 49.99,
    tagline: "Front row. Concierge access. Every event. Every perk.",
    entries: 12,
    perks: [
      "12 entries per draw",
      "Every event, every city — first to RSVP",
      "Personal concierge for member queries",
      "Annual signature gift",
      "All Edit perks",
    ],
  },
] as const;

export type FinalWinner = {
  firstName: string;
  initial: string;
  suburb: string;
  state: string;
  date: string;
  prize: string;
  value: number;
  quote?: string;
  hue: number;
};

// Twelve winners — first name + last initial + suburb only (privacy + premium feel).
export const finalWinners: readonly FinalWinner[] = [
  { firstName: "Ava", initial: "B", suburb: "South Yarra", state: "VIC", date: "23 Apr 2026", prize: "MacBook Air + AirPods Max", value: 2200, quote: "Best Wednesday of my year.", hue: 18 },
  { firstName: "Janaya", initial: "W", suburb: "Bondi", state: "NSW", date: "16 Apr 2026", prize: "Louis Vuitton Pochette", value: 3700, quote: "I joined for the discount codes. Then my phone rang.", hue: 340 },
  { firstName: "Tiana", initial: "M", suburb: "New Farm", state: "QLD", date: "9 Apr 2026", prize: "iPhone 17 Pro + Rhode edit", value: 1500, quote: "My sister joined the next day.", hue: 305 },
  { firstName: "Emily", initial: "B", suburb: "Cottesloe", state: "WA", date: "2 Apr 2026", prize: "Dyson Airwrap Complete", value: 1200, quote: "The girls at work won't believe me.", hue: 38 },
  { firstName: "Sienna", initial: "P", suburb: "Toorak", state: "VIC", date: "26 Mar 2026", prize: "Cartier Love Bracelet", value: 8500, quote: "I cried for forty minutes. Then I called my mum.", hue: 8 },
  { firstName: "Ruby", initial: "K", suburb: "Glenelg", state: "SA", date: "19 Mar 2026", prize: "Net-a-Porter $5,000 voucher", value: 5000, quote: "I'd been saving for one piece. Now I have eleven.", hue: 280 },
  { firstName: "Mei", initial: "L", suburb: "Surry Hills", state: "NSW", date: "12 Mar 2026", prize: "Sydney spa weekend for two", value: 1800, quote: "I took my mum.", hue: 158 },
  { firstName: "Harper", initial: "T", suburb: "Fitzroy", state: "VIC", date: "5 Mar 2026", prize: "Aesop signature collection", value: 850, hue: 88 },
  { firstName: "Olivia", initial: "M", suburb: "Hawthorn", state: "VIC", date: "26 Feb 2026", prize: "Mecca $1,500 voucher", value: 1500, quote: "I felt seen for the first time in months.", hue: 14 },
  { firstName: "Charlotte", initial: "S", suburb: "Paddington", state: "NSW", date: "19 Feb 2026", prize: "Camilla & Marc dress capsule", value: 2400, hue: 350 },
  { firstName: "Isla", initial: "R", suburb: "Subiaco", state: "WA", date: "12 Feb 2026", prize: "Frank Body lifetime supply", value: 720, quote: "I have not bought body scrub in three months.", hue: 22 },
  { firstName: "Zara", initial: "H", suburb: "North Adelaide", state: "SA", date: "5 Feb 2026", prize: "Glasshouse home fragrance set", value: 480, hue: 30 },
] as const;

export type FinalEvent = {
  id: string;
  title: string;
  venue: string;
  city: string;
  state: string;
  date: string;
  time: string;
  category: "wellness" | "social" | "creative" | "founder";
  blurb: string;
  spotsLeft: number;
  hue: number;
};

export const finalEvents: readonly FinalEvent[] = [
  {
    id: "pilates-pinot",
    title: "Pilates + Pinot",
    venue: "Studio Pilates International",
    city: "Toorak",
    state: "VIC",
    date: "Sun 24 May 2026",
    time: "10:00 — 12:30",
    category: "wellness",
    blurb: "Reformer class, then a glass and small plates upstairs.",
    spotsLeft: 4,
    hue: 88,
  },
  {
    id: "breathwork-retreat",
    title: "Breathwork Retreat",
    venue: "Rae's on Wategos",
    city: "Byron Bay",
    state: "NSW",
    date: "Sat 12 Jul 2026",
    time: "09:00 — 14:00",
    category: "wellness",
    blurb: "Sunrise breath work, beach walk, restorative lunch. Capped at twelve.",
    spotsLeft: 3,
    hue: 180,
  },
  {
    id: "rooftop-drinks",
    title: "Rooftop Drinks",
    venue: "Eau de Vie",
    city: "Darlinghurst",
    state: "NSW",
    date: "Fri 6 Jun 2026",
    time: "18:30 — 22:00",
    category: "social",
    blurb: "Members-only summer drinks night. Bring a friend at member price.",
    spotsLeft: 8,
    hue: 200,
  },
  {
    id: "founders-brunch",
    title: "Founder's Brunch",
    venue: "Stokehouse",
    city: "St Kilda",
    state: "VIC",
    date: "Sat 14 Jun 2026",
    time: "11:00 — 14:00",
    category: "founder",
    blurb: "An intimate brunch with three Australian founders we've partnered with.",
    spotsLeft: 2,
    hue: 24,
  },
  {
    id: "pottery-class",
    title: "Pottery Class",
    venue: "Clay Sydney",
    city: "Marrickville",
    state: "NSW",
    date: "Sun 27 Jul 2026",
    time: "13:00 — 16:00",
    category: "creative",
    blurb: "Two-hour wheel-throwing workshop. Take your piece home, glazed.",
    spotsLeft: 6,
    hue: 22,
  },
  {
    id: "perfume-workshop",
    title: "Perfume Workshop",
    venue: "Agence Parfum",
    city: "Collingwood",
    state: "VIC",
    date: "Sat 23 Aug 2026",
    time: "14:00 — 17:00",
    category: "creative",
    blurb: "Build your own signature scent with a master perfumer. Take a 50ml bottle.",
    spotsLeft: 5,
    hue: 320,
  },
] as const;

export type FinalPartner = {
  name: string;
  category: string;
  discount: string;
  code: string;
  blurb: string;
  hue: number;
};

// Eight credible Australian brands per brief.
export const finalPartners: readonly FinalPartner[] = [
  { name: "Aje", category: "Fashion", discount: "20% off", code: "HER15", blurb: "Romantic, considered Australian fashion.", hue: 0 },
  { name: "Camilla and Marc", category: "Fashion", discount: "20% off", code: "CIRCLE20", blurb: "Tailoring for the woman who knows her shape.", hue: 18 },
  { name: "Aesop", category: "Skin & Body", discount: "15% off", code: "HER15A", blurb: "The everyday luxury you already use.", hue: 90 },
  { name: "Bondi Sands", category: "Body", discount: "20% off", code: "BONDI20", blurb: "Cult Australian tan and body care.", hue: 30 },
  { name: "Frank Body", category: "Body", discount: "20% off", code: "FRANK20", blurb: "Body scrubs that actually do what they say.", hue: 14 },
  { name: "T2", category: "Tea", discount: "15% off", code: "T2HER15", blurb: "Considered tea for the slow afternoon.", hue: 350 },
  { name: "Mecca", category: "Beauty", discount: "10% off + free gift", code: "MECCA10", blurb: "The beauty hall, minus the markup.", hue: 320 },
  { name: "P.E Nation", category: "Activewear", discount: "20% off", code: "PEN20", blurb: "Activewear that is actually in your rotation.", hue: 200 },
] as const;

// Share The Dignity impact stats.
export const finalCharity = {
  partner: "Share The Dignity",
  contributedYTD: 24820,
  contributedAllTime: 87340,
  womenSupported: 12480,
  perMember: 5,
  story:
    "Share The Dignity is an Australian women's charity working at the intersection of safety, dignity, and economic independence. We partner with them across our four impact pillars.",
  impacts: [
    {
      title: "Period products",
      blurb: "For women experiencing homelessness — distributed via dignity packs in shelters and refuges nationally.",
      hue: 350,
    },
    {
      title: "It's In The Bag",
      blurb: "Christmas hampers filled with essentials, given to women in crisis at Christmas.",
      hue: 30,
    },
    {
      title: "Pads4Dads",
      blurb: "Free pads and tampons in shopping centres, men's bathrooms, and community spaces.",
      hue: 200,
    },
    {
      title: "Period Pride Reports",
      blurb: "Annual research that drives policy change — including the abolition of the tampon tax.",
      hue: 280,
    },
  ],
} as const;

export const finalDashboard = {
  memberName: "Olivia",
  initial: "M",
  joinedDate: "Member since August 2025",
  tier: "The Edit",
  entriesThisDraw: 12,
  charityContributedYTD: 24,
  upcomingEventsCount: 3,
  rsvpedEventIds: ["pilates-pinot", "rooftop-drinks", "founders-brunch"] as const,
  unlockedPartnerNames: ["Aesop", "Camilla and Marc", "Frank Body", "Glasshouse"] as const,
} as const;

export const finalNextDraw = {
  prize: "Apple Bundle OR $2,000 Cash",
  prizeDetails: ["AirPods Max", "Apple Watch Series 10", "Or take the cash."],
  drawDate: "Wednesday, 13 May 2026 — 8:00pm AEST",
  drawTime: "2026-05-13T20:00:00+10:00",
  liveOn: "Instagram Live · @hercircle",
  totalEntries: 14823,
} as const;

export function finalCountdown(target: string = finalNextDraw.drawTime) {
  const now = Date.now();
  const t = new Date(target).getTime();
  const diff = Math.max(0, t - now);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    mins: Math.floor((diff % 3_600_000) / 60_000),
    secs: Math.floor((diff % 60_000) / 1000),
  };
}

/** Deterministic warm gradient for placeholder portraits. */
export function portraitStyle(hue: number): { background: string } {
  const h2 = (hue + 28) % 360;
  return {
    background: `linear-gradient(155deg, hsl(${hue} 55% 78%) 0%, hsl(${h2} 45% 62%) 60%, hsl(${(hue + 340) % 360} 35% 38%) 100%)`,
  };
}
