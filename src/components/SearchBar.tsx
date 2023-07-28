import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="w-full px-6 md:px-10">
      <div className="relative max-w-[736px] mx-auto">
        <input
          type="text"
          id="search"
          className="w-full py-[14px] md:py-5 rounded-2xl pl-6 bg-dark-200 font-bold  text-sm md:text-xl text-dark-600 placeholder:opacity-75 leading-5 outline-primary outline-1 dark:bg-dark-700 dark:text-white dark:outline-primary dark:ring-primary"
          placeholder="Search for any word..."
        />
        <BiSearch
          className="absolute top-[50%] right-6 -translate-y-1/2 text-primary cursor-pointer"
          size={20}
        />
      </div>
    </div>
  );
};

export default SearchBar;
