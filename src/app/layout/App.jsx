import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import Home from './pages/Home';
import OrdersList from './pages/OrdersList';

class App extends Component {
    render(){
        return (
            <Fragment>
                <NavBar />
                <Container className='main'>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/orders' component={OrdersList}/>
                </Container>
            </Fragment>
        );
    }
}

export default App; 