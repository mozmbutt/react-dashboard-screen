import React from 'react';
import Body from './components/Body';
import Navbar from './components/Navbar';
import './App.css'
import SessionGuide from './components/SessionGuide';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <Navbar />
      {/* <Body /> */}
      {/* <SessionGuide /> */}
      <Dashboard />
    </>
  );
}

export default App;