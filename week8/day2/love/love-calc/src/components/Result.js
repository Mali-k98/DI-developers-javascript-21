import {connect} from 'react-redux'

const Result =(props)=>{
    // const {results} = props
    return(
    <>
    <h4>{props.fname} & {props.sname}</h4>
    <h4>percent:{props.percentage}</h4>
    <h4>Result:{props.result}</h4>
    </>
    )
}
const mapStateToProps=(state)=>{
    return{
        Result:state.Result
    }
}



export default connect(mapStateToProps,null) (Result)