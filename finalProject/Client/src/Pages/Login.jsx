import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a GET request to the /users API to check credentials
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // Redirect to home page if login is successful
        navigate('/home');
      } else {
        // Set error message if login fails
        setError('Invalid email or password');
      }
    } catch (err) {
      // Handle errors (network issues, etc.)
      console.error(err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Container className="mt-5 p-4" style={{
      maxWidth: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
     }}>
      <h2 className="mb-4">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
