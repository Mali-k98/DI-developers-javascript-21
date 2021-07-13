var btn = document.getElementById('lib-button')

let noun = document.getElementById('noun');
let adjective =document.getElementById('adjective');
let person = document.getElementById('person');
let verb = document.getElementById('verb');
let place = document.getElementById('place');

btn.addEventListener('click', function(){
    var spn = document.getElementById('story');
    spn.innerHTML = `this once was a ${noun} who was ${adjective} their name is ${person} they always ${verb} in*- ${place}`
})