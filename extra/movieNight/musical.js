<<<<<<< HEAD
let musical = [
    {
        title: 'grease',
        drink: '',
        main: '',
        snack: '',
        desset: '',
    },
    {
        title: 'rent',
        drink: '',
        main: '',
        snack: '',
        desset: '',
    },
    {
        title: 'les miserable',
        drink: '',
        main: '',
        snack: '',
        desset: '',
    },
    {
        title: 'westside story',
        drink: '',
        main: '',
        snack: '',
        desset: '',
    },
    {
        title: 'sound of music',
        drink: '',
        main: '',
        snack: '',
        desset: '',
    },
    {
        title: 'the greatest showman',
        drink: '',
        main: '',
        snack: '',
        desset: '',
    },
    {
        title: 'hair',
        drink: '',
        main: '',
        snack: '',
        desset: '',
    },
    {
        title: 'oliver',
        drink: '',
        main: '',
        snack: '',
        desset: '',
    },
]
=======
let info =[]

let d =fetch('http://localhost:3000/musical')
.then(res=> res.json())
.then(data => {
    console.log(data);
    info =data
})

let btn = document.getElementById('btn')


btn.addEventListener('click', movieP);


function movieP(){
    if(info.length == 0){
        return
    }
    let movie = document.getElementById('moviePlan')
    movie.innerHTML= '';
    let no= Math.floor((Math.random())*info.length)
    console.log(no)
        let title = document.createElement('h1')
        title.innerText = info[no].title;
        let drink = document.createElement('h3')
        drink.innerText = `drink:${info[no].drink} `;
        let main = document.createElement('h3')
        main.innerText = `main: ${info[no].main}`;
        let snack = document.createElement('h3')
        snack.innerText = `snack: ${info[no].snack}`;
        let dessert= document.createElement('h3')
        dessert.innerText = `dessert: ${info[no].dessert}`;
        movie.appendChild(title)
        movie.appendChild(drink)
        movie.appendChild(main)
        movie.appendChild(snack)
        movie.appendChild(dessert)
};
>>>>>>> c4f1b8fd1c4f0c2666b76fb45b7942384985ae37
