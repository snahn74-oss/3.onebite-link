import { FOLDERS } from "@/lib/mock-data";
import UrlInput from "./UrlInput";
import FolderSelect from "./FolderSelect";
import SaveButton from "./SaveButton";

export default function NewLinkForm() {
  return (
    <form className="flex max-w-xl flex-col gap-5">
      <h1 className="text-xl font-bold">새 링크 추가</h1>
      <UrlInput />
      <FolderSelect folders={FOLDERS} />
      <SaveButton />
    </form>
  );
}
