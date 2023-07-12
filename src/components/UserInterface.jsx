import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "../utils/logout";
import LoginButton from "../utils/login";
import { useAuth0 } from "@auth0/auth0-react";

export const UserLogo = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const AccountFunctions = [
    ["Profile", "/profile"],
    ["Orders", "/orders"],
  ];

  const closeDropdown = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  if (isAuthenticated) {
    return (
      <>
        {isLoading && <p>Loading...</p>}
        <div className="relative">
          <button className="mr-3px-3 py-2font-medium">
            <a href="/wishlist">
              <FontAwesomeIcon icon={faHeart} className="mr-1 text-3xl" />
            </a>
          </button>
          <button className="px-3 py-2 font-medium mx-1">
            <a href="/checkout">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-1 text-3xl" />
            </a>
          </button>
          <button
            className="px-3 py-2 text-slate-700 font-medium"
            onClick={() => setShowDropdown(!showDropdown)}
            onBlur={() => closeDropdown()}
          >
            <span>
              <img className="-mb-3" src={user.picture} width={40} alt="" />
            </span>
          </button>
          {showDropdown && (
            <div className="origin-top-right absolute mt-2 right-0 w-30 bg-white shadow-lg rounded-b-2xl border z-50">
              <div
                className="py-1 divide-y divide-gray-200"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {AccountFunctions.map(([funcTitle, funcUrl]) => (
                  <a
                    href={funcUrl}
                    className="block px-4 py-2 text-gray-800 rounded-b-2xl"
                    key={funcUrl}
                  >
                    {funcTitle}
                  </a>
                ))}
                <LogoutButton />
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !isAuthenticated && <LoginButton />}
    </>
  );
};
