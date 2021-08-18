class Shoot extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    
    HandleShoot=()=>{
        alert('GOAL!!!')
    }

    render(){
        return(
            <>
            <button onClick={this.HandleShoot}>Take the shot!</button>
            </>
        );
    }
}
export default Shoot