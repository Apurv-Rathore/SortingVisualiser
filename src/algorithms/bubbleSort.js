import React, { Component, useState } from "react";

const bubbleSort = ({array, setArray}) => {
    const [auxarray, setAuxarray] = useState(array);
    // for (let index = 0; index < 2; index++) {
    //     if (index===0){
            // setTimeout(() => {
            //     setArray([4,3,2,1,1,1,1]);    
            // }, 1000*index);
    //     }
    //     if (index===1){
    //         setTimeout(() => {
    //             setArray([5,4,3,2,2,2,1]);    
    //         }, 1000*index);
    //     }
    // }
    const len = array.length;
    let temp;
    let counter = 0;
    // let aurarray = array;
    for(let i=0; i<len; i++) {
        for(let j=i+1; j<len; j++) {
            if(aurarray[i] > aurarray[j]) {
                // temp = aurarray[i];
                // aurarray[i] = aurarray[j];
                // aurarray[j] = temp;
                
                setTimeout(() => {
                    setArray(aurarray);    
                }, 500*(counter));
            }
            counter++;
        }
    }
}
export default bubbleSort;