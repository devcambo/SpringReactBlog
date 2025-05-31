import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';
import MainNavbar from '../components/MainNavbar';

const DashBoardLayout = () => {
  return (
    <Container fluid className='p-0'>
      <MainNavbar />
      <Row className='m-0'>
        <SideBar />
        <Col md={9} lg={10} className='p-4'>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default DashBoardLayout;
