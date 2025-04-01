//Date is global built in object

//Date is used to work with dates and times
//Date object is created using new Date() constructor

const currentDate = new Date(); //creating a date object
console.log(currentDate.getDate()); //output: 01 //getDate() method returns the day of the month (1-31) for the specified date according to local time.
console.log(currentDate.getYear()); // getYear gives output current year - 1900
console.log(currentDate.getFullYear());

const currentDate1 = new Date();

console.log("Time is millisseconds since 1970: " + currentDate1.getTime());

function calculateSum(){
    let a=0;
    for(let i=0; i<10000000;i++){
        a =a+i;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculateSum(); //calling the function to calculate sum

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs); 

