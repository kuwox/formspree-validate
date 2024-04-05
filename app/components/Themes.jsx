"use client";
import React from "react";

const Themes = () => {
  return (
    <div className="relative p-4">
      <div className="grid mx-auto md:grid-cols-12">
        <div className="p-4 mx-4 md:ms-4 md:me-0 md:my-0 md:border-b-2 border-b-0 col-span-5">
          <h1 className="text-4xl font-bold">TEMA 1</h1>
        </div>
        <div className="p-4 mx-4 md:me-4 md:ms-0 md:my-0 border-b-2 col-span-7">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, deleniti omnis accusantium molestiae libero iure reprehenderit hic nobis quia neque blanditiis voluptatibus ab rem? Architecto hic aut dolorem consequuntur. Modi?</p>
          <a href="#" className="mt-4 inline-flex items-center px-8 py-1 bg-black border-2 border-black text-white text-sm font-semibold  hover:bg-white hover:text-black transition-colors duration-300 ease-in-out rounded-full">
            Leer más
          </a>
        </div>
        <div className="p-4 mx-4 md:ms-4 md:me-0 md:my-0 md:border-b-2 border-b-0 col-span-5">
          <h1 className="text-4xl font-bold">TEMA 2</h1>
        </div>
        <div className="p-4 mx-4 md:me-4 md:ms-0 md:my-0 border-b-2 col-span-7">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, deleniti omnis accusantium molestiae libero iure reprehenderit hic nobis quia neque blanditiis voluptatibus ab rem? Architecto hic aut dolorem consequuntur. Modi?</p>
          <a href="#" className="mt-4 inline-flex items-center px-8 py-1 bg-black border-2 border-black text-white text-sm font-semibold  hover:bg-white hover:text-black transition-colors duration-300 ease-in-out rounded-full">
            Leer más
          </a>
        </div>
      </div>
    </div>
  );
};

export default Themes;