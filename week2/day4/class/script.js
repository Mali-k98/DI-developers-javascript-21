//functions 

// function userInfo(name, age){
//     console.log(name)
//     console.log(age)
//     console.log("my name is" + " " + name + " " + "my age is" + " " + age)
// };

// userInfo("sarah", 30);
// userInfo("john", 42);



//exercise 1

// function myAge (age){
    // let mumAge = age * 2;
    // let dadAge = mumAge * 1.2;
    // console.log(`my mum is ${mumAge} and my dad is ${dadAge}`) //better to write
    //console.log("my mum is" + " " + mumAge + " " + "and my dad is" + " " + dadAge)
// };

// myAge(15);

//more

// function userInfo(name, age) {
//     let result = "My name is" + name + "my age is"  + age 
//     return result 
// }

// let girlInfo = userInfo("Sarah", 22)
// console.log(girlInfo)

//ecersice 

function theAge (myAge) {
    mumAge = myAge * 2
    let ans = {
        age: mumAge,
        sentence: `my mums age is ${mumAge}`,
    }
    return ans
};

theAge = 15
console.log(theAge(myAge).sentence)

