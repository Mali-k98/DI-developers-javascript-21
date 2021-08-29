import React from "react"

class Form extends React.Component {
    constructor(){
        super();
        this.state={
        fname:'',
        lname:'',
        age:null,
        }
    }
    valid(item,type){
        let itemValue = item.target.value;
        switch(type){
            case "fname":{
                this.setState({fname:itemValue})
            }
            case "lname":{
                this.setState({lname:itemValue})
            }
            case "age":{
                this.setState({age:itemValue})
            }
        }
    }
    
    submitD(){
        let arr = []
        arr.fname=this.state.fname
        arr.lname=this.state.lname
        arr.age=this.state.age

        console.log(arr);
    }
    
    render(){
    return(
        <>
        <form style={{background:'#B8255F',width:'100vw',padding:'10px'}}>
            <input type='text' placeholder='First name' onChange={(this.valid)}/> <br></br>
            <input type='text' placeholder='Last name' onChange={(this.valid)}/><br></br>
            <input type='text' placeholder='Age'onChange={(this.valid)}/><br></br>
            <input type='radio' name='m'/>
            <label for='m'>Male</label>
            <input type='radio' name='f'/>
            <label for='f'>Female</label><br></br>
            <h3>select your destination:</h3>
            <select>
                <option>Brazil</option>
                <option>Japan</option>
                <option>Thailand</option>
            </select><br></br>
            <h4>dietary requirements:</h4>
            <input type='checkbox' name='v'/>
            <label for='v'>Vegan </label>
            <input type='checkbox' name='n'/>
            <lable for='n'>Nut Free</lable>
            <input type='checkbox' name='h'/>
            <label for='h'>Halal</label><br></br>
            <button onClick={this.submitD}>Submit</button>
        </form>
        </>
    );
    }
}
export default Form