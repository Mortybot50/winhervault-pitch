// Mock data for /final — HerCircle, single-direction redesign per client brief.
// v2: real content sourced from public/scrape/MANIFEST.json (winhervault.com).
// Pricing matches live site exactly: $2.50/wk Insider · $5/wk Edit · $15/wk Circle.
// Charities: BCNA, OzChild, FOUR PAWS. Lifestyle imagery from /scrape/.

export type FinalTier = {
  id: string;
  name: string;
  weekly: number;
  weeklyLabel: string;     // "$2.50" — manifest-formatted
  tagline: string;
  entries: number;         // numeric count for FREE entries / draw
  badge?: string;          // "MOST POPULAR" / "Cancel anytime" / "Premium access"
  perks: readonly string[];
  featured?: boolean;
};

export const finalTiers: readonly FinalTier[] = [
  {
    id: "insider",
    name: "The Insider",
    weekly: 2.5,
    weeklyLabel: "$2.50",
    tagline: "Step into the Circle. Discover what it feels like to belong.",
    entries: 10,
    badge: "Cancel anytime",
    perks: [
      "10 × accumulating FREE entries into every giveaway",
      "Access to all weekly giveaways",
      "Access to exclusive member-only discounts",
      "Access to member-only events & content",
      "Early access to selected giveaways & comps",
    ],
  },
  {
    id: "edit",
    name: "The Edit",
    weekly: 5,
    weeklyLabel: "$5",
    tagline: "Most-loved seat at the table. Full access, real perks, real codes.",
    entries: 25,
    badge: "MOST POPULAR",
    featured: true,
    perks: [
      "25 × accumulating FREE entries into every giveaway",
      "Access to all weekly giveaways",
      "Access to exclusive member-only discounts",
      "Access to member-only events & content",
      "Early access to selected giveaways & competitions",
    ],
  },
  {
    id: "circle",
    name: "The Circle",
    weekly: 15,
    weeklyLabel: "$15",
    tagline: "Front row. VIP perks. Bonus experiences. Premium event access.",
    entries: 100,
    badge: "Premium access",
    perks: [
      "100 × accumulating FREE entries into every giveaway",
      "Access to all weekly giveaways",
      "Access to exclusive member-only discounts",
      "Access to member-only events & content",
      "VIP-only perks, bonus experiences & premium event access",
    ],
  },
] as const;

export type FinalWinner = {
  firstName: string;
  initial: string;
  date: string;
  prize: string;
  image: string;
  quote?: string;
};

// 8 real + 4 plausible Melbourne names with lifestyle photos.
export const finalWinners: readonly FinalWinner[] = [
  { firstName: "Ava", initial: "B", date: "30 Apr 2026", prize: "Apple bundle — AirPods Max + Apple Watch", image: "/scrape/IMG_2341.jpg", quote: "Best Wednesday of my year." },
  { firstName: "Janaya", initial: "W", date: "23 Apr 2026", prize: "Designer accessories drop", image: "/scrape/IMG_6736.jpg", quote: "I joined for the discount codes. Then my phone rang." },
  { firstName: "Tiana", initial: "M", date: "16 Apr 2026", prize: "Beauty + skincare edit", image: "/scrape/IMG_6737.jpg", quote: "My sister joined the next day." },
  { firstName: "Adithi", initial: "C", date: "9 Apr 2026", prize: "Dior bundle", image: "/scrape/dior_bundle.jpg", quote: "I had to read the email three times." },
  { firstName: "Holly", initial: "M", date: "2 Apr 2026", prize: "Dyson Airwrap Complete", image: "/scrape/dyson_sample_winner.jpg", quote: "The girls at work won't believe me." },
  { firstName: "Emily", initial: "B", date: "26 Mar 2026", prize: "Lifestyle hamper + voucher", image: "/scrape/8af500aa1e5261a54f1ee8abba22c6cc.jpg", quote: "I felt seen for the first time in months." },
  { firstName: "Sam", initial: "T", date: "19 Mar 2026", prize: "Wellness retreat for two", image: "/scrape/IMG_6738.jpg" },
  { firstName: "Kathryn", initial: "D", date: "12 Mar 2026", prize: "Designer fashion capsule", image: "/scrape/IMG_6739.jpg", quote: "I took my mum." },
  { firstName: "Sophie", initial: "K", date: "5 Mar 2026", prize: "Mecca $1,500 voucher", image: "/scrape/0R7A6705.jpg", quote: "I'd been saving for one piece. Now I have eleven." },
  { firstName: "Mia", initial: "R", date: "26 Feb 2026", prize: "Sydney spa weekend", image: "/scrape/0R7A6720.jpg" },
  { firstName: "Eva", initial: "H", date: "19 Feb 2026", prize: "Aesop signature collection", image: "/scrape/0R7A6869.jpg", quote: "I have not bought body scrub in three months." },
  { firstName: "Charlotte", initial: "P", date: "12 Feb 2026", prize: "Glasshouse home fragrance set", image: "/scrape/0R7A6881.jpg" },
] as const;

export type FinalEvent = {
  id: string;
  title: string;
  venue: string;
  date: string;
  category: string;
  blurb: string;
  spotsLeft: number;
  image: string;
};

export const finalEvents: readonly FinalEvent[] = [
  {
    id: "pilates-pinot",
    title: "Pilates + Pinot Sunday",
    venue: "Studio Pilates · Toorak",
    date: "Sun 17 May · 9:00am AEST",
    category: "Wellness",
    blurb: "Reformer class, then a glass and small plates upstairs.",
    spotsLeft: 4,
    image: "/scrape/0R7A7002.jpg",
  },
  {
    id: "founders-brunch",
    title: "Founder's Circle Brunch",
    venue: "Stokehouse · St Kilda",
    date: "Sat 30 May · 11:00am AEST",
    category: "Founder",
    blurb: "An intimate brunch with three Australian founders we've partnered with.",
    spotsLeft: 2,
    image: "/scrape/Girls_at_brunch.jpg",
  },
  {
    id: "movie-night",
    title: "Movie Night — Members Cinema",
    venue: "Lido Cinemas · Hawthorn",
    date: "Wed 4 Jun · 7:30pm AEST",
    category: "Social",
    blurb: "Members-only screening with cocktails on arrival and a post-credits panel.",
    spotsLeft: 8,
    image: "/scrape/0R7A6705.jpg",
  },
  {
    id: "cocktail-evening",
    title: "Cocktail + Connection Evening",
    venue: "Eau de Vie · CBD",
    date: "Thu 12 Jun · 7:00pm AEST",
    category: "Social",
    blurb: "Mid-week cocktails, intimate venue, the women you keep seeing on stories.",
    spotsLeft: 6,
    image: "/scrape/0R7A6513.jpg",
  },
  {
    id: "breathwork-brunch",
    title: "Breathwork + Brunch",
    venue: "The Shala · Fitzroy",
    date: "Sat 21 Jun · 9:30am AEST",
    category: "Wellness",
    blurb: "Sunrise breath work, restorative brunch, capped at twelve.",
    spotsLeft: 3,
    image: "/scrape/0R7A6720.jpg",
  },
  {
    id: "perfume-workshop",
    title: "Perfume Workshop",
    venue: "Lumira · Armadale",
    date: "Sun 6 Jul · 2:00pm AEST",
    category: "Creative",
    blurb: "Build your signature scent with a master perfumer. Take a 50ml bottle.",
    spotsLeft: 5,
    image: "/scrape/0R7A6869.jpg",
  },
] as const;

export type FinalPartner = {
  name: string;
  amount: string;
  code: string;
  desc: string;
  logo?: string;
};

export const finalPartners: readonly FinalPartner[] = [
  { name: "Mermaid Hair", amount: "20% OFF SITEWIDE", code: "HERCIRCLE20", desc: "A modern hair tools brand offering professional-grade wavers, curlers and styling accessories that help you create salon-worthy looks at home." },
  { name: "White Glow", amount: "15% OFF SITEWIDE", code: "HERCIRCLE15", desc: "Teeth-whitening and oral-care brand focused on delivering a brighter, healthier smile through simple at-home treatments." },
  { name: "White Fox Boutique", amount: "15% OFF SITEWIDE", code: "HERCIRCLE15", desc: "Bold, trend-forward online fashion brand delivering on-trend drops, fresh loungewear and occasion-ready pieces." },
  { name: "Rent My Dress", amount: "20% OFF SITEWIDE", code: "HERCIRCLE20", desc: "Designer dress rentals — perfect for weddings, birthdays, formals and girls' nights out. Over 350 designer pieces." },
  { name: "The Booby Co", amount: "20% OFF SITEWIDE", code: "HERCIRCLE20", desc: "Innovative fashion solutions designed to support, shape and smooth — wear what you want with total confidence.", logo: "/scrape/The-Booby-Co_logo.webp" },
  { name: "Princess Polly", amount: "15% OFF SITEWIDE", code: "HERCIRCLE15", desc: "Go-to online fashion boutique offering on-trend clothing, accessories and essentials for everyday style." },
  { name: "Alya Skin", amount: "10% OFF SITEWIDE", code: "HERCIRCLE10", desc: "High-performance, clean formulations inspired by Australian botanicals. Iconic pink clay mask + visible-results skincare." },
  { name: "MAC Cosmetics", amount: "15% OFF SITEWIDE", code: "HERCIRCLE15", desc: "Globally loved beauty brand known for high-performance makeup, professional-grade formulas and iconic shades." },
  { name: "Coco & Eve", amount: "15% OFF SITEWIDE", code: "HERCIRCLE15", desc: "Beauty brand known for high-performance haircare and skincare inspired by tropical ingredients.", logo: "/scrape/cocoandeve_logo.jpg" },
  { name: "Lounge Lovers", amount: "15% OFF SITEWIDE", code: "HERCIRCLE15", desc: "Contemporary furniture and homewares — stylish, comfortable pieces designed to elevate everyday living.", logo: "/scrape/Lounge-lovers-logo.webp" },
  { name: "Cotton On", amount: "20% OFF SITEWIDE", code: "HERCIRCLE20", desc: "Aussie lifestyle brand offering affordable, everyday fashion, basics and accessories for every wardrobe.", logo: "/scrape/cotton_on_logo.png" },
  { name: "Skinteq", amount: "20% OFF SITEWIDE", code: "HERCIRCLE20", desc: "Science-led skincare designed to nourish, protect and elevate. Advanced ingredients with targeted formulas.", logo: "/scrape/Skinteq_logo.jpg" },
  { name: "Fizz Functional", amount: "20% OFF SITEWIDE", code: "HERCIRCLE20", desc: "Sugar-free, functional sparkling beverages crafted for lifestyle balance — refreshing smart-drink alternatives.", logo: "/scrape/fizz_functional_logo.jpg" },
  { name: "Ms Morning", amount: "20% OFF SITEWIDE", code: "HERCIRCLE20", desc: "Skincare made for busy mornings — clean, multi-tasking formulas that deliver glass-skin glow with minimal effort." },
  { name: "POC Beauty", amount: "20% OFF SITEWIDE", code: "HERCIRCLE20", desc: "Vibrant Aussie-founded skincare for melanin-rich skin — cultural heritage + science-backed formulas.", logo: "/scrape/POC-PRIMARY-LOGO-blue.webp" },
  { name: "Hello Molly", amount: "20% OFF SITEWIDE", code: "HERCIRCLE20", desc: "Leading Australian fashion label — modern, feminine pieces for stylish, confident, effortlessly-put-together looks.", logo: "/scrape/Hello_Molly_logo.png" },
] as const;

export type FinalCharity = {
  name: string;
  tagline: string;
  description: string;
  image?: string;
  logo?: string;
};

export const finalCharities: readonly FinalCharity[] = [
  {
    name: "Breast Cancer Network Australia",
    tagline: "Empowering Australians affected by breast cancer.",
    description:
      "BCNA is Australia's peak consumer organisation working to ensure that people affected by breast cancer receive the best possible care, information and support. It advocates for better treatment, connects families to trusted resources, and represents the voices of those affected to strengthen the healthcare system.",
    image: "/scrape/bcna-celebration-at-the-office_web_banner.webp",
  },
  {
    name: "OzChild",
    tagline: "Stronger families. Safer children. Brighter futures.",
    description:
      "OzChild works to ensure vulnerable children, young people and families receive the care, protection and support they need to stay safe and thrive. Through foster care, family strengthening and early intervention programs, it helps create stable homes and brighter futures for children across Australia.",
    image: "/scrape/oz_child_image.jpg",
    logo: "/scrape/oz_child_logo.png",
  },
  {
    name: "FOUR PAWS",
    tagline: "Revealing suffering, rescuing animals, protecting futures.",
    description:
      "FOUR PAWS Australia is a registered charity working for a world where animals under human influence are treated with respect and compassion. Through campaigns, rescues and advocacy, FOUR PAWS reveals animal suffering, helps animals in need and drives long-term change in animal welfare.",
    image: "/scrape/four_paws.jpg",
  },
] as const;

export const finalCharityStats = {
  contributedYTD: 48200,
  womenSupported: 12480,
  story:
    "Every month, a portion of HerCircle goes to causes we genuinely care about. Three charity partners across women's health, children & families, and animal welfare. Direct, unconditional, every month.",
} as const;

export const finalDashboard = {
  memberName: "Olivia",
  initial: "M",
  joinedDate: "Member since August 2025",
  tier: "The Edit",
  tierWeekly: "$5",
  entriesThisDraw: 25,
  charityContributedYTD: 24,
  upcomingEventsCount: 2,
  unlockedCodes: 4,
  rsvpedEventIds: ["pilates-pinot", "movie-night", "founders-brunch"] as const,
  unlockedPartnerNames: ["Princess Polly", "Coco & Eve", "MAC Cosmetics", "Cotton On"] as const,
} as const;

export const finalNextDraw = {
  title: "APPLE BUNDLE OR THE CASH",
  prizeShort: "Apple bundle — AirPods Max + Apple Watch — or $2,000 cash",
  prizeDetails: ["AirPods Max", "Apple Watch Series 10", "Or take $2,000 cash."],
  drawDate: "Wednesday, 13 May 2026 — 8:00pm AEDT",
  drawTime: "2026-05-13T20:00:00+10:00",
  liveOn: "Instagram Live · @hercircle",
  totalEntries: 14823,
  heroImage: "/scrape/ChatGPT_Image_Apr_17_2026_11_17_21_AM.png",
  livePromise:
    "We're just getting started. The prizes are getting bigger, your chances of winning are getting better. Tune in live on Instagram, Wednesdays at 8PM AEDT.",
} as const;

export const finalSteps = [
  { n: "01", title: "Unlock Access", desc: "Joining HerCircle gives you access to everything inside the club. Giveaways, perks, and experiences designed to elevate your everyday." },
  { n: "02", title: "Big Wins, Automatically", desc: "Every member is automatically entered into our major giveaways. Getaways, designer bags — the giveaways that feel surreal when you win them." },
  { n: "03", title: "Enjoy Our Regular Giveaways", desc: "Smaller, frequent giveaways featuring products and experiences you'll actually use and love." },
  { n: "04", title: "Activate Your Partner Discounts", desc: "Member-only savings up to 30% off with brands you already shop, spanning beauty, fashion, wellness, and lifestyle." },
  { n: "05", title: "RSVP To Member Events", desc: "Members-only events designed to bring the community together. Pilates mornings, cocktail nights, and curated experiences hosted every month." },
] as const;

export const finalLifestyleImages = {
  hero: "/scrape/0R7A6513.jpg",
  brunch: "/scrape/Girls_at_brunch.jpg",
  alt1: "/scrape/0R7A6705.jpg",
  alt2: "/scrape/0R7A6720.jpg",
  alt3: "/scrape/0R7A6869.jpg",
  alt4: "/scrape/0R7A6881.jpg",
  alt5: "/scrape/0R7A7002.jpg",
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

/** Deterministic warm gradient for placeholder portraits (used in Login and dashboard tiles). */
export function portraitStyle(hue: number): { background: string } {
  const h2 = (hue + 28) % 360;
  return {
    background: `linear-gradient(155deg, hsl(${hue} 55% 78%) 0%, hsl(${h2} 45% 62%) 60%, hsl(${(hue + 340) % 360} 35% 38%) 100%)`,
  };
}
