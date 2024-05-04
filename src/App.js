import React from 'react';
import LandingPage from './pages/landing/LandingPage';
import Details from './pages/details/Details';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
