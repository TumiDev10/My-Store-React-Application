import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';
import { useAuth0 } from '@auth0/auth0-react';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      console.log('Navigating to home page');
      navigate('/Home');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group> */}

        <Button variant="primary" onClick={() => loginWithRedirect()}>
        Login with Auth0
        </Button>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </Form>
    </div>
  );
}

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add registration logic here
    const user = { email, password };
    localStorage.setItem('users', JSON.stringify([user]));
    navigate('/login');
  };

  return (
    <div className="form-container">
      <h1>Sign up</h1>
      <Form onSubmit={handleSubmit}>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </Form.Group> */}

        <Button variant="primary" onClick={() => loginWithRedirect()}>
        Sign up with Auth0
        </Button>
        <p>Already have an account? <Link to="/Login">Log in</Link></p>
      </Form>
    </div>
  );
}

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  

  const buttonStyle = {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
    // Add more styles as needed
  };

  return isAuthenticated ? (
    <div className="form-container">
      <h1>Logout</h1>
      <Form >
    
    <Button variant="primary" onClick={() => logout({ returnTo: window.location.origin })}>
        Logout
        </Button>
    </Form>
    </div>
  ) : null;
};



export { Login, Signup, LogoutButton };
export default {Login, LogoutButton};


