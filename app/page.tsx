import LinkGrid from "@/components/link/LinkGrid";
import { LINKS } from "@/lib/mock-data";

export default function Home() {
  return <LinkGrid links={LINKS} />;
}
