import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import MainContent from './components/MainContent';
import NewPage from './components/NewPage';
import ConnectingAgent from './components/ConnectingAgent'; // Import the new component

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="content">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<HomePage />} /> {/* Home Page */}
            <Route path="/telephony" element={<MainContent />} /> {/* Telephony */}
            <Route path="/create-agent" element={<NewPage />} /> {/* Create Your Own Page */}
            <Route path="/connecting-agent" element={<ConnectingAgent />} /> {/* Connecting Your Agent */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
