"use client";

import { ThemeProvider } from "next-themes";
import { Inconsolata, Inter, Lora } from "next/font/google";
import { useState } from "react";
import FontContext from "@/components/FontContext";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const incosolata = Inconsolata({ subsets: ["latin"] });
let font = "";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [selectedText, setSelectedText] = useState("Sans Serif");

  const selectFont: React.Dispatch<React.SetStateAction<string>> =
    setSelectedText;

  if (selectedText === "Sans Serif") {
    font = inter.className;
  } else if (selectedText === "Serif") {
    font = lora.className;
  } else {
    font = incosolata.className;
  }

  return (
    <ThemeProvider attribute="class">
      <FontContext.Provider
        value={{ selectedText, setSelectedText: selectFont }}
      >
        <div className={font}>{children}</div>
      </FontContext.Provider>
    </ThemeProvider>
  );
}
