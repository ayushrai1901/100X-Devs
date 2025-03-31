//JS has only one type of number. Numbers can be written with or without decimals.

//let x= 3.14; // a number with decimal i.e. float
//let y= 3; // a number without decimal i.e. int

//extra large number or extra small number can be written with e or E to indicate the power of 10.

// Adding numbers & strings

//in JS the + operator is used to add numbers & strings.
//numbers are added , strings are concatenated.

//Addition of two numbers will be number

let x= 5;
let y =3;
let z = x+y;
console.log(z);

//if two strings are added then they will be concatenated.

let a ="5";
let b = "3";
let c = a+b;
console.log(c);

// if we add a number & a string then the number will be converted to string & they will be concatened to string

let d = x +b;
console.log(d);

let e =10;
let f=20;
let g = "the result is" + e + f; //it will be concatenated to string beacause of the string in the beginning
console.log(g);

let h = "the result is " + (e + f); 
console.log(h); //it will be added to number because of the brackets as per PEMDAS rule

console.log(018 == '018'); //it will be 18 because 8 is not a valid octal number
console.log(017 == '017'); //it will be 17 because 7 is valied octal number & its decimal value is 15
//Never write a number with a leading zero (like 07).
//Some JavaScript versions interpret numbers as octal if they are written with a leading zero.



let i = 10;
let j =20;
let k = "30";
let result = i+j+k;
console.log(result); //it will be 30 because of the string in the beginning

//in the string if we divivde, multiply or subtract then it will be converted to number & the result will be number but if we add two strings than it will be concanated

//NaN is javascript reserved word indicating that a number is not a legal number

//Comparing two JavaScript objects always returns false.