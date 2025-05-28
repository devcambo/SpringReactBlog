import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const SideBar = () => {
  return (
    <Navbar
      bg='light'
      className='flex-column p-4 h-100'
      style={{ width: '250px' }}
    >
      <Navbar.Brand className='mb-3 font-bold text-lg'>Menu</Navbar.Brand>
      <Nav className='flex-column w-100'>
        <Nav.Link
          href='#post'
          className='mb-2 text-gray-700 hover:bg-blue-100 rounded p-2'
        >
          Post
        </Nav.Link>
        <Nav.Link
          href='#comment'
          className='mb-2 text-gray-700 hover:bg-blue-100 rounded p-2'
        >
          Comment
        </Nav.Link>
        <Nav.Link
          href='#profile'
          className='mb-2 text-gray-700 hover:bg-blue-100 rounded p-2'
        >
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default SideBar;
