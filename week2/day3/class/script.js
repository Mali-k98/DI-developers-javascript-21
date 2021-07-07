

//keys

// let userCart = {
//     username : 'john',
//     password : 12345,
//     isUserLogin : true,
// };

// for (let key in userCart){
//     console.log(key)
//     console.log(userCart[key])
// }

//while 


// let username = prompt('enter username');

// while (username.length != 4){
//     username = prompt('enter user name');
// };
// console.log('the user name is: ', username);

//do while 

let num = 3;

do{
    console.log("your number is", num)
} while (number < 2) {
    num ++
    console.log("in the loop")
}

//break continue 

for (let i = 0; i <10; i++) {
    if (i === 3){
    continue;
    }
    console.log("the number is" + i);
}
