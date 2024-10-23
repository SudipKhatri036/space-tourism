import React, { useState } from "react";
import hamOpen from "/assets/shared/icon-hamburger.svg";
import hamClose from "/assets/shared/icon-close.svg";
import logo from "/assets/shared/logo.svg";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { id: 1, name: "home", path: "/" },
  { id: 2, name: "destination", path: "/destination" },
  { id: 3, name: "crew", path: "/crew" },
  { id: 4, name: "technology", path: "/technology" },
];

function Header() {
  const [navActive, setNavActive] = useState(false);

  const { pathname } = useLocation();
  const pageName = pathname === "/" ? "home" : pathname.slice(1);

  return (
    <header className="fixed w-full top-0 lg:top-6 z-50">
      <div className="flex items-center justify-between px-5 md:px-0 lg:container lg:m-auto">
        <div className="md:pl-4 pt-4 md:pt-0">
          <img src={logo} alt="Logo Img" />
        </div>
        <span className="lg:w-1/3 lg:h-[1px] bg-light-white"></span>
        <nav
          className={`fixed top-0 right-0 h-screen min-[400px]:w-1/2 w-2/3 pt-24 pl-4 bg-[#0c0e18bf] backdrop-blur-lg  ${
            navActive ? "translate-x-0 z-[2]" : "translate-x-full"
          } transition-all duration-300  md:static md:translate-x-0 md:h-auto  md:bg-white/5 md:px-4 md:py-8 md:backdrop-blur-sm md:w-3/4 lg:w-2/4`}
        >
          <ul className="flex flex-col gap-4 uppercase md:flex-row md:items-center md:justify-center md:gap-8">
            {navItems.map((item) => {
              return (
                <li
                  className={`group tracking-wide relative after:w-1 after:absolute after:right-0
                   md:after:-bottom-8 md:after:h-1   after:bg-white md:after:left-0  
                   :hover:after:w-1/2 md:hover:after:w-full after:transition-all after:duration-500 ${
                     pageName === item.name
                       ? "after:h-full md:after:w-full"
                       : "md:after:w-0"
                   }`}
                  key={item.id}
                >
                  <NavLink
                    to={item.path}
                    className="text-[#D0D6F9] transition-all duration-300 group-hover:text-white"
                  >
                    <span className="text-white mr-2 font-bold">
                      0{item.id - 1}
                    </span>
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="z-10 md:hidden pt-4">
          <button>
            <img
              src={hamOpen}
              alt="Ham Menu Open"
              className={`${navActive ? "hidden" : ""}`}
              onClick={() => setNavActive(true)}
            />
          </button>
          <button>
            <img
              src={hamClose}
              alt="Ham Menu Close"
              className={`${navActive ? "" : "hidden"}`}
              onClick={() => setNavActive(false)}
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
