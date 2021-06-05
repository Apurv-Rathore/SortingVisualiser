const selectionSort = ({ array, setArray, setColorChangeIndex }) => {
    
    const len = array.length;
    let temp;
    let auxArray = [...array];
  //   console.log("orignal array",auxArray);
    let arrays = [];
    let indexes = [];
    
    var i, j, min_idx;
    for (i = 0; i < len-1; i++)
    {
        min_idx = i;
        for (j = i + 1; j < len; j++){
            if (auxArray[j] < auxArray[min_idx])
                min_idx = j;
        }
        temp = auxArray[min_idx];
        auxArray[min_idx] = auxArray[i];
        auxArray[i] = temp;
        arrays.push([...auxArray]); 
        indexes.push([i,min_idx]);
    }
    for (let index = 0; index < arrays.length; index++) {
      setTimeout(() => {
        setArray(arrays[index]);
        setColorChangeIndex([...indexes[index]])
      }, (index * 2000)/(len));
    }
    setTimeout(() => {
      setColorChangeIndex([])
    }, (arrays.length * 2000)/(len));
    
  
    return arrays;
  };
  export default selectionSort;
  