


function starFrame(){
let userInput = prompt("write a sentence (use , instead of space): ");
let arrUser = userInput.split(','); 
let wordLargest = 0;
for (item of arrUser){
if (item.length>wordLargest){
wordLargest = item.length;
}
}


console.log("*".repeat(wordLargest+4));

for (let i=0; i<arrUser.length;i++){
      console.log("* " + arrUser[i] + " ".repeat(wordLargest-arrUser[i].length) + " *");
}
console.log("*".repeat(wordLargest+4));
}
starFrame();