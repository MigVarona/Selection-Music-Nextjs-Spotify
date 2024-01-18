import Image from "next/image";
import Link from "next/link";

export default function Herodos() {
  return (
    <div className="bg-white  py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16 ">
          <h2 className="mb-4 text-center  text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Colecciones
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          Únete a nosotros para celebrar la diversidad de talento y la riqueza de melodías.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            href="Artistas"
            className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg "
          >
            <Image
              src="/Artistas/moderat-promo.jpg"
              width={600}
              height={600}
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div className="relative flex flex-col">
              <span className="text-gray-300">Play</span>
              <span className="text-lg font-semibold text-white lg:text-xl">
                Artists
              </span>
            </div>
          </Link>

          <Link
            href="albums"
            className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
          >
            <Image
              src="/Artistas/MODERAT_ART_COVER.jpg"
              width={600}
              height={600}
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div className="relative flex flex-col">
              <span className="text-gray-300">Play</span>
              <span className="text-lg font-semibold text-white lg:text-xl">
                Albums
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
