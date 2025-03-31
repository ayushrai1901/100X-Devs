//finding string in javascript
let a = "hello world"; //spaces also count as characters in a string
console.log(a.length);

//finding index of 

function findIndexOf(str, target){
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
    console.log("Last index of: ",str.lastIndexOf(target));
}

findIndexOf("hello world", "world"); //indexing starts from 0

//what will happen when there is repeated word in a string than it will return the index of the first occurence of the word
findIndexOf("hello world  world world worl", "world"); //indexing starts from 0

// to find last index of the word in a string we use predefined function lastIndexOf


// Slice function is used to get the substring from the string
function getSlice(str, start, end){
    console.log("Original String:", str);
    console.log("After Slice:", str.slice(start, end));
}

getSlice("hello world", 0, 4); //indexing starts from 0
//the start index is inclusive and the end index is exclusive
//the difference between slice and substring is that slice can take negative values as well
//the negative values are counted from the end of the string
// the major difference between slice & substr is in slice counting starts from 0 and in substr counting starts from 1
// slice(0,4) will return "hell" 
//substr(0,4) will return "hell"

/*function cutIt(str, startIndex, endIndex){
    let newStr = "";
    for(let i =0; i<str.length; i++){
        if()
    }
}*/

// split function is used to split the string into an array of strings

const value = "ayush kumar rai frontend developer"
const splitValue = value.split("");
console.log(splitValue); //it will split the string into an array of strings


const value1 = "               Ayush Kumar rAi          ";
const trimeValue = value1.trim(); //it will remove the spaces from the start and end of the string
console.log(trimeValue); //it will remove the spaces from the start and end of the string

//it will not remove the spaces from the middle of the string

//toUpper & toLower function is used to convert the string to upper case and lower case respectively

const value2 = "ayush kumar rai frontend developer";
const upperValue = value2.toUpperCase(); //it will convert the string to upper case
console.log(upperValue); //it will convert the string to upper case

const lowerValue = value1.toLowerCase(); //it will convert the string to lower case
console.log(lowerValue); //it will convert the string to lower case

//we are printing the value1 without triming it & then the spaces is coming in the output