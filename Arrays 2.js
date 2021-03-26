// checking if every item in the array fits the conditions
function ages (age){
    return age >= 18;
}
const studentAges = [23,12,7,4,21,9,17];
let student = studentAges.every(ages);
console.log(student);

//checking if some items in the array fit the conditions

function books (book){
    return book <= 340;
}
const booksSerialNumbers = [453,234,986,789,123];
let serialNumbers = booksSerialNumbers.some(books);
console.log(serialNumbers);