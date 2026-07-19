import { createFileRoute } from "@tanstack/react-router";

import { ProductCatalog } from "../components/ProductCatalog";
import { AppointmentForm } from "../components/AppointmentForm";
import type { Product } from "../components/ProductCard";
import sportsShopImg from "../assets/sports-shop.jpg";
import badmintonImg from "../assets/sports-badminton.jpg";
import tennisImg from "../assets/sports-tennis.jpg";
import footballImg from "../assets/sports-football.jpg";
import fitnessImg from "../assets/sports-fitness.jpg";

const products: Product[] = [
  { id: "badminton-racket", name: "Badminton Racket", description: "Lightweight graphite racket with excellent control and power for recreational and competitive play.", price: "$49.99", image: badmintonImg, category: "Racket Sports" },
  { id: "tennis-racket", name: "Tennis Racket", description: "Modern graphite tennis racket with a balanced feel for power and precision on the court.", price: "$129.99", image: tennisImg, category: "Racket Sports" },
  { id: "football", name: "Premium Football", description: "Durable match-quality football with consistent flight and soft touch for all surfaces.", price: "$24.99", image: footballImg, category: "Team Sports" },
  { id: "fitness-kit", name: "Home Fitness Kit", description: "Cast iron dumbbells and kettlebell set to power up your home workouts and strength training.", price: "$89.99", image: fitnessImg, category: "Fitness" },
];

export const Route = createFileRoute("/sports-shop")({
  head: () => ({
    meta: [
      { title: "Sports Shop — OneHub" },
      { name: "description", content: "Find quality sports equipment, fitness gear, and athletic apparel at OneHub Sports Shop." },
      { property: "og:title", content: "Sports Shop — OneHub" },
      { property: "og:description", content: "Find quality sports equipment, fitness gear, and athletic apparel at OneHub Sports Shop." },
      { property: "og:url", content: "/sports-shop" },
    ],
    links: [{ rel: "canonical", href: "/sports-shop" }],
  }),
  component: SportsShopPage,
});

function SportsShopPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-navy py-16 text-navy-cloud sm:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-navy-accent blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-3xl">🏸</span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">Sports Shop</h1>
            <p className="mt-4 max-w-lg text-lg text-navy-cloud/80">
              Equipment and apparel for fitness, team sports, and outdoor adventures — built to perform.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img src={sportsShopImg} alt="Sports Shop interior" className="h-full w-full object-cover" width={1024} height={640} />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Featured equipment</h2>
          <p className="mt-3 text-muted-foreground">Search or filter by category to find your gear.</p>
        </div>
        <ProductCatalog products={products} itemLabel="equipment" />
      </section>

      <section id="book" className="bg-muted/40">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Book coaching or equipment fitting</h2>
            <p className="mt-3 text-muted-foreground">
              Schedule a coaching session or get help sizing your racket, shoes, or fitness kit.
            </p>
          </div>
          <AppointmentForm businessName="Sports Shop" services={["Coaching session", "Equipment fitting", "Racket restringing"]} />
        </div>
      </section>
    </div>
  );
}
