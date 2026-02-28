const API_KEY = import.meta.env.VITE_TIMEZONE_API_KEY;

export const getTimezone = async (city) => {
  // Step 1: city name → coordinates
  const geoRes = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`,
    { headers: { "User-Agent": "TimeSpotApp" } },
  );
  const geoData = await geoRes.json();

  if (!geoData.length) return null;

  const { lat, lon } = geoData[0];

  // Step 2: coordinates → timezone
  const tzRes = await fetch(
    `https://api.timezonedb.com/v2.1/get-time-zone?key=${API_KEY}&format=json&by=position&lat=${lat}&lng=${lon}`,
  );
  const tzData = await tzRes.json();

  return tzData;
};
