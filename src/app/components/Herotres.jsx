import Image from "next/image"
import Link from "next/link"

function Herotres() {
	return (
	  
		<div className="bg-white py-6 sm:py-8 lg:py-12">
		<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
		  
		  <div className="mb-10 md:mb-16">
			<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Gallery</h2>
	  
			<p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Explore a curated collection of concert snapshots, artist portraits, and album artwork.</p>
		  </div>
		 
	  
		  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-8">
			
			<a href="live" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
			  <img src="/Caribou.jpeg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
	  
			  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
	  
			  <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">LIVE</span>
			</a>
			
	  
			
			<a href="covers" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
			  <img src="/Discos/Moderat-III.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
	  
			  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
	  
			  <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">COVERS</span>
			</a>
			
	  
			
			<a href="music" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
			  <img src="/Artistas/3673.webp" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
	  
			  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
	  
			  <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">ARTISTS</span>
			</a>
			
			<a href="instruments" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
			  <img src="/7-synths-header.jpg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
	  
			  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
	  
			  <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">SYNTH</span>
			</a>

		  </div>
		</div>
	  </div>
	   );
  }
  
  export default Herotres;