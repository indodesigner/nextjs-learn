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

      <div className="group bg-neutral-800 dark:bg-neutral-200 hover:bg-neutral-900 dark:hover:bg-neutral-300 hover:bg-opacity-80 hover:dark:bg-opacity-80 p-2 lg:p-1 rounded-2xl  transition">
        {currentTheme === "dark" ? (
          <div
            className="flex gap-2 cursor-pointer  text-neutral-800"
            onClick={() => setTheme("light")}
          >
            <LuSun className=" cursor-pointer h-4 w-4 group-hover:scale-90 transition" />
            {/* <h6 className="text-xs">Light</h6> */}
          </div>
        ) : (
          <div
            className="flex gap-2 cursor-pointer  text-neutral-200"
            onClick={() => setTheme("dark")}
          >
            <LuMoon className="cursor-pointer h-4 w-4 group-hover:scale-90 transition" />
            {/* <h6 className="text-xs">Dark</h6> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitch;
