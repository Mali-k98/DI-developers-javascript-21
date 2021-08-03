let disney = [
    {
        title: 'mulan',
        drink: 'tea',
        main: 'smiley congee',
        snack: 'dumplings',
        desset: '',
    },
    {
        title: 'frozen',
        drink: 'hot chocolate',
        main: 'fondue',
        snack: 'snowball cake pops',
        desset: 'olaf floating in jello',
    },
    {
        title: 'brave',
        drink: 'beer',
        main: 'drumsticks and scotch eggs',
        snack: 'iced buns',
        desset: 'spell cake',
    },
    {
        title: 'snow white',
        drink: 'apple cider',
        main: 'potato and sausage soup',
        snack: 'carmel apples',
        desset: 'grumpy pie',
    },
    {
        title: 'princess and the frog',
        drink: 'champagne',
        main: 'gumbo',
        snack: 'gummy frogs',
        desset: 'bingets',
    },
    {
        title: 'tangled',
        drink: 'magic flower cocktail',
        main: 'hazelnut soup',
        snack: 'cookies',
        desset: 'braid eclairs',
    },
    {
        title: 'alice in wonderland',
        drink: 'strawberry lemonade',
        main: 'tea sandwiches',
        snack: 'eat me cakes',
        desset: 'cherry tarts',
    },
    {
        title: 'beauty and the beast',
        drink: 'wine',
        main: 'charcuteire',
        snack: 'macarons',
        desset: 'be our guest deserts',
    },
]

let btn = document.getElementById('btn')


btn.addEventListener('click', movieP);


function movieP(){
    let movie = document.getElementById('moviePlan')
    movie.innerHTML= '';
    let title = document.createElement('h1')
    title.innerText = `title: ${disney.title}`;
    let drink = document.createElement('h3')
    drink.innerText = `drink: ${disney.drink}`;
    let main = document.createElement('h3')
    main.innerText = `main: ${disney.main}`;
    let snack = document.createElement('h3')
    snack.innerText = `snack: ${disney.snack}`;
    let dessert= document.createElement('h3')
    dessert.innerText = `dessert: ${disney.dessert}`;
    movie.appendChild(title)
    movie.appendChild(drink)
    movie.appendChild(main)
    movie.appendChild(snack)
    movie.appendChild(dessert)
};