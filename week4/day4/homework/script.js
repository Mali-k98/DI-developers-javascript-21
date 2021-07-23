//---1---
// analyse
const person = {
    pname: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {pname, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${pname} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// --> i am john does from vancouver =, canada. latitude (49.2827), longitude (-123.1207)

//---2---
// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
let  student ={first: 'Elie', last:'Schoppik'} 
function displayStudentInfo({first , last} ) {
  // console.log(`your name is ${first} ${last}`)
}
displayStudentInfo(student);

// The function should return a string as seen in the example below.


//---3---
// Using this object:
const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:

// console.log(Object.entries(users));

// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.

for (let [key, value] of Object.entries(users)) {
  // console.log(`${key}: ${value *2}`);
}

// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]



//---4---
//analyse
// class Person {
//     constructor(name) {
//     this.name = name;
//     }
// }

// const member = new Person('John');
// console.log(typeof member);
//typeof member returns object

//---5---

// Analyze the options below.

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };
// Which constructor will successfully extend the Dog class?
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };


  // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };


  // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


  // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };

//---> 2 will be successful

//---6---

// Evaluate these (ie True or False)

// [2] === [2] 
// {} === {}


// What is the value of property “number” for each object.

// const object1 = { number: 5 }; //4
// const object2 = object1;  //4
// const object3 = object2; //4
// const object4 = { number: 5}; //5
// object1.number = 4;




// Create a class Animal with the attributes name, type and color
class Animal{
  constructor(name,type,color){
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// Create a class Mamal that extends from the Animal class. It has a method called sound().
class Mamal extends Animal{
  constructor(name,type,color){
    super(name,type,color);

    this.sound = sound;
  }
  describe(){
    console.log(`${this.name} is a ${this.color}${this.type} its says ${this.sound}`)
  }
}


// Create a cow that accepts a name, type and color and has a sound method that moo’s her name, type and color.

let cow = new Animal('daisy', 'cow', 'red', 'mooooo');
cow.describe();
