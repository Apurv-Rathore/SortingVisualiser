const bubbleSort = ({ array, setArray }) => {
  // for (let index = 0; index < 2; index++) {
  //     if (index===0){
  //         setTimeout(() => {
  //             setArray([4,3,2,1,1,1,1]);
  //         }, 1000*index);
  //     }
  //     if (index===1){
  //         setTimeout(() => {
  //             setArray([5,4,3,2,2,2,1]);
  //         }, 1000*index);
  //     }
  // }
  const len = array.length;
  let temp;
  let auxArray = [...array];
//   console.log("orignal array",auxArray);
  let arrays = [];
  let indexes = [];
  for (let i = 0; i < len-1; i++) {
    for (let j = 0; j < len-i-1; j++) {
      if (auxArray[j] > auxArray[j+1]) {
        temp = auxArray[j];
        auxArray[j] = auxArray[j+1];
        auxArray[j+1] = temp;
        arrays.push([...auxArray]);
        indexes.push([j,j+1]);
      }
    }
  }
  for (let index = 0; index < arrays.length; index++) {
    setTimeout(() => {
      setArray(arrays[index]);

    }, (index * 700)/(len));
  }

  return arrays;
};
export default bubbleSort;
