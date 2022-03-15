import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Users from '../pages/Users';
import './index.css';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
