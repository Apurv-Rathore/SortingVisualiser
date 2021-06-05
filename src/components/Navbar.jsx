import React, { Component, useState } from "react";
import "./Navbar.css";

import bubbleSort from "../algorithms/bubbleSort";
import insertionSort from "../algorithms/insertionSort";
import selectionSort from "../algorithms/selectionSort";
import quickSort from "../algorithms/quickSort";
import mergeSort from "../algorithms/mergeSort";

//algorithms
const Navbar = ({ array, setArray, setColorChangeIndex }) => {
  const [sliderValue, setsliderValue] = useState(50);
  const handleChange = (evt) => {
    setsliderValue(evt.target.value);
    setArray(
      generateArray(Math.floor((parseInt(evt.target.value) + 3) * 1.25))
    );
  };

  const generateArray = (len) => {
    return Array.from({ length: len }, () => Math.floor(Math.random() * len));
  };

  const generateNewArray = () => {
    setArray(generateArray(Math.floor((parseInt(sliderValue) + 3) * 1.25)));
    console.log(array);
  };

  return (
    <div className="navbar">
      
      
      
      <button
        className="glow-on-hover"
        onClick={() => {
          quickSort({ array, setArray, setColorChangeIndex });
        }}
      >
        Quick Sort
      </button>
      <button
        className="glow-on-hover"
        onClick={() => {
          insertionSort({ array, setArray, setColorChangeIndex });
        }}
      >
        Insertion Sort
      </button>
      <button
        className="glow-on-hover"
        onClick={() => {
          bubbleSort({ array, setArray, setColorChangeIndex });
        }}
      >
        Bubble Sort
      </button>
      <button
        className="glow-on-hover"
        onClick={() => {
          mergeSort({ array, setArray, setColorChangeIndex });
        }}
      >
        Merge Sort
      </button>
      <button
        className="glow-on-hover"
        onClick={() => {
          selectionSort({ array, setArray, setColorChangeIndex });
        }}
      >
        Selection Sort
      </button>
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
      <button className="glow-on-hover" onClick={generateNewArray}>Generate New Array </button>
    </div>
  );
};

export default Navbar;
