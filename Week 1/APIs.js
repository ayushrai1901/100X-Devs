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

function cutIt(str, startIndex, endIndex){
    let newStr = "";
    for(let i =0; i<str.length; i++){
        if()
    }
}