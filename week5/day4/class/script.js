// // -----------------
// // ASYNC
// // ----------------
// async function sayHello(username){
// 	return `Hello ${username}`
// }
// let promise = sayHello("John");
// console.log("promise = ", promise) //returns a promise
// promise.then(response => console.log("response = ", response))

// //-------------------------
// // ASYNC AWAIT
// //----------------------
// //1rst example
// const doSomethingAsync = () => {
// return new Promise(resolve => {
//     setTimeout(() => resolve('I did something'), 3000)
// })
// }
// const doSomething = async () => {
// console.log("----Started waiting----")
// let test = await doSomethingAsync();
// console.log("test =", test)
// // console.log(await doSomethingAsync())
// console.log("----Finished waiting----")
// }
// console.log('Before')
// doSomething()
// console.log('After')
// //GUESS
// // 1. Before
// // 2. After 
// // 3. Started waiting 
// // 4. I did something
// // 5. Finished waiting
// //Real result
// // 1. Before
// // 2. Started waiting 
// // 3. After
// // 4. I did something
// // 5. Finished waiting
// //2nd example

// const learnJS = () => {
// return new Promise(resolve => {
//     setTimeout(() => {
//         console.log("--------I learn Javascript-------");
//         resolve('Javascript DONE')
//     },3000)
// })
// }
// const learnReact = () => {
// return new Promise(resolve => {
//     setTimeout(() => {
//         console.log("--------I learn React 2 sec after JS-------")
//         resolve('REACT DONE')
//     }, 2000)
// })
// }
// const doSomething = async () => {
// let javascript = await learnJS();
// console.log("hello")
// console.log(javascript)
// let react = await learnReact();
// console.log(react)
// }
// console.log('Before')
// doSomething()
// console.log('After')
//GUESS AND REAL RESULT
// 1. Before
// 2. After
// After 3 second
// 3. --------I learn Javascript-------
// 4. Javascript DONE
// After 2 second
// 5. --------I learn React 2 sec after JS-------
// 6. REACT DONE




// Create 5 fuctions, that return 4 promises
// 1. The 1st function : Receive 2 famous persons name from the user - if the names are not string -> reject
// 2. The 2nd function : Receive a noun - if the noun is less than 3 letters - reject
// 3. The 3rd function : Receive a city - if the city doesn't start with an uppercase letter -> reject
// 4. The 4rh function : Receive a verb (finishing with ing) - if it doesn't end with "ing" -> reject
// 5. The last function, is an async function : receive all the promise, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris"

// const famousPeople = (name, name2) =>{
//     return new Promise ((resolve, reject) =>{
//         if(typeof(name) != 'string' && typeof(name2) != 'string'){
//             reject ('thats not a person')

//         }
//         resolve([name, name2])
//     })
// }

// const aNoun = (n) =>{
//     return new Promise ((resolve, reject) =>{
//         if (n.length > 3){
//             resolve(n)
//         }
//         reject('thats too short')
//     })
// }

// const place = (p) => {
//     return new Promise ((resolve,reject) =>{
//         let fLetter = p[0];
//         // console.log(fLetter)
//         if(fLetter != fLetter.toUpperCase()){
//             reject('not a city')
//         }
//         resolve(p)
//     })
// }

// const verb = (v) => {
//     return new Promise ((resolve, reject) =>{
//         if(!v.includes('ing')){
//             reject('not a verb')
//         }
//         resolve(v)
//     })
// }

// const makeSentence = async () => {
//     let famous = await famousPeople('beyonce', 'rhianna')
//     // console.log(famous)
//     let noun = await aNoun('football')
//     // console.log(noun)
//     let city = await place('Paris')
//     // console.log(city)
//     let vrb = await verb('playing')
//     // console.log(vrb)
//     console.log(`${famous[0]} is ${vrb} ${noun} with ${famous[1]} in ${city}`)
// } 
// makeSentence();
// // console.log(makeSentence)

//----------------------
// ASYNC AWAIT USING FETCH
// // ----------------------
// let url = 'https://jsonplaceholder.typicode.com/users/'
// let btn = document.getElementById("btn");
// btn.addEventListener("click", requestData)
// //with fetch
// function requestData () {
// // console.log(fetch(url)) //Promise
// console.log("fetch", fetch(url)
//     .then(response => response.json())
//     .then(users => fetch(`https://jsonplaceholder.typicode.com/users/${users[0].id}`))
//     .then(user => user.json())
//     .then())
// }
// // with async-await
// async function requestData () {
// let fetched = await fetch(url); 
// //Response object
// //because the Response object is the result of the promise
// //retrieve the result of a promise
// let response = await fetched.json();
// console.log("response", response)
// let fetchedSpecificUser = await fetch(`https://jsonplaceholder.typicode.com/users/${response[0].id}`)
// console.log('fetchedSpecificUser', fetchedSpecificUser)
// let jsonVar = await fetchedSpecificUser.json();
// console.log("jsonVar", jsonVar)
// }
//2
//1.Use fetch to fetch one 1 random gif with the category of "sun"
//2.You append the gif to the page

// Use the project we did yesterday (ie. finding a gif depending on a word api) and change it to async/await syntax
// Don't do the "error" part with the catch, because we haven't learn it yet
let categoryUrl = "http://random-word-api.herokuapp.com/word?number=1"

async function pickWord() {
    let fetchedreponse = await fetch(categoryUrl)
        if (fetchedreponse.status == 200) {
            console.log(fetchedreponse.status)
            let jObject = await fetchedreponse.json()
            console.log(jObject)
        } else {
            throw new error ("Houston, we have a problem!")
        }
    
    (jsResponse => {
        console.log("response data",jsResponse)
        console.log("response data",jsResponse[0])
        randomwords(jsResponse[0])
    })
    (error => {
        console.log("error", error)
    })
    }
    let randomwords = word => {
        let url = `https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
        fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json()
            } else {
                throw new error ("Houston, we have a problem!")
            }
        })
        .then(jsObjResponse => {
            appendRandomGif(jsObjResponse.data.image_url)
        })
        .catch(error => {
            console.log("error", error)
        })
        let appendRandomGif = (gifUrl) => {
            console.log("gifurl", gifUrl)
            if (gifUrl) {
            let divBox = document.getElementById("box")
            let img = document.createElement("img")
            img.setAttribute("src", gifUrl)
            divBox.textContent = word
            divBox.appendChild(img)
            } else {
                pickWord()
            }  
        }
    }
    pickWord()