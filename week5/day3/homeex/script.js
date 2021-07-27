//--1--compare to 10 --
// Create a function called compareToTen that takes a number as an argument.
// The function should return a Promise that tests if the value of the given argument is less or greater than 10.
// function compareToTen(i){
//     return new Promise(function (resolve, reject){
//     if(i < 10){
//         resolve(`${i} is smaller than 10`)
//     } else if(i> 10){
//         resolve(`${i} is bigger than 10`)
//     }else if( i== 10){
//         resolve(`that is ${i}`)
//     }else {
//         reject('ive rejected')
//     }
// })
// }
// compareToTen(15)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

// compareToTen(10)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

//--2--
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// Read about Promise.resolve() and Promise.reject().
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.


// let prom = new Promise(function (resolve, reject){
//     setTimeout(() => {
//         if (true){
//             resolve('did you wait 4 secs')
//         }else {
//             reject('oops! something went wrong!')
//         }
//     }, 4000);
// })
// prom 
// .then(result => console.log(result))
// .catch(err => console.log(err))

setTimeout(() => {
    Promise.resolve('did you wait 4 secs').then(function (wait){
        console.log(wait)
    })
}, 4000);



//--3-- 
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
Promise.resolve(3).then(function(val){
    console.log(val)
})
Promise.reject('boo').catch(function(val){
    console.log(val)
})