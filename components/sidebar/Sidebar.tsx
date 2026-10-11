import { FOLDERS, LINKS } from "@/lib/mock-data";
import FolderList from "./FolderList";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="flex w-60 shrink-0 flex-col gap-6 overflow-y-auto border-r border-foreground/10 p-4">
      <SidebarItem label="All" href="/" count={LINKS.length} />
      <FolderList folders={FOLDERS} />
    </aside>
  );
}
