import React from "react";

function DestinationTabs({
  activeDestination,
  setActiveDestination,
  destinations = [],
}) {
  return (
    <div className=" my-8">
      <ul className=" flex items-center gap-2 justify-center  sm:gap-4 lg:justify-start lg:gap-8">
        {destinations.map((desti, ind) => {
          return (
            <li
              key={desti.name}
              className={`group tracking-wide relative after:w-0 after:absolute after:-bottom-2 after:h-1 after:bg-white after:left-0  :hover:after:w-1/2
                hover:after:w-full after:transition-all after:duration-500 ${
                  activeDestination === ind ? "after:w-full" : ""
                }`}
            >
              <button
                className="text-sm md:text-lg lg:text-2xl text-light-white uppercase tracking-widest transition-all duration-300 group-hover:text-white"
                onClick={() => setActiveDestination(ind)}
              >
                {desti.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DestinationTabs;
