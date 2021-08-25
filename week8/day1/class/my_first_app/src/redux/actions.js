import { REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILED } from "./constant";

export const SELECT = 'SELECT';
export const ROBOTS ='ROBOTS';

export const handleSelect =(val)=>{
    return{
        type: SELECT,
        payload: val
    }
}

export const fetchRobots =()=>(dispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      // this.setState({robots:data})
    // this.props.dispatch(fetchRobots(data))
    dispatch({type:ROBOTS, payload:data})
    })
    .catch(e=>{
        console.log(e);
    })
    // return{
    //     type: ROBOTS,
    //     payload:arr,
    // }
}

export const reqRob=()=>(dispatch)=>{
    dispatch({type:REQUEST_ROBOTS_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:data}))
    .catch(e=> dispatch({type:REQUEST_ROBOTS_FAILED,payload:e}))
}