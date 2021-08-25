import { connect } from 'react-redux'
import React from 'react'
import { minusOne, plusOne,addOne, waitOne } from '../reducers/Actions'

const Counter=(props) =>{
    const {counter,plusOne,minusOne}=props
    return (
        <div>
            clicked:
            {counter}
            times
            <button onClick={plusOne}>+</button>
            <button onClick={minusOne}>-</button>
            <button onClick={addOdd}>increment when odd</button>
            <button onClick={waitOne}>Async increments</button>
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
        minusOne:()=> dispatch(minusOne()),
        addOdd:()=>dispatch(addOdd()),
        waitOne:()=> dispatch(waitOne())
    }
}

export default connect(mapStateToProps,mapDispatchProps) (Counter)
