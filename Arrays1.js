function stringArrays (){
    var fruits = ["Mango", "Banana", "Apples", "Kiwi", "Peach"];
    //adding elements to an array
    console.log(fruits.push("Watermelon"));//at the end of the array
    console.log(fruits.push("Guava"));
    console.log(fruits.unshift("Pear"));// at the start of the array
    
    //removing elements of an array
    console.log(fruits.shift());//at the start of the array
    console.log(fruits.pop());//at the end of the array

    //sorting in alphabetic order
    console.log(fruits.sort());

    //identifying the index position of a string
    console.log(fruits.indexOf("Mango"));
    console.log(fruits.indexOf("Kiwi"));
}
stringArrays();
function numberArrays (){
    var numbers = [23,64,33,23,67,24,64];
    var ages = [6,23,1,32,4];
    //joining arrays
    console.log(numbers.concat(ages));
    //changing array elements to strings
    console.log(numbers.toString());
    
}
numberArrays();