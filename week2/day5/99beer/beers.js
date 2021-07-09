let word = "beer";
let count = 99;

while (count > 0){
    if (count === 1){
    word = "bottle"
    }else {
        word =" bottles";
    }

console.log(count + " " + word + " of beer on the wall");
console.log(count + " " + word + " of beer,");
console.log("Take one down, pass it around,");
count = count - 1;
    if (count > 0) {
    if (count == 1){
    word = "bottle"
    }
    console.log(count + " " + word + " of beer on the wall.");
} else {
    if (count < 1){
    word = "bottles"
    }
    console.log("No more " + word + " of beer on the wall.");
}
}