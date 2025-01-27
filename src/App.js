import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import AuthGuard from './pages/AuthGuard'; // Import AuthGuard
import Upload from './pages/Upload';
import ViewSchedule from './pages/ViewSchedule';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/upload" element={<AuthGuard><Upload /></AuthGuard>} />
          <Route path="/viewschedule" element={<AuthGuard><ViewSchedule /></AuthGuard>} />
          {/* Protect the Dashboard route with AuthGuard */}
          <Route 
            path="/dashboard" 
            element={
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            } 
          />
          <Route path="*" element={<Navigate to="/viewschedule" />} /> {/* Redirect unknown routes */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
