import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/login";
import { getTimezone } from "./api/timezone";

function App() {
  const [timezone, setTimezone] = useState("UTC");
  const [dateTime, setDateTime] = useState("");
  const [is24h, setIs24h] = useState(true);

  useEffect(() => {
    getTimezone("Karachi").then((data) => {
      setTimezone(data.zoneName);
      setDateTime(data.formatted);
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              timezone={timezone}
              is24h={is24h}
              setIs24h={setIs24h}
              dateTime={dateTime}
            />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
