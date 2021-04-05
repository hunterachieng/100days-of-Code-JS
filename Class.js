class Person{
    constructor(){
       this.name = "Hunter";
        this.age = 24;
    }
    sayHi(){
        console.log(`Hello, I am ${this.age} years old`);//method within a class using a backtick
    }
    get myName(){
        return this.name; //using getter within a class
    }
    set newName(name2){
        this.name= name2; // using setters within a class
    }
}
let human = new Person();
console.log(human.name); //Hunter

console.log(human.sayHi());

console.log(human.myName); 

human.newName = "Anyango";// new set value of name
console.log(human.name);

console.log(typeof Person); //JS only recognizes classes as functions 