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