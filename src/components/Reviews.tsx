interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

const reviews: Review[] = [
  {
    author: "Priya S.",
    rating: 5,
    text: "One-stop convenience. I picked up my prescription, booked a skin consult, and grabbed my son's badminton racket — all in one visit.",
    date: "2 weeks ago",
  },
  {
    author: "Marcus T.",
    rating: 5,
    text: "The dermatologist was thorough and the treatment plan actually worked. Front desk staff are wonderful too.",
    date: "1 month ago",
  },
  {
    author: "Aisha R.",
    rating: 4,
    text: "Great selection of guitars and honest advice from the music shop team. Prices are fair and they let you try before buying.",
    date: "3 weeks ago",
  },
  {
    author: "David L.",
    rating: 5,
    text: "Fantastic customer service across the board. The medical store staff always take the time to explain everything clearly.",
    date: "2 months ago",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-yellow-500" : "text-muted"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mb-10 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.75h3.57c2.08-1.92 3.28-4.74 3.28-8.07z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.75c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.12c-.22-.66-.35-1.36-.35-2.12s.13-1.46.35-2.12V7.04H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.96l3.66-2.84z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.04l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" fill="#EA4335" />
          </svg>
          Google Reviews
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          What our customers say
        </h2>
        <div className="mt-3 flex items-center justify-center gap-2">
          <Stars rating={5} />
          <span className="text-sm font-medium text-foreground">4.8</span>
          <span className="text-sm text-muted-foreground">· Based on 240+ reviews</span>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
  );
}
