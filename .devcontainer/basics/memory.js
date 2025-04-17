// stack(primitive) -> stack
// heap(non-primitive) -> heap
// example of stack
let myname="Adarsh"; 
let anothername=myname;
anothername="Shaktiman"; // this will not chaange the value of myname
console.log(myname);
console.log(anothername);

let user_1={
    email:"adarsh209601@gmail.com",
    upi:"1244532"
}
let user_2=user_1; // this will create a refrence of user_1
// any change in user_2 will also change in user_1 as it is a reference type or non primitve type
user_2.email="singha10493@gmail.com"
console.log(user_1.email); // this will change the value of user_1
console.log(user_2.email); // this will also change the value of user_2