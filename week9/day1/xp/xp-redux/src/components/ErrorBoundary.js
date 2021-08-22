import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state={
            hasError:false
        }
    }
    
    static getDerivedStateFromError (error)  {
    hasError : true
    }

    render() {
        if(this.state.hasError){
            return <h1>an error has occured</h1>
        }
            return this.props.children
    }
}

export default ErrorBoundary
