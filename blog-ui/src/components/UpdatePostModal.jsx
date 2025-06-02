import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import PostContext from '../context/post/PostContext';
import { findPostById, updatePost } from '../context/post/PostActions';

const UpdatePostModal = ({ show, onHide, id }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    tags: '',
  });

  const fetchPostById = async () => {
      console.log(id);
    const post = await findPostById(id);
    setFormData({
      title: post.title || '',
      content: post.content || '',
      category: post.category || '',
      tags: post.tags || '',
    });
  };

  useEffect(() => {
    if (id) {
      fetchPostById();
    }
  }, [id]);

  const { dispatch } = useContext(PostContext);

  const editPost = async (post) => {
    try {
      const updatedPost = await updatePost(id, post);
      dispatch({ type: 'UPDATE_POST', payload: updatedPost });
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editPost(formData);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={formData.title}    
              type='text'
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId='content'>
            <Form.Label>Content</Form.Label>
            <Form.Control
              value={formData.content}
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
              value={formData.category}
              type='text'
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId='tags'>
            <Form.Label>Tags</Form.Label>
            <Form.Control
              value={formData.tags}
              type='text'
              onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value })
              }
            />
          </Form.Group>
          <Button variant='primary' type='submit' className='mt-3'>
            Update Post
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdatePostModal;
