import React from "react";
import { Navbar } from './Navigation'

export const Header = () => {

  return (
    <header>
      <div>
        <div className="bg-black text-white overflow-hidden pb-2">
        <div className="marquee mt-2 font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos sapiente placeat atque. Harum eveniet molestiae beatae nisi facere, neque id laboriosam impedit eaque blanditiis repudiandae commodi assumenda eos corporis nihil.
        </div>
        </div>
        <div className="flex items-center justify-between m-5 mt-3">
          <h1 className="font-bold text-4xl">Brand Logo</h1>
          <div className="mr-auto ml-40">
            <Navbar />
          </div>
        </div>
      </div>
    </header>

  )
}