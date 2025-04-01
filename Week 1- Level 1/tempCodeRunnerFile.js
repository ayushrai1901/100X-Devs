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