//FIRST EXERCISE
let username = "John";
function checkName (user) {
	console.log("username = user", username === user) //true  //created new variable
	user += "Smith";
	console.log("username = user", username === user) //false //added smith not like global, changer value of user
	console.log("username = ", user, username) // johnsmith john //added smith to username and also stated username in global
}
console.log("before username = ", username) //john //cos of global let
checkName(username)
console.log("after username = ", username) //john //from the global put in the function 
