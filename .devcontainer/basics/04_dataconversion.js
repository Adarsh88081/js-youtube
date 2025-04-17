let score="33"
 
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) // changing type of score from string to number
console.log(typeof valueInNumber);
// now second example
let score_1="33abc"
console.log(typeof score_1);

let value= Number(score_1)
console.log(value) // if we will simply type "typeof " it will show us that it is a number instead it is not so we are doing this in order to check it
// after running this line "NaN" will appear which means not a number
/*
"33"=>33
"123as"=> NaN
*/

let isLoggedIn=1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// if we will convert a empty string then it is false else everything is true