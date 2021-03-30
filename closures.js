//closures
function outer (a){
    function inner (b){
        return a + b;
    }return inner;
}
var newFunc = outer(10);
console.log(newFunc(20));
// closures with strings
function teacher (){
    var name = "Hunter";
    function teacherName (){
        var country = "Kenya";
        return "My name is " + name + ", I am from " + country;
    } return teacherName;
}
var intro = teacher();
console.log(intro());
// closure switch conditions
function condition (x){
    function begin (){ 
    switch (x){
        case 20:
            console.log("Yes");
            break;
        case 30:
            console.log("Not really");
            break;
        case 40:
            console.log("Try again");
            break;
        default:
            console.log("Not found");
    }
    }return begin;
}var ans = condition(30);
console.log(ans());