console.log("Hello Site");
let age = 25;
console.log(age);

const salary = 80000;
console.log(salary);
let name = "BLUU";

const PI = Math.PI;

const person = {
  firstName: "Bruce",
  lastname: "Wayne",
  age: 30,
};
console.log(PI);
console.log(person.firstName);

const oddNumbers = generateOddNumbers(10);

console.log(oddNumbers);

console.log(oddNumbers[0] === oddNumbers[1] || oddNumbers[0] === oddNumbers[2]);

console.log(2.5 + parseFloat("2"));
console.log(Boolean(null)); // null, undifined, 0, '', NaN, return false.

const var1 = 10;
const var2 = "10";

console.log(var1 == var2); // null, undifined are same, ect.
console.log(var1 === var2);
const prompt = require("prompt-sync")({ sigint: true });
let input = prompt(
  "Input a number by words from one to five (E.g. 'one') and the program will return it in numeric form. "
);

console.log(input);

switch (input) {
  case "one":
    console.log(1);
    break;
  case "two":
    console.log(2);
    break;
  case "three":
    console.log(3);
    break;
  case "four":
    console.log(4);
    break;
  case "five":
    console.log(5);
    break;
  default:
    console.log("Value is not within requested range");
}

const arrowSum = (a, b) => a + b;

console.log(arrowSum(oddNumbers[0], oddNumbers[1]));

function generateOddNumbers(size) {
  let numberArray = [size];
  for (let i = 0; i < size; i++) {
    numberArray[i] = Math.floor((Math.random() * 100) / 2) * 2 + 1;
  }
  return numberArray;
}
