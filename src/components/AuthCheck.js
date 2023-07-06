import React from 'react';
import { Route, Switch, useNavigate } from 'react-router-dom';
import Dashboard from './dashboard';


// This piece of code isn't used yet.

function PrivateRoute({ element: Dashboard, ...rest }) {

  const userToken = localStorage.getItem('access_token');
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!userToken) {
      navigate('/login');
    } 
return <Dashboard />;

  }, []);

//   if (userToken) {
//   }
  
//   <Dashboard />;
  
}

export default PrivateRoute;
