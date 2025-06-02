import React from 'react';
import { Row } from 'react-bootstrap';
import CommentTable from '../components/CommentTable';

const ManageCommentPage = () => {
  return (
    <Row>
      <h1>All Comments</h1>
      <CommentTable />
    </Row>
  );
};

export default ManageCommentPage;
