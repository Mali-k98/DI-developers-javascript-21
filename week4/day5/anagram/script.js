function anagram (nom, word){
    nom = nom.replace(/[^\w]/g, '').toLowerCase(); 
    word = word.replace(/[^\w]/g, '').toLowerCase(); 

    return sortString(nom) === sortString(word);
}
function sortString(string) {
    return string.split('').sort().join('');
}

console.log(anagram(nom ='listen' , word = 'silent'));//true
console.log(anagram(nom= 'help', word = 'kelp'));//false
