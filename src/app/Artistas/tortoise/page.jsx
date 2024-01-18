import Image from "next/image";
export default function Tortoise() {
  return (
    <section className="bg-white ">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-col items-center mx-auto max-w-7xl lg:flex-row mt-20 lg:mt-35">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:max-w-lg lg:mr-8">
            <div className="relative w-full max-w-lg mx-auto ">
              <div className="absolute top-0 rounded-full left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute rounded-full bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <Image
                  className="object-cover object-center w-full h-full mx-auto rounded-lg shadow-2xl"
                  width={900}
                  height={600}
                  alt="hero"
                  src="/Artistas/Tortoise (1).jpg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-12 lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0 ">
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl text-center lg:text-left">
              TORTOISE
            </h1>
            <p className="mb-8 text-base leading-relaxed text-gray-500 text-center lg:text-left">
              Tortoise es una banda de post-rock formada en Chicago, Illinois,
              en 1990. El grupo incorpora krautrock, dub, música minimalista,
              electrónica y jazz a su música, una combinación que a veces se
              denomina post-rock. A Tortoise se le atribuye el mérito del auge
              del movimiento post-rock en la década de 1990.{" "}
            </p>
            <div className="mt-0 lg:mt-6 w-full max-w-3xl mx-auto sm:flex justify-center">
              <div className="mt-3 rounded-lg sm:mt-0">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/artist/3WggbHDpj4rPKbL97zG5MQ?utm_source=generator&theme=0"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
