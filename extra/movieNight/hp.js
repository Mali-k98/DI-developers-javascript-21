let hp =[
    {
        title: 'the philosophers stone',
        drink: 'butterbeer',
        main: 'pumpkin pasties & chicken drumsticks',
        snack: 'chocolate frogs',
        desset: 'bithday cake and knickerbocker glory',
    },
    {
        title: 'the champer of secrets',
        drink: 'polyjuice potion',
        main: 'mollys refilling sandwhiches',
        snack: 'berty botts',
        desset: 'petunias dessert',
    },
    {
        title: 'the prisoner of azkaban',
        drink: 'pumpkin juice',
        main: 'steak and kidney pudding',
        snack: 'acid pops',
        desset: 'bath bun',
    },
    {
        title: 'the goblet of fire',
        drink: 'firewhiskey',
        main: 'bouillabaisse',
        snack: 'canary creams',
        desset: 'cauldron cakes',
    },
    {
        title: 'the order of the pheonix',
        drink: 'iced dandelion juice',
        main: 'sherpherd pie',
        snack: 'sciving snackbox',
        desset: 'treacle tart',
    },
    {
        title: 'the half blood prince',
        drink: 'mead',
        main: 'onion soup',
        snack: 'rock cake',
        desset: 'egg nog',
    },
    {
        title: 'the deathly hallows: part 1',
        drink: 'champange',
        main: 'sandwiches',
        snack: 'berries',
        desset: 'snitch cake',
    },
    {
        title: 'the deathly hallows: part 2',
        drink: 'butterbeer',
        main: 'spag bol',
        snack: 'licorice wands',
        desset: 'treacle tart',
    }
]



let btn = document.getElementById('btn')


btn.addEventListener('click', movieP);


function movieP(){
    let movie = document.getElementById('moviePlan')
    movie.innerHTML= '';
    let title = document.createElement('h1')
    title.innerText = `title: ${hp.title.value}`;
    let drink = document.createElement('h3')
    drink.innerText = `drink: ${hp.drink.value}`;
    let main = document.createElement('h3')
    main.innerText = `main: ${hp.main.value}`;
    let snack = document.createElement('h3')
    snack.innerText = `snack: ${hp.snack.value}`;
    let dessert= document.createElement('h3')
    dessert.innerText = `dessert: ${hp.dessert}`;
    movie.appendChild(title)
    movie.appendChild(drink)
    movie.appendChild(main)
    movie.appendChild(snack)
    movie.appendChild(dessert)
};