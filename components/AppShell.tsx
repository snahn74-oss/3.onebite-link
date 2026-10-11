import { Suspense } from "react";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex min-h-0 flex-1">
        <Suspense
          fallback={<aside className="w-60 shrink-0 border-r border-foreground/10" />}
        >
          <Sidebar />
        </Suspense>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
