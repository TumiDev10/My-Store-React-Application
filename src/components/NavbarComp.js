// import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Products from './Products';
// import Cart from './Cart';
// import { Login, Signup } from './Login';
// import './Footer.css';
// import Profile from './Profile';
// import { LogoutButton } from './Login';

// function BasicExample() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setLoggedIn(false);
//   };

//   return (
//     <Router>
//       <div>
//         <Navbar bg="dark" variant="dark" expand="lg">
//           <Container>
//             <Navbar.Brand href="/">My Store</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="me-auto">
//                 <Nav.Link as={Link} to="/home">
//                   Home
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/about">
//                   About
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/contact">  
//                   Contact
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/products">
//                   Products
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/profile">
//                   Profile
//                 </Nav.Link>
//               </Nav>
//               {loggedIn ? (
//                 <Nav>
//                   <Nav.Link as={Link} to="/login" onClick={handleLogout}>
//                     Logout
//                   </Nav.Link>
//                 </Nav>
//               ) : (
//                 <Nav>
//                   <Nav.Link as={Link} to="/login">
//                     Login
//                   </Nav.Link>
//                   <Nav.Link as={Link} to="/signup">
//                     Signup  
//                   </Nav.Link>
//                   <Nav.Link as={Link} to="/logoutButton">
//                     LogoutButton
//                   </Nav.Link>
//                 </Nav>
//               )}
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/logoutButton" element={<LogoutButton />} />
//         </Routes>
//         <footer>
//           <div className="footer-container-fluid">
//             <ul className="social-media-icons">
//               <li>
//                 <a href="http://www.twitter.com/twizztumi">
//                   <i className="fab fa-twitter"></i>
//                 </a>
//               </li>
//               <li>
//                 <a href="http://www.facebook.com/tumitwizzmashigo">
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//               </li>
//               <li>
//                 <a href="http://www.instagram.com/tumi_mashigo">
//                   <i className="fab fa-instagram"></i>
//                 </a>
//               </li>
//             </ul>
//             <div className="copyright">
//               <p>&copy; 2023 My Store. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </Router>
//   );

// }

// export default BasicExample;


import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Cart from './Cart';
import { Login, Signup, LogoutButton } from './Login';
import './Footer.css';
import Profile from './Profile';
import { useAuth0 } from "@auth0/auth0-react";


function BasicExample() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">My Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                
                {isAuthenticated && (
                  <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                )}

                {isAuthenticated && (
                  <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
                )}

                {isAuthenticated && (
                  <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
                )}

                {isAuthenticated && (
                  <Nav.Link as={Link} to="/products">
                  Products
                </Nav.Link>
                )}
                
    
                {isAuthenticated &&  (
                  <Nav.Link as={Link} to="/profile">
                    Profile
                  </Nav.Link>
                )}
              </Nav>
              {isAuthenticated ? (
                <Nav>
                  <Nav.Link as={Link} to="/logout" onClick={handleLogout}>
                    Logout
                  </Nav.Link>
                </Nav>
              ) : (
                <Nav>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    Signup
                  </Nav.Link>
                </Nav>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<LogoutButton />} />
        </Routes>
        <footer>
        <div className="footer-container-fluid">
             <ul className="social-media-icons">
               <li>
                 <a href="http://www.twitter.com/twizztumi">
                   <i className="fab fa-twitter"></i>
                 </a>
               </li>
               <li>
                 <a href="http://www.facebook.com/tumitwizzmashigo">
                   <i className="fab fa-facebook-f"></i>
                 </a>
               </li>
               <li>
                 <a href="http://www.instagram.com/tumi_mashigo">
                   <i className="fab fa-instagram"></i>
                 </a>
               </li>
             </ul>
             <div className="copyright">
               <p>&copy; 2023 My Store. All rights reserved.</p>
             </div>
           </div>
        </footer>
      </div>
    </Router>
  );
}

export default BasicExample;
