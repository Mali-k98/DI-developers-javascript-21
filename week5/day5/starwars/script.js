let btn = document.getElementById('btn')
let clicked = btn.addEventListener('click' , getChar)



async function getChar(){
    try{
    let no = Math.floor((Math.random()*83 )+ 1)
    let url = await fetch(`https://swapi.dev/api/people/${no}`)
    let data = await url.json()
    // console.log(data)
    let infoBox = document.getElementsByClassName('box')[0]
    infoBox.innerHTML =''
    let name = document.createElement('h3')
    name.innerText =`Name: ${data.name}`;
    let height = document.createElement('h4')
    height.innerText = `Height: ${data.height}`
    let gender = document.createElement('h4')
    gender.innerText = `Gender: ${data.gender}`
    let dob = document.createElement('h4')
    dob.innerText = `Birth year: ${data.birth_year}`
    let planet = await fetch( data.homeworld)
    let planetData = await planet.json()
    // console.log(planetData)
    let home = document.createElement('h4')
    home.innerText = `Home planet: ${planetData.name}`
    infoBox.appendChild(name)
    infoBox.appendChild(height)
    infoBox.appendChild(gender)
    infoBox.appendChild(dob)
    infoBox.appendChild(home)
    } catch (e){
        let infoBox = document.getElementsByClassName('box')[0]
        infoBox.innerHTML = 'oops!'
        handleError(e)
    }
}


