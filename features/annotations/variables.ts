let apple: number = 5;
apple = 10;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// build in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
colors.push('yellow');
let myNumbers: number[] = [1, 2, 3];

// Classes
class Car {}
let car: Car;

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
// when to use Annotations
// 1- Function that returns the 'any type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);

console.log(coordinates);

// 2- When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord = false;

for (let index = 0; index < words.length; index++) {
  if (words[index] === 'green') {
    foundWord = true;
  }
}

// 3- Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > 0) {
    numberAboveZero = numbers[index];
  }
}
