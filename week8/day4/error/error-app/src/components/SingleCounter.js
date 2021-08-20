import React from "react"

class SingleCounter extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
HandleClick(){
    this.setState({count: this.state.count + 1});
}
render(){
return(
    <>
    <h6>This counter is not inside of boundary. So if crashes, all other components are deleted.</h6>
    <h1 onClick={this.HandleClick}>{this.state.count}</h1>
    </>
)
}
}
export default SingleCounter