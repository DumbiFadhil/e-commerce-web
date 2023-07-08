import React, { useState } from "react";
import { Navbar } from './Navigation';
import { UserLogo } from "./UserInterface";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div>
        <div className="bg-black text-white overflow-hidden pb-2">
          <div className="marquee mt-2 font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos sapiente placeat atque. Harum eveniet molestiae beatae nisi facere, neque id laboriosam impedit eaque blanditiis repudiandae commodi assumenda eos corporis nihil.
          </div>
        </div>
        <div className="flex items-center justify-between m-5 mt-3">
          <div className="w-30">
            <a href="/">
              <h1 className="font-bold text-4xl">TechHub</h1>
            </a>
          </div>
          <div>
            <div className="ml-auto">
              <div className="md:hidden">
                <button className="burger-button" onClick={toggleMenu}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mx-auto">
              <div className="hidden md:block">
                <Navbar />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <UserLogo />
          </div>
        </div>
        {showMenu && (
          <div className="md:hidden">
            <div className="flex items-center justify-center">
              <UserLogo />
            </div>
            <Navbar />
          </div>
        )}
      </div>
    </header>
  );
};
