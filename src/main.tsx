// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PortfolioProvider } from './context/PortfolioContext';

import LoginPage from './pages/Login/LoginPage';
import ProfilePage from './pages/Profile/ProfilePage';
import EditPage from './pages/EditPage/EditPage';
import PreviewPage from './pages/preview';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PortfolioProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/edit" element={<EditPage />} />
          <Route path="/preview" element={<PreviewPage />} />
          
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
    </PortfolioProvider>
    
  </React.StrictMode>
)
