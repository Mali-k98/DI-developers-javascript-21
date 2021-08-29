import React, { Component } from 'react'
import {searchMovie,fetchMovie} from '../redux/actions'
import {connect} from 'react-redux'

class Search extends Component {
    onInputChange(e) {
    this.props.searchMovie(e.target.value)
    };
    sumbit(e){
        e.preventDefault();
        this.props.fetchMovie(this.props.text)
    };
    render() {
        return (
            <div>
                <Card border="dark" style={{ width: '18rem' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Dark Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                <form onSubmit={this.sumbit}>
                <input onChange={this.onInputChange} type='text'/>
                <button onClick={}>Search Movies!</button>
                </form>
                </Card.Body>
                </Card>
            <br />
            </div>
        );
    };
};
const mstp=(state)=>({
    text: state.movies.text
});



export default connect (mstp,{searchMovie,fetchMovie}) (Search)