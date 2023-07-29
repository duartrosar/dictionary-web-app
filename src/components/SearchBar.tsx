"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (!search) {
      console.log(search);
      setError(true);
      return;
    }

    const encodedSearchQuery = encodeURI(search);

    router.push(`/search/${encodedSearchQuery}`);
  };

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setError(false);
    setSearch(event.target.value);
  };

  return (
    <div className="w-full px-6 md:px-10">
      <div className="relative max-w-[736px] mx-auto">
        <form onSubmit={onSearch}>
          <input
            value={search}
            onChange={inputChange}
            type="text"
            id="search"
            className={`w-full py-[14px] md:py-5 rounded-2xl pl-6 bg-dark-200 font-bold  text-sm md:text-xl text-dark-600 placeholder:opacity-75 leading-5 outline-primary outline-1 dark:bg-dark-700 dark:text-white dark:outline-primary dark:ring-primary ${
              error
                ? "outline-secondary border border-secondary focus:border-0"
                : ""
            }`}
            placeholder="Search for any word..."
          />
          <BiSearch
            onClick={onSearch}
            className="absolute top-[50%] right-6 -translate-y-1/2 text-primary cursor-pointer"
            size={20}
          />
          {error && (
            <p className="absolute mt-2 text-xl text-secondary">
              Whoops, can't be empty...
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
