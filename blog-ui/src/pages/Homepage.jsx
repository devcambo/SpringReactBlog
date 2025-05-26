import React, { useContext, useEffect } from 'react';
import PostContext from '../context/PostContext';
import { findAllPosts } from '../context/PostActions';
import { Col, Row } from 'react-bootstrap';
import PostCard from '../components/PostCard';

const Homepage = () => {
  const { posts, dispatch } = useContext(PostContext);

  const fetchPosts = async () => {
    const posts = await findAllPosts();
    dispatch({ type: 'FIND_POSTS', payload: posts });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Row>
      {posts.map((post) => (
        <Col key={post.postId} md={4} className='mb-4'>
          <PostCard post={post} />
        </Col>
      ))}
    </Row>
  );
};

export default Homepage;
