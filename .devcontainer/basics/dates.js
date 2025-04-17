// Dates in JavaScript

let mydate = new Date(); // Creates a Date object with the current date and time
console.log(mydate.toString()); // Outputs the full date as a string
console.log(mydate.toLocaleString()); // Outputs the date in the local format
console.log(typeof mydate); // Shows the type => "object"

// Creating a Date object using a string (YYYY-MM-DD format)
let mycreatedate = new Date("2023-10-01");
console.log(mycreatedate); // Outputs the date object
console.log(mycreatedate.toString()); // Outputs the string representation

// Creating a Date object using year, month, and day (Note: month is 0-based)
let mycreatedate2 = new Date(2023, 9, 1); // October 1, 2023
console.log(mycreatedate2.toString()); // Outputs: Sun Oct 01 2023 ...

// Getting the current timestamp in milliseconds since Jan 1, 1970
let mytimestamp = Date.now();
console.log(mytimestamp); // Milliseconds timestamp

// Getting timestamp of a specific date (in milliseconds)
console.log(mycreatedate2.getTime()); // Milliseconds since Jan 1, 1970 for mycreatedate2

// Convert current timestamp to seconds
console.log(Math.floor(mytimestamp / 1000)); // Seconds timestamp

// Getting parts of the current date
let newdate = new Date();
console.log(newdate.getMonth() + 1); // getMonth() is 0-based, so add 1
console.log(newdate.getDay()); // getDay(): 0 is Sunday, 1 is Monday, ..., 6 is Saturday

// Formatting date to get full weekday name and set a specific time zone
console.log(newdate.toLocaleString('default', {
    weekday: "long",      // Full weekday name, e.g., "Monday"
    timeZone: "Asia/Kolkata" // Specify your desired timezone
}));
