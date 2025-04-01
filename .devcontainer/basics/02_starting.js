const account_Id = 144553;
let accountEmail = "adarsh4096.com";
var accountPassword = "123450";
accountCity = "Jaipur";

// account_Id = 2; // not allowed
accountEmail = "adtusuh@123";
accountPassword = "123432";
accountCity = "Bengluru";

console.log(account_Id);
console.table([accountEmail, account_Id, accountPassword, accountCity]);

// To declare constants, we can only use the const keyword.
// But for variables, we have two methods: let and var.

/*
Prefer not to use var because of issues in block scope and functional scope.
*/
