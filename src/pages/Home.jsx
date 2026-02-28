import Bigclock from "../Components/Bigclock";
import Current from "../Components/Current";

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
      <Current
        cityName={cityInfo.cityName}
        countryName={cityInfo.countryName}
      />
    </div>
  );
}
