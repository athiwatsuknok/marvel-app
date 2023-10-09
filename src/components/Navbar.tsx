import React, { useState, FC } from "react";
// import { Link } from "react-router-dom";

export const Navbar: FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="min-h-full backdrop-blur-xl">
      <nav className="sticky top-0 z-1 bg-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a className="text-white" href="/">
                  Marvel
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-3 flex items baseline space-x-2">
                  <a
                    href="/"
                    className="text-white hover:bg-red-800 px-3 py-2 rounded-md text-md font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="/heros"
                    className="text-white hover:bg-red-800 px-3 py-2 rounded-md text-md font-medium"
                  >
                    Heros
                  </a>
                </div>
              </div>
            </div>

            {/* mobile menu title */}
            <div className="flex mr-10 md:hidden">
              <p className="text-white font-bold">Heros App</p>
            </div>

            {/* Hamburger menu */}
            <div className="mr-2 flex md:hidden">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="inline-flex justify-center p-2 rounded-md text-white hover:bg-red-800 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* show mobile menu */}

        {showMenu && (
          <div className="flex flex-col px-2 pt-3 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-white hover:bg-red-800 px-3 py-2 text-sm rounded-md font-medium"
            >
              Home
            </a>
            <a
              href="/heros"
              className="text-white hover:bg-red-800 px-3 py-2 text-sm rounded-md font-medium"
            >
              Heros
            </a>
          </div>
        )}
      </nav>
      {children}
    </div>
  );
};
