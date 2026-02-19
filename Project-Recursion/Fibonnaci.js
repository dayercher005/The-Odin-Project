
// Iterative Solution

function fibs(number){

    console.log("This was printed iteratively");

    const FibArray = [0, 1];

    // Base Case: If number is 1, return 0
    if(number == 1) {
        return [0]
    }

    for(let num = number; num > 2; num--){
        FibArray.push((FibArray.at(-1) + FibArray.at(-2)));
    }

    return FibArray;
}

// Recursive Solution

function fibsRec(number){

    console.log("This was printed recursively");
    // Base Cases: If number is either 0 or 1, return [0] or [0, 1] respectively.

    if (number == 1) {
        return [0]
    }else if (number == 2){
        return [0, 1]
    }

    // Sets the subsequent recursive functions to a variable while appending the array in each recursive function.

    const FibArray = fibsRec(number - 1);
    FibArray.push(FibArray[FibArray.length - 1] + FibArray[FibArray.length - 2]);
    return FibArray
}

console.log(fibs(7));
console.log(fibsRec(7));