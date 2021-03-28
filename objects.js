//objects with a method enclosed
let fruits = {
    type: "Mango",
    cost: 40.00,
    variety: function (preference){
        return preference;
    }
}
console.log(fruits.variety("Embe dodo"));
console.log(fruits.type);

// using function constructors to create multiple objects
function School (){
    this.name = "Amanda",
    this.age = 23,
    this.class = "Lovelace",
    this.lessons = function (){
        console.log("JavaScript");
    }
}
//first new object
let schoolName = new School();
console.log(schoolName.age);
console.log(schoolName.lessons());
//second new object
let studies = new School();
console.log(studies.class);

