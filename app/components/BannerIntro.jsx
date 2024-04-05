"use client";
import React from "react";
import ArrowRicon from "./ArrowRicon";

const BannerIntro = () => {
  return (
    <div className="relative p-4 md:py-4">
      <p className="ms-4 py-8 font-light text-[10px]">FEDAMIL EN TODAS PARTES</p>
      <div className="ms-4 grid mx-auto md:grid-cols-5">
        <div className="col-span-3">
          <h1 className="text-4xl font-normal">
            ENVÍOS A<span className="block text-amarillo font-semibold">
              TODO<span className="text-black font-normal"> EL PAIS</span>                            </span>
          </h1>
        </div>
        <div className="col-span-2">
          <p className="max-w-md md:mt-1 mt-10">Con nuestro servicio de envíos a nivel nacional, puedes tener acceso a nuestra amplia gama de materiales y herramientas de construcción sin importar dónde te encuentres.</p>
          <a href="https://wa.link/5b2slj" target="_blank" className="mt-4 inline-flex items-center px-8 py-1 bg-blue-900 border-2 border-blue-900 text-white text-sm font-semibold  hover:bg-white hover:text-blue-900 transition-colors duration-300 ease-in-out rounded-full">
            <ArrowRicon/> Consultar costo
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerIntro;