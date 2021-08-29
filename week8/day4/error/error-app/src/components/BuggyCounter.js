import React from "react"

class BuggyCounter extends React.Component{
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
    <h6>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</h6>
    <h1 onClick={this.HandleClick}>{this.state.count}</h1><br></br>
    <h1 onClick={this.HandleClick}>{this.state.count}</h1>
    </>
)
}
}
export default BuggyCounter