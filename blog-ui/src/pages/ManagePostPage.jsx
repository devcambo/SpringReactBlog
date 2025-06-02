import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import PostTable from '../components/PostTable';
import AddPostModal from '../components/AddPostModal';

const ManagePostPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Row>
      <Button variant='primary mb-3' onClick={() => setShowModal(true)}>
        Add Post
      </Button>
      <PostTable />
      <AddPostModal show={showModal} onHide={() => setShowModal(false)} />
    </Row>
  );
};

export default ManagePostPage;
