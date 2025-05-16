import React from "react";
import { Card, Badge, ListGroup } from "react-bootstrap";

const RoomCard = ({ room, isSelected, onSelect }) => {
  return (
    <Card
      className={`mb-4 h-100 ${isSelected ? "border-primary shadow" : ""}`}
      onClick={onSelect}
      style={{ cursor: "pointer", transition: "all 0.3s" }}
    >
      <Card.Img variant="top" src={`/images/${room.image}`} alt={room.name} />
      <Card.Body>
        <Card.Title>
          {room.name} <Badge bg="info">{room.capacity}</Badge>
        </Card.Title>
        <Card.Text>{room.description}</Card.Text>
        <h5 className="text-success">{room.price}</h5>
      </Card.Body>
      <ListGroup variant="flush">
        {room.amenities.map((amenity, index) => (
          <ListGroup.Item key={index}>
            <i className="bi bi-check-circle-fill text-success me-2"></i>
            {amenity}
          </ListGroup.Item>
        ))}
      </ListGroup>
      {isSelected && (
        <Card.Footer className="bg-primary text-white text-center">
          Selected
        </Card.Footer>
      )}
    </Card>
  );
};

export default RoomCard;
