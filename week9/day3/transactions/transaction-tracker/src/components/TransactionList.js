import TransactionForm from './TransactionForm'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from '../redux/actions'
import {bindActionCreators} from 'redux'

class TransactionList extends Component {
    state={
        list:this.returnList()
    }
    
    returnList(){
        if(localStorage.getItem('transactions')==null){
        localStorage.setItem('transactions',JSON.stringify([]))
        return JSON.parse(localStorage.getItem('transactions'))
        }
    }

    onAddOrEdit=(data)=>{
        var list = this.returnList()
        list.push(data)
        localStorage.setItem('transactions',JSON.stringify(list))
        this.setState({list:list})
    }
    
    handleEdit=i=>{
    this.setState({
        currentIndex:i
    })
    }
    handleDelete=i=>{
    this.props.deleteTransaction(i)
    }
    render() {
        return (
            <div>
                <TransactionForm />
                <hr/>
                <p>list of transactions</p>
                <table>
                    <tbody>
                        {
                            this.state.list.map((item,index)=>{
                                return <tr key={index}>
                                    <td>{item.accountNum}</td>
                                    <td>{item.cvv}</td>
                                    <td>{item.amount}</td>
                                    <td><button onClick={()=>this.handleEdit}>Edit</button></td>
                                    <td><button onClick={this.handleDelete}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        list:state.list
    }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        deleteTransaction : actions.DLT,
        updateIndex: actions.UPDATEI
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionList)
