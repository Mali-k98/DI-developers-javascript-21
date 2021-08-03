let marvel = [
    {
        title: 'thor',
        drink: '',
        main: '',
        snack: '',
        desset: '',
    },
    {
        title: 'spiderman',
        drink: '',
        main: '',
        snack: '',
        desset: '',
    },
    {
        title: 'deadpool',
        drink: '',
        main: '',
        snack: '',
        desset: '',
    },
    {
        title: 'blackpanther',
        drink: '',
        main: '',
        snack: '',
        desset: '',
    },
    {
        title: 'avengers',
        drink: '',
        main: '',
        snack: '',
        desset: '',
    },
    {
        title: 'gaudardians of the galaxy',
        drink: '',
        main: '',
        snack: '',
        desset: '',
    },
    {
        title: 'x-men',
        drink: '',
        main: '',
        snack: '',
        desset: '',
    },
    {
        title: 'hulk',
        drink: '',
        main: '',
        snack: '',
        desset: '',
    },
    {
        title: 'iron-man',
        drink: '',
        main: '',
        snack: '',
        desset: '',
    },
]
let btn = document.getElementById('btn')


btn.addEventListener('click', movieP);


function movieP(){
    let movie = document.getElementById('moviePlan')
    movie.innerHTML= '';
    let title = document.createElement('h1')
    title.innerText = `title: ${Object.values(title)}`;
    console.log(title)
    let drink = document.createElement('h3')
    drink.innerText = `drink: ${Object.values( drink)}`;
    let main = document.createElement('h3')
    main.innerText = `main: ${Object.values( main)}`;
    let snack = document.createElement('h3')
    snack.innerText = `snack: ${Object.values(snack)}`;
    let dessert= document.createElement('h3')
    dessert.innerText = `dessert: ${Object.values( dessert)}`;
    movie.appendChild(title)
    movie.appendChild(drink)
    movie.appendChild(main)
    movie.appendChild(snack)
    movie.appendChild(dessert)
    // console.log(movie)
};
