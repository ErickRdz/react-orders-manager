import React, { Component } from 'react';
import {Header, Grid, Segment, Image } from 'semantic-ui-react';

class Home extends Component{
    render(){
        return (
            <Segment>
                <Grid divided='vertically'>
                        <Grid.Row columns={1}>
                            <Grid.Column textAlign='center'>
                                <Header as='h2'>
                                    Welcome!
                                </Header>
                            </Grid.Column>
                        </Grid.Row> 

                        <Grid.Row columns={1}>
                            <Grid.Column textAlign='center'>
                                <p>
                                    To see the orders list from Prestashop, go to the Orders section...
                                </p>
                                
                                <Image size='medium' centered src='/assets/images/prestashop-logo.png' />
                            </Grid.Column>
                        </Grid.Row>

                </Grid>
            </Segment>
        );
    }
}

export default Home;