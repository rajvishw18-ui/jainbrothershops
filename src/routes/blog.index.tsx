import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { posts } from "../lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — OneHub" },
      { name: "description", content: "Health, skincare, music, and sports tips from the experts at OneHub." },
      { property: "og:title", content: "Blog — OneHub" },
      { property: "og:description", content: "Health, skincare, music, and sports tips from the experts at OneHub." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

const categories = ["All", "Medical", "Dermatology", "Music", "Sports"] as const;

function BlogIndex() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const c = category === "All" || p.category === category;
      const m = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      return c && m;
    });
  }, [category, query]);

  return (
    <div className="flex flex-col">
      <section className="bg-navy py-16 text-navy-cloud sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
          <p className="mt-3 max-w-2xl text-navy-cloud/80">
            Expert tips across health, skin, music, and sport — from the OneHub team.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts..."
            aria-label="Search posts"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 sm:max-w-xs"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
                  category === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-md border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            No posts match your search.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="inline-block w-fit rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                  {p.category}
                </span>
                <h2 className="mt-3 font-display text-xl font-semibold text-card-foreground group-hover:text-primary">
                  {p.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.author}</span>
                  <span>{p.readMinutes} min read</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
