let sentence = 'today was not bad! i had fun!';
// let wordSplit = sentence.split(" ")
let notWord = sentence.indexOf('not');
let badWord = sentence.indexOf('bad');
let newString = sentence.substring(notWord, badWord +3);

if (notWord<badWord){
    sentence = sentence.replace(newString, "good")
    console.log(sentence)
}
// if (notWord <= badWord){
//     word[2] = "good";
//     word.splice(3,1)
// }else{
//     console.log(sentence)
// };
// console.log(word);

