// fruits

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();
fruits.sort();
fruits.push('kiwis');
fruits.splice(0,1);
fruits.reverse();
console.log(fruits);

//more fruits

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let x = moreFruits[1] [1] [0];
console.log(x);
