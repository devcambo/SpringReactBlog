import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PostProvider } from './context/post/PostContext';
import { CommentProvider } from './context/comment/CommentContext';
import AppRoutes from './routes';

const App = () => {
  return (
    <PostProvider>
      <CommentProvider>
        <AppRoutes />
        <ToastContainer />
      </CommentProvider>
    </PostProvider>
  );
};

export default App;
