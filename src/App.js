import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import InstructionPage from './InstructionPage';
import Contact from './Contact';
import NotYet from './notyet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/testing1234" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/instructions" element={<InstructionPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<NotYet />} />
      </Routes>
    </Router>
  );
}

export default App;
