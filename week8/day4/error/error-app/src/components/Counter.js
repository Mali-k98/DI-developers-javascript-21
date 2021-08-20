import React from "react"
import BuggyCounter from "./BuggyCounter";

class Counter extends React.Component{
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
    <h6>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</h6>
    <h1 >{this.state.count}</h1> 
    <button onClick={this.HandleClick}>Click</button><br></br>
    <h1 onClick={this.HandleClick}>{this.state.count}</h1>
    <button onClick={this.HandleClick}>Click</button><br></br>
    </>
)
}
}
export default Counter