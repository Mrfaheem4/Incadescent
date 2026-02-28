import { Link } from "react-router-dom";
const Navbar = ({ onSearch }) => {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-gray-100">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <span className="font-semibold text-black text-lg">Incandescent</span>
      </Link>

      {/* Search */}
      <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-gray-400 text-sm w-48">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search city..."
          className="bg-transparent outline-none text-sm text-gray-600 w-full"
          onChange={(e) => onSearch(e.target.value)}
        ></input>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <Link to="./login" className="text-black text-sm font-medium">
          Log In
        </Link>
        <button className="bg-black text-white text-sm font-medium px-5 py-4 rounded-full">
          Get the App
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
