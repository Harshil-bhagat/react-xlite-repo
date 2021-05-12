import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';

export function StatisticCards() {
    return(
    <div className="row" id="cards">
        <div className="col-lg-6">
                    <Card>
                        <Card.Header>Personal Data</Card.Header>
                        <ListGroup variant="flush">
                                <ListGroup.Item>My Address</ListGroup.Item>
                                <ListGroup.Item>Balance</ListGroup.Item>
                                <ListGroup.Item>Deposit</ListGroup.Item>
                                <ListGroup.Item>Withdraw</ListGroup.Item>
                                <ListGroup.Item>Invitation Link</ListGroup.Item>
                                <ListGroup.Item>Direct Partners</ListGroup.Item>
                                <ListGroup.Item>Total Deposit by Direct</ListGroup.Item>
                                <ListGroup.Item>Total Team</ListGroup.Item>
                            </ListGroup>
                    </Card> 
        </div> 

        <div className="col-lg-6">
                    <Card>
                        <Card.Header>Income Figures</Card.Header>
                        <ListGroup variant="flush">
                                <ListGroup.Item>Level Income</ListGroup.Item>
                                <ListGroup.Item>Daily Income Percentage</ListGroup.Item>
                                <ListGroup.Item>Daily Income Distribution</ListGroup.Item>
                                <ListGroup.Item>Level Statistics</ListGroup.Item>
                                <ListGroup.Item>Income From Direct</ListGroup.Item>
                                <ListGroup.Item>Total Income</ListGroup.Item>
                                <ListGroup.Item>Founder Income</ListGroup.Item>
                                <ListGroup.Item>Co-founder Income</ListGroup.Item>
                            </ListGroup>
                    </Card> 
        </div>
    </div>
       
    )
}


