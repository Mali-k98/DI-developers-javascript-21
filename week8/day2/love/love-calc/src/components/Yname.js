import { connect } from "react-redux"
import { handleYname } from "../redux/action"

const Yname =(props)=>{
    // const{handleYname, yname} = props
    return(
        <>
        <input type='text' placeholder='your crushs name' onChange={props.handleYname} value={Yname}/>
        </>
    )
}
const mapStateToProps=(state)=>{
    return{
        Yname:state.Yname
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleYname:(e)=>dispatch(handleYname(e.target.value))
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Yname)