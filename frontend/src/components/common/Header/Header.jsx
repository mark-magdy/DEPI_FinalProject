import React from "react";
import { Navbar, Nav, Container, NavDropdown, Button, Image } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css"; // Optional for minor overrides

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")); // Assuming you store user data

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold --primary-dark:">
          CoWorkSpace
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={NavLink} to="/" exact className="px-3">
              Home
            </Nav.Link>

            <NavDropdown title="Spaces" id="spaces-dropdown" className="px-3">
              <NavDropdown.Item as={Link} to="/booking/private-offices">
                Private Offices
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/booking/meeting-rooms">
                Meeting Rooms
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/booking/hot-desks">
                Hot Desks
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/booking">
                View All Spaces
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/store" className="px-3">
              Store
            </Nav.Link>

            <Nav.Link as={NavLink} to="/pricing" className="px-3">
              Pricing
            </Nav.Link>

            {token ? (
              <NavDropdown
                title={
                  <>
                    {user?.avatar ? (
                      <Image
                        src={user.avatar}
                        roundedCircle
                        width="30"
                        height="30"
                        className="me-1"
                      />
                    ) : (
                      <i className="bi bi-person-circle me-1"></i>
                    )}
                    {user?.name || "My Account"}
                  </>
                }
                id="user-dropdown"
                align="end"
                className="px-3"
              >
                <NavDropdown.Item as={Link} to="/dashboard">
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/profile">
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/bookings">
                  My Bookings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <div className="d-flex ms-lg-3 mt-3 mt-lg-0">
                <Button
                  as={Link}
                  to="/login"
                  variant="outline-primary"
                  className="me-2"
                >
                  Login
                </Button>
                <Button as={Link} to="/signup" variant="primary">
                  Sign Up
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;