// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, send the data as JSON.
let formInfo = document.getElementsByClassName('form')
let btn = document.getElementById('btn')

btn.addEventListener('submit', function(){
    let jason = JSON.stringify(formInfo);
    console.log(jason)
})