import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MainNavbar from '../components/MainNavbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <MainNavbar />
      <Container>
        <Row>
          <main className='mt-4'>
            <Outlet />
          </main>
        </Row>
      </Container>
    </>
  );
};

export default MainLayout;
