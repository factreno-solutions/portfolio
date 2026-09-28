import { Mail, Lock } from "lucide-react";

export default function Bobble() {
  return (
    <main className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Vivid Amber / Orange Blob (Matches your Hire Me & Showcase buttons) */}
      <div
        className="absolute -top-10 -left-10 h-[500px] w-[500px] animate-blob bg-[var(--header-bg)] from-amber-400 via-orange-500 to-amber-600 opacity-30 blur-2xl"
        style={{
          borderRadius: "22% 78% 24% 76% / 30% 30% 70% 70%",
        }}
      />
      {/* Vivid Cyan / Teal Blob (Matches your links & ring glow) */}
      <div
        className="absolute top-1/4 -right-10 h-[500px] w-[500px] animate-blob2 bg-gradient-to-tr from-cyan-400 via-teal-500 to-blue-600 opacity-25 blur-2xl"
        style={{
          borderRadius: "22% 78% 24% 76% / 30% 30% 70% 70%",
        }}
      />
      {/* Accent Purple Glow (Adds extra contrast against the dark background) */}
      <div
        className="absolute -bottom-10 left-1/3 h-[450px] w-[450px] animate-blob bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 opacity-20 blur-xl"
        style={{
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        }}
      />
    </main>
  );
}
