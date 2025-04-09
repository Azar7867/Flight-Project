import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';

// Page Components
// import Home from './pages/Home';
import Ticket from './Nav/Ticket';
// import Schedule from './pages/Schedule';
// import History from './pages/History';
// import Support from './pages/Support';
// import Settings from './pages/Settings';

const App1 = () => {
  return (
    <Router>
      {/* <div className="app-container d-flex"/> */}
        <Sidebar />
        {/* <div className="main-content p-3 flex-grow-1"> */}
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/Ticket" element={<Ticket />} />
            {/* <Route path="/schedule" element={<Schedule />} />
            <Route path="/history" element={<History />} />
            <Route path="/support" element={<Support />} />
            <Route path="/settings" element={<Settings />} /> */}
          </Routes>
       
    </Router>
  );
};

export default App1;

