//keyword class is used to create a class 
//always add a method named constructor to initialize the class properties

class Animal{
    constructor(name, legCount, speaks){
        this.name = name; //this keyword is used to refer to the current object
        this.legCount = legCount; 
        this.speaks=speaks;

    }
    speak(){ //function can be called on the oject of the class not directly on the class
        console.log("hi there "+ this.speaks);
    }

    //static methods are associated with the class itself, not with instances(objects) of the class
    //to call any function directly on the class the function should be static

    static myTypes(){
        console.log("Animal is a class of living beings" + this.speaks);
    }
}

//creating a function to create an object of the class Animal
//Animal.prototype.speaks()=function(){
//    console.log("hi there "+ this.speaks);
//
//};

//creating an object of the class Animal
let dog1 = new Animal("jennie",4,"woof woof" ); //creating an object of the class Animal
console.log(dog1); //output: Animal { name: 'jennie', legCount: 4, speaks: 'woof woof' }
dog1.speak(); //output: woof woof // call function on object dog1