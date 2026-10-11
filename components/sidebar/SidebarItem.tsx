"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  label: string;
  href: string;
  count?: number;
};

export default function SidebarItem({ label, href, count }: Props) {
  const active = usePathname() === href;

  return (
    <Link
      href={href}
      className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-foreground/5 ${
        active ? "bg-foreground/10 font-semibold" : ""
      }`}
    >
      <span className="truncate">{label}</span>
      {count !== undefined && (
        <span className="text-xs text-foreground/50">{count}</span>
      )}
    </Link>
  );
}
