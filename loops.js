function students (){
    var names = ["Amondi", "Agatha", "Cate", "Eunice"];
    //for...loops
    for (i=0;i<= names.length; i++){
        console.log(names[i]);
    }
}
students();
//while...loops
function animals(){ 
    var warmBlooded = ["Koala", "Bear", "Rat", "Cow", "Dog"];
    var i = 1;
    while(i <= warmBlooded.length){
       console.log(warmBlooded[i]);i++;
    }
}animals();
//for ....of 
function plants (){
    let fruits = ["Apple", "Mango", "Banana", "Kiwi", "Peach"];
    for(let elements of fruits){
        console.log(elements);
    }
}
plants();
//for ... in loops
function school (){
    const classes = ["Lovelace", "LisaLab", "AnitaB"];
    for(key in classes) console.log(classes[key]);
    }
school();