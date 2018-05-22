import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1>404! Page Not Found!</h1>
    <h3>Return to <Link to="/">Dashboard</Link></h3>
  </div>
);

export default NotFoundPage;