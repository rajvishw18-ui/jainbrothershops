import { createFileRoute, Link } from "@tanstack/react-router";

import { MapEmbed } from "../components/MapEmbed";
import { AppointmentForm } from "../components/AppointmentForm";
import medicalStoreImg from "../assets/medical-store.jpg";
import dermatologyClinicImg from "../assets/dermatology-clinic.jpg";
import musicShopImg from "../assets/music-shop.jpg";
import sportsShopImg from "../assets/sports-shop.jpg";

const businesses = [
  {
    id: "medical-store",
    title: "Medical Store",
    description: "Trusted medicines, wellness products, and everyday healthcare essentials.",
    to: "/medical-store",
    image: medicalStoreImg,
    emoji: "🏥",
  },
  {
    id: "dermatologist-clinic",
    title: "Dermatologist Clinic",
    description: "Expert skin care, cosmetic treatments, and personalized dermatology services.",
    to: "/dermatologist-clinic",
    image: dermatologyClinicImg,
    emoji: "👨‍⚕️",
  },
  {
    id: "music-shop",
    title: "Music Shop",
    description: "Instruments, accessories, and gear for beginners, professionals, and everyone in between.",
    to: "/music-shop",
    image: musicShopImg,
    emoji: "🎵",
  },
  {
    id: "sports-shop",
    title: "Sports Shop",
    description: "Quality equipment and apparel for fitness, team sports, and outdoor adventures.",
    to: "/sports-shop",
    image: sportsShopImg,
    emoji: "🏸",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OneHub — One Website for All Businesses" },
      { name: "description", content: "Discover medical supplies, dermatology care, musical instruments, and sports gear — all under one trusted brand." },
      { property: "og:title", content: "OneHub — One Website for All Businesses" },
      { property: "og:description", content: "Discover medical supplies, dermatology care, musical instruments, and sports gear — all under one trusted brand." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-navy-medium py-20 text-navy-cloud sm:py-28 lg:py-36">
        {/* Decorative background */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-navy-accent/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 h-[32rem] w-[32rem] rounded-full bg-navy-accent/25 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            {/* Left — copy */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-navy-cloud/20 bg-navy-cloud/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-navy-cloud backdrop-blur-sm">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Trusted by 10,000+ customers
              </span>
              <h1 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:mx-0 lg:text-6xl xl:text-7xl">
                Everything you need,{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-navy-cloud via-white to-navy-accent bg-clip-text text-transparent">
                    all in one place
                  </span>
                  <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full bg-navy-accent/40 blur-sm" />
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg text-navy-cloud/75 lg:mx-0">
                Four specialized businesses — medicine, dermatology, music, and sports — brought together under one trusted brand you already love.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <a
                  href="#book"
                  className="group inline-flex items-center gap-2 rounded-full bg-navy-cloud px-6 py-3 text-sm font-semibold text-navy shadow-lg shadow-navy-deep/40 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
                >
                  Book an appointment
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
                <a
                  href="#explore"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-cloud/25 bg-navy-cloud/5 px-6 py-3 text-sm font-semibold text-navy-cloud backdrop-blur-sm transition-colors hover:bg-navy-cloud/15"
                >
                  Explore businesses
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-navy-cloud/70 lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    {["#f59e0b", "#ef4444", "#10b981", "#3b82f6"].map((c) => (
                      <span key={c} className="h-6 w-6 rounded-full border-2 border-navy" style={{ background: c }} />
                    ))}
                  </div>
                  <span><strong className="text-navy-cloud">4.9/5</strong> · 240+ reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🕐</span>
                  <span>Open 7 days a week</span>
                </div>
              </div>
            </div>

            {/* Right — business showcase */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {businesses.map((b, i) => (
                  <Link
                    key={b.id}
                    to={b.to}
                    className={`group relative overflow-hidden rounded-2xl border border-navy-cloud/15 bg-navy-cloud/5 shadow-xl backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-2xl ${
                      i % 2 === 0 ? "translate-y-4" : ""
                    }`}
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={b.image}
                        alt={b.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading={i < 2 ? "eager" : "lazy"}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <div className="text-2xl">{b.emoji}</div>
                      <div className="mt-1 font-display text-sm font-semibold text-navy-cloud sm:text-base">
                        {b.title}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              {/* Floating badge */}
              <div className="absolute -left-4 top-1/2 hidden -translate-y-1/2 rotate-[-6deg] rounded-2xl border border-navy-cloud/20 bg-navy-deep/80 px-4 py-3 shadow-2xl backdrop-blur-md lg:block">
                <div className="text-[10px] uppercase tracking-wider text-navy-cloud/60">One brand</div>
                <div className="font-display text-xl font-bold text-navy-cloud">4 experts</div>
              </div>
            </div>
          </div>

          {/* Marquee */}
          <div
            id="explore"
            className="mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            aria-hidden="true"
          >
            <div className="flex w-max gap-6 animate-marquee">
              {[...businesses, ...businesses].map((b, i) => (
                <div
                  key={`${b.id}-${i}`}
                  className="relative h-32 w-56 shrink-0 overflow-hidden rounded-xl border border-navy-cloud/10 shadow-lg sm:h-36 sm:w-64"
                >
                  <img src={b.image} alt={b.title} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-3">
                    <div className="flex items-center gap-2">
                      <span>{b.emoji}</span>
                      <span className="font-display text-xs font-semibold text-navy-cloud">{b.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore our businesses
          </h2>
          <p className="mt-3 text-muted-foreground">
            Click any card to browse products and services.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businesses.map((business) => (
            <Link
              key={business.id}
              to={business.to}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={business.image}
                  alt={business.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-2xl">{business.emoji}</div>
                <h3 className="font-display text-xl font-semibold text-card-foreground">
                  {business.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {business.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                  Browse products
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats / value props */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { k: "15+", v: "Years serving the community" },
            { k: "10k+", v: "Happy customers & patients" },
            { k: "4", v: "Specialized businesses" },
            { k: "24/7", v: "WhatsApp support" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="font-display text-4xl font-bold text-primary sm:text-5xl">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why choose OneHub
          </h2>
          <p className="mt-3 text-muted-foreground">One trusted brand for four essentials of modern life.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "✨", title: "Curated quality", desc: "Every product and service is hand-picked and verified by our specialists." },
            { icon: "💬", title: "WhatsApp-first support", desc: "Talk to a real human in seconds — no forms, no tickets, no wait." },
            { icon: "📅", title: "Easy appointments", desc: "Book a slot in under a minute for any of our four businesses." },
            { icon: "🚚", title: "Fast local delivery", desc: "Same-day delivery available on medical and everyday essentials." },
            { icon: "🛡️", title: "Trusted by thousands", desc: "Rated 4.8/5 across 240+ reviews from customers just like you." },
            { icon: "🎯", title: "One brand, four experts", desc: "Specialized teams for medicine, skin, music, and sports." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 font-display text-lg font-semibold text-card-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment CTA */}
      <section id="book" className="relative overflow-hidden bg-navy text-navy-cloud">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-navy-accent blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-navy-accent blur-3xl" />
        </div>
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <span className="inline-block rounded-full bg-navy-accent/20 px-4 py-1.5 text-sm font-medium">
              Book in under a minute
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Book an appointment with any of our businesses
            </h2>
            <p className="mt-4 max-w-lg text-navy-cloud/80">
              Choose the service you need, pick a date and time, and we'll confirm your slot on WhatsApp — no accounts, no hassle.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-navy-cloud/90">
              {[
                "Pharmacist consultation & prescription refills",
                "Dermatology assessments & cosmetic treatments",
                "Music lessons & instrument fitting",
                "Sports coaching & equipment consultation",
              ].map((li) => (
                <li key={li} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-navy-cloud" />
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-background p-2 shadow-2xl">
            <AppointmentForm
              businessName="OneHub"
              services={[
                "Medical Store — Pharmacist consult",
                "Dermatologist Clinic — Skin assessment",
                "Music Shop — Lesson / fitting",
                "Sports Shop — Coaching / consultation",
              ]}
            />
          </div>
        </div>
      </section>

      <MapEmbed />
    </div>
  );
}
