import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import './comp.css';


export function Smartcontract(props) {
    return (
        <div className="row" id="smartcontract">
            <div className="col-lg-12">
                <div className="col-lg-10">
                        <Card className="design">
                            <Card.Header>Smart Contract Details</Card.Header>
                            <ListGroup variant="flush">
                                    <ListGroup.Item className="designList">Contract Address <span>{props.state.contract}</span></ListGroup.Item>
                                    <ListGroup.Item className="designList">Contract Balance<span>{props.state.contractBalance}</span></ListGroup.Item>
                                    <ListGroup.Item className="designList">Total Transactions</ListGroup.Item>
                                    <ListGroup.Item className="designList">Total Deposit</ListGroup.Item>
                                    <ListGroup.Item className="designList">Pool Balance</ListGroup.Item>
                                    <ListGroup.Item className="designList">Weekly Pool Count</ListGroup.Item>
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