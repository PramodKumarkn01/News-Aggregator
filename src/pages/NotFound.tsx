import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6">The page you are looking for doesn’t exist.</p>
      <Link to="/" className="text-blue-500 underline">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
