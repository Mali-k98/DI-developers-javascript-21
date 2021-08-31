import React, { Component } from 'react'
import Cardarr from './Cardarr'
import Search from './Search'


class Index extends Component {
    constructor(){
        super()
        this.state={
            plants:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:4000/plants')
        .then(response=>response.json())
        .then(data => {this.setState({plants:data})})
        .catch(e => {console.log(e)})
    }

    render() {
        return (
            <div>
                <Search/>
                <Cardarr/>
            </div>
        )
    }
}


export default Index