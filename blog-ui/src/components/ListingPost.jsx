import React, { useContext, useEffect } from 'react';
import PostContext from '../context/post/PostContext';
import { findAllPosts } from '../context/post/PostActions';
import { Col, Row } from 'react-bootstrap';
import PostCard from '../components/PostCard';

const ListingPost = () => {
  const { posts, dispatch } = useContext(PostContext);

  const fetchPosts = async () => {
    const posts = await findAllPosts();
    dispatch({ type: 'FIND_POSTS', payload: posts });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Row className='mt-4'>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Col md={3} key={post.postId}>
            <PostCard post={post} />
          </Col>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </Row>
  );
};

export default ListingPost;
