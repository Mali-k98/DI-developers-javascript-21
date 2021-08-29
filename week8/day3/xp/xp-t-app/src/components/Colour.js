
class Colour extends React.Component{
    constructor(){
        super()
        this.state={fav:'red'}
    }
    componentDidMount(){
        this.timer= setTimeout(this.setState({fav:'yellow'}),5000)
    }
    ChangeColor=()=>{
        this.setState({fav:'blue'})
    }

    render(){
        return(
            <>
            <h1>my fav colour is {this.state.fav}</h1>
            <button onClick={this.ChangeColor}>Change Color</button>
            </>
        )
    }
}

export default Colour