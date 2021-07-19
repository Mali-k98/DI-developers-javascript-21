// let username = "John";
// function checkName (){
// 	let username = "Sara";
// 	console.log("In the function",username); //sara
// 	username = "Teo"
// 	console.log("Still in the function",username); //teo
// }
// console.log("before the function", username); //john
// checkName()
// console.log("after the function", username); //john

function askUser (){
    let userName = prompt('what is your name?')
    return userName
}



function capIt ( theName = askUser()){
    console.log(`${theName.charAt(0).toUpperCase() + theName.slice(1).toLowerCase()}`)
}
capIt();