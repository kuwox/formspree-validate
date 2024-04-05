"use client";
import React from "react";

const Testimonials = () => {
  return (
    <div className="relative p-4 mb-10">
        <h1 className="text-center text-3xl font-bold py-4">TESTIMONIOS</h1>
      <div className="grid mx-auto md:grid-cols-3 pt-4 gap-4">
        <div className="border-s-2 border-red-900 ps-4">
          <p className="text-xs font-extralight">THEN</p>
          <br/>
          <p className="text-sm w-[70%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae eius accusantium cum possimus excepturi dolor sed, totam error aperiam quo eos, perferendis itaque nihil optio maxime aut velit voluptatibus consequatur.</p>
        </div>
        <div className="border-s-2 border-red-900 ps-4">
          <p className="text-xs font-extralight">NOW</p>
          <br/>
          <p className="text-sm w-[70%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae eius accusantium cum possimus excepturi dolor sed, totam error aperiam quo eos, perferendis itaque nihil optio maxime aut velit voluptatibus consequatur.</p>
        </div>
        <div className="border-s-2 border-red-900 ps-4">
          <p className="text-xs font-extralight">NOW</p>
          <br/>
          <p className="text-sm w-[70%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae eius accusantium cum possimus excepturi dolor sed, totam error aperiam quo eos, perferendis itaque nihil optio maxime aut velit voluptatibus consequatur.</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;