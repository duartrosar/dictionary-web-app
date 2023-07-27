"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Toggle = () => {
  const { theme, setTheme } = useTheme();
  const [isTogglerOn, setIsTogglerOn] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setIsTogglerOn(true);
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (prefersDark && theme !== "light") {
      setTheme("dark");
      setIsTogglerOn(true);
    }
  }, []);

  const handleToggler = () => {
    if (isTogglerOn) {
      setTheme("light");
    } else {
      setTheme("dark");
    }

    setIsTogglerOn(!isTogglerOn);
  };

  return (
    <div
      className={`w-10 flex h-5 rounded-[10px] p-[3px] cursor-pointer ${
        isTogglerOn ? "justify-end bg-primary" : "bg-dark-400"
      }`}
      onClick={handleToggler}
    >
      <div className="w-[14px] h-[14px] bg-dark-100 rounded-full"></div>
    </div>
  );
};

export default Toggle;
