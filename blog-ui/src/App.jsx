import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainNavbar from './components/MainNavbar';
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import PostDetailPage from './pages/PostDetailPage';
import RegisterPage from './pages/RegisterPage';
import UserProfilePage from './pages/UserProfilePage';
import { PostProvider } from './context/post/PostContext';
import { CommentProvider } from './context/comment/CommentContext';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  return (
    <PostProvider>
      <CommentProvider>
        <Router>
          <MainNavbar />
          <Container className='mt-4'>
            <Routes>
              {/* Public routes */}
              <Route path='/' element={<Homepage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/posts/:postId' element={<PostDetailPage />} />
              <Route path='/profile/:username' element={<UserProfilePage />} />

              {/* Private routes */}
              <Route path='/dashboard' element={<DashboardPage />} />

              {/* Catch-all route for 404 Not Found */}
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </Container>
          <ToastContainer />
        </Router>
      </CommentProvider>
    </PostProvider>
  );
};

export default App;
