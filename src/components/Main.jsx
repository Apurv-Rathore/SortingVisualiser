import React, { Component, useState } from "react";
import Navbar from "../components/Navbar";

import "./Main.css";
const Main = () => {
  const [array, setArray] = useState([6, 5, 4, 3, 2, 1]);

  const getWidth = () => {
    const width = Math.floor(1000/(array.length));
    return width;
  }
  const getHeight = (number) => {
    const height = Math.floor((number/Math.max(array))*500);
    return height;
  }
  return (
    <div>
      <Navbar array={array} setArray={setArray}/>
      <div className="ArrayContainer">
        {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: "red",
                height: `${value}px`,
              }}></div>
        ))}
      </div>
    </div>
  );
};

export default Main;

// export default class Main extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             array : [6,5,4,3,2,1],
//         };
//     }

//     render(){
//         return(
//             < Navbar arr />
//         );
//     }
// }
