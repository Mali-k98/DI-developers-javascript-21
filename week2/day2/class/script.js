// OBJECT 
//key/value pair

// let nameVar = "username";
// let login = "isUsersSignIn"

// let userCart = {
//     username : "john",
//     password : 21746,
//     cart : ["apple", "banana", "pear"],
//     isUserSignIn : true,
//     cart : {
//         apple : 2,
//         banana : 1,
//         pear : 5,
//     },
//     prices : {
//         apple : 0.5,
//         banana : 0.8,
//         pear : 0.2,
//     },
// };

// if (userCart ["isUserSignIn"] ) {
//     console.log(userCart["username"], userCart["password"])
// }else {
//     alert('please sign in!!')
// }

// if (userCart["username"] == "john" && userCart["password"] == 21746) {
//     console.log('welcome back!')
// }else if (userCart["username"] == "john" || userCart["password"] == 21746){
//     alert('one credential is false')
// }else {
//     console.log('please sign in!')
// };



// userCart["username"] = "josh";

// userCart["password"] 

// console.log(userCart.username);
// console.log(userCart["username"]); //better to use

// console.log(userCart[nameVar]); //can asign a variable ... common practise 

// console.log(userCart.cart[1])

// SYNTAX : nameOfObject.nameOfKey
        // nameOfObject["nameOfKey"]


// console.log(userCart["cart"][1])

// console.log(userCart["cart"]["pear"]);
// console.log(userCart["prices"]["pear"]);

// let numberPear = (userCart["cart"]["pear"]);
// let pearPrice = (userCart["prices"]["pear"]);
// let pearTotal = numberPear * pearPrice;

// let numberAppple = (userCart["cart"]["apple"]);
// let applePrice = (userCart["prices"]["apple"]);
// let appleTotal = numberAppple * applePrice;

// let numberBanana = (userCart["cart"]["banana"]);
// let bananaPrice = (userCart["prices"]["banana"]);
// let bananaTotal = numberBanana * bananaPrice;

// console.log(pearTotal);

// let tax = 1.1;
// let pearTaxTotal = numberPear * tax;
// let appleTaxTotal = numberAppple * tax;
// let bananaTaxTotal = numberBanana * tax;
// console.log(pearTaxTotal);

// userCart["prices"]["pear"] *= 1.17;

//when do promt you have to asign is to an variable

// let userChoice = prompt('which fruit would you like?').toLowerCase();
 //   console.log(userChoice);

// let userTotal = userCart["prices"][userChoice];

//if userChoice 
// userCart["prices"]["banana"];
// userCart["prices"]["apple"];
// userCart["prices"]["pear"];

// alert(`hi ${nameVar} a ${userChoice} total is ${userTotal}`)

//CONDITIONALS

// let bankAmt = 4000;

// if (bankAmt >= 50000) {
//     console.log("you can buy a bmw")
// } else if (bankAmt >= 18000){
//     console.log("you can buy a hyundai")
// }else if (bankAmt >= 5000){
//     console.log ("you can buy a bike")
// }else {
//     console.log("you're broke :(!!!")
// }