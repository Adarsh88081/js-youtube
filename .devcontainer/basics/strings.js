const name="Adarsh";
const age=19;
console.log(name+age+" is my name and age"); // Adarsh19 is my name and age
// this is not a good method so we will use another mehtod
console.log('${name} ${age} is my name and age'); // Adarsh 19 is my name and age

const gamename= new String("Mortal Kombat"); // this will create a string object
// this is beneficial when we want to use string methods
console.log(gamename._proto__); // this will show the prototype of the string object
console.log(gamename.length); // this will show the length of the string object
console.log(gamename.toUpperCase()); // this will convert the string to upper case
console.log(gamename.charAt(0)); // this will show the first character of the string object
console.log(gamename.indexOf("M")); // this will show the index of the first occurrence of the character M


const newstring= gamename.substring(0,4); // this will show the substring of the string object
console.log(newstring); // morta
//or
const newstring2= gamename.slice(0,4); // this will show the substring of the string object
const newstring3= gamename.slice(-11,4 ); // this will start from the end of the string
console.log(newstring3);    
/* slice(start, end) in JavaScript always moves left to right — from start index to end index (excluding end).
Even if start is greater than end, it just returns an empty string.
also negative slicing does not work on substring
*/
const trimstring= "   Adarsh Singh trim string   "; // this will show the string with spaces
console.log(trimstring);
console.log(trimstring.trim()); // this will remove the spaces from the string
const url="https://www.google.com%20/"; // this will show the url
url.replace("%20","_"); // this will replace the %20 with space
console.log(url.replace("%20","_")); // this will show the url with space
console.log(url.includes("google")); // this will check if the string includes google
console.log(url.startsWith("https")); // this will check if the string starts with https

const newcheeck= new String("Adarsh- Singh- Somvanshi"); // this will create a string object
console.log(newcheeck.split("-")); // this will split the string into an array
// this will split the string into an array of strings using the - as a separator