import React, { useState } from "react";

export const Header = ({ onSearch }) => {
  const [query, setQuery] = useState('')
  
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <header>
      <div className="bg-black text-white overflow-hidden h-10">
        <div className="marquee mt-2 font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos sapiente placeat atque. Harum eveniet molestiae beatae nisi facere, neque id laboriosam impedit eaque blanditiis repudiandae commodi assumenda eos corporis nihil.
        </div>
      </div>
      <div className="m-5 mt-3 flex items-center">
        <h1 className="font-bold text-4xl">Brand Logo</h1>
        <form className="mt-3 mx-auto flex">
          <div className="relative flex">
            <input type="search" className="w-96 pr-12 h-10 rounded-lg" value={query} onChange={handleChange} placeholder="Search products" />
            <button type="submit" className="absolute right-0 top-0 h-full px-4 text-black font-semibold rounded-r-lg"><svg aria-hidden="true" class="w-5 h-5 text-black dark:text-gray-400" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
          </div>
        </form>
      </div>
    </header>
  )
}