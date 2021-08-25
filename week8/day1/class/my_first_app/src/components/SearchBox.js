import { connect } from "react-redux";
import { handleSelect } from "../redux/actions";

const SearchBox = (props) => {
    // const { onInputChange, onButtonClick} = props;
    return (
    <div className="pa2">
        <input type="text"
            placeholder="Search Robot..."
            className="pa3 ba b--green bg-lightest-blue"
            onChange={(e)=>props.dispatch(handleSelect(e.target.value))}
        />
    </div>
    )
}

// const mapDispatchToProps=(dispatch)=>{
//     return{
//         onInputChange: (e)=>dispatch(handleSelect(e.target.value))
//     }
// }

export default connect(null,null) (SearchBox)