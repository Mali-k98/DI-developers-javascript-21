import { connect } from 'react-redux'
import React from 'react'
import { minusOne, plusOne } from '../reducers/Actions'

const Counter=(props) =>{
    const {counter,plusOne,minusOne}=props
    return (
        <div>
            
            <button onClick={plusOne}>+</button>
            {counter}
            <button onClick={minusOne}>-</button>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        counter:state.counter
    
    }
}
const mapDispatchProps = (dispatch)=>{
    return{
        plusOne:()=> dispatch(plusOne()),
        minusOne:()=> dispatch(minusOne())
    }
}

export default connect(mapStateToProps,mapDispatchProps) (Counter)
