//EXERCISE 1
// let artcl = document.getElementsByTagName('article');
// console.log(artcl);
// artcl.removeChild(artcl.lastChild);
// function chngClr(obj){
//     obj.style.backgroundColor = "red";
// }
// function sizeUp(H1){
//     H1.style.fontSize = Math.floor(Math.random()*101 )+'px';
// };

// function hide(disepear){
//     disepear.style.display= "none"
// }
// document.getElementById('sumbit1').addEventListener('click', makeBold);

// function makeBold (){
//     let para = document.getElementsByTagName('p');
//     para.style.fontStyle = "bold";
// }

// var sbmt = document.getElementsByTagName('input');
// var fname = document.getElementById('fname');
// var lname = document.getElementById('lname');
// var ansr = document.getElementById('usersAnswer');

// sbmt.addEventListner ('click', function (){
//     if (fname.value > 0 && lname.value > 0){
//     var H = document.createElement('h1')
//     H.appendChild(document.createTextNode(fname.value, lname.value))
//     ansr.appendChild(H);
//     }
// })

// function fadeOut(fade){
//     fade.style.opacity = "0";
// };

//EXERCISE 2




//Exercise 3
// let inputBtn = document.getElementById('submit');
// let radius = document.getElementById('radius').value;
// let volume;

// inputBtn.addEventListener('click', function (){
//     //console.log(document.createTextNode(radius.value));
//     radius = Math.abs(radius);
//     volume = (4 * Math.PI * Math.pow(radius, 3))/3;
//     volume = volume.toFixed(4);
//     document.getElementById('volume').value = volume;
// });