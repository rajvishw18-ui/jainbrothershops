export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Medical" | "Dermatology" | "Music" | "Sports";
  author: string;
  date: string; // ISO
  readMinutes: number;
  content: string[]; // paragraphs
}

export const posts: BlogPost[] = [
  {
    slug: "everyday-medicine-cabinet-essentials",
    title: "10 Everyday Medicine Cabinet Essentials",
    excerpt: "A pharmacist-approved checklist for a well-stocked home medicine cabinet.",
    category: "Medical",
    author: "Dr. Reema Kapoor",
    date: "2026-06-04",
    readMinutes: 5,
    content: [
      "A well-stocked medicine cabinet is your first line of defense against everyday health hiccups. Rather than overloading it, focus on a small set of reliable essentials that cover the most common needs.",
      "Start with basics: pain relievers, a digital thermometer, antiseptic wipes, and adhesive bandages of assorted sizes. These handle the majority of household incidents.",
      "Round it out with allergy relief, oral rehydration salts, a small first-aid kit, and any daily prescriptions clearly labeled. Rotate items yearly and check expiration dates every quarter.",
    ],
  },
  {
    slug: "skincare-routine-that-actually-works",
    title: "A Skincare Routine That Actually Works",
    excerpt: "Dermatologist-backed steps to build a routine that fits your skin, not the trend cycle.",
    category: "Dermatology",
    author: "Dr. Anika Verma",
    date: "2026-05-21",
    readMinutes: 6,
    content: [
      "The best skincare routine is the one you'll actually stick to. Three steps beat ten if consistency is the difference.",
      "In the morning: gentle cleanser, moisturizer, and broad-spectrum SPF 30+. That's it. In the evening: cleanser, an active if your skin tolerates one (retinoid or exfoliating acid — not both), then moisturizer.",
      "Introduce actives slowly and give any new product 8–12 weeks before deciding it doesn't work. If irritation lingers, book a consult rather than layering more products.",
    ],
  },
  {
    slug: "choosing-your-first-guitar",
    title: "Choosing Your First Guitar",
    excerpt: "How to pick an instrument that inspires practice rather than collecting dust.",
    category: "Music",
    author: "Leo Martinez",
    date: "2026-05-10",
    readMinutes: 4,
    content: [
      "Your first guitar should be easy to play and easy to love. Playability matters more than brand or price at this stage.",
      "Try before you buy. Check that the strings sit close to the fretboard, that the neck feels comfortable in your hand, and that tuning holds for a few minutes of playing.",
      "Acoustic vs electric is a matter of what you want to play. Both are great starters — pick the one that matches the music you want to make and you'll practice more.",
    ],
  },
  {
    slug: "beginner-badminton-gear-guide",
    title: "Beginner's Guide to Badminton Gear",
    excerpt: "What actually matters when picking your first racket, shoes, and shuttles.",
    category: "Sports",
    author: "Coach Ngozi A.",
    date: "2026-04-28",
    readMinutes: 4,
    content: [
      "Skip the temptation to spend big on your first racket. A lightweight graphite frame in the 85–90g range with an even balance suits nearly every beginner.",
      "Invest in proper court shoes instead. Running shoes on a wooden court are an injury waiting to happen — badminton-specific shoes give the lateral support you need.",
      "For shuttles, nylon (plastic) shuttles are durable and forgiving for practice. Save feather shuttles for match play once your technique is grooved in.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
