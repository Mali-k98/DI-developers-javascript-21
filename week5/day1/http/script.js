const greet = document.getElementsByTagName('form');
const submit = document.getElementById('submit')

const user = {
    nom : john,
    password : 1234,
};


submit.addEventListener('submit', function (){
    if (greet === user){
        console.log(`hello ${user[0]}`)
    } else {
        alert('user pr password wrong')
    }
})