import React, { useContext, useEffect, useState } from 'react';
import { Button, Row, Modal, Form } from 'react-bootstrap';
import UserContext from '../context/user/UserContext';
import { findUserById, updateUser } from '../context/user/UserActions';

const EditUserForm = ({ show, onHide, userid }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profilePicture: '',
    bio: '',
  });

  const fetchuser = async () => {
    try {
      const user = await findUserById(userid);
      setFormData({
        username: user.username || '',
        email: user.email || '',
        password: user.password || '',
        profilePicture: user.profilePicture || '',
        bio: user.bio || '',
      });
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  useEffect(() => {
    if (userid) {
      fetchuser();
    }
  }, [userid]);

  const { dispatch } = useContext(UserContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const editUser = async (userData) => {
    try {
      const user = await updateUser(userid, userData);
      dispatch({ type: 'UPDATE_USER', payload: user });
    } catch (error) {
      console.error('Error edit user:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(formData);
    setFormData({
      username: '',
      email: '',
      password: '',
      profilePicture: '',
      bio: '',
    });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
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
          <Form.Group className='mb-3'>
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              name='bio'
              value={formData.bio}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Edit User
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditUserForm;
