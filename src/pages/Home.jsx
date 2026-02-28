import Bigclock from "../Components/Bigclock";
import Current from "../Components/Current";
import Footer from "../Components/Footer";

export default function Home({
  timezone,
  dateTime,
  is24h,
  setIs24h,
  cityInfo,
}) {
  return (
    <div>
      <Bigclock
        timezone={timezone}
        is24h={is24h}
        setIs24h={setIs24h}
        dateTime={dateTime}
      />
      <div className=" flex justify-between">
        <Current
          cityName={cityInfo.cityName}
          countryName={cityInfo.countryName}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
