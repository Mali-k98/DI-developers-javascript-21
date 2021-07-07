//your favourite colours

let colours = [ "purple", "pink", "red", "blue"];

for (let i in colours){
    console.log(`my #${i} choice is:`)
    console.log(colours[i]);
};


//list of people

let people = ["Fred", "Paul", "john", "Jude"]
people.shift();
people.splice(2,1,"jess");
people.push("amalia");

let jess = people.indexOf("jess");
console.log(jess);
console.log(people);

for (let i in people){
   // console.log(people[i]); 
{ if (i === jess) {
    break;}
}
console.log(people[i]);
}

var copy = people.slice(0, 2);
console.log(copy);

let foo = people.indexOf("foo");
console.log(foo); //equivilent to false


//3 repeat 

let question = prompt("give me a number ");
do {
    question = prompt("give me a number ");
}
while (question < 10)



//4 guest list
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}
console.log(Object.keys(guestList));

let name = prompt('what is your name?');

for (let key of Object.keys(guestList)){
if (name === key) {
    console.log(`Hi im ${key}! and im from ${guestList[key]}`)
}else{
    console.log('im not a guest')
}
}

//5

let family = {
    dad : "john",
    mum: "sarah",
    sister: "abi",
    brother1:"joe",
    brother2: "sam",
}
for (let key of Object.keys(family)){
    console.log(key)
};
for (let value of Object.entries(family)){
    console.log(value)
}



//6

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
};


for (let [key , value] of Object.entries(details)){
    console.log(key, value);
}


//7


let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
let order = names.sort();
console.log(order);

for (let i = 0; i <= order.length; i++){
    //console.log(order[i].charAt(0))
    var club = order[i].charAt(0);
    console.log(club.toString());
}
