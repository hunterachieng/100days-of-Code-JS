class Person{
    constructor(name,school,age,location){
        this.name = name,
        this.school = school,
        this.age = age,
        this.location = location
    }
    introduction(){
        console.log(`I am ${this.name} aged ${this.age} from ${this.location}.I currently study in ${this.school}.`);
    }
    lessons(unit){
        console.log(`My favorite unit is ${unit}.`);
    }
}
//class inheritance 
class Student extends Person {

}
let student = new Student ("Angella","AkiraChix",24,"Nairobi");
student.lessons("JavaScript");
console.log(student.introduction());