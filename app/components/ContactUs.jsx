"use client";
import React from "react";
import Image from "next/image";

const ContactUs = () => {
  
  return (
    <div className="relative p-4">
      <div className="grid md:grid-cols-2">
        <div className="text-center bg-gray-500 p-4 mx-4 md:ms-4 md:me-0 md:my-0">
            <h1 className="text-4xl text-white font-bold">CONTÁCTANOS</h1>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero porro vero delectus voluptate enim blanditiis velit distinctio. Optio debitis, ipsam odio repellat ratione neque quisquam molestiae corrupti distinctio impedit cumque.</p>
        </div>
        <div className="bg-red-100 mx-4 lg:mx-0 md:mx-0 md:me-4 lg:me-4">
        <img
              src="./ContactUs.webp"
              alt="Contáctanos"
              className="w-full "
            />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;