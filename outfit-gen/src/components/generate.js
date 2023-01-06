import React, { useState, useEffect } from "react";
import axios from "axios"; // Import the Axios HTTP client
const api_uri = `https://api.open-meteo.com/v1/forecast?latitude=37.66&longitude=-121.87&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=Pacific%2FAuckland`;

async function getItem(maxTemp, day, weather, article) {
  const response = await axios.get(`http://localhost:5000/api/gets/${article}`);
  const currTemp = weather.data.daily.temperature_2m_max[day]
    ? maxTemp
    : weather.data.daily.temperature_2m_min[day];
  const cold = currTemp < 75;
  if (cold) {
    var activeData = response.data.filter((item) => item.len === true);
  } else {
    var activeData = response.data.filter((item) => item.len === false);
  }
  const index = Math.floor(Math.random() * activeData.length);
  const size = cold ? "long " : " short ";
  console.log(activeData);
  return size + activeData[index].color + " " + article;
}
export default function Generate() {
  const [data, setData] = useState("Loading"); // Initialize the state variable to hold the data
  const [rain, setRain] = useState("Weather API...");
  var today = new Date();

  const handleWeather = async () => {
    // Send a GET request to the server to retrieve the data from the database
    const r = await axios.get(api_uri);
    setRain(
      "today's min is: " +
        r.data.daily.temperature_2m_min[today.getDay()] +
        " and max is: " +
        r.data.daily.temperature_2m_max[today.getDay()]
    );
  };

  const handleClick = async () => {
    // Send a GET request to the server to retrieve the data from the database
    const weather = await axios.get(api_uri);
    const day = today.getDay();
    const hour = today.getHours();
    const maxTemp = hour < 12 ? false : true;
    const p = await getItem(maxTemp, day, weather, "Pants");
    const s = await getItem(maxTemp, day, weather, "Shirt");
    console.log("You should wear a " + s + " on top of " + p);
    setData("You should wear a " + s + " on top of " + p);
  };
  const handleChange = (event) => {};
  return (
    <div>
      <div>
        <button onClick={handleClick}>Get Data</button>
        <textarea
          type="text"
          value={data}
          onChange={handleChange}
          style={{ width: `80%` }}
        />
      </div>
      <div>
        <button onClick={handleWeather}>Get Weather</button>
        <textarea type="text" value={rain} style={{ width: `80%` }} />
      </div>
    </div>
  );
}
