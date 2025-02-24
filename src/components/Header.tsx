"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "light" : "dark");
  };

  return (
    <header className="cartoon-border bg-background shadow-lg">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold bubble-text text-accent">
          Trivia Time!
        </h1>
        <button
          onClick={toggleTheme}
          className="cartoon-border p-2 rounded-full w-12 h-12 flex items-center justify-center hover:bg-secondary transition-all"
        >
          {isDark ? "🌞" : "🌙"}
        </button>
      </nav>
    </header>
  );
}
