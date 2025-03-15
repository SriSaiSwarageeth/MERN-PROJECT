import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Laptop from './Laptop';


const Master = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='laptop' element={<Laptop />} />
          
        </Route>
        <Route path='/error' element={<Error />} />
      </Routes>
    </div>
  );
};

export default Master;