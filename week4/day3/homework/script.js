//---ex1---

// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result); //array of bred, vegetables array, chicken, fruits array

// ------2------
// const country = "USA";
// console.log([...country]); // array with u, s, a

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray); //array of undefined




//---ex2---
// Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
// Using the filter() method, congratulate only the Full Stack Residents.


let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];    

// let fname = users.map(item => console.log(`hello ${item['firstName']}`))
    

// let congratulate  = users.filter (item => item.role ==='Full Stack Resident').map (item=> console.log(`congratulations ${item['firstName']} ${item['lastName']}`))




//---ex3---
// Use the reduce() method to combine all of these into a single string.

// let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// let combine = epic.reduce((p, n) => { return p +" "+ n ;})
// console.log(combine)

//---ex4--
// Use the filter() method to congratulate the students that passed the course.

// let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//             {name: "Liam", course: "Computer Science", isPassed: false}, 
//             {name: "Jenner", course: "Information Technology", isPassed: true}, 
//             {name: "Marco", course: "Robotics", isPassed: true}, 
//             {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//             {name: "Jamie", course: "Big Data", isPassed: false}];

// let congrats = student.filter(i => i.isPassed === true).map(p => console.log(`congratulations ${p['name']} you passed!`))
