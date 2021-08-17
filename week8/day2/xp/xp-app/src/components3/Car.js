import Garage from "./Garage"

const Car = (props) =>{
    let {name,model} = props
    return(
        <>
        <h2>Hi im a car!</h2>
        <h3>i am a {name},{model}</h3>
        <Garage/>
        </>
    )
}

export default Car