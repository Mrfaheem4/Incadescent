import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/login";
import { getTimezone, getCityTimezone } from "./api/timezone";

function App() {
  const [timezone, setTimezone] = useState("UTC");
  const [dateTime, setDateTime] = useState("");
  const [is24h, setIs24h] = useState(true);
  const [city, setCity] = useState("Karachi");
  const [cityInfo, setCityInfo] = useState({
    cityName: "Karachi",
    countryName: "Pakistan",
  });

  useEffect(() => {
    const zone = getCityTimezone(city);
    if (!zone) return;

    getTimezone(zone).then((data) => {
      setTimezone(data.zoneName);
      setDateTime(data.formatted);
      setCityInfo({ cityName: city, countryName: data.countryName });
    });
  }, [city]);

  return (
    <div className="app h-screen w-screen">
      <Navbar onSearch={(value) => setCity(value)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              timezone={timezone}
              is24h={is24h}
              setIs24h={setIs24h}
              dateTime={dateTime}
              cityInfo={cityInfo}
            />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
