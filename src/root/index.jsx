import React from 'react'
import { Container, Body } from './style'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar'

export const Root = () => {
    return (
        <Router>
            <Container>
                <Sidebar>sidebar</Sidebar>
                <Body>body</Body>
            </Container>
        </Router>
    )
}


export default Root