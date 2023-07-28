"use client";

import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface FontContextValue {
  selectedText: string;
  setSelectedText: Dispatch<SetStateAction<string>>;
}

const FontContext = createContext<FontContextValue>({
  selectedText: "Sans Serif",
  setSelectedText: () => {},
});

export default FontContext;
