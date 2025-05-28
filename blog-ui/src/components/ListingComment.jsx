import React, { useContext, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import CommentContext from '../context/comment/CommentContext';
import { findAllComments } from '../context/comment/CommentActions';
import { useParams } from 'react-router-dom';

const ListingComment = () => {
  const { comments, dispatch } = useContext(CommentContext);

  const params = useParams();

  const fectchComments = async () => {
    const comments = await findAllComments(params.postId);
    dispatch({ type: 'FIND_COMMENTS', payload: comments });
  };

  useEffect(() => {
    fectchComments();
  }, [params.postId]);

  return (
    <Col md={12}>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Card key={comment.commentId} className='mb-3'>
            <Card.Body>
              <p>{comment.content}</p>
              <small>
                <i>{comment.timestamp}</i>
              </small>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No comments found.</p>
      )}
    </Col>
  );
};

export default ListingComment;
