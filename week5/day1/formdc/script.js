// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, send the data as JSON.
// let formInfo = document.getElementsByClassName('form')
// let btn = document.getElementById('btn')


function handleSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    
    const value = Object.fromEntries(data.entries());
    
    console.log({value});
    }
    
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
