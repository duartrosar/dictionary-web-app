"use client";

import React, {
  useState,
  useContext,
  useRef,
  MouseEvent as ReactMouseEvent,
} from "react";
import { IoChevronDownSharp, IoCheckmarkSharp } from "react-icons/io5";
import { useClickAway } from "react-use";
import FontContext from "./FontContext";

const Dropdown = () => {
  const { selectedText, setSelectedText } = useContext(FontContext);
  //   const [selectedText, setSelectedText] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickAway(dropdownRef, (e: MouseEvent) => {
    const element = e.target as HTMLElement;
    const id = element.id;
    const attr = element.getAttribute("data-toggler");

    if (attr === "toggler") return;

    setDropdownOpen(false);
  });

  function handleClick(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const element = e.target as HTMLElement;
    const text = element.innerHTML;
    setDropdownOpen(false);
    setSelectedText(text);
  }

  return (
    <div className="relative flex flex-col gap-1">
      <div
        className="flex items-center justify-end gap-4 px-4 border-r cursor-pointer border-dark-300 min-w-[147px]"
        id="toggler"
        data-toggler="toggler"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <p data-toggler="toggler" className="text-sm font-bold leading-6">
          {selectedText}
        </p>
        <IoChevronDownSharp
          data-toggler="toggler"
          size={18}
          className="text-primary"
        />
      </div>
      {dropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 z-50 bg-white shadow-lg dark:shadow-dark-800/50 rounded-2xl dark:bg-dark-700 top-8 dark:border-dark-500"
        >
          <ul className="flex flex-col gap-4 py-6 pl-6 pr-[70px] text-lg">
            <li
              onClick={(e) => handleClick(e)}
              className="flex items-center justify-between w-full text-sm font-bold leading-6 transition cursor-pointer font-inter hover:text-primary whitespace-nowrap font"
            >
              Sans Serif
            </li>
            <li
              onClick={(e) => handleClick(e)}
              className="flex items-center justify-between w-full text-sm font-bold leading-6 transition cursor-pointer font-lora hover:text-primary"
            >
              Serif
            </li>
            <li
              onClick={(e) => handleClick(e)}
              className="flex items-center justify-between w-full text-sm font-bold leading-6 transition cursor-pointer font-inconsolata hover:text-primary"
            >
              Mono
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
