function capitalize(string){

    return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string){

    return string.split('').reverse().join('');
}

const Calculator = () => { 

    const add = (firstNumber, secondNumber) => {
        return firstNumber + secondNumber;
    }

    const subtract =(firstNumber, secondNumber) => {
        return firstNumber - secondNumber;
    }

    const divide = (firstNumber, secondNumber) => {
        return firstNumber / secondNumber;;
    }

    const multiply = (firstNumber, secondNumber) =>{
        return firstNumber * secondNumber;
    }

    return {add, subtract, divide, multiply};
}


function caesarCipher(string, number){

    let result = "";
    for (let i = 0; i < string.length; i++){

        const code = string.charCodeAt(i);

        if (code >= 97 && code <= 122){
            const shiftedCode = ((code - 97 + number) % 26);
            result += String.fromCharCode(97 + shiftedCode);
        } else if (code >= 65 && code <= 90){
            const shiftedCode = ((code - 65 + number) % 26);
            result += String.fromCharCode(65 + shiftedCode);
        } else {
            result += string[i];
        }
    }

    return result;
}

function analyzeArray(array){

    const sortedArray = array.sort();

    const arrayLength = array.length;
    const smallestNumber = sortedArray[0];
    const largestNumber = sortedArray[arrayLength - 1];
    const sumOfAllNumbers = array.reduce((total, current) => {
        return total + current;
    }, 0);
    const average = sumOfAllNumbers / arrayLength;
    
    const returnObject = {
        "average": average,
        "min": smallestNumber,
        "max": largestNumber,
        "length": arrayLength
    };

    return returnObject;
}

module.exports = {capitalize, reverseString, Calculator, caesarCipher, analyzeArray};