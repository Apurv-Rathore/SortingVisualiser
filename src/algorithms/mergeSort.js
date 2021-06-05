const mergeSort = ({ array, setArray, setColorChangeIndex }) => {
    const len = array.length;
    let auxArray = [...array];
  //   console.log("orignal array",auxArray);
    let arrays = [];
    let indexes = [];
    function partition(arr, start, end){
        // Taking the last element as the pivot
        const pivotValue = arr[end];
        let pivotIndex = start; 
        for (let i = start; i < end; i++) {
            if (arr[i] < pivotValue) {
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to next element
            arrays.push([...arr]);
            indexes.push([i,pivotIndex]);
            pivotIndex++;
            }
        }
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
        arrays.push([...arr]);
        indexes.push([end,pivotIndex]);
        return pivotIndex;
    }

    function mergeSortRecursive(arr, start, end) {
        // Base case or terminating case
        if (start >= end) {
            return;
        }
        let index = partition(arr, start, end);
        // Recursively apply the same logic to the left and right subarrays
        mergeSortRecursive(arr, start, index - 1);
        mergeSortRecursive(arr, index + 1, end);
    }

    mergeSortRecursive(auxArray, 0, len-1);
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
export default mergeSort;
  
