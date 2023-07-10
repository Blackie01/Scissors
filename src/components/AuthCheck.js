import { useNavigate } from "react-router";
import React from "react";

const AuthCheck = (Dashboard) => {
  const navigate = useNavigate();

  return (props) => {
    const accessToken = localStorage.getItem('access_token');
    const isAuthenticated = !!accessToken;

    if (!isAuthenticated) {
      navigate('/login');
      return null;
    }

    return <Dashboard isAuthenticated={isAuthenticated} {...props} />;
  };
};

export default AuthCheck;
