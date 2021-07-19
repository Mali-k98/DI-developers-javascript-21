//----FIRST EXERCISE----
// let username = "John";
// function checkName (user) {
// 	console.log("username = user", username === user) //true  //created new variable
// 	user += "Smith";
// 	console.log("username = user", username === user) //false //added smith not like global, changer value of user
// 	console.log("username = ", user, username) // johnsmith john //added smith to username and also stated username in global
// }
// console.log("before username = ", username) //john //cos of global let
// checkName(username)
// console.log("after username = ", username) //john //from the global put in the function 

//----SECOND EXERCISE-----
// let pName = "John";
// function checkName() {
//     console.log("in the checkName func : ", pName)
//     let nameUppercase = pName.toUpperCase();
//     //lexical scope, the inner function has access to the variables 
//     //of the outer function
//     function addExclamation() {
//         let test = "hello";
//         nameUppercase += "!"
//         console.log("in the addExclamation func NAME_TO_UPPERCASE: ", 
//         nameUppercase);
//     };
//     addExclamation();
//     addExclamation(); 
//     addExclamation();  
// }
// checkName(); 

//1. checkName()-in 2.console.log(john)-in 3.john -  out 4.checkname -out repeat steps with touppercase instead of john,
// for each add exclaimation repeat steps
//1.checkname- in 2. addexclaimation - in 3. consoe.log ! - in 4
//4.console.log ! - out 5. addexlaimation - out 6. checkname -out

//----EXERCISE3----
function add() {
	let counter = 0;
	function plus() {
		counter += 1;
		console.log(counter) ;
	}
	plus();
	plus();
}
add()
//console logs 1 then 2 cos plus() is called twice

function add() {
	let counter = 0;
	function plus() {
		counter += 1;
		console.log(counter) ;
	}
	plus();
}
add()
add()
// console logs 1 twice cos add () is called twice