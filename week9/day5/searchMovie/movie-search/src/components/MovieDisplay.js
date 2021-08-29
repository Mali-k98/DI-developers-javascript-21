import React, { Component } from 'react'
import {connect} from 'react-redux'
import MovieCard from './MovieCard'

class MovieDisplay extends Component {
    render() {
        const {movies} =this.props
        let content  = ''
        content = movies.length > 0 ? movies.map((movie,i) => <MovieCard key={i} movie={movie} />) : null;
        return (
            <div className='row'>
                {content}
            </div>
        )
    }
}
const mstp= state=>({
    movies: state.movies.movies
})


export default  connect(mstp) (MovieDisplay)