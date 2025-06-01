import React, { useContext, useState } from 'react';
import { Button, Row, Modal, Form } from 'react-bootstrap';
import UserContext from '../context/user/UserContext';
import { createUser } from '../context/user/UserActions';

const AddUserForm = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profilePicture: '',
  });
  
  const { dispatch } = useContext(UserContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addUser = async (userData) => {
    try {
      const user = await createUser(userData);
      dispatch({ type: 'CREATE_USER', payload: user });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    setFormData({ username: '', email: '', password: '', profilePicture: '' });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Profile Picture URL</Form.Label>
            <Form.Control
              type='text'
              name='profilePicture'
              value={formData.profilePicture}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Add User
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddUserForm;
