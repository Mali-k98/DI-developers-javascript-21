//---1---

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);
async function reWrite (){
    let url = await fetch('https://swapi.dev/api/starships/9/')
    let data = await url.json();
    console.log(data)
}
reWrite();

//---2--
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
//1. calling
//after 2 secs 
//2. resolved