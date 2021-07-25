function anagram (nom, word){
    nom = nom.replace(/[^\w]/g, '').toLowerCase(); 
    word = word.replace(/[^\w]/g, '').toLowerCase(); 

    return sortString(nom) === sortString(word);
}
function sortString(string) {
    return string.split('').sort().join('');
}

console.log(anagram('listen' , 'silent'));//true
console.log(anagram( 'help', 'kelp'));//false
console.log(anagram("tom marvolo riddle", "i am lord voldemort")) //true