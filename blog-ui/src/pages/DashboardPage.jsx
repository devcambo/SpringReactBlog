import React from 'react';
import SideBar from '../components/SideBar';
import { Col, Row } from 'react-bootstrap';

const DashboardPage = () => {
  return (
    <Row>
      {/* SideBar */}
      <Col xl={4}>
        <SideBar />
      </Col>

      {/* Content */}
      <Col xl={8}></Col>
    </Row>
  );
};

export default DashboardPage;
