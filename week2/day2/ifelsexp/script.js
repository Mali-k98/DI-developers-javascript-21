let x = 5;
let y = 3;

if (x > y) {
    console.log('x is the biggest number')
}

let newDog = "shiba";
newDog.length;
console.log(newDog.length);
newDog.toUpperCase;
console.log(newDog.toUpperCase);

if (newDog == "shiba") {
    console.log('i love shibas!!')
}else{
    console.log('cats are better than dogs!')  //not true!
}

// let numberChoice = prompt("choose a number");

// if (numberChoice % 2 == 0) {
//     console.log('thats an even number')
// }else (
//     console.log('thats an odd number!')
// )


let users = ["shrek75", "donkey68", "fiona98","gingerbreadman55"];
// console.log(users);
if (users.length == 0){
    console.log('no one is online')
}else if (users.length == 1){
    console.log(`${users[0]} is online`)
}else if (users.length == 2) {
    console.log(`${users[0]} and ${users[1]} are online`)
}else {
    console.log(`${users[0]} and ${users[1]}and ${users.length - 2} more are online`)
}
