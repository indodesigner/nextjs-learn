"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

// Do NOT use this! It will throw a hydration mismatch error.
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="flex flex-row gap-2 pe-2">
      {/* <select value={theme} onChange={(e) => setTheme(e.target.value)} className="px-1 ps-2 text-xs bg:gray-200 dark:bg-gray-800 border-1 border-gray-400 rounded-md">
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select> */}

      <div className="group hover:bg-gray-200 dark:hover:bg-neutral-800 hover:bg-opacity-50 hover:dark:bg-opacity-50 hover:rounded-3xl p-1">
        {currentTheme === "dark" ? (
          <LuSun
            className="text-white cursor-pointer h-4 w-4 group-hover:scale-90 transition"
            onClick={() => setTheme("light")}
          />
        ) : (
          <LuMoon
            className="text-neutral-600 cursor-pointer h-4 w-4 group-hover:scale-90 transition"
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeSwitch;
