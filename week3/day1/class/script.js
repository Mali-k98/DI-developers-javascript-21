// let divHtml = document.body.children[0];
// document.body.firstElementChild;

// document.body.lastElementChild;
// document.body.children[1];

// document.body.lastElementChild.lastElementChild;
// document.ul.lastElementChild.children[2];

// console.log(divHtml);


//exercise 2 
// 1
const div = document.querySelector('#container')
const sameDiv = document.getElementById('container')
​
console.log(div === sameDiv)
console.log('-----------------')
​
// 2
const uls = document.querySelectorAll('ul.list')
const sameUls = document.getElementsByClassName('list')
​
// 2.1
for (const ul of uls) {
    for (const li of ul.children) {
        console.log(li.textContent)
    }
}
console.log('-----------------')
​
// 2.2
for (const ul of sameUls) {
    for (const li of ul.children) {
        console.log(li.textContent)
    }
}
console.log('-----------------')
​
// 3
const firstUlFirstLi = uls[0].children[0]
const secondUlFirstLi = uls[1].children[0]
​
const sameFirstUlFirstLi = document.querySelector('ul.list li')
const sameSecondUlFirstLi = uls[1].querySelector('li')
​
console.log(firstUlFirstLi === sameFirstUlFirstLi)
console.log(secondUlFirstLi === sameSecondUlFirstLi)
Collapse




















//PROPERTIES
// let divfromHTML = document.body.children[0];
// console.log(divfromHTML)
// let h1fromHTML = divfromHTML.firstElementChild;
// console.log(h1fromHTML)
// let textfromH1 = h1fromHTML.textContent;
// console.log(textfromH1);
// h1fromHTML.textContent = "Hello Students";
// h1fromHTML.style.backgroundColor = "yellow";
//METHODS
// let title = document.getElementById("firstTitle");
// console.log(title)
// let tests = document.getElementsByClassName("test");
// console.log(tests)
// let paragraph = document.getElementsByTagName("p")[0];
// console.log(paragraph)
// let allTests = document.querySelectorAll("h1,p");
// console.log(allTests)
// APPEND ELEMENTS
//create the element
// let h2 = document.createElement("h2");
// //add text to the element
// h2.textContent = "New H2 added on the page";
// let text = document.createTextNode("Added new H2");
// h2.appendChild(text);
//retrieve the element where I want to add the h2
// let div = document.getElementById("secondDiv");
//add the element AT THE END OF THE DIV
//div.appendChild(h2)


let pics = [
    "https://cdn.pixabay.com/photo/2018/10/09/18/21/kitten-3735600_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/04/04/16/56/puppy-5003092_960_720.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/17/6d/f8/0d/dauphin.jpg"
];
// ADD 3 IMAGES DYNAMICALLY ON THE PAGE
let div = document.getElementById("secondDiv");
for (let i = 0; i < pics.length;i++){
	let img = document.createElement("img");
	img.setAttribute("src", pics[i]);
	div.appendChild(img)
}
let pics = [
    "https://cdn.pixabay.com/photo/2018/10/09/18/21/kitten-3735600_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/04/04/16/56/puppy-5003092_960_720.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/17/6d/f8/0d/dauphin.jpg"
];
// ADD 1 RANDOM IMAGE ON THE PAGE
let div = document.getElementById("secondDiv");
let img = document.createElement("img");
let randomNumber = Math.floor((Math.random() * pics.length));
console.log(randomNumber)
img.setAttribute("src", pics[randomNumber]);
div.appendChild(img)