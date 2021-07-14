

// const box = document.getElementById('box');
// let id;
// let left = 0;
// let scrn = window.availWidth;

// function move(){
//     id = setInterval(function(){
//         if(left > scrn-10)
//         stop()
//         left += 5;
//         box.style.left = `${left}px`;
//     },5)
// }

// function stop(){
//     clearInterval(id)
// }

// box.addEventListener('dragstart', function(e){
//     let x = e.clientX;
//     let y = e.clientY;
//     console.log('start dragging',x, y)
// });

// box.addEventListener('drag', function(){
//     let x = e.clientX;
//     let y = e.clientY;
//     console.log('drag box', x, y)
// });

// box.addEventListener('dragend', function(e){
//     let x = e.clientX;
//     let y = e.clientY;
//     console.log('dragend',x, y)
// });

const dragP = document.getElementById('drag');
const dragArea = document.getElementById('dropBox')


dragP.addEventListener('dragstart', dragstart_handler());
dragArea.addEventListener('dragover', dragover_handler());
dragArea.addEventListener('drop', drop_handler());

function dragstart_handler(e){
    e.dataTransfer.setData('text/plain', e.target.id)
};

function dragover_handler(e){
    e.preventDefault();
    e.dataTransfer.dropEffect = 'link'
    dragArea.classList.add('highlight')
};

function drop_handler(e){
    e.preventDefault();
    dragArea.classList.remove('highlight');
    const data = e.dataTransfer.getData('text/plain')
    e.target.appendChild(document.getElementById(data));
};