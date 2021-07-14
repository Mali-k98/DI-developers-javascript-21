document.addEventListener('DomcontentLoaded', ()=>{
});

//card options

const cardArray = [
    {
    name: 'puppy',
    img: 'images/puppy.png'
    },
    {
    name: 'puppy',
    img: 'images/puppy.png'
    },
    {
    name: 'fish',
    img: 'images/fish.png'
    },
    {
    name: 'fish',
    img: 'images/fish.png'
    },
    {
    name: 'monkey',
    img: 'images/mokey.png'
    },
    {
    name: 'monkey',
    img: 'images/monkey.png'
    },
    {
    name: 'bambi',
    img: 'images/bambi.png'
    },
    {
    name: 'bambi',
    img: 'images/bambi.png'
    },
    {
    name: 'panda',
    img: 'images/panda.png'
    },
    {
    name: 'panda',
    img: 'images/panda.png'
    },
    {
        name: 'hampster',
        img: 'images/hampster.png'
        },
        {
        name: 'hampster',
        img: 'images/hampster.png'
        },
    ]

const grid = document.querySelector('.grid');

//creat board
function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/card.png')
        card.setAttribute('data-id', i)
        // card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}




