import {connect} from 'react-redux'
import { handleClick } from '../redux/action'

const Calc =(props)=>{
    // const {handleClick} = props
    return(
        <>
        <button onClick={()=>props.dispatch(handleClick(props.fname,props.sname))}>Result</button>
        </>
    )
}
const mapStateToProps=(state)=>{
    return{
        fname:state.fname,
        sname:state.sname
    }
}


export default connect (mapStateToProps,null)( Calc)