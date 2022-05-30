// Output a number
const number = (input: number) => input;

console.log(number(1));

// Output a string
const string = (input: string) => input;

console.log(string('hello'));

// Output a number
const boolean = (input: boolean) => input;

console.log(boolean(true));

// Output an array of numbers
const numberArray = (input: number[] | Array<number>) => input;

console.log(numberArray([1, 2, 3]));

// Output an array of strings
const stringArray = (input: string[] | Array<string>) => input;

console.log(stringArray(['one', 'two', 'three']));
