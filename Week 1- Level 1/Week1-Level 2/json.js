//JSON stands for JavaScript Object Notation

//it use for data exchange between server and client
//from string given by client to object in server side
//from object in server side to string in client side

const users = '{"name": "Ayush kumar rai", "age":22,"isMarried": false, "gender":"male"}'; //string in JSON format
//JSON.parse() method is used to convert JSON string into JavaScript object
//JSON.stringify() method is used to convert JavaScript object into JSON string
//JSON.stringify(user); //converting object into JSON string

const user = JSON.parse(users); //converting JSON string into object
console.log(user["name"]); //output: Ayush kumar rai

//using stringify() method to convert object into JSON string

const finalString = JSON.stringify(user); //converting object into JSON string
console.log(finalString);