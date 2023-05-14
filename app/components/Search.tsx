"use client";

import SearchIcon from "~icons/fa/search.jsx";

const Search = () => {
  return (
    <div className="hidden rounded-full border-x shadow-sm hover:shadow-md md:block">
      <div className="flex">
        <button className="hidden h-12 flex-initial items-center px-4 sm:flex">
          Anywhere
        </button>
        <button className="hidden h-12 flex-initial items-center border-x px-4 sm:flex">
          Any week
        </button>
        <button className="hidden h-12 flex-initial items-center gap-3 px-4 sm:flex">
          <span>Add guests</span>

          <div className="rounded-full bg-rose-500 p-2 text-white">
            <SearchIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Search;
