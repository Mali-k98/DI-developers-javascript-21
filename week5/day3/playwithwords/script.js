//---1---
//Create two functions that use promises which can be chained.
// The first function called makeAllCaps(), should take an array of words as an argument and capitalize them.
// The second function called sortWords(), should sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error. 
let arrayOfWords= ['rabbit','cat','dog','mouse','alphaca']
let complicatedArray = ['12','hat', true, 34, 'person']
function makeAllCaps(i){
    return new Promise (function(resolve, reject){
        let isString = true;
        i.forEach(el => {
            console.log(el)
            if(typeof el != 'string'){
            isString = false;
            }})
            if(isString ){
        
        let newArr = [];
        i.forEach(el => {
            console.log(el)
            if(typeof el == 'string'){
            let str = el.toUpperCase();
            
            newArr.push(str)
            }})
            resolve(newArr)
        }else {
            reject('oop! not a string')
        }
    })
}
function sortWords(i){
    // console.log(i)
    return new Promise (function(resolve, reject){
        if(i){
            resolve(i.sort())
        }else {
            reject()
        }
    })
}

makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))

makeAllCaps(complicatedArray)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))


//---morse--
// Create three functions that use promises which can be chained.

// Call the first function toJs():
// this function should take the morse json object provided above, and convert it to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function should asks the user for a word or a sentence
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with it’s morse translation of the user’s word.

// The last function called joinWords(), should join the morse translation by using line break.


let morse = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}


const toJS = (json) =>
    new Promise((resolve, reject) => {
        if (!json) reject(new Error('Empty json object'))
​
        resolve(JSON.parse(json))
    })
​
const toMorse = (morseJS) =>
    new Promise((resolve, reject) => {
        const input = prompt('Enter some string')
        const translation = []
​
        for (let char of input) {
            char = char.toLowerCase()
            if (!(char in morseJS) ) reject(new Error('Not morse'))
            translation.push(morseJS[char])
        }
​
        resolve(translation)
    })
​
const joinWords = (translation) =>
    new Promise((resolve, reject) => {
        if (!Array.isArray(translation)) {
            reject('Invalid input')
        }
        resolve(translation.join('\n'))
    })

​
toJS(morse)
    .then(toMorse)
    .then(joinWords)
    .then((x) => console.log(x))
    .catch((err) => console.log(err.message))