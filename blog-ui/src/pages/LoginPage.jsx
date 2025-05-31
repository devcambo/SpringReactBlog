import React, { useContext, useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import { loginUser } from '../context/auth/AuthAction';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { dispatch } = useContext(AuthContext);

  const from = sessionStorage.getItem("redirectPath") || "/dashboard";

  const navigate = useNavigate();

  const login = async (userData) => {
    try {
      const { access_token } = await loginUser(userData);
      dispatch({ type: 'LOGIN', payload: access_token });
      toast.success('Login successful!');
      navigate(from);
      sessionStorage.removeItem("redirectPath");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      pwd: password,
    };
    login(userData);
    clearForm();
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Col md={4} className='mx-auto'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form>
    </Col>
  );
};

export default LoginPage;
