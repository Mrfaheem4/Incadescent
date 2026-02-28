import { Link } from "react-router-dom";
import TextType from "../Animations/TextType";
import Quotation from "../Components/quotation";
import Login from "../pages/login";

export default function Current({ cityName, countryName }) {
  return (
    <div className="w-full grid grid-cols-3 px-8 py-6 pb-24 bg-gray-100 items-start border-2 border-white">
      {/* Left - City Name */}
      <div className="w-[500px] min-h-[160px]">
        <TextType
          key={cityName}
          text={`${cityName}, ${countryName}`}
          typingSpeed={40}
          showCursor={false}
          loop={false}
          className="text-6xl font-sm text-black"
        />
      </div>

      {/* Centre - Quote */}
      <div className="flex justify-center">
        <Quotation />
      </div>

      {/* Right - Add City */}
      <div className="flex justify-end items-start">
        <button className="text-sm text-gray-600 font-medium">
          <Link to="/login">Add Another City +</Link>
        </button>
      </div>
    </div>
  );
}
