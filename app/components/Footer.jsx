"use client";
import React from "react";
import { AiFillInstagram } from 'react-icons/ai';
import { RiTiktokFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className="container bg-yellow-100 p-4">
            {/* <div className="flex flex-col">
                <a href="#" className="text-2xl font-bold items-center text-gray-800 flex p-1">
                    <img className="w-12" src="./logo.png" alt="fedamil sa" />
                    FEDAMIL
                </a>
                <p className="mx-4 font-extralight py-4">Unimos innovación y calidad para ofrecerte los mejores materiales y servicios en cada fase de tu proyecto</p>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-3 ms-4">
                <div className="col-span-1 py-4 indent-2">
                    <a href="#" className="text-2xl font-bold items-center text-gray-800 flex p-1 text-center mx-auto">
                        <img className="w-12" src="./logo.png" alt="fedamil sa" />
                        FEDAMIL
                    </a>
                    <p className="md:mx-4 font-extralight py-4 w-[70%]">Unimos innovación y calidad para ofrecerte los mejores materiales y servicios en cada fase de tu proyecto</p>
                    <div className="grid ms-4">
                        <div className="flex items-center space-x-4 py-4">
                            <a href="https://www.instagram.com/fedamil/" target="_blank" rel="noopener noreferrer" className="text-amarillo hover:text-amarillo text-xl hover:scale-125">
                                <AiFillInstagram className="w-8 h-8 hover:text-black" />
                            </a>
                            <a href="https://www.tiktok.com/@tu_usuario" target="_blank" rel="noopener noreferrer" className="text-amarillo hover:text-amarillo text-xl hover:scale-125">
                                <RiTiktokFill className="w-8 h-8 hover:text-black" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 py-4 indent-2">
                    <p className="font-bold text-1xl">Enlaces</p>
                    <ul className="leading-8">
                        <li><a
                            href="/"
                            className="px-4 font-semiligth hover:underline hover:text-amarillo  hover:decoration-amarillo hover:decoration-2"
                        >Inicio</a></li>
                        <li><a
                            href="/durlock"
                            className="px-4 font-semiligth hover:underline hover:text-amarillo  hover:decoration-amarillo hover:decoration-2"
                        >Durlock</a></li>
                        <li><a
                            href="/productos"
                            className="px-4 font-semiligth hover:underline hover:text-amarillo  hover:decoration-amarillo hover:decoration-2"
                        >Productos</a></li>
                        <li><a
                            href="/nosotros"
                            className="px-4 font-semiligth hover:underline hover:text-amarillo  hover:decoration-amarillo hover:decoration-2"
                        >Nosotros</a></li>
                        <li><a
                            href="/contactus"
                            className="px-4 font-semiligth hover:underline hover:text-amarillo  hover:decoration-amarillo hover:decoration-2"
                        >Contacto</a></li>
                    </ul>
                </div>
                <div className="col-span-1 py-4 indent-2 leading-8">
                    <p className="font-bold text-1xl">Sucursales</p>
                    <div className="md:flex flex-col">
                        {/* <p className="font-semibold  text-azul ">SUCURSAL</p> */}
                        <p className="text-xs font-light">
                            Av. Vergara 1910, <span>Villa Tesei</span>
                        </p>
                        <p className="font-light">(011) 7366-0014 </p>
                    </div>
                    <div className="md:flex  flex-col pt-4">
                        {/* <p className="font-semibold text-azul">SUCURSAL</p> */}
                        <p className="text-xs font-light">
                            Boticelli 4766, <span>Villa Tesei</span>
                        </p>
                        <p className="font-light">(011) 3663-4592 </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;