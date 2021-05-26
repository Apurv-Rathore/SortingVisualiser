import React, { Component, useState } from "react";
import Navbar from "../components/Navbar";

import "./Main.css";
const Main = () => {
  const [array, setArray] = useState([6, 5, 4, 3, 2, 1]);

  const getWidth = () => {
    const width = Math.floor(1000/(array.length));
    return width;
  }

  return (
    <div>
      <Navbar array={array} setArray={setArray} />
      <div 
      className="ArrayContainer"
      >
          {array.map((number) => {
          <div className="arrayElement" 
            style=
            {{
                width:{getWidth},
                backgroundColor:"red",
            }}
          >

          </div>
      })}</div>
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
