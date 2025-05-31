import React, { useContext, useEffect } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';

export default function ProtectedRoute() {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    const skipRedirect = sessionStorage.getItem('skipRedirectPath') === 'true';
    if (!isAuthenticated && location.pathname !== '/login' && !skipRedirect) {
      sessionStorage.setItem('redirectPath', location.pathname);
    }
  }, [isAuthenticated, location.pathname]);

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}
