import React, { Component, useState } from "react";
import "./Navbar.css";

const Navbar = ({ array, setArray }) => {
  const [sliderValue, setsliderValue] = useState(50);
  const handleChange = (evt) => {
    console.log(Math.floor((parseInt(evt.target.value) + 3) * 5));
    setsliderValue(evt.target.value);
    console.log(generateArray(Math.floor((parseInt(evt.target.value) + 3) * 5)));
  };

  const generateArray = (len) => {
    return  Array.from({length: len}, () => Math.floor(Math.random() * len));
  };

  return (
    <div className="navbar">
      <button>Merge Sort</button>
      <button>Quick Sort</button>
      <button>Insertion Sort</button>
      <button>Bubble Sort</button>
      <button>Selection Sort</button>
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          id="changeSize"
          max="100"
          value={sliderValue}
          className="slider"
          onChange={handleChange}
        />
      </div>
      <button>Generate New Array </button>
    </div>
  );
};

export default Navbar;
