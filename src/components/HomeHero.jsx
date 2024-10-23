import React from "react";

import { Link, useNavigate } from "react-router-dom";

function HomeHero() {
  const navigate = useNavigate();

  return (
    <section className="bg-hero-mobile sm:bg-hero-tablet md:bg-hero-desktop bg-no-repeat bg-center bg-cover px-6 lg:px-0">
      <div className="lg:container lg:m-auto  min-h-svh flex flex-col items-center justify-between xl:justify-around pt-24 pb-12 md:py-28 lg:flex-row lg:items-end">
        <div className="text-center sm:w-3/4 lg:w-1/2 lg:text-left ">
          <span className="block text-xl text-light-white uppercase tracking-wider lg:text-2xl">
            So, you want to travel to
          </span>
          <h1 className="text-7xl uppercase font-belleFair my-8 mb-4 md:text-9xl">
            Space
          </h1>

          <p className="lg:w-2/3 text-sm sm:text-lg text-light-white text-center lg:text-left">
            Let’s face it if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="lg:mr-12 xl:mr-0">
          <div
            className="px-10 py-12 bg-white  font-belleFair rounded-full relative z-[8] before:px-24 before:py-24 before:bg-white/20 before:absolute before:rounded-full before:top-[50%] before:left-[50%] before:-translate-x-1/2
           before:-translate-y-1/2 before:opacity-0 hover:before:opacity-100 before:transition-all
            cursor-pointer before:z-[-1] before:duration-300 lg:px-14 lg:py-20 lg:text-3xl lg:before:px-[10rem] lg:before:py-[10rem]"
            onClick={() => navigate("/destination")}
          >
            <Link to="/destination" className="font-bold text-black">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
