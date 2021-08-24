import { connect } from 'react-redux'
import React from 'react'

function MovieDeats(props) {
    const {movieNo,movieList}=props
    console.log(movieNo)
    return (
        <div>
            <h1>movie details</h1>
            {
                
                movieList.map((item,i)=>{
                    
                    return(
                        <p>title: {item.title} release date: {item.releaseDate} rating {item.rating}</p>
                    )
                })
            }
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
