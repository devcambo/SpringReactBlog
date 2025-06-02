import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { deleteUser, findAllUsers } from '../context/user/UserActions';
import UserContext from '../context/user/UserContext';
import EditUserForm from './EditUserForm';
import DeleteUser from './DeleteUser';

const UserTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selecteduser, setselecteduser] = useState(null);

  const { users, dispatch } = useContext(UserContext);

  const fetchUsers = async () => {
    try {
      const users = await findAllUsers();
      dispatch({ type: 'FIND_USERS', payload: users });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Table responsive='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Biography</th>
            <th>Profile Picture</th>
            <th>Roles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.biography}</td>
                <td>{user.profilePicture}</td>
                <td>{user.roles}</td>
                <td>
                  <button
                    className='btn-sm btn btn-primary'
                    onClick={() => {
                      setShowModal(true);
                      setselecteduser(user.userId);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className='btn-sm btn btn-danger ms-2'
                    onClick={() => {
                      setShowDeleteModal(true);
                      setselecteduser(user.userId);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <EditUserForm
        show={showModal}
        onHide={() => setShowModal(false)}
        userid={selecteduser}
      />
      <DeleteUser
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        userid={selecteduser}
      />
    </>
  );
};

export default UserTable;
