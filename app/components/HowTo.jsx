"use client";
import React from "react";
import ArrowUpRicon from "./ArrowUpRicon";
import CheckList from "./CheckList";

const HowTo = () => {
  return (
    <div className="relative p-4">
      <div className="grid mx-auto md:grid-cols-5">
        <div className="bg-yellow-500 p-4 m-4 col-span-1 md:col-span-3">
          <ArrowUpRicon />
          <h2 className="text-2xl font-semibold text-center md:text-left ms-4 mt-4">
            ¿COMO COMPRAR POR LA WEB?
          </h2>
          <p className="md:w-72 ms-4 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vel dicta aperiam cumque, fuga facilis pariatur</p>
          <ul className="list-disc mt-4">
            <li className="ms-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="ms-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="ms-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
          <a href="/productos" className="ms-4 mt-4 inline-flex items-center px-8 py-1 bg-blue-900 border-2 border-blue-900 text-white text-sm font-semibold  hover:bg-white hover:text-blue-900 transition-colors duration-300 ease-in-out rounded-full">
            Ir a comprar
          </a>
        </div>
        <div className="bg-yellow-100 p-4 m-4 col-span-1 md:col-span-2">
          <ArrowUpRicon />
          <h2 className="text-2xl font-semibold text-center md:text-left ms-4 mt-4">
            ¿Y POR WHATSAPP?
          </h2>
          <p className="max-w-md ms-4 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae assumenda autem ut illo, eligendi incidunt. Perferendis dignissimos debitis</p>
          <a href="https://wa.link/pv7v9o" target="_blank" className="ms-4 mt-4 inline-flex items-center px-8 py-1 bg-blue-900 border-2 border-blue-900 text-white text-sm font-semibold  hover:bg-white hover:text-blue-900 transition-colors duration-300 ease-in-out rounded-full">
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowTo;