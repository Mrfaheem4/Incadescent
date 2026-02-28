import { useState, useEffect } from "react";

export default function BigClock({ timezone, dateTime, is24h, setIs24h }) {
  const [time, setTime] = useState("");

  const formattedDate = dateTime
    ? new Date(dateTime).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString("en-GB", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !is24h,
      });
      setTime(t);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [timezone, is24h]);

  return (
    <div>
      <div className="text-[13rem] font-medium leading-none text-black flex items-center gap-4 justify-center bg-gray-100">
        {time}
      </div>
      <div className="justify-center flex bg-gray-100">
        <div className="text-gray-500 px-9">Current</div>
        <div className="">{formattedDate}</div>
      </div>
    </div>
  );
}
