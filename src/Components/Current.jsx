import TextType from "../Animations/TextType";

export default function Current({ cityName, countryName }) {
  return (
    <div className=" h-100vh iw-100vh bg-gray-100 px-8 py-6 border-white border-2">
      <TextType
        key={cityName}
        text={[`${cityName}, ${countryName}`]}
        typingSpeed={40}
        deletingSpeed={null}
        pauseDuration={100}
        showCursor={false}
        cursorCharacter="|"
        className="text-6xl font-semi text-black"
        loop={false}
      />
    </div>
  );
}
