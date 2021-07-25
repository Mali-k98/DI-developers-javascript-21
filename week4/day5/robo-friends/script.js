const robots = [
    {
    id: 1,
    robbo: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200'
    },
    {
    id: 2,
    robbo: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
    },
    {
    id: 3,
    robbo: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200'
    },
    {
    id: 4,
    robbo: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200'
    },
    {
    id: 5,
    robbo: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200'
    },
    {
    id: 6,
    robbo: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
    },
    {
    id: 7,
    robbo: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
    },
    {
    id: 8,
    robbo: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200'
    },
    {
    id: 9,
    robbo: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/9?200x200'
    },
    {
    id: 10,
    robbo: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/10?200x200'
    }
    ];
    
    
let filterer = (r) => {
    // console.log(r.target.value)
    let robotArray = robots.filter(robot => {
        return robot['robbo'].toLowerCase().includes(r.target.value)
    
    })
    let allCArds = document.querySelectorAll('.card')
    console.log(allCArds[0].value)
    for(let i = 0; i < allCArds.length; i ++){
        if (robotArray.includes(allCArds[i].robbo.value)){
            allCArds[i].style.display = "block";
        }else {
            allCArds[i].style.display = "none";
        }}
    console.log(robotArray)
    allR();
}


let cards = document.getElementById('cards');
let searchBar = document.getElementById('search')
searchBar.addEventListener('keyup', filterer)



function allR (){ robots.forEach(i => {
    let card = document.createElement('div');
    card.classList.add('card');
    let profile = document.createElement('img')
    profile.classList.add('profile')
    profile.setAttribute('src', i.image)
    let info = document.createElement('h2')
    info.classList.add('info')
    info.innerText= i.robbo
    let mail = document.createElement('h3')
    mail.classList.add('mail')
    mail.innerHTML = i.email
    card.appendChild(profile)
    card.appendChild(info)
    card.appendChild(mail)
    cards.appendChild(card);
    // return card
})
}
allR();

    
