import React from 'react';
import Cardlist from './components/Cardlist';
import SearchBox from './components/SearchBox';
import { connect } from 'react-redux';
import { fetchRobots, reqRob } from './redux/actions';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      robots: [],
    }
  }

  componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
    // .then(data => {
  //     // console.log(data);
  //     // this.setState({robots:data})
      this.props.dispatch(fetchRobots())
    // })
  //   .catch(e => {
  //     console.log(e);
  //   })
  }

  // handleChange = (e) => {
  //   const {searchText} = this.state;
  //   this.setState({searchText:e.target.value})
  //   // this.inputText = e.target.value;
  // }

  handleClick = () => {
    // console.log('handleClick');
    // this.setState({searchText:this.inputText})
  }

  render() {
    const {robots,searchText,isPending}=this.props
    console.log(searchText);

    const filterRobots = robots.filter(item => {
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    return !isPending ? 
    <h1>loading</h1> :
    (
      <div className="tc">
        <h1>robofriends</h1>
        <SearchBox  />
        <Cardlist robots = {filterRobots} />
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    searchText:state.renderLoad.searchText,
    robots:state.reqRob.robots,
    isPending:state.reqRob.isPending,
    error:state.reqRob.error
  }
}
const mapDispatchToProps=(dispatch)=>{
  onReqRob:()=> dispatch(reqRob())
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
