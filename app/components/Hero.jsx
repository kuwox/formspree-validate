"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Icono de WhatsApp
import { MdOutlineProduct } from "react-icons/md"; // Icono de productos

const Hero = () => {
  return (
    <div className="relative h-[80vh] flex items-center bg-cover bg-center">
      <div className="container grid md:grid-cols-2 mx-auto">
        <div className="p-4">
          <h1 className="text-4xl lg:text-left md:text-left text-center md:text-5xl font-bold text-black px-4">
            SOLUCIONES INTEGRALES EN{" "}
            <span className="text-amarillo">CONSTRUCCIÓN</span>
          </h1>
          <p className="mt-4 text-md lg:text-xl text-black p-4">
            En Fedamil, unimos innovación y calidad para ofrecerte los mejores
            materiales y servicios en cada fase de tu proyecto.
          </p>
          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 text-center">
            <a
              href="https://wa.link/ko0u5t"
              target="_blank"
              rel="noopener noreferrer"
              className="items-center px-8 py-3 bg-amarillo text-black text-sm font-semibold rounded hover:bg-yellow-600 transition-colors duration-300 ease-in-out text-center"
            >
              Atención Personalizada
            </a>
            <a
              href="/productos"
              className="ml-0 md:ml-4 mt-4 md:mt-0 items-center px-8 py-3 bg-transparent border-2 border-black text-black text-sm font-semibold rounded hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
            >
              Nuestros Productos
            </a>
            </div>
        </div>
        <div className="p-4">
          <img
            src="./fedamil.webp"
            alt="fedamil"
            className="w-full rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
