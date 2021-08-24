import { connect } from 'react-redux'
import { changeText1 } from '../redux/actions'

import React from 'react'

function Child (props){
    const{pOne,pTwo,changeOne} =props
    return (
        <div>
            <p>text 1:{pOne}</p>
            <p>text 2:{pTwo}</p>
            <input type='text' onChange={changeOne}/>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        pOne: state.prop_one,
        pTwo: state.prop_two
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        changeOne: (e)=> dispatch(changeText1(e.target.value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Child)

