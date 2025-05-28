import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import CommentContext from '../context/comment/CommentContext';
import { createComment } from '../context/comment/CommentActions';
import { useParams } from 'react-router-dom';

const UserComment = () => {
  const [comment, setComment] = useState('');

  const params = useParams();

  const { dispatch } = useContext(CommentContext);

  const userComment = async (commentData) => {
    const userCM = await createComment(commentData);
    dispatch({ type: 'CREATE_COMMENT', payload: userCM });
    setComment('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentData = {
      content: comment,
      postId: params.postId,
      userId: 1,
    };
    userComment(commentData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
        className='form-control'
        placeholder='Leave a comment...'
        rows={3}
      />
      <div className='d-flex justify-content-end mb-2 mt-2'>
        <Button className='btn btn-primary' type='submit'>
          Post Comment
        </Button>
      </div>
    </Form>
  );
};

export default UserComment;
