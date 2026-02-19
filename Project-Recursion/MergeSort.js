function mergeSort(Array){

    console.log("This was printed recursively");

    if (Array.length === 1){
        return Array;
    }

    const ArrayLength = Array.length;
    const ArrayHalf = Math.floor(ArrayLength / 2);
    const LeftArray = Array.slice(0, ArrayHalf);
    const RightArray = Array.slice(ArrayHalf);

    /* Recursively calls the function and splits the parameter array and its children arrays until the final parameter array
    only has a single element. In final recursive call, SplitLeftArray and SplitRightArray will contain an array of a 
    single digit. */


    const SplitLeftArray = mergeSort(LeftArray);
    const SplitRightArray = mergeSort(RightArray);
    
    /* Calls secondary function to merge the arrays that were split after each array has been split
    until a single element remains. */


    return mergeArray(SplitLeftArray, SplitRightArray);

}

/* Secondary Function called recursively as it is called in the first function which is called recursively */ 

function mergeArray(Left, Right){

    const sortedArray = [];

    /* Compares the left and right arrays and sorts each element depending on their value, while removing that same element
    from their respective arrays. */

    while (Left.length && Right.length){
        if (Left[0] < Right[0]){
            sortedArray.push(Left.shift());
        } else {
            sortedArray.push(Right.shift());
        }
    }

    /* Returns a new array of the new sorted array and the remaining elements in the left and right parameter arrays in case
    the left and right arrays are not empty. */ 

    return [...sortedArray, ...Right, ...Left];
    
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]))