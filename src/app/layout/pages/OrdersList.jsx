import React, { Component } from 'react';
import {Table, Header, Grid, Segment } from 'semantic-ui-react';
import axios from 'axios';
import LoadingComponent from '../LoadingComponent';

class OrdersList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            ordersList: [],
            isLoading: true,
            requestFailed: false
        };
    }

    async componentDidMount(){
        let options = {
            method: 'GET',
            url: 'http://localhost:3001/orders'
        }

        try{
            let axiosResponse = await axios(options);

            if(axiosResponse.data.success){
                this.setState({
                    ordersList: axiosResponse.data.orders,
                    isLoading: false
                });
            }
            else{
                console.log(`Axios request failed: ${axiosResponse.data.message}`);

                this.setState({
                    isLoading: false,
                    requestFailed: true
                });
            }
        }
        catch(e){
            console.log(`Axios request failed: ${e}`);

            this.setState({
                isLoading: false,
                requestFailed: true
            });
        }
        
    }

    render(){

        const {isLoading, ordersList, requestFailed} = this.state;

        if(isLoading)
            return <LoadingComponent />
        if(requestFailed)
            return (
                <Segment>
                    <Header as='h2'>Oops!</Header>
                    <p>
                        Something went wrong getting the orders info...
                    </p>
                </Segment>
            );

        return (
            <Segment>

                {ordersList.length > 0 && 

                    <Grid divided='vertically'>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <Header as='h2' textAlign='left'>
                                    Orders list
                                </Header>
                            </Grid.Column>
                        </Grid.Row>   
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <Table celled padded>
                                    <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell singleLine>Id </Table.HeaderCell>
                                        <Table.HeaderCell>Customer</Table.HeaderCell>
                                        <Table.HeaderCell>Amount</Table.HeaderCell>
                                        <Table.HeaderCell>Payment method</Table.HeaderCell>
                                        <Table.HeaderCell>Reference</Table.HeaderCell>
                                    </Table.Row>
                                    </Table.Header>

                                    <Table.Body>

                                    {ordersList.map(order => (
                                        <Table.Row key={order.id} >
                                            <Table.Cell>
                                                {order.id}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {order.customerName}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {order.amount}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {order.paymentMethod}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {order.reference}
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                    
                                    </Table.Body>
                                </Table>
                            </Grid.Column>
                        </Grid.Row>  
                    </Grid>
                  

                }
            </Segment>
        );
    }
}

export default OrdersList;