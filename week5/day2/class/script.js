//1. Create XMLHttpRequest object
let xhr = new XMLHttpRequest();
//2. Set the request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// console.log(xhr)
//3. Send the request
xhr.send();
//4. Add events
xhr.onreadystatechange = function() {

if (xhr.readyState == 2) {
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
  		//DISPLAY USERS HERE
        let usrs = JSON.parse(xhr.response);
        console.log(usrs)
        console.log(JSON.stringify(usrs,null,2));
        for(item of usrs){
            let noErr = document.getElementsByTagName('h1')[0];
            noErr.innerText= 
            `${item['name']} ${item['email']}`
        }
}
}
};


// Create an HTML file and a JS FILE
// Make a GET request to the jsonplaceholder API
// If there are no errors, using the DOM, display the name, 
//the email and the adress city of each users.
// You can display the using a table, or a list, or paragraphs. Whatever you prefer