
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