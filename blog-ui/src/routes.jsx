import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import PostDetailPage from './pages/PostDetailPage';
import RegisterPage from './pages/RegisterPage';
import UserProfilePage from './pages/UserProfilePage';
import DashboardPage from './pages/DashboardPage';
import DashBoardLayout from './layouts/DashBoardLayout';
import ProtectedRoute from './components/ProtectedRoute';
import ManageUserPage from './pages/ManageUserPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* MainLayout */}
        <Route element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/posts/:postId' element={<PostDetailPage />} />
          <Route path='/profile/:username' element={<UserProfilePage />} />
          {/* 404 */}
          <Route path='*' element={<NotFoundPage />} />
        </Route>

        {/* Dashboard Layout */}
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<DashBoardLayout />}>
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/dashboard/users' element={<ManageUserPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
