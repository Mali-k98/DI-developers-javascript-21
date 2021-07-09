let compNo = Math.floor(Math.random()* 10 +1)
console.log(compNo);
let humanNo;

document.getElementById("start").onclick = function playTheGame(){
    let i = confirm('do you want to start the game')
    if (i === false){
        alert('okay goodbye!')
    } else{
        humanNo = prompt('choose a number between 0 - 10')  
    if (humanNo >= 10 || humanNo == NaN){
        alert('sorry not a number or wrong number')
    }else {
        console.log(humanNo)
        return humanNo;
        }
    }
}


function gameResults (humanNo, compNo){
    for (humanNo in playTheGame){
    if (humanNo == compNo){
        alert('YOU WIN!!!!')
    } else if (humanNo >= compNo){
        let x = confirm('oops! try a larger number')
        if (x === true){
        humanNo = prompt('choose a number between 0 - 10')
        }
    } else if (humanNo <= compNo){
        let x = confirm('oops! try a smaller number')
        if (x === true){
        humanNo = prompt('choose a number between 0 - 10')
        }
}
}
}


