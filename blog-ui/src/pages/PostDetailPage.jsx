import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostContext from '../context/post/PostContext';
import { findPostById } from '../context/post/PostActions';
import { Card, Col, Row } from 'react-bootstrap';
import ListingComment from '../components/ListingComment';
import UserComment from '../components/UserComment';

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
    <>
      <Row>
        {post ? (
          <>
            <Col md={8} className='mx-auto'>
              <h1 className='koh-santepheap-regular'>{post.title}</h1>
              <p className='koh-santepheap-light'>
                Date: {post.publicationDate}
              </p>
              <Card.Img
                className='mt-3 mb-3'
                style={{ height: '400px', objectFit: 'cover' }}
                variant='top'
                src={
                  'https://pppkhmer.sgp1.digitaloceanspaces.com/image/main/20255/26_5_2025_a1513.jpg'
                }
              />
              <p className='koh-santepheap-light'>{post.content}</p>
            </Col>
            {/* User Comment */}
            <Col md={8} className='mx-auto'>
              <UserComment />
            </Col>
            {/* List Comment */}
            <Col md={8} className='mx-auto'>
              <h2 className='koh-santepheap-regular'>Comments</h2>
              <ListingComment />
            </Col>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Row>
      <Row></Row>
    </>
  );
};

export default PostDetailPage;
