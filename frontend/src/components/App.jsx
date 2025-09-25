import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginForm from './LoginForm';
import Orders from './Orders';
import TrackOrder from './TrackOrder';
import BookShipment from './BookShipment';

function App() {
  const [token, setToken] = useState(null);

  if (!token) {
    // Show login form if not authenticated
    return <LoginForm onLoginSuccess={setToken} />;
  }

  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/book-shipment" element={<BookShipment token={token} />} />
          <Route path="/track/:trackingNumber" element={<TrackOrder />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
