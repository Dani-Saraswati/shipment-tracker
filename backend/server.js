const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

// Temporary in-memory store (replace with DB for production)
let trackingData = {};

// Webhook listener endpoint
app.post('/webhooks/shiplee', (req, res) => {
  const update = req.body;
  console.log('Received webhook:', update);

  const { trackingNumber, status } = update;
  if (!trackingNumber) return res.status(400).send('No tracking number');

  trackingData[trackingNumber] = trackingData[trackingNumber] || [];
  trackingData[trackingNumber].push({ status, time: new Date().toISOString() });

  res.status(200).send('Webhook received');
});

// Get tracking info API
app.get('/api/track/:trackingNumber', (req, res) => {
  const trackingNumber = req.params.trackingNumber;
  const data = trackingData[trackingNumber];
  if (!data) return res.status(404).send('Tracking number not found');
  res.json({ trackingNumber, updates: data });
});

// Mock login API (for testing only)
app.post('/api/login', (req, res) => {
  // Mock token and user data
  res.json({
    token: 'mocked-token-123456',
    user: { email: req.body.email, name: 'Test User' },
  });
});

// Mock book-shipment API (for testing only)
app.post('/api/book-shipment', (req, res) => {
  console.log('Mock booking request received:', req.body);

  res.json({
    message: 'Booking successful (mock)',
    awb_number: 'MOCKAWB123456789',
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
