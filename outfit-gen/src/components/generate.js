import React, { useState, useEffect } from "react";
import axios from "axios"; // Import the Axios HTTP client

async function getShirt() {
  let strShirt = "No Pant in closet";
  const response = await axios.get(`http://localhost:5000/api/gets/${"Shirt"}`);
  const index = Math.floor(Math.random() * response.data.length);
  return response.data[index].color + " Shirt";
}
async function getPant() {
  let strPant = "No Pant in closet";
  const response = await axios.get(`http://localhost:5000/api/gets/${"Pant"}`);
  const index = Math.floor(Math.random() * response.data.length);
  return response.data[index].color + " Pant";
}
export default function Generate() {
  const [data, setData] = useState("Loading"); // Initialize the state variable to hold the data

  const handleClick = async () => {
    // Send a GET request to the server to retrieve the data from the database
    const p = await getPant();
    const s = await getShirt();
    console.log("You should wear " + s + " on top of " + p);
    setData("You should wear " + s + " on top of " + p);
  };
  const handleChange = (event) => {
    const p = getPant();
    const s = getShirt();
    console.log("You should wear " + s + " on top of " + p);
    setData("You should wear " + s + " on top of " + p);
  };
  return (
    <div>
      <button onClick={handleClick}>Get Data</button>
      <textarea type="text" value={data} onChange={handleChange} />
    </div>
  );
}
