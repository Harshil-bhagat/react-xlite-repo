import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';


export function Smartcontract() {
    return (
        <div className="row" id="smartcontract">
            <div className="col-lg-12">
                <div className="col-lg-6">
                        <Card>
                            <Card.Header>Smart Contract Details</Card.Header>
                            <ListGroup variant="flush">
                                    <ListGroup.Item>Contract Address</ListGroup.Item>
                                    <ListGroup.Item>Contract Balance</ListGroup.Item>
                                    <ListGroup.Item>Total Transactions</ListGroup.Item>
                                    <ListGroup.Item>Total Deposit</ListGroup.Item>
                                    <ListGroup.Item>Pool Balance</ListGroup.Item>
                                    <ListGroup.Item>Weekly Pool Count</ListGroup.Item>
                                </ListGroup>
                        </Card> 
                </div>
                {/* <div className="col-lg-6">
                    <div className="row">
                    <div className="col-lg-3">
                        <Card>
                                <Card.Header>Smart Contract Address</Card.Header>
                                <Card.Text>tysfxushgaykoasjhaionkoasjdio</Card.Text>
                        </Card> 
                    </div>
                    <div className="col-lg-3">
                        <Card>
                                <Card.Header>BNBGain Token Address</Card.Header>
                                <Card.Text>tysfxushgaykoasjhaionkoasjdio</Card.Text>
                        </Card>
                    </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}