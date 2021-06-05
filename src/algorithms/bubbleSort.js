const bubbleSort = ({array, setArray}) => {
    for (let index = 0; index < 2; index++) {
        if (index===0){
            setTimeout(() => {
                setArray([4,3,2,1,1,1,1]);    
            }, 1000*index);
        }
        if (index===1){
            setTimeout(() => {
                setArray([5,4,3,2,2,2,1]);    
            }, 1000*index);
        }
    }
    
    

}
export default bubbleSort;