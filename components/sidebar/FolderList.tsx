import type { Folder } from "@/lib/mock-data";
import SidebarItem from "./SidebarItem";

export default function FolderList({ folders }: { folders: Folder[] }) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="px-3 pb-1 text-xs font-semibold text-foreground/50">폴더</h2>
      <ul className="flex flex-col gap-1">
        {folders.map((folder) => (
          <li key={folder.id}>
            <SidebarItem
              label={folder.name}
              href={`/folder/${folder.id}`}
              count={folder.count}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
