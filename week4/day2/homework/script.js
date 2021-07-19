//1 
//Create a one line function that receives two numbers as parameters and returns the sum.
// const adder = (a, b) => a + b;

// console.log(adder(2,3))

//2-5 annalise and predict last line
//2 

// const addTo = x => y => x + y;
// var addToTen = addTo(10);
// addToTen(3) //13

//3

// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1) //31

//4

// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12) //17

//5

// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10) //16