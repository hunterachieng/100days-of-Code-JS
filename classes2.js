class Parent {
    constructor(name){
        this.name = name;
        this.age = 12;
    }
    greetings(){
        console.log(`Hi ${this.name}`);
    }
    introduction(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
}
//ineriting parent class
class Child extends Parent{
    constructor(name){
        
        super(name);//calling the parent constructor with *super* keyword]p
        this.age = 25;// overiding parent class
       

    }
    greetings(){
        console.log(`Your name is ${this.name}`);
        console.log(`I am ${this.age} years old`)
    }
}
let firstBorn = new Child("Moses");
console.log(firstBorn.greetings());
console.log(firstBorn.introduction());
// class overiding and inheritance
class Mother{
    constructor(location,name,age){
        this.location=location;
        this.name =name;
        this.age = age;
        this.occupation = "doctor"
    }
    parent(){
        console.log(`I am ${this.name}, aged ${this.age} coming from ${this.location}. Currently, I work as a${this.occupation}`);
    }
}
class Teacher extends Mother{
    constructor(location,name,age){
        super(location,name,age);
        this.occupation = "teacher";
    }
    parent(){
        console.log(`Hello Mrs.${this.name}. I am Ms.Oliver, your child's ${this.occupation}`);
    }
}
let adults = new Teacher("Nairobi","Helen Adams",34);
console.log(adults.parent());// only the child's properties will be used