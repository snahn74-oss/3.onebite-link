import type { LinkItem } from "@/lib/mock-data";

export default function LinkCard({ link }: { link: LinkItem }) {
  const host = new URL(link.url).hostname.replace(/^www\./, "");

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2 rounded-xl border border-foreground/10 p-4 transition-shadow hover:shadow-md"
    >
      <h3 className="truncate font-semibold">{link.title}</h3>
      <p className="line-clamp-2 text-sm text-foreground/70">{link.description}</p>
      <div className="mt-auto flex items-center justify-between pt-2 text-xs text-foreground/50">
        <span className="truncate">{host}</span>
        <time dateTime={link.createdAt}>{link.createdAt}</time>
      </div>
    </a>
  );
}
