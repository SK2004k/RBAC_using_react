import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><Link to="/users">User Management</Link></li>
        <li><Link to="/roles">Role Management</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}