import React, { Component } from 'react'
import Cardarr from './Cardarr'
import Search from './Search'
import Scale from './Scale'
import Navbar from '../Landing/NavBar'


class Index extends Component {
    constructor(){
        super()
        this.state={
            plants:[],
            searchText:''
        }
    }
    componentDidMount(){
        fetch('http://localhost:4000/plants')
        .then(response=>response.json())
        // .then(data=>console.log(data))
        .then(data => {this.setState({plants:data})})
        .catch(e => {console.log(e)})
    }
    handleChange = (e) => {
        const {searchText} = this.state;
        this.setState({searchText:e.target.value})
        // this.inputText = e.target.value;
    }

    render() {
        const {plants,searchText} = this.state;

    const filterPlants = plants.filter(item => {
        return item.name.toLowerCase().includes(searchText.toLowerCase())
        })


        return (
            <div className='card-index'>
                <Navbar/>
                <Search onInputChange={this.handleChange} />
                <div className='s-s'>
                <Scale/>
                <div>
                <Cardarr plants={filterPlants}/>
                </div>
                </div>
            </div>
        )
    }
}


export default Index