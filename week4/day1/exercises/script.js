// EXERCISE 1 

// #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }
//3

//#2
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }
//0

//#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// } //undefined

//#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// } //test

//#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a); //5

//EXERCISE 2 

// function winBattle(){
//     return true;
// }

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

//EXERCISE 3

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.includes('violet')

// colors.forEach ( (color, index) => console.log(`my #${index} choice is ${color}`))

//EXERCISE 4

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];

// color.forEach((colr, i) => {if (i == 0){
//     console.log(`my 1${ordinal[1]} choice is ${colr}`)
// }else if (i == 1){
//     console.log(`my 2${ordinal[2]} choice is ${colr}`)
// }else if (i == 2){
//     console.log(`my 3${ordinal[3]} choice is ${colr}`)
// } else{
//     console.log(`my ${i}${ordinal[0]} choice is ${colr}`)
// }
// })

//EXERCISE 5

// function isString (value){
//     return typeof value === 'string' || value instanceof String;
// }

// console.log(isString('hello')); 
//true
// console.log(isString([1, 2, 4, 0]));
//false

//EXERCISE 6

// let bankAmount = 12000;
// let tax = 17;

// let monthlySpending =[-300, -1200, +8000, -400]

// monthlySpending.forEach((no) => {
//     if (no < 0){
//         let spendage = no*tax*0.1;
//         let bankAccount = bankAmount + monthlySpending[2] + spendage;
//         console.log(bankAccount)
//     }
// })

