import Link from "next/link";
import Switch from "../switch/Switch";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center container mx-auto p-4">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-[var(--color-primary-500)] text-xl sm:text-2xl">
          PreOrdr
        </h1>
      </div>

      {/* Location Section */}
      <div className="flex items-center gap-2">
        <h4 className="hidden sm:block text-[var(--color-text-primary-900)]">Place</h4>
        {/* Location Icon */}
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-map-pin"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </span>
      </div>

      {/* Search and QR Section */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <span className="hidden sm:block">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-300)]"
          />
        </span>

        {/* Scan QR Icon */}
        <span className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-scan-qr-code"
          >
            <path d="M17 12v4a1 1 0 0 1-1 1h-4" />
            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
            <path d="M17 8V7" />
            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
            <path d="M3 7V5a2 2 0 0 1 2-2h2" />
            <path d="M7 17h.01" />
            <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
            <rect x="7" y="7" width="5" height="5" rx="1" />
          </svg>
        </span>
      </div>

      {/* Veg/Non-Veg Switch, Cart, and Sign In */}
      <div className="flex items-center gap-4">
        {/* Veg/Non-Veg Switch */}
        <span className="hidden sm:block">
          <Switch onLabel="Veg" offLabel="Non-Veg" />
        </span>

        {/* Cart Icon */}
        <span className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-bag"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </span>

        {/* CTA Button */}
        <Link
          href="/"
          className="px-4 py-2 bg-[var(--color-primary-500)] text-[var(--color-text-primary-50)] rounded-lg hover:bg-[var(--color-primary-600)] transition-colors"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;