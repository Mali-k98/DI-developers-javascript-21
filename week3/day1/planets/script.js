let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
let listPlanets = document.getElementsByClassName('listPlanets')

for(let i = 0; i = planets.length; i++){
    //const elemet = planets[i];

    let divP = document.createElement('div')
    divP.setAttribute('class', `planet ${planets}`)
    .random
    divP.style.background = '#' + ((1<<24)*Math.random() | 0).toString(16)
    listPlanets.appendChild(divP)
}
