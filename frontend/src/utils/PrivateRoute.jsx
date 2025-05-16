// src/utils/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // or use your auth context if you have one
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
