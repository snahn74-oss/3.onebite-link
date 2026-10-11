import { notFound } from "next/navigation";
import LinkGrid from "@/components/link/LinkGrid";
import { FOLDERS, LINKS } from "@/lib/mock-data";

export default async function FolderPage({ params }: PageProps<"/folder/[id]">) {
  const { id } = await params;
  const folder = FOLDERS.find((f) => f.id === id);
  if (!folder) notFound();

  const links = LINKS.filter((link) => link.folderId === id);

  return <LinkGrid links={links} />;
}
