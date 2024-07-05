import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Hava Havai</h1>
      <ul>
        <li>Home</li>
        <li>Dashboard</li>
        <h3>Services</h3>
        <li>Airports</li>
        <li>Videos</li>
      </ul>
      <div className="others">
        <h3>Others</h3>
        <ul>
          <li>List 1</li>
          <li>List 2</li>
          <li>List 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
