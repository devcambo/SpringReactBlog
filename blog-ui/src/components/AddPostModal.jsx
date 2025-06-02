import React, { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import PostContext from '../context/post/PostContext';
import { createPost } from '../context/post/PostActions';

const AddPostModal = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    tags: '',
  });

  const { dispatch } = useContext(PostContext);

  const addPost = async (post) => {
    try {
      const newPost = await createPost(post);
      dispatch({ type: 'CREATE_POST', payload: newPost });
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId='content'>
            <Form.Label>Content</Form.Label>
            <Form.Control
              as='textarea'
              rows={4}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId='category'>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId='tags'>
            <Form.Label>Tags</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value })
              }
            />
          </Form.Group>
          <Button variant='primary' type='submit' className='mt-3'>
            Add Post
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddPostModal;
