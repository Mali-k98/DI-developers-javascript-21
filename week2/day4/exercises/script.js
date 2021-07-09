

//info
// function infoAboutMe (name, age, hobbies, job){
//     console.log(`my name is ${name} my age is ${age} my hobbies include ${hobbies} i work as a ${job}`)
// }
// infoAboutMe ("amalia", 22, "fishing & cooking", "nurse");


// function infoAboutPerson (pName, pAge, pFavColour, pHobbies){
//     console.log(`your name is ${pName} your age is ${pAge} your fav colour is ${pFavColour} you enjoy ${pHobbies}`)
// }
// infoAboutPerson("rachel", 38, "orange", ["golf", "gaming"])
// infoAboutPerson("herb", 32, "pink", ["cooking", "judo"])

//keyless car 
// function checkDriverAge(age){
//     if (age < 18){
//         alert('you are too young to drive')
//     }else if(age = 18){
//     alert('congratulations on turning 18')
//     } 
// };

// checkDriverAge (prompt('what is your age?'));

//3 check number
// function checker(number){
//     if (number % 2 === 0){
//         console.log('even number!')
//     }else {
//         console.log('odd number!')
//     }
// }

// checker(prompt('choose a number:'))



// 4 divisible by 23 
// let sum = [];
// function isDivisible() {
//     for ( let i = 0;i < 500; i++){
//             if (i % 23 === 0){
//             console.log(i)
//         }
//     }
// }

// isDivisible ();




//5 shopper

// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// };

// function checkBasket (item){
//     for (let key in amazonBasket) {
//     if (item = key) {
//         alert('item in stock')
//     } else {
//         alert('item out of stock')
//     }
//     return;
// }
// }


// checkBasket (prompt('choose an item'))




//6 whats in my wallet
//not understood task

//7 shopping list

// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shopping = [ "apple", "pear", "orange",]

// function myBill(){
//     for ( key in stock) {
//         if (shopping === key ) {
//             console.log(prices)
//         } else if (value in stock === 0) {
//             console.log('not in stock')
//         }
//     }

// }

//8 tips

// function percentage(num, per){
//     per = prompt('how much was your meal')
// if (per >= 50){
//     num(20)
// }else if (per >= 200){
//     num(15)
// }else {
//     num(10)
// }
// return(num/100)*per;
// }

// percentage();
// console.log(percentage(per));


//9 vacations costs

// function hotelCost (nights){
//         nights = prompt('how many nights will you stay')
//         if (night === null){
//             ('how many nights will you stay')
//         } else {
//             return nights * 140
//         }
//     }

// hotelCost();

// let destinations = {
//     "paris": 138,
//     "london": 120,
//     "other": 99,
// }

// function planeCost(place){
//     place = prompt('where would you like to go?')
//     for (Key, value in destinations){
//         if (place === key){
//             return value;
//         }
//     }
// }

// planeCost();


// function carCost (days){
//     days = prompt('how many days do you want to rent')
//     if (days === null){
//         ('how many days do you want to rent')
//     } else {
//         return days * 140
//     }
// }

// carCost();

// function totalCost (cost){
//     cost = hotelCost * planeCost * carCost
//     return cost;
// }