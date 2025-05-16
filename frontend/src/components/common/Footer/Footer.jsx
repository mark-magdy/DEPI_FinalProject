import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css"; // We'll create this next

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="g-4">
          {/* Company Info */}
          <Col lg={4} md={6}>
            <div className="footer-brand">
              <Link to="/" className="logo">
                CoWorkSpace
              </Link>
            </div>
            <p className="footer-about">
              Your perfect workspace solution for productivity and collaboration
              in the heart of the city.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/spaces">Spaces</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Col>

          {/* Spaces */}
          <Col lg={2} md={6}>
            <h3 className="footer-heading">Our Spaces</h3>
            <ul className="footer-links">
              <li>
                <Link to="/spaces/private-offices">Private Offices</Link>
              </li>
              <li>
                <Link to="/spaces/meeting-rooms">Meeting Rooms</Link>
              </li>
              <li>
                <Link to="/spaces/hot-desks">Hot Desks</Link>
              </li>
              <li>
                <Link to="/spaces/virtual-offices">Virtual Offices</Link>
              </li>
              <li>
                <Link to="/spaces/event-spaces">Event Spaces</Link>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={4} md={6}>
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Cairo, Egypt </span>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <span>+20 0127 540 8336 </span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>Mark.anis12@gmail.com</span>
              </li>
            </ul>
            <div className="newsletter">
              <h4>Subscribe to our newsletter</h4>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email" required />
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-5">
          <Col>
            <div className="footer-bottom">
              <p>
                &copy; {new Date().getFullYear()} CoWorkSpace. All rights
                reserved.
              </p>
              <div className="legal-links">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/cookies">Cookie Policy</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
