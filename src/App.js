import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element ={<Login/>} />
      <Route path="/Register" element ={<Register/>} />
    </Routes>
    </>
  );
}

export default App;
