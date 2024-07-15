// use for each to double the numbers in the array and push it to a new array
const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = [];
newNumbers.forEach((n) => {
  newArray.push(n * 2);
});
console.log(newArray);

// convert the strings of an array to uppercase and store it in a new array
const alphabets = ["supe", "bat", "daredevil", "bet", "speed"];
let newAlpha = [];

alphabets.forEach((n) => {
  newAlpha.push(n.toUpperCase());
});
console.log(newAlpha);

//
