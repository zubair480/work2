import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

const TicketCard = ({ title, desc, addDesc }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="card shadow rounded">
      <Card>
        <Card.Header className="bg-primary text-white">Ticket Card</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Show More
          </Button>
          <Collapse in={open} className="pt-2">
            <div id="example-collapse-text ">{addDesc}</div>
          </Collapse>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TicketCard;
