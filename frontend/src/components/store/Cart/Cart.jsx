import React from "react";
import { Card, ListGroup, Button, Badge } from "react-bootstrap";
import { FaTrash, FaCreditCard } from "react-icons/fa";
import "./Cart.css";

const Cart = ({ items, onRemoveItem, onUpdateQuantity }) => {
  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout!"); // Replace with actual checkout logic
  };

  return (
    <Card className="cart-card sticky-top">
      <Card.Header className="cart-header">
        <h5>Shopping Cart</h5>
        <Badge bg="primary" pill>
          {items.reduce((total, item) => total + item.quantity, 0)}
        </Badge>
      </Card.Header>

      <ListGroup variant="flush">
        {items.length === 0 ? (
          <ListGroup.Item className="empty-cart">
            Your cart is empty
          </ListGroup.Item>
        ) : (
          items.map((item) => (
            <ListGroup.Item key={item.id} className="cart-item">
              <div className="item-info">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h6>{item.name}</h6>
                  <div className="item-quantity">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
              <div className="item-actions">
                <span className="item-price">
                  {(item.price * item.quantity).toFixed(2)} EGP
                </span>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => onRemoveItem(item.id)}
                >
                  <FaTrash />
                </Button>
              </div>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>

      {items.length > 0 && (
        <>
          <Card.Body className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>{calculateSubtotal().toFixed(2)} EGP </span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>{calculateSubtotal().toFixed(2)} EGP </span>
            </div>
          </Card.Body>

          <Card.Footer className="cart-footer">
            <Button
              variant="primary"
              className="w-100 checkout-btn"
              onClick={handleCheckout}
            >
              <FaCreditCard className="me-2" />
              Proceed to Checkout
            </Button>
          </Card.Footer>
        </>
      )}
    </Card>
  );
};

export default Cart;
