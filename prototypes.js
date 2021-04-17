//prototypes as object properties
function Person(){
    this.name = "Achieng",
    this.age = 34
}
const place = new Person();
const someone = new Person();
Person.prototype.school = "AkiraChix";
console.log(Person.school);
console.log(place.school);
console.log(someone.school);
console.log(place.age);

//prototypes with methods
function Cup (){
    this.color = "red";
    this.shape = "round";
    this.size = "medium";
}
let utensil = new Cup();
Cup.prototype.capacity = function(capacity){
    console.log("The " +this.color + " cup holds " + capacity + " liters");
}
console.log(utensil.capacity(500));