import React, { Component } from 'react'
// import TransactionList from './TransactionList'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {bindActionCreators} from 'redux'

class TransactionForm extends Component {
    state={
        ...this.returnStateObject()
    }
        
    returnStateObject(){
        if(this.props.currentIndex == -1)
            return{
            accountNum:'',
            cvv:'',
            holder:'',
            amount:''
        }
        else 
        return this.props.list[this.props.currentIndex]
    
}
    
    componentDidUpdate(prevProps){
        if(prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length)
            this.setState({...this.returnStateObject() })
    }

    handleChange=e=>{
    this.setState({
        [e.target.name]: e.target.value
    })
    }
    
    handleSubmit=e=>{
        e.preventDefault()
        if(this.props.currentIndex == -1)
            this.props.insertTransaction(this.state)
        else 
            this.props.updateTransaction(this.state)
    }

    render() {
        return (
            <div>
                <p>transaction form</p>
                <form onSubmit={this.handleSubmit}>
                    <input name='accountNum' type='text' placeholder='card number' value={this.state.accountNum} onChange={this.handleChange}/><br></br>
                    <input name='cvv' type='text' placeholder='cvv' value={this.state.cvv} onChange={this.handleChange}/><br></br>
                    <input name='holder' type='text' placeholder='account holder' value={this.state.holder} onChange={this.handleChange}/><br></br>
                    <input name='amount' type='text' placeholder='amount' value={this.state.amount} onChange={this.handleChange}/><br></br>
                    <button type='submit'>Sumbit</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        list:state.list,
        currentIndex:state.currentIndex
    }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        insertTransaction : actions.INSERT,
        updateTransaction : actions.UPDATE,
    
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionForm)
