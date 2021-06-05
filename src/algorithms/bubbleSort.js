const bubbleSort = ({ array, setArray, setColorChangeIndex }) => {
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
      setColorChangeIndex([...indexes[index]])
    }, (index * 700)/(len));
  }
  setTimeout(() => {
    setColorChangeIndex([])
  }, (arrays.length * 700)/(len));
  

  return arrays;
};
export default bubbleSort;
