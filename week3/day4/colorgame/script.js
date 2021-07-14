let pallet = document.getElementById('colors')
let canvas = document.getElementById('canvas')
let mousedown = false;

let allColors = ["#FF0000", "#800000", "#FE6B05", "#FFFF00", "#87DE25", "#2EDC08", "#015102", "#12E079", "#38E7DD","#6ABAF5","#5C87FB","#0949F1","#022071","#4D399F","#5100FE ","#7F5BCB ","#EE79DB ","#FD0485","#000000","#5F5C5C","#FFFCFC"];
//let randomClr = allColors [Math.floor(Math.random()* allColors.length)];
    for(let i = 0; i < 21; i++){    
        let color = document.createElement('div')
        color.setAttribute('class', 'choice')
        // color.onclick()
        color.addEventListener('click', choose)
        // let randomClr = allColors [Math.floor(Math.random()* allColors.length)];
        color.style.backgroundColor = allColors[i];
        color.setAttribute('id', allColors[i])
        // console.log(allColors[i])
        pallet.appendChild(color)
    }
    
    let myChoice;
    function choose(event){
        myChoice = event.target.id
        //console.log(myChoice)
        assignColr();
    }
    


    for(let i = 0; i < 1296; i++){
        let blank = document.createElement('div')
        blank.setAttribute('class', 'blank')
        blank.addEventListener('click', function assignColor(paint){
            paint = blank.style.backgroundColor = myChoice
        })
        blank.addEventListener('mousedown', function yes(){
            mousedown = true
            //blank.style.backgroundColor = myChoice
        })
        blank.addEventListener('mouseup', function yes(){
            mousedown = false
            //blank.style.backgroundColor = myChoice
        })
        blank.addEventListener('mouseover', function no (){
            if (mousedown){
            blank.style.backgroundColor = myChoice
            }
        })
        canvas.appendChild(blank)
        let reset = document.getElementById('clear');
        reset.addEventListener('click', function clear(){
        blank.style.backgroundColor = 'whitesmoke'
        })
    }


// let reset = document.getElementById('clear');
// reset.addEventListener('click', function clear(){
//     blank.style.backgroundColor = 'whitesmoke'
// })