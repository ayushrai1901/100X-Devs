/*function sum(a,b){
    //do things with the input & return the output
    const sumValue =a+b;
    return sumValue;
}

const value =sum(1,2);
const value2= sum(2,5);
console.log(value2); //3*/

/*let sum =0;
for(let i=0; i<1000000000000000000; i++){
    sum +=i;
    //console.log(i);
}
console.log(sum); //499999999999999999500000000000000000*/

//Fucttion declaration
//fuction let us
//1. define a block of code that we can execute later
//Abstract out logic so we can use the same code in different places
//Takes arguments as inputs
//Return a value as an output
//You can think of a function as a machine that takes in raw materials, does something with them, and then spits out a product
//Function CAN take other functions as input- this will confuse you (callback functions)


//Lets write some code

function sum(num1, num2, fnToCall){ //we can pass the function as an argument to another function
    let result1 = num1 + num2;
    fnToCall(result1);
}

function displayResult(data){
    console.log("Result of the sum is: " + data);
}

function displayResultPassive(data){
    console.log("Sum's of the result is: " + data);
}

//You are only allowed to call one function after this
//How will you displayResult of a sum

const ans = sum(1,2,displayResult); //here we are calling the function sum and passing the function(displayResult) as an argument
//displayResult(ans); // here the result is coming correct but we have to call a function only once 

//so what we can do is instead of call the function we can pass the function as an argument to another function
//i.e reome retrun result1 and call the function(displayResult) inside the function(sun)


function calculateArithmetic(a,b, type){
    if(type == "sum"){
        //return a+b;
        const value = sum(a,b);
        return value;
    }
    if(type == "minus"){
       // return a-b;
       const value = sub(a,b);
       return value;
    }
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

const value =  calculateArithmetic(1,2,"sum");
console.log(value);

//passing fuctions as arguments is also called as callback functions
// a callback function is a function that is passed as an argument to another function and is executed after some operation has been completed

function greet(){
    console.log("Hello");
}

setTimeout(greet, 3*1000); //here greet is a callback function



// Loops, Functions, and Callbacks in JS

// calculaye the sum of first 100 numbers using for loop

let sum =0;
for(let i=0; i<100;i++){
    sum  = sum +i;
}
console.log("The sum of First number is: " + sum); 

//Function : A block of code that performs a specific task. It is executed when it is called.
//it should take some input & retrun an output where there is some obvious relationship between the input & output
//Function should be reusable & should not be dependent on any other function

//below block of code is used to decalare function name findSum, we did not call the function yet
//function is a reusable block of code that takes some input and returns an output
function findSum(n){
    let sum =0;
    for(let i=0; i<n;i++){
        sum =sum+i;
    }
    return sum;
}

//calling  the function 
//to call function we need to use the function name and pass the value as an argument to the function
const sum1 = findSum(10); //calling the function findSum and passing the value 10 as an argument to the function
console.log("The sum of First 10 numbers is: " + sum1); 

function sum2(a,b){
    return a+b;
}

const sum3 = sum2(9,9);
console.log("The sum of 9 and 9 is: " + sum3);

//why do we need function ?
//it lets us help us to reuse a block code as many times we want to use

//lets understand with the example

//finding sum of first 10 numbers

let n1=10;
let ans1=0;
for(let i=0; i<10;i++){
    ans1 += i;
}
console.log(ans1);

//can we find sum next 50 numbers in the same code, without making changes to the code ? NO
// we have written same code with different variables name 
let n2=50;
let ans2=0;
for(let i=0; i<10;i++){
    ans2 += i;
}
console.log(ans2);

// with the help of function we can changes the number as much we want

function findSum1(n){
    let sum4 =0;
    for(let i=0; i<n ;i++){
        sum4 += i;
    }
    return sum4;
}

const sum5 = findSum1(10);
console.log("the sum of first 10 numbers is: " + sum5);

//to find sum of next 60 numbers we have only to declare new variables & call the function

const sum6 = findSum1(60);
console.log(sum6);


//callback function : call function inside a function 
//find the square of the input
function square(n){
    return n*n;
}

//function cube(n){
  //  return n*n*n;
//}

//find the sum of the squares of the inputs

/*function sumOfSquares(a,b){
    const val1 = square(a);
    const val2 = square(b);
    return val1 + val2;
}*/

function cube(n){
    return n*n*n;
}

/*function sumOfCubes(a,b){
    const val1 = cube(a);
    const val2 =cube(b);
    return val1 +val2;
}*/

function sumOfSomething(a,b,fn){
    const val1 = fn(a);
    const val2 = fn(b);

    return val1+val2;
}
console.log("The sum of cubes of two numbers is: " + sumOfSomething(2,2, cube));
console.log("The sum of squares of two numbers is: " + sumOfSomething(4,2,square));

// in above code we are not following the DRY rule
//this where call back functions come into picture

