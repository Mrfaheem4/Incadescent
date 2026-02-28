export default function Current({ cityName, countryName }) {
  return (
    <div className="bg-gray-100 px-8 py-6 border-white border-2 ">
      <h2 className="text-6xl font-semi text-black ">
        {cityName},<br />
        {countryName}
      </h2>
    </div>
  );
}
