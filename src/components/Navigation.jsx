import React, { useState } from 'react';

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  let closeDropdown;

  const handleDropdownToggle = () => {
    setShowDropdown(true);
  };

  const handleDropdownTimeout = () => {
    closeDropdown = setTimeout(() => {
      setShowDropdown(false);
    }, 100);
  };

  const keepDropdownOpen = () => {
    clearTimeout(closeDropdown);
  }

  const categories = [
    ['Laptop', '/categories/laptop'],
    ['Headphones', '/categories/headphones'],
    ['Accessories', '/categories/accessories'],
    ['Gaming', '/categories/gaming'],
  ];

  return (
    <nav className="flex sm:justify-center space-x-4">
      {[
        ['Home', '/'],
        ['Products', '/product'],
        ['Categories', categories],
        ['About', '/about'],
        ['Contacts', '/contact'],
      ].map(([title, url]) => {
        if (title === 'Categories') {
          return (
            <div className="relative inline-block text-left" key={title}>
              <div onMouseLeave={handleDropdownTimeout}>
                <button
                  className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 flex items-center"
                  onMouseOver={handleDropdownToggle}
                  onMouseEnter={keepDropdownOpen}
                  onClick={handleDropdownToggle}
                >
                  <span className="inline-block mr-2">{title}</span>
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

              </div>
              {showDropdown && (
                <div
                  className="origin-top-right absolute mt-0 w-56 bg-white shadow-lg"
                  onMouseOver={keepDropdownOpen}
                  onMouseLeave={handleDropdownTimeout}
                >
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {categories.map(([categoryTitle, categoryUrl]) => (
                      <a
                        href={categoryUrl}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        key={categoryUrl}
                      >
                        {categoryTitle}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }

        return (
          <a
            href={url}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
            key={title}
          >
            {title}
          </a>
        );
      })}
    </nav>
  );
};
