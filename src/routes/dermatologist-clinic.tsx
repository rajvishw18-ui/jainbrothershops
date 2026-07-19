import { createFileRoute } from "@tanstack/react-router";

import { AppointmentForm } from "../components/AppointmentForm";
import dermatologyClinicImg from "../assets/dermatology-clinic.jpg";

export const Route = createFileRoute("/dermatologist-clinic")({
  head: () => ({
    meta: [
      { title: "Dermatologist Clinic — OneHub" },
      { name: "description", content: "Board-certified dermatology, cosmetic treatments, and personalized skin care at OneHub Dermatologist Clinic." },
      { property: "og:title", content: "Dermatologist Clinic — OneHub" },
      { property: "og:description", content: "Board-certified dermatology, cosmetic treatments, and personalized skin care at OneHub Dermatologist Clinic." },
      { property: "og:url", content: "/dermatologist-clinic" },
    ],
    links: [{ rel: "canonical", href: "/dermatologist-clinic" }],
  }),
  component: DermatologistClinicPage,
});

const services = [
  { icon: "🧴", name: "Acne & scar treatment", desc: "Personalized regimens using medical-grade therapies proven to clear breakouts." },
  { icon: "✨", name: "Anti-aging & Botox", desc: "Wrinkle relaxers and rejuvenation designed for natural, refreshed results." },
  { icon: "💧", name: "Chemical peels & facials", desc: "Professional exfoliation that improves texture, tone, and clarity." },
  { icon: "🔬", name: "Skin cancer screening", desc: "Full-body mole checks with dermoscopy and same-week biopsy results." },
  { icon: "🌿", name: "Eczema & psoriasis care", desc: "Long-term care plans that reduce flare-ups and restore comfort." },
  { icon: "💇", name: "Hair loss consultation", desc: "PRP, minoxidil, and evidence-based plans for thinning hair." },
];

const doctors = [
  {
    name: "Dr. Anjali Rao, MD",
    role: "Lead Dermatologist · 12 yrs experience",
    bio: "Board-certified dermatologist specializing in medical and cosmetic dermatology. Trained at AIIMS with fellowship in laser therapy.",
    initials: "AR",
  },
  {
    name: "Dr. Michael Chen, MD",
    role: "Cosmetic Dermatologist · 9 yrs experience",
    bio: "Expert in injectables, laser resurfacing, and anti-aging protocols. Published researcher on non-invasive rejuvenation.",
    initials: "MC",
  },
];

const reviews = [
  { author: "Sana P.", rating: 5, text: "Dr. Rao completely cleared my adult acne after years of failed treatments. Kind, thorough, and honest.", date: "3 weeks ago" },
  { author: "James O.", rating: 5, text: "Booked a mole check on Tuesday, biopsy result by Friday. Genuinely impressed by the follow-up.", date: "1 month ago" },
  { author: "Nina K.", rating: 5, text: "Natural-looking Botox — nobody could tell, everyone said I looked rested. Dr. Chen has an artist's eye.", date: "2 months ago" },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-500" : "text-muted"}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
}

function DermatologistClinicPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-16 text-navy-cloud sm:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-navy-accent blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-navy-accent blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-3xl">👨‍⚕️</span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">Dermatologist Clinic</h1>
            <p className="mt-4 max-w-lg text-lg text-navy-cloud/80">
              Board-certified skin care that blends medical expertise with cosmetic artistry — for skin that looks and feels its best.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#book" className="inline-flex items-center rounded-md bg-navy-cloud px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-white">
                Book an appointment
              </a>
              <a href="#services" className="inline-flex items-center rounded-md border border-navy-cloud/30 px-5 py-2.5 text-sm font-semibold text-navy-cloud transition-colors hover:bg-navy-cloud/10">
                See services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-navy-cloud/80">
              <Stars rating={5} />
              <span><strong className="text-navy-cloud">4.9</strong> · 180+ patient reviews</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img src={dermatologyClinicImg} alt="Dermatologist Clinic interior" className="h-full w-full object-cover" width={1024} height={640} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Services we offer</h2>
          <p className="mt-3 text-muted-foreground">Medical and cosmetic dermatology under one roof.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 font-display text-lg font-semibold text-card-foreground">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section className="bg-muted/40">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Meet our doctors</h2>
            <p className="mt-3 text-muted-foreground">Board-certified specialists with a passion for real results.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {doctors.map((d) => (
              <article key={d.name} className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-navy font-display text-2xl font-bold text-navy-cloud">
                  {d.initials}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-card-foreground">{d.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{d.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{d.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Patient stories</h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <Stars rating={5} />
            <span className="text-sm font-medium text-foreground">4.9</span>
            <span className="text-sm text-muted-foreground">· 180+ reviews</span>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.author} className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm">
              <Stars rating={r.rating} />
              <p className="mt-3 flex-1 text-sm text-card-foreground">"{r.text}"</p>
              <footer className="mt-4 text-sm">
                <div className="font-semibold text-card-foreground">{r.author}</div>
                <div className="text-xs text-muted-foreground">{r.date}</div>
              </footer>
            </article>
          ))}
        </div>
      </section>

      {/* Appointment */}
      <section id="book" className="bg-muted/40">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Book a consultation</h2>
            <p className="mt-3 text-muted-foreground">
              Share a few details and our clinic will confirm your slot on WhatsApp — usually within an hour during opening times.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li>✔ First consult includes a full skin assessment</li>
              <li>✔ Transparent pricing before any treatment</li>
              <li>✔ Follow-up messaging with your doctor</li>
            </ul>
          </div>
          <AppointmentForm businessName="Dermatologist Clinic" services={services.map((s) => s.name)} />
        </div>
      </section>
    </div>
  );
}
