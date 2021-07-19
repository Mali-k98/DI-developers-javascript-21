// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Copy this object using the method that was taught in today’s lesson.
// Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ?
// Change the value of payed to false. Will we also see this modification in the copied objects ? Why ?

// let groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         payed : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }

let groceries = new Object();
groceries.fruits = ["pear", "apple", "banana"]
groceries.vegetables = ["tomatoes", "cucumber", "salad"]
groceries.totalPrice = "$20"
groceries.other = {
    payed : true,
    meansOfPayment : ["cash", "creditCard"]
}

console.log(groceries);

groceries.totalPrice ="$35" //doesnt change original

groceries.other.payed = false; //changes original //cant change first layer but can second

console.log(groceries);