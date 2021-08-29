import { Nav } from 'react-bootstrap'
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter, Switch, Route, NavLink, Link } from "react-router-dom";
import React from 'react';
import { error } from 'jquery';

class Nav extends React.Component {
    catchError() {
        if(shop){
            throw new ErrorBoundary
        }
    }

    render(){
    return (
        <div>
        <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item >
        <Nav.Link as={link} to={'/home'}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item >
        <Nav.Link as={link} to={'/profile'}>Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item >
        <Nav.Link as={link} to={'/error'}>shop</Nav.Link>
        </Nav.Item>
        </Nav>
        <div>
            <Switch>
                <ErrorBoundary>
                <Route path='/home'>
                    <Home/>
                </Route>
                <Route path='/profile'>
                    <Profile/>
                </Route>
                <Route path='/error'>
                    <Shop/>
                </Route>
                </ErrorBoundary>
            </Switch>
        </div>
        </div>
    )
    }
}

export default Nav
