import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PostContext from '../context/post/PostContext';
import { deletePost } from '../context/post/PostActions';

const DeletePostModal = ({ show, onHide, id }) => {
  const { dispatch } = useContext(PostContext);

  const handleDeletePost = async () => {
    try {
      await deletePost(id);
      dispatch({ type: 'DELETE_POST', payload: id });
      onHide();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete the post id = {id}? This action cannot
        be undone.
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>
          Cancel
        </Button>
        <Button variant='danger' onClick={handleDeletePost}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePostModal;
