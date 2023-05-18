import React, { useEffect, useState } from'react';
import { Route, useNavigate, Routes } from'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

const PrivateRoutes = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [loginUser, { error }] = useMutation(LOGIN_USER);

  useEffect(() => {
    const authCheck = async () => {
      try {
        // Check if the user is authenticated
        const isAuthenticated = /* Your authentication check logic */

        if (isAuthenticated) {
          setLoading(false);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Authentication check error:', error);
        navigate('/login');
      }
    };

    authCheck();
  }, []);

  return loading ? <LoadingComponent /> : <Route {...props} />;
};

export default PrivateRoutes;
