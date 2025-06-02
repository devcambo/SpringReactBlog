import React, { useContext, useEffect } from 'react';
import { findAllComments } from '../context/comment/CommentActions';
import { Table } from 'react-bootstrap';
import CommentContext from '../context/comment/CommentContext';

const CommentTable = () => {
  const { comments, dispatch } = useContext(CommentContext);

  const fetchComments = async () => {
    const comments = await findAllComments();
    dispatch({ type: 'FIND_COMMENTS', payload: comments });
  };

  useEffect(() => {
    fetchComments();
  }, [dispatch]);

  return (
    <Table responsive='sm'>
      <thead>
        <tr>
          <th>#</th>
          <th>Content</th>
          <th>Publication Date</th>
        </tr>
      </thead>
      <tbody>
        {comments.map((comment) => (
          <tr key={comment.commentId}>
            <td>{comment.commentId}</td>
            <td>{comment.content}</td>
            <td>{comment.timestamp}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CommentTable;
