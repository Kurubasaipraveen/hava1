import React from 'react';

import Sidebar from './components/Sidebar';
import Airports from './components/Airports';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <header className="header">
        </header>
        <Airports />
      </div>
    </div>
  );
}

export default App;
