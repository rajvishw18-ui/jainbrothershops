import { BUSINESS_ADDRESS } from "../lib/config";

export function MapEmbed() {
  const q = encodeURIComponent(BUSINESS_ADDRESS);
  const src = `https://www.google.com/maps?q=${q}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${q}`;

  return (
    <section className="bg-muted/40">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Visit us
          </h2>
          <p className="mt-3 text-muted-foreground">
            Find all four businesses under one roof. Walk-ins welcome, and appointments recommended for the clinic.
          </p>
          <dl className="mt-6 space-y-3 text-sm">
            <div>
              <dt className="font-semibold text-foreground">Address</dt>
              <dd className="text-muted-foreground">{BUSINESS_ADDRESS}</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Hours</dt>
              <dd className="text-muted-foreground">Mon–Sat · 9:00 AM – 8:00 PM · Sun · 10:00 AM – 6:00 PM</dd>
            </div>
          </dl>
          <div className="mt-6">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get directions
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          <iframe
            title="Business location on Google Maps"
            src={src}
            width="100%"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[400px] w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
