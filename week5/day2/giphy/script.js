// Create a program to fetch gifs.
// Allow the user to search for as many GIFs as they want and append them to the page. 
// The gif should be appended with a DELETE button next to it.


let btn = document.getElementById('btn')
let root = document.getElementById('root')



btn.addEventListener('click', loadGif);
function loadGif(){
    let searchBar = document.getElementById('search')
    let xhr = new XMLHttpRequest();
    let search_query = searchBar.value;
    console.log(search_query);
    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${search_query}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    xhr.responseType= "json"
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            let link = xhr.response.data[0].url;
            //createGifs(link);
            console.log(link)
            let image = document.createElement('img');
            image.setAttribute('src', link)
            let dltBtn = document.createElement('button');
            dltBtn.innerText = 'delete';
            dltBtn.addEventListener('click', dltGif);
            console.log(image)
            root.appendChild(image);
            root.appendChild(dltBtn)
        }
}
}

// function createGifs(gifs){
//     console.log(gifs)
//     let image = document.createElement('img');
//     image.setAttribute('src', gifs)
//     let dltBtn = document.createElement('button');
//     dltBtn.innerText = 'delete';
//     dltBtn.addEventListener('click', dltGif);
//     console.log(image)
//     root.appendChild(image);
//     root.appendChild(dltBtn)
// }
// createGifs();


function dltGif(){
    root.innerHTML = '';
}