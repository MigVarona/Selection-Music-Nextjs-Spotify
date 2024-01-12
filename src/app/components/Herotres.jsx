import Image from "next/image"
import Link from "next/link"

function Herotres() {
	return (
	  
	  <section className="bg-black dark:text-gray-100 flex-wrap">
	  <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		  <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			  <Image src="/Image20240112123205.png" alt="" width={800} height={600} className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		  </div>
		  <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
		  <Link href="/epic">
  <h1 className="text-5xl font-bold text-slate-200 leading sm:text-6xl">
  Elevate Your Soundtrack
    <span className="dark:text-violet-400"></span>
  </h1>
</Link>
			  
		  </div>
	  </div>
  </section> );
  }
  
  export default Herotres;