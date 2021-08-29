import { connect } from 'react-redux'
import React from 'react'

function MovieDeats(props) {
    const {movieNo,movieList}=props
    console.log(movieNo)
    return (
        <div>
            <h1>movie details</h1>
            
            <p>title: {movieList[movieNo].title} release date: {movieList[movieNo].releaseDate} rating {movieList[movieNo].rating}</p>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        movieNo:state.movieNo,
        movieList:state.movieList
    }
}

export default connect(mapStateToProps,null) (MovieDeats)
