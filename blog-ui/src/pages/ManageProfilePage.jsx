import React, { useContext, useEffect } from 'react';
import UserContext from '../context/user/UserContext';
import { getUserProfile } from '../context/user/UserActions';
import { Card, Col, Row } from 'react-bootstrap';

const ManageProfilePage = () => {
  const { user, dispatch } = useContext(UserContext);

  const fetchUserProfile = async () => {
    try {
      const userProfile = await getUserProfile();
      dispatch({ type: 'FIND_USER', payload: userProfile });
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <Row>
      {user && (
        <Col md={12}>
          <Card className='p-4'>
            <h1>Profile</h1>
            <p>Name: {user.username}</p>
            <p>Email: {user.email}</p>
          </Card>
        </Col>
      )}
    </Row>
  );
};

export default ManageProfilePage;
