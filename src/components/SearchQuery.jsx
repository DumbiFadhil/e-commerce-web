import React from "react";

export const SearchQuery = ({ query, handleChange }) => {

  return (
    <>
      <form className="mb-5 mx-auto flex">
        <div className="relative flex">
          <input
            type="search"
            className="w-72 pr-12 h-10 rounded-lg border border-black px-2"
            value={query}
            onChange={handleChange}
            placeholder="Search products"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full px-4 text-black font-semibold rounded-r-lg"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-black dark:text-gray-400"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </>
  )
}