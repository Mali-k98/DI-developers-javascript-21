//1rst example
// let completed = true;
// let learnJS = new Promise(function (resolve, reject) {
// // setTimeout(() => {
//     if (completed) {
//         console.log("After 5 seconds")
//         console.log("resolve = ", resolve)
//         resolve("I have completed learning JS.");
//     } else {
//         reject("I haven't completed learning JS yet.");
//     }
//     console.log(learnJS)
// // }, 5000);
// });
// console.log(learnJS)
// //2nd example
// let mathGrade = 90;
// let learnJS = new Promise(function (resolve, reject) {
// setTimeout(() => {
//     if (mathGrade >= 90) {
//         resolve("I'm buying you a gift");
//     } else {
//         reject("I don't love you anymore");
//     }
//     console.log(learnJS)
// }, 5000);
// });
// console.log(learnJS)

// -------------------
// Chaining promises
//---------------------
// let completed = true;
// let learnJS = new Promise(function (resolve, reject) {
//     if (completed) {
//         resolve("I have completed learning JS.");
//     } else {
//         reject("I haven't completed learning JS yet.");
//     }
// }) 
// //learnJS -> returns a Promise : state: fulfilled, 
// // result "I have completed learning JS."
// .then(message => message.toUpperCase()) 
// // returns a Promise : state fulfilled, 
// // result "I have completed learning JS." to uppercase
// .then(uppercasedMessage => show(uppecasedMessage.split(" ")))
// .catch(error => console.log("in the catch", error))
// const show = (result) => {
// 	console.log("result = ", result)
// }



// Make a function that takes in a single parameter and returns a new promise.
// using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// if the input is a string, the promise resolves with that same string uppercased.
// if the input is anything but a string it rejects with that same input
// if the promise is resolved, use then to console.log the string twice (use repeat)
// If the promise is rejected use catch to console.log the error
// finally call a function that console.log ("congratulation") (edited) 


// function prom(i){
    
//     return new Promise(function(accept, reject){
//         setTimeout(() => {
//             if(typeof i =='string'){
//                 accept(i.toUpperCase())
//             }else{
//                 reject(i)
//             }
//         }, 2000);
//     })
// }

// let myProm = prom("this is a srting")
// myProm
// .then(upperCase => console.log(upperCase))
// .catch(error => console.log(error))
// .finally(()=> console.log("congrats"))

// let url = 'https://lisenakache.github.io/HttpRequestGithub/test.json'
// let btn = document.getElementById("btn");
// btn.addEventListener("click", requestData)
// function requestData () {
// fetch(url)
// .then(response => {
//     console.log("response", response)
//     if(response.status == 200){ //or response.ok
//         return response.json();
//     } else {
//         throw new Error("not 200")
//     }
// })
// .then(jsonData => {
//     displayUser(jsonData) 
// })
// .catch(error => {
//     console.log("In the catch",error)
//     displayError(error)
// });
// }
// const displayUser = (animals) => {
// let results = document.getElementById("results")
// animals.forEach(info => {
//     let li = document.createElement("li");
//     li.textContent = `${info.name} - ${info.species}`
//     results.appendChild(li)
// });
// }
// const displayError = (xhr) => {
// let error = document.getElementById("error");
// let h2 = document.createElement("h2");
// h2.textContent = `Error`;
// // h2.textContent = `Error : ${xhr.status}`
// h2.style.backgroundColor = 'pink';
// error.appendChild(h2);
// }
//--FETCH--
// Use fetch to fetch one 1 random gif with the category of "sun"
// You append the gif to the page

// let aGif = document.getElementById('get-gif');
// let quereyGif = aGif;
let url = 'https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
let btn = document.getElementById('btn')
btn.addEventListener('click', getGif)

function getGif(){
    fetch(url)
    .then(response => {
            console.log("response", response)
            if(response.status == 200){ 
                return response.json();
            } else {
                throw new Error("not 200")
            }
        })
    .then(jsonData => {
            displayGif(jsonData) 
        })
    .catch(error => {
        console.log("In the catch",error)
        // displayError(error)
    });
}

const displayGif = (gifs) => {
    let results = document.getElementById("di")
    gifs.forEach(info => {
        let img = document.createElement("iframe");
        img.setAttribute = ('src', `${info.embed_url}`)
        results.appendChild(img)
    });
    }

