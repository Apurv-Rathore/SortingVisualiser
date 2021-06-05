const insertionSort = ({ array, setArray, setColorChangeIndex }) => {
    
    const len = array.length;
    let temp;
    let auxArray = [...array];
  //   console.log("orignal array",auxArray);
    let arrays = [];
    let indexes = [];
    
    let i, key, j; 
    for (i = 1; i < len; i++)
    { 
        key = auxArray[i]; 
        j = i - 1; 
        while (j >= 0 && auxArray[j] > key)
        { 
            auxArray[j + 1] = auxArray[j]; 
            j = j - 1; 
            arrays.push([...auxArray]); 
            indexes.push([j,j+1]);
        } 
        auxArray[j + 1] = key; 
        arrays.push([...auxArray]); 
        indexes.push([j,j+1]);
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
  export default insertionSort;
  