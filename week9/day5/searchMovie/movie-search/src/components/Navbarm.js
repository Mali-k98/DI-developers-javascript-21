import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'

class Navbarm extends Component {
    render() {
        return (
            <div>
                <Container>
                <Navbar expand="lg" variant="dark" bg="dark">
                    <Container>
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    </Container>
                </Navbar>
                </Container>
            </div>
        )
    }
}


export default Navbarm