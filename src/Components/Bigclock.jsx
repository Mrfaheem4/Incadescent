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
    <div className="bg-gray-100 px-8 pt-4 pb-6 ">
      <div className="text-[12rem] font-medium leading-none text-black text-center">
        {time}
      </div>
      <div className="flex items-center justify-between gap-4 mt-2">
        <div className="text-gray-500 text-sm">Current</div>
        <div className="text-gray-600 text-sm">{formattedDate}</div>

        <div className="relative flex items-center bg-white rounded-full p-1 w-24">
          {/* Sliding pill */}
          <div
            className={`absolute top-1 bottom-1 w-[44px] bg-black rounded-full transition-transform duration-300 ${is24h ? "translate-x-[44px]" : "translate-x-0"}`}
          />
          <button
            onClick={() => setIs24h(false)}
            className={`relative z-10 w-[44px] py-1.5 text-sm font-medium transition-colors duration-300 ${!is24h ? "text-white" : "text-gray-500"}`}
          >
            12h
          </button>
          <button
            onClick={() => setIs24h(true)}
            className={`relative z-10 w-[44px] py-1.5 text-sm font-medium transition-colors duration-300 ${is24h ? "text-white" : "text-gray-500"}`}
          >
            24h
          </button>
        </div>
      </div>
    </div>
  );
}
