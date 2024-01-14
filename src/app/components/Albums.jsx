"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Album = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/albums.json');
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 mt-60">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* Sección de texto */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Selected</h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as placeholder text.
            It shares some characteristics of a real written text but is random or otherwise generated.
          </p>
        </div>

        {/* Productos */}
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {productos.map((producto, index) => (
            <div key={index} className="mb-3">
              <Link href="#" className="group relative block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <Image
                height={900}
                width={900}
                  src={producto.imagen}
                  loading="lazy"
                  alt={`Photo of ${producto.nombre}`}
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>

              <div className="flex items-start justify-between gap-2 px-2">
                <div className="flex flex-col">
                  <Link href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
                    {producto.nombre}
                  </Link>
                  <span className="text-gray-500">{producto.precio}</span>
                </div>
                {/* Contenido adicional si es necesario */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Album;
