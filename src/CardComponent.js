import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = ({ title, value, variant }) => {
  return (
    <div className="col-md-4">
      <Card bg={variant} text="white" className="mb-2">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{value}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
