import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from '../screens/auths/Login';

const routing = () => {
  return (
    <Router>
      <Routes>
              <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default routing