const score = 400; // this is a number
const balance = new Number(400); // this is an object
console.log(score);
console.log(balance); // this will show the object
console.log(balance.toString()); // this will convert the object to string

const othernumber = 123.3982;
console.log(othernumber.toFixed(2)); // this will show the number with 2 decimal places
console.log(othernumber.toPrecision(4)); // this will show the number with 4 decimal places

const hundred = 10000000;
console.log(hundred.toLocaleString("en-IN")); // this will show the number in Indian format
console.log(hundred.toLocaleString("en-US")); // this will show the number in US format

//+++++++++++++++++++++++++++++++++maths.js+++++++++++++++++++++++++++++++++++++++++++++
// // Math is an object in JS which has many methods and properties
console.log(Math.PI); // this will show the value of pi
console.log(Math.E); // this will show the value of e
console.log(Math.abs(-4)); // this will show the absolute value of -4
console.log(Math.sqrt(16)); // this will show the square root of 16 
console.log(Math,round(4.6)); // this will round the number to the nearest integer
console.log(Math.ceil(4.2)); // this will round the number to the next integer
console.log(Math.floor(4.8)); // this will round the number to the previous integer
console.log(Math.random()); // this will show a random number between 0 and 1
console.log(Math.random()*1000); // this will show a random number between 0 and 1000
console.log(Math.random()*10+1); // this will show a random number between 1 and 10
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min)) // this will show a random number between 10 and 20
// // this will show a random number between min and max