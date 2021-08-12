let btn = document.getElementById('sub')
btn.addEventListener('click', sumbit)


const sub = function sumbit() {
    let i= document.getElementById('item')
    let a = document.getElementById('amount')
    console.log(`${i.value}:${a.value}`)
    // let ul = document.getElementById('slist')
    // let li = document.createElement('li')
    // li.innerText(`${i.value} : ${a.value}`)
    // ul.appendChild(li)
}


