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

// getSlice function is used to get the substring from the string

function getSlice(str, start, end){
    
}