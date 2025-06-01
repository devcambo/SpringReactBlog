import React, { useContext } from 'react';
import UserContext from '../context/user/UserContext';
import { deleteUser } from '../context/user/UserActions';
import { Button, Modal } from 'react-bootstrap';

const DeleteUser = ({ show, onHide, userid }) => {
  const { dispatch } = useContext(UserContext);

  const handleDeleteUser = async () => {
    try {
      await deleteUser(userid);
      dispatch({
        type: 'DELETE_USER',
        payload: userid,
      });
      onHide();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete the user id = {userid}? This action
        cannot be undone.
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>
          Cancel
        </Button>
        <Button variant='danger' onClick={handleDeleteUser}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteUser;
