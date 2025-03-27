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