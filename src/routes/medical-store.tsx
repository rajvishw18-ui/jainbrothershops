import { createFileRoute } from "@tanstack/react-router";

import { ProductCatalog } from "../components/ProductCatalog";
import { AppointmentForm } from "../components/AppointmentForm";
import type { Product } from "../components/ProductCard";
import medicalStoreImg from "../assets/medical-store.jpg";
import painReliefImg from "../assets/medical-pain-relief.jpg";
import thermometerImg from "../assets/medical-thermometer.jpg";
import vitaminImg from "../assets/medical-vitamin.jpg";
import firstAidImg from "../assets/medical-firstaid.jpg";

const products: Product[] = [
  { id: "pain-relief", name: "Pain Relief Tablets", description: "Fast-acting relief for headaches, muscle pain, and minor aches. 30 tablets per pack.", price: "$12.99", image: painReliefImg, category: "Medicines" },
  { id: "thermometer", name: "Digital Thermometer", description: "Accurate 10-second readings with fever alarm and memory function. Easy to use at home.", price: "$24.99", image: thermometerImg, category: "Devices" },
  { id: "vitamin-d3", name: "Vitamin D3 Supplements", description: "High-strength vitamin D3 to support bone health and immune function. 90 softgels.", price: "$18.50", image: vitaminImg, category: "Supplements" },
  { id: "first-aid-kit", name: "Family First Aid Kit", description: "Comprehensive kit with bandages, antiseptic wipes, gauze, and essential emergency supplies.", price: "$34.99", image: firstAidImg, category: "First Aid" },
];

export const Route = createFileRoute("/medical-store")({
  head: () => ({
    meta: [
      { title: "Medical Store — OneHub" },
      { name: "description", content: "Shop trusted medicines, wellness products, and healthcare essentials at OneHub Medical Store." },
      { property: "og:title", content: "Medical Store — OneHub" },
      { property: "og:description", content: "Shop trusted medicines, wellness products, and healthcare essentials at OneHub Medical Store." },
      { property: "og:url", content: "/medical-store" },
    ],
    links: [{ rel: "canonical", href: "/medical-store" }],
  }),
  component: MedicalStorePage,
});

function MedicalStorePage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-navy py-16 text-navy-cloud sm:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-navy-accent blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-3xl">🏥</span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">Medical Store</h1>
            <p className="mt-4 max-w-lg text-lg text-navy-cloud/80">
              Reliable medicines, daily wellness products, and home healthcare essentials delivered with care.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img src={medicalStoreImg} alt="Medical Store interior" className="h-full w-full object-cover" width={1024} height={640} />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Browse products</h2>
          <p className="mt-3 text-muted-foreground">Search or filter by category, then inquire via WhatsApp.</p>
        </div>
        <ProductCatalog products={products} itemLabel="products" />
      </section>

      <section id="book" className="bg-muted/40">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Book a pharmacist consult</h2>
            <p className="mt-3 text-muted-foreground">
              Need help choosing a medicine or arranging home delivery? Book a quick consult and our pharmacist will get in touch.
            </p>
          </div>
          <AppointmentForm businessName="Medical Store" services={["Pharmacist consultation", "Home delivery slot", "Prescription refill"]} />
        </div>
      </section>
    </div>
  );
}
