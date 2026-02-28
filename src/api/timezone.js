import cityTimezones from "city-timezones";

const API_KEY = import.meta.env.VITE_TIMEZONE_API_KEY;

// Step 1: city name → timezone string (no API)
export const getCityTimezone = (city) => {
  const results = cityTimezones.lookupViaCity(city);
  if (!results.length) return null;
  return results[0].timezone;
};

// Step 2: timezone string → time data (API)
export const getTimezone = async (zone) => {
  const res = await fetch(
    `https://api.timezonedb.com/v2.1/get-time-zone?key=${API_KEY}&format=json&by=zone&zone=${zone}`,
  );
  const data = await res.json();
  return data;
};
