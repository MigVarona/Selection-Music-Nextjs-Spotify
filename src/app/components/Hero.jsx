import Link from "next/link";

export default function Hero() {
  return (
    <div data-testid="hero-container" className="relative mt-20">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          NEXT PLAY
        </h1>
        <p className="text-xl text-white opacity-50 max-w-lg text-center">
          All the music you like in one place
        </p>
        <div className="flex flex-col sm:flex-row gap-4"></div>
      </div>

      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src="/1.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
