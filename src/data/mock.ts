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
