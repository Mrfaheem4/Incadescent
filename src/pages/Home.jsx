import Bigclock from "../Components/Bigclock";

export default function Home({ timezone, dateTime, is24h, setIs24h }) {
  return (
    <div>
      <Bigclock
        timezone={timezone}
        is24h={is24h}
        setIs24h={setIs24h}
        dateTime={dateTime}
      />{" "}
    </div>
  );
}
