import axios from "axios"

export const SEARCH_MOVIE ='SEARCH_MOVIE'
export const FETCH_MOVIE ='FETCH_MOVIE'

export const searchMovie = text=>dispatch=>{
    dispatch({
        type: SEARCH_MOVIE,
        payload:text
    })
}

export const fetchMovie = text =>dispatch=>{
    axios.get(`http://www.omdbapi.com/?apikey=[87a9703a]&s=${text}`)
        .then(res=> dispatch({
            type: FETCH_MOVIE,
            payload: res.data.Search
        }))
        .catch(e=>console.log(e))
}