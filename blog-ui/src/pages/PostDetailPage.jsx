import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostContext from '../context/PostContext';
import { findPostById } from '../context/PostActions';
import { Col, Row } from 'react-bootstrap';

const PostDetailPage = () => {
  const { post, dispatch } = useContext(PostContext);

  const params = useParams();

  const fetchPost = async () => {
    const post = await findPostById(params.postId);
    dispatch({ type: 'FIND_POST', payload: post });
  };

  useEffect(() => {
    fetchPost();
  }, [params.postId]);

  return (
    <Row>
      {post ? (
        <Col md={8} className='mx-auto'>
          <h1 className='koh-santepheap-regular'>{post.title}</h1>
          <p className='koh-santepheap-light'>{post.content}</p>
        </Col>
      ) : (
        <p>Loading...</p>
      )}
    </Row>
  );
};

export default PostDetailPage;
