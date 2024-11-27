import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import Sidebar from './components/Sidebar';
import StyleSwitcher from './components/StyleSwitcher';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <header className="App-header">
            <h1>RBAC Management Dashboard</h1>
          </header>
          <StyleSwitcher />
          <Routes>
            <Route path="/users" element={<UserManagement />} />
            <Route path="/roles" element={<RoleManagement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
