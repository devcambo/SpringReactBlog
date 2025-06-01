import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PostProvider } from './context/post/PostContext';
import { CommentProvider } from './context/comment/CommentContext';
import AppRoutes from './routes';
import { AuthProvider } from './context/auth/AuthContext';
import { UserProvider } from './context/user/UserContext';

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <PostProvider>
          <CommentProvider>
            <AppRoutes />
            <ToastContainer />
          </CommentProvider>
        </PostProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
