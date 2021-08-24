import {connect} from 'react-redux'
import { returnMovie } from '../actions/action'
import MovieDeats from './MovieDeats'
import React from 'react'

const Movies=(props)=> {
    const {movies,handleClick}=props
    console.log(movies);
    return (
        <>
            <h2>Movie List</h2>
            {
                movies.map((item, i) => {
                    return (
                    <div key={i}>
                    <p>{item.title} <button id={i} onClick={handleClick}>Details</button></p>
                    </div>
                    )
                })
            }
            <MovieDeats/>
        </>
    )
}
const mapStateToProps=(state)=>{
    return{
        movies:state.movieList

    }
}
const mapDispatchProps = (dispatch)=>{
    return{
        handleClick: (e)=> dispatch(returnMovie(e.target.id))
    }
}

export default connect(mapStateToProps,mapDispatchProps) (Movies)


