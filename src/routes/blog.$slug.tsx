import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPost } from "../lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Post not found — OneHub" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — OneHub Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Post not found</h1>
      <p className="mt-3 text-muted-foreground">The post you're looking for doesn't exist.</p>
      <Link to="/blog" className="mt-6 inline-block text-primary hover:underline">← Back to blog</Link>
    </div>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">← All posts</Link>
      <div className="mt-6">
        <span className="inline-block rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
          {post.category}
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
          <span>{post.author}</span>
          <span>·</span>
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</time>
          <span>·</span>
          <span>{post.readMinutes} min read</span>
        </div>
      </div>
      <div className="prose prose-lg mt-8 max-w-none">
        {post.content.map((para: string, i: number) => (
          <p key={i} className="mb-5 text-base leading-relaxed text-foreground">{para}</p>
        ))}
      </div>
    </article>
  );
}
