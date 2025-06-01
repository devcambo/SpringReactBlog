import React, { useContext, useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import UserTable from '../components/UserTable';

import AddUserForm from '../components/AddUserForm';

const ManageUserPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Row>
      <Button variant='primary mb-3' onClick={() => setShowModal(true)}>
        Add User
      </Button>
      <AddUserForm show={showModal} onHide={() => setShowModal(false)} />
      <UserTable />
    </Row>
  );
};

export default ManageUserPage;
