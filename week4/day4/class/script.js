// //---------------------
// //Copy objects
// //--------------------------
// let characters = {
// 	name: 'Hermione Granger',
// 	house: 'Gryfindor'
// };
// let person = { ...characters};
// // console.log(person)
// // person["house"] = "Meet in place"
// // console.log("person house = ", person["house"], "characters house", characters["house"]) //unchanged
// let characters = {
// 	name: 'Hermione Granger',
// 	house: 'Gryfindor',
// 	friend :  {
// 		name : 'Harry Potter',
// 	}
// };
// let person = {...characters};
// console.log(person)
// person["friend"]["name"] = "Hagrid"
// console.log("person friend = ", person["friend"]["name"], "characters friend", characters["friend"]["name"]) //changed
// //Solution
// let person = { 
// 	...characters,
// 	friend :{
// 		...characters.friend
// 	}
// };
// console.log(person)
// person["friend"]["name"] = "Hagrid"
// console.log("person friend = ", person["friend"]["name"], "characters friend", characters["friend"]["name"]) //unchanged

// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63
//     }
// };

// let p = {...student}

// let student2 = {...student, scores: {...student.scores}}

// let copy = {
//     ...student,
//     scores:{...student2.scores},
//     goodStudent : true,
// }

// console.log(student, p, student2, copy)

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
console.log(killerRabbit.type, blackRabbit.type)

killerRabbit.speak("i will kill you")
blackRabbit.speak("hi fweinds")