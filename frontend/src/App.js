import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

import ClientDashboard from "./pages/Dashboard/ClientDashboard/ClientDashboard";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<ClientDashboard />} />
        </Routes>
      </Router>
  );
};

export default App;
