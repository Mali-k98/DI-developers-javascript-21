for(var i=1; i<=4; i++){
    console.log("* ".repeat(i));
}



let string = "";

for (let i = 0; i <= 5; i++){
    for (let j = 0; j <= i; j++ ){
        string += '*';
    }
    string += "\n";
}
console.log(string);