import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
// import Login from "./Login"; // <-- import the Login component
import "./Footer.css";
import { Login, Signup } from './Login';

function BasicExample() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">My Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/products">Products</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/login">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />  
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} /> 
        </Routes>
        <footer>
          <div class="footer-container-fluid">
            <ul></ul>
            <p>&copy; 2023 My Store. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default BasicExample
