import React from 'react'
import './LeftComponent.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function LeftComponent() {
  return (
    <div>
       <Card>
       <Card.Title>Home</Card.Title>
       <ListGroup>
      <ListGroup.Item>Member Enquiry</ListGroup.Item>
      <ListGroup.Item>Member</ListGroup.Item>
      <ListGroup.Item>Batches</ListGroup.Item>
      <ListGroup.Item>Packages</ListGroup.Item>
      <ListGroup.Item>Transactions</ListGroup.Item>
    </ListGroup>
       </Card>
 

    </div>
  )
}

export default LeftComponent