const { capitalize, reverseString, Calculator, caesarCipher, analyzeArray} = require('./Functions');


test('A capitalize function that takes a string and returns it with the first character capitalized.', () =>{
    expect(capitalize('javascript')).toBe('Javascript');
});


test('A reverseString function that takes a string and returns it reversed.', () =>{
    expect(reverseString('javascript')).toBe('tpircsavaj');
});


test('A Calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.', () =>{
    expect(Calculator().add(1, 2)).toBe(3);
    expect(Calculator().subtract(1, 2)).toBe(-1);
    expect(Calculator().divide(1, 2)).toBe(0.5);
    expect(Calculator().multiply(1, 2)).toBe(2);
});


test('Caesar Cipher that takes a string and a shift factor and returns is with each character shifted.', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});


test('An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, length.', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual(
        {
            "average": 3,
            "min": 1,
            "max": 5,
            "length": 5
        }
    );
});