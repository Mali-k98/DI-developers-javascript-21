import { connect } from "react-redux"
import { handleCname } from "../redux/action"


const Cname =(props)=>{
    // const{handleCname, cname} = props
    return(
        <>
        <input type='text' placeholder='your crushs name' onChange={props.handleCname} value={Cname}/>
        </>
    )
}

const mapStateToProps=(state)=>{
    return{
        Cname:state.Cname
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleCname:(e)=>dispatch(handleCname(e.target.value))
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Cname)
