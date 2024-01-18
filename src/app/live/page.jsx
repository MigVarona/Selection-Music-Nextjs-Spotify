"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const Live = () => {
  const [query, setQuery] = useState("live, music");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              query: query,
              page: 1,
              per_page: 30,
            },
            headers: {
              Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
            },
          }
        );

        console.log("Unsplash API Response:", response.data);

        // Obtener una selección aleatoria de las fotos
        const randomPhotos = getRandomSelection(response.data.results, 9); // Obtener 6 fotos aleatorias

        setPhotos(randomPhotos);
      } catch (error) {
        console.error("Error fetching photos from Unsplash:", error);
      }
    };

    fetchPhotos();
  }, [query]);

  // Función para obtener una selección aleatoria de elementos de una matriz
  const getRandomSelection = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 mt-20">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"></div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {photos.map((photo) => (
            <a
              key={photo.id}
              href={photo.urls.full}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={photo.urls.small}
                loading="lazy"
                alt={photo.description}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                {photo.user && photo.user.name
                  ? `Photographer: ${photo.user.name}`
                  : "Untitled"}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Live;
