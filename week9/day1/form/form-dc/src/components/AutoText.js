import React from 'react'

class AutoText extends React.Component {
    constructor(props){
    super()
    this.state={
        suggestions:[],
        text:''
    }
    }
    
    onTextType=(e)=>{
        const{items}=this.props
        const value = e.target.value
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = items.sort().filter(v=>regex.test(v))
        }
        this.setState(()=>({suggestions,text:value}))
    }
    
    sugSelect(value){
        this.setState(()=>({
            text:value,
            suggestions:[],
        }))
    }

    rnderSug(){
        const {suggestions} = this.state
        if(suggestions.length === 0){
            return null
        }
        return(
            <ul >
                {suggestions.map((i)=> <li style={{listStyleType:'none'}} onClick={()=> this.sugSelect(i)}>{i}</li>)}
            </ul>
        )
    }
    
    render(){
        const {text} = this.state
    return (
        <div style={{border:'1px solid black'}}>
            <input value={text} onChange={this.onTextType} type='text'/>
            {this.rnderSug()}
        </div>
    )
    }
}

export default AutoText


