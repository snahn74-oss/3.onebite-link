import Logo from "./Logo";
import NewLinkButton from "./NewLinkButton";

export default function Header() {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-foreground/10 px-6">
      <Logo />
      <NewLinkButton />
    </header>
  );
}
