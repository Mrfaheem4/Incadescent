import { useState } from "react";
import { Link } from "react-router-dom";
import cityTimezones from "city-timezones";
import AnimatedList from "../Animations/AnimatedList";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.length < 2) {
      setResults([]);
      return;
    }
    const found = cityTimezones.cityMapping
      .filter((c) => c.city.toLowerCase().startsWith(val.toLowerCase()))
      .slice(0, 5);
    setResults(found);
  };

  const handleSelect = (item) => {
    const city = results.find((c) => `${c.city}, ${c.country}` === item);
    if (city) {
      onSearch(city.city);
      setQuery(city.city);
      setResults([]);
    }
  };

  return (
    <nav className="z-50 flex items-center justify-between px-8 py-5 bg-gray-100">
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
        <span className="font-medium text-black text-lg">Incandescent</span>
      </Link>

      {/* Search */}
      <div className="relative">
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 w-64">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="gray"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search city..."
            value={query}
            className="bg-transparent outline-none text-sm text-gray-600 w-full"
            onChange={handleChange}
          />
        </div>

        {/* Dropdown */}
        {results.length > 0 && (
          <div className="absolute top-12 left-0 z-50">
            <AnimatedList
              items={results.map((c) => `${c.city}, ${c.country}`)}
              onItemSelect={handleSelect}
              showGradients={false}
              className="w-64"
            />
          </div>
        )}
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
