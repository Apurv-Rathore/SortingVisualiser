import React, { Component, useState } from "react";
import Navbar from "../components/Navbar";

import "./Main.css";

// class Main extends Component {
//   constructor(props){
//     super(props);
//   }
const Main = () => {
  const getHeight = (number) => {
    const height = Math.floor((number / Math.max.apply(Math, array)) * 500);
    return height;
  };

  const [colorChangeIndex,setColorChangeIndex] = useState([]);

  const [array, setArray] = useState([
    344, 5234, 534, 4234, 345, 345, 234, 24, 324, 534, 3444, 35, 423, 24, 23,
    123, 13,
  ]);

  const [divStyle, setDivStyle] = useState({
    backgroundColor: "red",
  });

  const setColor = () => {

  }



  const getWidth = () => {
    const width = Math.floor(1000 / array.length);
    return width;
  };


  const isthis = (idx) =>{
    if (idx===1 || idx===3){
      return false;
    }
    // console.log("fff");
    return true;
  }

  return (
    <div>
      <Navbar array={array} setArray={setArray} />
      <div className="ArrayContainer" id="myDiv">
        {array.map((value, idx) => (
          // height: `${getHeight(value)}px`,
          // divStyle.height = `${getHeight(value)}px`;
          <div
            className="array-bar"
            key={idx}
            style={{
              display: "inline-block",
              // backgroundColor: "red",
              backgroundColor: `${ isthis(idx)?"blue":"red" }`,
              height: `${getHeight(value)}px`,
              width: `${Math.floor(600 / array.length)}px`,
              marginLeft: `${Math.floor(600 / array.length) * 0.5}px`
            }}
          >
            {/* etrfx */}
          </div>
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
