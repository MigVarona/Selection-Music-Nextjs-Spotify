
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-12 ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center justify-center md:justify-start">
          <Link href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
        </div>
        <nav className="space-y-2">
          <Link className="text-sm text-gray-300 hover:text-white" href="#">
            Home
          </Link>
          <Link className="text-sm text-gray-300 hover:text-white" href="#">
            About
          </Link>
          <Link className="text-sm text-gray-300 hover:text-white" href="#">
            Services
          </Link>
          <Link className="text-sm text-gray-300 hover:text-white" href="#">
            Contact
          </Link>
        </nav>
        <div className="space-y-2">
          <p className="text-sm">Email: info@acme.com</p>
          <p className="text-sm">Phone: +1 (123) 456-7890</p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link href="#">
            <FacebookIcon className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#">
            <TwitterIcon className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#">
            <InstagramIcon className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-gray-400">© Acme Inc. All rights reserved.</p>
          <div className="space-x-4">
            <Link className="text-sm text-gray-400 hover:text-white" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm text-gray-400 hover:text-white" href="#">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
