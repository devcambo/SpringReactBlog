import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import { Button } from 'react-bootstrap';

function MainNavbar() {
  const { isAuthenticated, dispatch } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <Navbar expand='lg' className='bg-body-tertiary' sticky='top'>
      <Container fluid>
        <Navbar.Brand as={Link} to={'/'}>
          Blog Post {isAuthenticated.toString()}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0 m-auto'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {!isAuthenticated && (
              <>
                <Nav.Link as={Link} to={'/'}>
                  Home
                </Nav.Link>

                <Nav.Link as={Link} to={'/about'}>
                  About
                </Nav.Link>
              </>
            )}
          </Nav>

          <Nav className='d-flex'>
            {isAuthenticated && (
              <Link
                className='btn btn-warning'
                role='button'
                to={'/'}
                onClick={handleLogout}
              >
                Logout
              </Link>
            )}

            {!isAuthenticated && (
              <>
                <Link className='btn btn-warning' role='button' to={'/login'}>
                  Login
                </Link>

                <Link
                  className='btn btn-primary ms-2'
                  role='button'
                  to={'/register'}
                >
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
