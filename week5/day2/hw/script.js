//1. Create XMLHttpRequest object
let xhr = new XMLHttpRequest();
//2. Set the request
xhr.open('GET', 
//first link for ex1
//"https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
//second link for second 
"https:api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
);
//3. Send the request
xhr.send();
//4. Add events
xhr.onreadystatechange = function() {
if (xhr.readyState == 0) {
    // unsent
    // console.log("unsent")
} else if(xhr.readyState == 1) {
    // open called
    // console.log("open called")
} else if (xhr.readyState == 2) {
    // response headers received
    // console.log("response headers received")
} else if (xhr.readyState == 3) {
    // response is loading (a data packet is received)
    // console.log("response is loading")
} else if (xhr.readyState == 4) {
// console.log("xhr object = ", xhr)
    // request complete
    // console.log("request complete")
if (xhr.status != 200) { // analyze HTTP status of the response
    	//DISPLAY ERROR HERE
} else if (xhr.status === 200) {
  		//DISPLAY USERS 
        let funny = JSON.parse(xhr.response)
        console.log(funny)
        // for(let i = 0; i > funny.length; i++){
        //     let gifs = document.createElement('p');
        //     gifs.innerText(`${item['slug']}`)
        // }
}
}
};