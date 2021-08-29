

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