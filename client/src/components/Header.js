import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="success" variant="dark" className="navbar navbar-dark bg-info">
      <Navbar.Brand as={Link} to="/">
        MERN App
      </Navbar.Brand>
      <Nav className="navbar navbar-dark bg-info">

        <Nav.Link as={Link} to="/register">
          Register
        </Nav.Link>    
                 <Nav.Link as={Link} to="/login">
          Login
          </Nav.Link>
         <Nav.Link as={Link} to="/users">
          Users
        </Nav.Link>
        <Nav.Link as={Link} to="/addpost">
          New Post
        </Nav.Link>
        <Nav.Link as={Link} to="/posts">
          Posts
        </Nav.Link>
        {/* dark krni hain className */}

       



      </Nav>
    </Navbar>
  );
};

export default Header;
