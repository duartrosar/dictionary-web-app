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
          className="absolute left-0 z-50 w-full bg-white border rounded-lg shadow-md dark:bg-dark-700 border-dark-300 top-8 dark:border-dark-500"
        >
          <ul className="flex flex-col gap">
            <li
              onClick={(e) => handleClick(e)}
              className="flex items-center justify-between w-full px-4 text-sm font-bold leading-6 transition cursor-pointer hover:bg-dark-200 dark:hover:bg-dark-600 hover:shadow-md"
            >
              Sans Serif
            </li>
            <li
              onClick={(e) => handleClick(e)}
              className="flex items-center justify-between w-full px-4 text-sm font-bold leading-6 transition cursor-pointer hover:bg-dark-200 dark:hover:bg-dark-600 hover:shadow-md"
            >
              Serif
            </li>
            <li
              onClick={(e) => handleClick(e)}
              className="flex items-center justify-between w-full px-4 text-sm font-bold leading-6 transition cursor-pointer hover:bg-dark-200 dark:hover:bg-dark-600 hover:shadow-md"
            >
              Monospace
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
