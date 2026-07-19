import { createFileRoute } from "@tanstack/react-router";

import { ProductCatalog } from "../components/ProductCatalog";
import { AppointmentForm } from "../components/AppointmentForm";
import type { Product } from "../components/ProductCard";
import musicShopImg from "../assets/music-shop.jpg";
import guitarImg from "../assets/music-guitar.jpg";
import keyboardImg from "../assets/music-keyboard.jpg";
import microphoneImg from "../assets/music-microphone.jpg";
import stringsImg from "../assets/music-strings.jpg";

const products: Product[] = [
  { id: "acoustic-guitar", name: "Acoustic Guitar", description: "Full-size acoustic guitar with a warm, resonant tone. Perfect for beginners and performers.", price: "$199.99", image: guitarImg, category: "Guitars" },
  { id: "digital-keyboard", name: "Digital Keyboard", description: "61-key electronic keyboard with built-in sounds, rhythms, and lesson modes for all skill levels.", price: "$349.99", image: keyboardImg, category: "Keyboards" },
  { id: "wireless-microphone", name: "Wireless Microphone", description: "Clear-sounding wireless microphone with reliable range, ideal for vocals and events.", price: "$79.99", image: microphoneImg, category: "Audio" },
  { id: "guitar-strings", name: "Guitar Strings Set", description: "Durable steel acoustic guitar strings that deliver bright tone and long-lasting performance.", price: "$14.99", image: stringsImg, category: "Accessories" },
];

export const Route = createFileRoute("/music-shop")({
  head: () => ({
    meta: [
      { title: "Music Shop — OneHub" },
      { name: "description", content: "Explore instruments, accessories, and gear for every musician at OneHub Music Shop." },
      { property: "og:title", content: "Music Shop — OneHub" },
      { property: "og:description", content: "Explore instruments, accessories, and gear for every musician at OneHub Music Shop." },
      { property: "og:url", content: "/music-shop" },
    ],
    links: [{ rel: "canonical", href: "/music-shop" }],
  }),
  component: MusicShopPage,
});

function MusicShopPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-navy py-16 text-navy-cloud sm:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-navy-accent blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-3xl">🎵</span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">Music Shop</h1>
            <p className="mt-4 max-w-lg text-lg text-navy-cloud/80">
              Instruments, gear, and accessories for every musician — from your first notes to the big stage.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img src={musicShopImg} alt="Music Shop interior" className="h-full w-full object-cover" width={1024} height={640} />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Featured gear</h2>
          <p className="mt-3 text-muted-foreground">Search or filter by category to find your next instrument.</p>
        </div>
        <ProductCatalog products={products} itemLabel="items" />
      </section>

      <section id="book" className="bg-muted/40">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Book a lesson or instrument trial</h2>
            <p className="mt-3 text-muted-foreground">
              Try before you buy or schedule a lesson with one of our in-house musicians.
            </p>
          </div>
          <AppointmentForm businessName="Music Shop" services={["Instrument trial", "Beginner lesson", "Repair / setup"]} />
        </div>
      </section>
    </div>
  );
}
