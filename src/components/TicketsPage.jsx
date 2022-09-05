import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TicketCard from "./TicketCard";

const TicketsPage = () => {
  return (
    <div style={{ backgroundColor: "#add8e6", height: "130vh" }}>
      <div className="title text-center display-4 pt-5">Tickets Page</div>
      <Container>
        <Row className="py-5">
          <Col md={4}>
            <TicketCard
              title="Card Title"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
              addDesc="when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            />
          </Col>
          <Col md={4}>
            <TicketCard
              title="Card Title"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
              addDesc="when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            />
          </Col>
          <Col md={4}>
            <TicketCard
              title="Card Title"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
              addDesc="when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            />
          </Col>
        </Row>
        <Row className="py-5">
          <Col md={4}>
            <TicketCard
              title="Card Title"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
              addDesc="when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            />
          </Col>
          <Col md={4}>
            <TicketCard
              title="Card Title"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
              addDesc="when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            />
          </Col>
          <Col md={4}>
            <TicketCard
              title="Card Title"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
              addDesc="when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TicketsPage;
