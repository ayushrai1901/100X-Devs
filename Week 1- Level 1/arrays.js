const intialArray = [1, 2, 3, 4, 5];
//to add some values to the array we can use push method
intialArray.push(6,7); //it will add the values to the end of the array
console.log(intialArray); //it will add the values to the end of the array

// to remove any value from last of the array we can use pop method

intialArray.pop(); //it will remove the last value from the array
console.log(intialArray); //7 has been removed from the array

//to remove any value from the start of the array we use shift method
intialArray.shift(); //it will remove the first value from the array
console.log("1 has been deleted from the array "+intialArray); //1 has been removed from the array

//to put any value in the start of the array we use unshift method
intialArray.unshift(1); //it will add the value to the start of the array
console.log(intialArray); //1 has been added to the start of the array

//what will happen if we have two arrays or multiple arrays 
// to add two arrays we can use concat method

//console.log(intialArray);

const secondArray = [8, 9, 10];

console.log(intialArray.concat(secondArray)); //it will add the two arrays together


// to iteration over the array we can use forEach method

//sol 1 using iteration method

const array = [2, 3, 4, 5, 6, 7, 8, 9, 10];
array.unshift(1); 
//for (let i=0; i<array.length; i++){
 //   console.log(array[i]); //it will print the values of the array one by one
// }

//sol 2 using forEach method
function logThings(str){
    console.log(str); //it will print the values of the array one by one
}

//[1,2,3]

array.forEach(logThings); //it will print the values of the array one by one


