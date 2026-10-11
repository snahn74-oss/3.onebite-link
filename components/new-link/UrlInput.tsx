export default function UrlInput() {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium">
      링크
      <input
        type="url"
        name="url"
        required
        placeholder="https://example.com"
        className="rounded-lg border border-foreground/20 bg-background px-3 py-2 font-normal outline-none focus:border-foreground"
      />
    </label>
  );
}
