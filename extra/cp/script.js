class Colour {
    constructor(hex, element){
        this.hex= hex
        this.element=element
        this.locked=false
    }

    setHex(hex){
        this.hex =hex
        this.element.style.backgroundColor = hex

        this.element.querySelector('.colour-input').value=hex 
    }

    setLocked(locked){
        this.locked = locked
    
        // if(locked){
        //     this.element.classList.add('locked')
        //     this.element.querySelector('i').classList('.fas fa-lock ')
        // }else{
        //     this.element.classList.remove('locked')
        //     this.element.querySelector('i').classList('is-locked')
        // }
    }
    
    toggleLocked(){
    this.setLocked(!this.locked)
    }

    genHex(){
    if(this.locked){
        return;
    }
    
    const chars = '0123456789ABCDEF'

    let hex = '#'

    for(let i=0; i<6; i++){
        hex += chars[Math.floor(Math.random()* 16)]
    }
    this.setHex(hex)
    }
    copyToClipBoard(){
        const input = this.element.querySelector('.colour-input')
        input.select()
        document.execCommand(copy)
        input.blur()

        this.element.classList.add('.copied')
        setTimeout(()=>{
            this.element.classList.remove('.copied')
        },1000)
    }
}

const colEls = document.querySelectorAll('.colours .color')

const colours = []

for(let i= 0 ; i <colEls.length; i++){
    const colEl = colEls[i]
    const input=colEl.querySelector('.colour-input')
    const lcok=colEl.querySelector('.lock-toggle')
    const copy=colEl.querySelector('.copy-hex')
    
    const hex = input.value
    const colour = new Colour (hex, colEl)

    input.addEventListener('input',(e)=> colour.setHex(e.target.value))
    
    lcok.addEventListener('click',()=>colour.toggleLocked())
    copy.addEventListener('click',()=>colour.copyToClipBoard())
    
    colour.genHex()
    colours.push(colour)
}

document.querySelector('.gen-btn').addEventListener('click',()=>{
    for(let i=0; i < colours.length; i++){
        colours[i].genHex()
    }
})