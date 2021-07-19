const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];


let nameArr = [];
gameInfo.forEach((val ,i, arr)=> nameArr[i].username) = `${arr[i].username}`
console.log(nameArr)

let score5 = [];
gameInfo.forEach((val, i, arr) => {
    arr[i].score > 5 ? 
    score5.push(`${arr[i].username}`)
    null;
});
console.log(score5)

let sum;
gameInfo.forEach((val,i,arr)=>{
    sum = 0
    return sum += arr[i].score
})
console.log(sum);