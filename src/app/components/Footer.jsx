import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-b py-6 md:flex-row">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <Link href="#" className="footer-link">About</Link>
            <Link href="#" className="footer-link">Investor Relations</Link>
            <Link href="#" className="footer-link">Jobs</Link>
            <Link href="#" className="footer-link">Press</Link>
            <Link href="#" className="footer-link">Blog</Link>
          </nav>
          
          <div className="flex gap-4">
            {/* ... Icon links ... */}
          </div>
        </div>
        
        <div className="py-8 text-center text-sm text-gray-400">
          © 2021 - Present Flowrift. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
