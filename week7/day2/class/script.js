function sendData(){
    let un = document.getElementById('user')
    let pw = document.getElementById('pass')
    fetch(`http://localhost:3000?login?user=${un}&pss=${pw}`)
    // console.log(`${un}${pw}`)
}