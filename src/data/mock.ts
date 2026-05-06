// Static mock data — pitch artefact only, no backend.

export type Tier = {
  id: string;
  name: string;
  monthly: number;
  weekly: number;
  blurb: string;
  entries: number;
  bonusEntries: number;
  perks: readonly string[];
  featured?: boolean;
};

export const tiers: readonly Tier[] = [
  {
    id: "insider",
    name: "Insider",
    monthly: 9.99,
    weekly: 2.49,
    blurb: "Your front door to the Vault.",
    entries: 1,
    bonusEntries: 100,
    perks: [
      "1 entry per monthly draw",
      "Access to 4+ partner brand discounts",
      "Members-only newsletter",
      "Weekly draw alerts",
    ],
  },
  {
    id: "luxe",
    name: "Luxe",
    monthly: 29.99,
    weekly: 7.49,
    blurb: "The bestseller. More entries, deeper access.",
    entries: 5,
    bonusEntries: 500,
    perks: [
      "5 entries per monthly draw",
      "All Insider perks",
      "Priority access to bonus draws",
      "15% off curated partner brands",
      "Quarterly self-care drop",
    ],
    featured: true,
  },
  {
    id: "icon",
    name: "Icon",
    monthly: 49.99,
    weekly: 12.49,
    blurb: "Front-row seat. Most entries, full club benefits.",
    entries: 12,
    bonusEntries: 1000,
    perks: [
      "12 entries per monthly draw",
      "All Luxe perks",
      "Invitation to live events in Sydney + Melbourne",
      "30% off all partner brands",
      "Personal concierge for member queries",
      "Annual luxury gift drop",
    ],
  },
] as const;

export const pastWinners = [
  { date: "18 March 2026", name: "Ava B.", state: "VIC", prize: "MacBook Air + AirPods Max", value: 2200, quote: "I screamed. My partner thought something was wrong. Best Wednesday night of my life." },
  { date: "20 February 2026", name: "Janaya W.", state: "NSW", prize: "Louis Vuitton Bundle", value: 3700, quote: "I'd been a member 4 months. Honestly stopped expecting it. Then my phone rang." },
  { date: "28 January 2026", name: "Tiana M.", state: "QLD", prize: "iPhone 17 + Rhode Beauty", value: 1500, quote: "My sister joined the next day. She's still trying to win." },
  { date: "21 November 2025", name: "Emily B.", state: "WA", prize: "Dyson Airwrap + Hair Pack", value: 1200, quote: "My hair has never looked like this. The girls at work cannot believe it." },
  { date: "16 October 2025", name: "Sienna P.", state: "VIC", prize: "Cartier Love Bracelet", value: 8500, quote: "I cried for forty minutes. Then I called my mum." },
  { date: "18 September 2025", name: "Ruby K.", state: "SA", prize: "Net-a-Porter $5,000 voucher", value: 5000, quote: "I'd been saving for one piece. Now I have eleven." },
] as const;

export const currentDraw = {
  prize: "Apple Bundle OR $2,000 Cash",
  prizeDetails: ["AirPods Max", "Apple Watch Series 10", "Or take the cash. Your choice."],
  drawDate: "Wednesday, 6 May 2026 — 8:00pm AEST",
  drawTime: "2026-05-06T20:00:00+10:00",
  liveOn: "Instagram Live · @winhervault",
  totalEntries: 14823,
  yourEntriesIfLuxe: 5,
  closesAt: "Wednesday, 6 May 2026 — 7:30pm AEST",
} as const;

export const charity = {
  partner: "Share The Dignity",
  totalDonatedThisYear: 24820,
  perMember: 5,
  story:
    "$5 from every monthly membership goes to Share The Dignity — supporting women experiencing homelessness, domestic violence, and period poverty across Australia.",
} as const;

export const partners = [
  { name: "Rationale", category: "Skincare", discount: "20%" },
  { name: "Aesop", category: "Beauty", discount: "15%" },
  { name: "Camilla & Marc", category: "Fashion", discount: "20%" },
  { name: "Bared Footwear", category: "Footwear", discount: "15%" },
  { name: "Sans Beast", category: "Accessories", discount: "20%" },
  { name: "Edward & Elm", category: "Homewares", discount: "25%" },
  { name: "Dissh", category: "Fashion", discount: "15%" },
  { name: "Mecca", category: "Beauty", discount: "10%" },
] as const;

export const dashboard = {
  memberName: "Olivia",
  joinedDate: "Member since August 2025",
  tier: "Luxe",
  nextDraw: "Wednesday 6 May · 8:00pm AEST",
  entriesThisDraw: 5,
  totalEntriesYear: 47,
  partnerDiscountsUnlocked: 6,
  partnerDiscountsAvailable: 8,
  charityContributedThisMonth: 5,
  charityContributedYearToDate: 40,
  referrals: 2,
  referralReward: "Next: free month at 3 referrals",
  upcomingEvents: [
    { title: "Members' Brunch · Sydney", date: "Sat 24 May" },
    { title: "Live Draw · IG @winhervault", date: "Wed 6 May, 8pm" },
  ],
  recentActivity: [
    { label: "Entered May Apple Draw", detail: "+5 entries", date: "27 Apr" },
    { label: "Used Aesop discount", detail: "Saved $42", date: "21 Apr" },
    { label: "Charity contribution", detail: "$5 to Share The Dignity", date: "1 Apr" },
  ],
} as const;

// Returns ms-precise countdown segments to the next draw.
export function getCountdown(target: string = currentDraw.drawTime) {
  const now = Date.now();
  const t = new Date(target).getTime();
  const diff = Math.max(0, t - now);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const mins = Math.floor((diff % 3_600_000) / 60_000);
  const secs = Math.floor((diff % 60_000) / 1000);
  return { days, hours, mins, secs };
}

/* ============================================================
 * V2 DATA — premium membership platform redesign
 * Used by all /v2/{a,b,c,d} directions. The brief reframes the
 * product as a lifestyle membership, not a giveaway site.
 * ============================================================ */

export type V2Tier = {
  id: string;
  name: string;
  monthly: number;
  weekly: number;
  tagline: string;
  description: string;
  entries: number;
  perks: readonly string[];
  featured?: boolean;
};

// Tier names per direction so each rebrand candidate has its own voice.
// Same pricing, different vocabulary. Consumed via getV2Tiers(directionSlug).
export const v2TiersByDirection: Record<string, readonly V2Tier[]> = {
  // /v2/a HerCircle — editorial luxe
  a: [
    {
      id: "muse",
      name: "The Muse",
      monthly: 9.99,
      weekly: 2.31,
      tagline: "An introduction to the Circle.",
      description: "The doorway in. Discover what it feels like to belong somewhere considered.",
      entries: 1,
      perks: [
        "One entry to the monthly Circle draw",
        "Members-only newsletter (twice monthly)",
        "Preview access to partner discounts",
        "Standing invitation to seasonal events",
      ],
    },
    {
      id: "edit",
      name: "The Edit",
      monthly: 29.99,
      weekly: 6.92,
      tagline: "Our most-loved seat at the table.",
      description: "Five entries, full discount access, and the curated quarterly Edit drop.",
      entries: 5,
      perks: [
        "Five entries to every monthly draw",
        "Full discount vault — twelve curated brands",
        "Quarterly Edit drop posted to your door",
        "Priority RSVP to all in-person events",
        "All Muse perks",
      ],
      featured: true,
    },
    {
      id: "atelier",
      name: "The Atelier",
      monthly: 49.99,
      weekly: 11.54,
      tagline: "Front of house. Closest to the room.",
      description: "Twelve entries, every event, and a personal concierge who knows your name.",
      entries: 12,
      perks: [
        "Twelve entries per draw",
        "Every event, every city — first to RSVP",
        "Personal concierge for member queries",
        "Annual signature gift",
        "All Edit perks",
      ],
    },
  ],
  // /v2/b Haus Of Her — soft premium / spa-calm
  b: [
    {
      id: "still",
      name: "Still",
      monthly: 9.99,
      weekly: 2.31,
      tagline: "Begin where you are.",
      description: "A quiet entry to the Haus. Discover the discipline of slow luxury.",
      entries: 1,
      perks: [
        "One entry to the monthly draw",
        "The Haus Letter — fortnightly slow read",
        "A taste of partner discounts",
        "Open invitation to Haus events",
      ],
    },
    {
      id: "soft",
      name: "Soft",
      monthly: 29.99,
      weekly: 6.92,
      tagline: "Where most of the Haus lives.",
      description: "Fuller access — the discount vault, the Edit drop, every gathering.",
      entries: 5,
      perks: [
        "Five entries per draw",
        "Twelve curated discount partners",
        "Quarterly Haus Drop — beauty + home objects",
        "Priority on every event",
        "All Still perks",
      ],
      featured: true,
    },
    {
      id: "studio",
      name: "Studio",
      monthly: 49.99,
      weekly: 11.54,
      tagline: "The Haus, in full.",
      description: "Twelve entries, every door open, and a concierge who keeps your preferences.",
      entries: 12,
      perks: [
        "Twelve entries per draw",
        "All events, all cities, first access",
        "Personal Haus concierge",
        "Annual gift, hand-finished",
        "All Soft perks",
      ],
    },
  ],
  // /v2/c WinHer Vault — confident femme / commercial
  c: [
    {
      id: "insider",
      name: "Insider",
      monthly: 9.99,
      weekly: 2.31,
      tagline: "Step inside the Vault.",
      description: "Get a taste of the club. One entry, partner perks, you're in.",
      entries: 1,
      perks: [
        "1 entry per monthly draw",
        "Members-only newsletter",
        "Preview partner discount codes",
        "Open invite to all events",
      ],
    },
    {
      id: "luxe",
      name: "Luxe",
      monthly: 29.99,
      weekly: 6.92,
      tagline: "The bestseller. The crowd favourite.",
      description: "Five entries, the full discount vault, and the seasonal drop.",
      entries: 5,
      perks: [
        "5 entries per draw",
        "Full vault — 12 brand partners",
        "Quarterly self-care drop",
        "Priority event RSVP",
        "All Insider perks",
      ],
      featured: true,
    },
    {
      id: "icon",
      name: "Icon",
      monthly: 49.99,
      weekly: 11.54,
      tagline: "Front row. Concierge access.",
      description: "Twelve entries, every event, every perk. The full Vault experience.",
      entries: 12,
      perks: [
        "12 entries per draw",
        "Every event, first access",
        "Personal concierge",
        "Annual luxury gift drop",
        "All Luxe perks",
      ],
    },
  ],
  // /v2/d HerCircle — modern minimal / aesop-adjacent
  d: [
    {
      id: "one",
      name: "I",
      monthly: 9.99,
      weekly: 2.31,
      tagline: "Quiet entry.",
      description: "A single seat at the table.",
      entries: 1,
      perks: [
        "One entry, one draw",
        "Members-only correspondence",
        "Discount preview",
        "Standing event invitation",
      ],
    },
    {
      id: "two",
      name: "II",
      monthly: 29.99,
      weekly: 6.92,
      tagline: "Considered access.",
      description: "Five entries. Full vault. Quarterly object.",
      entries: 5,
      perks: [
        "Five entries per draw",
        "Twelve discount partners",
        "Quarterly object — designed, not bought",
        "Priority RSVP",
        "All I perks",
      ],
      featured: true,
    },
    {
      id: "three",
      name: "III",
      monthly: 49.99,
      weekly: 11.54,
      tagline: "Whole.",
      description: "Twelve entries, every door, named concierge.",
      entries: 12,
      perks: [
        "Twelve entries per draw",
        "Every event, every city",
        "Named concierge",
        "Annual signature object",
        "All II perks",
      ],
    },
  ],
};

export function getV2Tiers(slug: string): readonly V2Tier[] {
  return v2TiersByDirection[slug] ?? v2TiersByDirection.a;
}

// Eight winners — first name + last initial + suburb only (privacy + premium feel).
// imageHue = HSL hue used by deterministic placeholder gradient.
export type V2Winner = {
  firstName: string;
  initial: string;
  suburb: string;
  state: string;
  date: string;
  prize: string;
  value: number;
  quote: string;
  imageHue: number;
};

export const v2Winners: readonly V2Winner[] = [
  {
    firstName: "Ava",
    initial: "B",
    suburb: "South Yarra",
    state: "VIC",
    date: "18 March 2026",
    prize: "MacBook Air + AirPods Max",
    value: 2200,
    quote: "I'd been a member six months. Honestly forgot I was still in. Best Wednesday of my year.",
    imageHue: 18,
  },
  {
    firstName: "Janaya",
    initial: "W",
    suburb: "Bondi",
    state: "NSW",
    date: "20 February 2026",
    prize: "Louis Vuitton Pochette + matching wallet",
    value: 3700,
    quote: "The whole reason I joined was for the discount codes. Then my phone rang.",
    imageHue: 340,
  },
  {
    firstName: "Tiana",
    initial: "M",
    suburb: "New Farm",
    state: "QLD",
    date: "28 January 2026",
    prize: "iPhone 17 Pro + Rhode Beauty edit",
    value: 1500,
    quote: "My sister joined the next day. She's still trying to win.",
    imageHue: 305,
  },
  {
    firstName: "Emily",
    initial: "B",
    suburb: "Cottesloe",
    state: "WA",
    date: "21 November 2025",
    prize: "Dyson Airwrap Complete",
    value: 1200,
    quote: "The girls at work won't believe me. I had to bring it in to show them.",
    imageHue: 38,
  },
  {
    firstName: "Sienna",
    initial: "P",
    suburb: "Toorak",
    state: "VIC",
    date: "16 October 2025",
    prize: "Cartier Love Bracelet",
    value: 8500,
    quote: "I cried for forty minutes. Then I called my mum.",
    imageHue: 8,
  },
  {
    firstName: "Ruby",
    initial: "K",
    suburb: "Glenelg",
    state: "SA",
    date: "18 September 2025",
    prize: "Net-a-Porter $5,000 voucher",
    value: 5000,
    quote: "I'd been saving for one piece. Now I have eleven.",
    imageHue: 280,
  },
  {
    firstName: "Mei",
    initial: "L",
    suburb: "Surry Hills",
    state: "NSW",
    date: "14 August 2025",
    prize: "Sydney spa weekend for two",
    value: 1800,
    quote: "I took my mum. We didn't speak about anything important. It was perfect.",
    imageHue: 158,
  },
  {
    firstName: "Harper",
    initial: "T",
    suburb: "Fitzroy",
    state: "VIC",
    date: "10 July 2025",
    prize: "Aesop signature collection bundle",
    value: 850,
    quote: "I'd been buying their hand wash for eight years. Now I'm set for two.",
    imageHue: 88,
  },
] as const;

// Six upcoming events — wellness / social / creative mix.
export type V2Event = {
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
  tier: "all" | "edit-plus" | "atelier-only";
  imageHue: number;
};

export const v2Events: readonly V2Event[] = [
  {
    id: "pilates-pinot",
    title: "Pilates + Pinot",
    venue: "Studio Pilates International",
    city: "Toorak",
    state: "VIC",
    date: "Sunday 24 May 2026",
    time: "10:00 — 12:30",
    category: "wellness",
    blurb: "Reformer class, then a glass and small plates upstairs. The way Sundays should feel.",
    spotsLeft: 4,
    tier: "all",
    imageHue: 88,
  },
  {
    id: "founders-circle-brunch",
    title: "Founder's Circle Brunch",
    venue: "Stokehouse",
    city: "St Kilda",
    state: "VIC",
    date: "Saturday 14 June 2026",
    time: "11:00 — 14:00",
    category: "founder",
    blurb: "An intimate brunch with three Australian founders we've partnered with this year.",
    spotsLeft: 2,
    tier: "edit-plus",
    imageHue: 24,
  },
  {
    id: "supper-club-bondi",
    title: "Members' Supper Club",
    venue: "Icebergs Dining Room",
    city: "Bondi",
    state: "NSW",
    date: "Friday 20 June 2026",
    time: "19:00 — 22:00",
    category: "social",
    blurb: "Long table, ocean view, four courses. Bring a friend at full member price.",
    spotsLeft: 8,
    tier: "all",
    imageHue: 200,
  },
  {
    id: "wellness-retreat",
    title: "Half-day Wellness Retreat",
    venue: "Rae's on Wategos",
    city: "Byron Bay",
    state: "NSW",
    date: "Saturday 12 July 2026",
    time: "09:00 — 14:00",
    category: "wellness",
    blurb: "Sunrise breath work, beach walk, restorative lunch. Capped at twelve.",
    spotsLeft: 3,
    tier: "edit-plus",
    imageHue: 180,
  },
  {
    id: "creative-workshop",
    title: "Floral Design Workshop",
    venue: "The Flower Drum",
    city: "Paddington",
    state: "NSW",
    date: "Sunday 27 July 2026",
    time: "13:00 — 16:00",
    category: "creative",
    blurb: "Two-hour styled workshop with a senior florist. Take your arrangement home.",
    spotsLeft: 6,
    tier: "all",
    imageHue: 340,
  },
  {
    id: "atelier-dinner",
    title: "Atelier Dinner",
    venue: "Attica",
    city: "Ripponlea",
    state: "VIC",
    date: "Saturday 8 August 2026",
    time: "19:30",
    category: "founder",
    blurb: "Twelve seats. Eight courses. Conversation we don't have at brunch.",
    spotsLeft: 1,
    tier: "atelier-only",
    imageHue: 12,
  },
] as const;

// Twelve discount partners — credible Australian women's lifestyle brands.
// Codes are mock; only revealed in member view.
export type V2Partner = {
  name: string;
  category: string;
  discount: string;
  code: string;
  blurb: string;
  hue: number;
};

export const v2Partners: readonly V2Partner[] = [
  { name: "Aesop", category: "Skin & Body", discount: "15% off", code: "HER15", blurb: "The everyday luxury you already use, at a price that pays back your membership.", hue: 90 },
  { name: "Rationale", category: "Skincare", discount: "20% off", code: "CIRCLE20", blurb: "Personalised skincare backed by the only thing that matters — visible results.", hue: 30 },
  { name: "Camilla & Marc", category: "Fashion", discount: "20% off", code: "EDIT20", blurb: "Tailoring for the woman who already knows her shape.", hue: 0 },
  { name: "Dissh", category: "Fashion", discount: "15% off", code: "HAUS15", blurb: "Considered Australian wardrobe staples that don't shout.", hue: 22 },
  { name: "Bared Footwear", category: "Footwear", discount: "15% off", code: "BARED15", blurb: "Podiatrist-designed shoes that don't ask you to choose between feel and form.", hue: 12 },
  { name: "Sans Beast", category: "Accessories", discount: "20% off", code: "BEAST20", blurb: "Vegan luxury accessories made in small batches in Melbourne.", hue: 350 },
  { name: "Edward & Elm", category: "Homewares", discount: "25% off", code: "HOME25", blurb: "Heirloom homewares for the home you actually live in.", hue: 38 },
  { name: "Mecca", category: "Beauty", discount: "10% off + free gift", code: "HER10", blurb: "The beauty hall, minus the beauty hall markup.", hue: 320 },
  { name: "Lululemon", category: "Activewear", discount: "10% off", code: "LULU10", blurb: "The activewear that's actually in your rotation.", hue: 200 },
  { name: "Frank Body", category: "Body", discount: "20% off", code: "FRANK20", blurb: "Cult Australian body care that does what it says.", hue: 14 },
  { name: "Honey Birdette", category: "Lingerie", discount: "15% off", code: "HONEY15", blurb: "Lingerie made for you, not for them.", hue: 340 },
  { name: "Glasshouse Fragrances", category: "Home Fragrance", discount: "20% off", code: "GLASS20", blurb: "The candle that's already on every member's hallway table.", hue: 30 },
] as const;

// Charity partners — generic copy because real partner is TBD.
export type V2Charity = {
  id: string;
  name: string;
  cause: string;
  blurb: string;
  contributedYTD: number;
  hue: number;
};

export const v2Charities: readonly V2Charity[] = [
  {
    id: "primary",
    name: "An Australian women's charity",
    cause: "Women's safety, dignity, and economic independence",
    blurb:
      "We're finalising our charity partnership for 2026 — an Australian women's organisation working at the intersection of safety, dignity, and economic independence. We'll announce shortly.",
    contributedYTD: 24820,
    hue: 350,
  },
  {
    id: "secondary",
    name: "Local women's shelter network",
    cause: "Crisis accommodation",
    blurb:
      "A portion of every membership funds short-stay crisis accommodation for women and children leaving unsafe homes.",
    contributedYTD: 8400,
    hue: 280,
  },
  {
    id: "tertiary",
    name: "Period dignity programs",
    cause: "Period poverty",
    blurb:
      "Sanitary products and dignity packs distributed through schools and community centres in regional Australia.",
    contributedYTD: 6200,
    hue: 30,
  },
  {
    id: "quaternary",
    name: "Women's career pathways",
    cause: "Economic independence",
    blurb:
      "Targeted scholarships and trade-pathway funding for women re-entering the workforce after caring breaks.",
    contributedYTD: 5400,
    hue: 200,
  },
] as const;

// Member dashboard — Olivia M., per brief.
// Tier name is rendered per-direction by reading getV2Tiers(slug)[1].name.
export type V2DashboardEvent = {
  eventId: string;
  rsvped: boolean;
};

export const v2Member = {
  name: "Olivia",
  initial: "M",
  joinedDate: "Member since August 2025",
  monthsActive: 9,
  // Aggregate counters — direction can opt to show subset.
  entriesThisDraw: 12,
  totalEntriesYear: 84,
  charityContributedYTD: 45,
  charityContributedAllTime: 87,
  unlockedCodes: 4,
  totalCodes: 12,
  // RSVPs to upcoming events (3 of the 6 events above).
  eventRsvps: ["pilates-pinot", "supper-club-bondi", "creative-workshop"] as const,
  // Recent activity for the dashboard timeline.
  recentActivity: [
    { label: "Entered May Apple Draw", detail: "+12 entries", date: "27 Apr 2026", kind: "draw" as const },
    { label: "RSVP'd · Pilates + Pinot", detail: "Sun 24 May · Toorak", date: "21 Apr 2026", kind: "event" as const },
    { label: "Used Aesop discount", detail: "Saved $42 · code HER15", date: "18 Apr 2026", kind: "discount" as const },
    { label: "Charity contribution", detail: "$5 · April", date: "1 Apr 2026", kind: "charity" as const },
    { label: "Read · The Haus Letter", detail: "Volume Eight", date: "28 Mar 2026", kind: "read" as const },
  ],
  // Codes the member has unlocked — references partners by name.
  unlockedPartnerNames: ["Aesop", "Camilla & Marc", "Bared Footwear", "Glasshouse Fragrances"] as const,
} as const;

// Stable next-draw target for v2 countdown components.
export const v2NextDraw = {
  prize: "Apple Bundle OR $2,000 Cash",
  prizeDetails: ["AirPods Max", "Apple Watch Series 10", "Or take the cash. Your choice."],
  drawDate: "Wednesday, 6 May 2026 — 8:00pm AEST",
  drawTime: "2026-05-06T20:00:00+10:00",
  liveOn: "Instagram Live · @winhervault",
  totalEntries: 14823,
} as const;

export function v2Countdown(target: string = v2NextDraw.drawTime) {
  return getCountdown(target);
}
