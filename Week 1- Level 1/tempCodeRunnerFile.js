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