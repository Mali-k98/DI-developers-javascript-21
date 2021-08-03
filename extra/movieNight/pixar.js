let pixar = [
    {
        title: 'luca',
        drink: 'campari',
        main: 'pasta',
        snack: 'cannoli',
        desset: 'ice cream',
    },
    {
        title: 'coco',
        drink: 'margeritas',
        main: 'tacos',
        snack: 'tortilas',
        desset: 'churos',
    },
    {
        title: 'up',
        drink: 'hot chocolate',
        main: 'waffles',
        snack: 'epsilons cherries',
        desset: 'smores',
    },
    {
        title: 'toy story',
        drink: 'coke',
        main: ' pizza planet',
        snack: 'alien cupcakes',
        desset: 'rice krispie treats',
    },
    {
        title: 'monsters inc',
        drink: 'monster cocktail',
        main: 'sushi',
        snack: 'cheerios',
        desset: 'lemon snowcones',
    },
    {
        title: 'ratatoullie',
        drink: 'wine',
        main: 'rataouille',
        snack: 'cheese and grapes',
        desset: 'eclair',
    },
    {
        title: 'incredibles',
        drink: 'frozone',
        main: 'noodles',
        snack: 'eggrolls',
        desset: 'pancakes',
    },
    {
        title: 'onward',
        drink: 'sparkle drink',
        main: 'burger shire',
        snack: 'cheese puffs',
        desset: 'wand',
    },
    {
        title: 'big hero 6',
        drink: 'lemonade',
        main: 'baymax rice balls',
        snack: 'marshmallow',
        desset: 'donuts',
    },
]



let btn = document.getElementById('btn')


btn.addEventListener('click', movieP);


function movieP(){
    let movie = document.getElementById('moviePlan')
    movie.innerHTML= '';
    let title = document.createElement('h1')
    title.innerText = `title: ${pixar.title}`;
    console.log(title)
    let drink = document.createElement('h3')
    drink.innerText = `drink: ${pixar.drink}`;
    let main = document.createElement('h3')
    main.innerText = `main: ${pixar.main}`;
    let snack = document.createElement('h3')
    snack.innerText = `snack: ${pixar.snack}`;
    let dessert= document.createElement('h3')
    dessert.innerText = `dessert: ${pixar.dessert}`;
    movie.appendChild(title)
    movie.appendChild(drink)
    movie.appendChild(main)
    movie.appendChild(snack)
    movie.appendChild(dessert)
    console.log(movie)
};