let password = "abc";

console.log(typeof password);

let convert = Number(password);
console.log(typeof convert);
console.log(convert);

/*
 NaN => it is type of number,
 NaN (full form:- not a number)is return means not a number
*/

let bool = "";
let newbool = Boolean(bool);
console.log(newbool);

/*
0 => false , 1 => true
"" => false , "rohit" => true
*/

let someNumber = 33;

let string = String(someNumber);
console.log(string);
console.log(typeof string);