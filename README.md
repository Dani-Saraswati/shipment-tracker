# Shipment Tracking System

## Description
A simple shipment tracking system to receive shipment status updates via webhook and display the shipment status history on a frontend web page.

## Features
- Webhook API to post shipment status updates with tracking number
- Store and retrieve shipment status history with timestamps
- React frontend to view shipment tracking details
- Demo endpoints and sample tests included

## Prerequisites
- Node.js (version 14 or higher recommended)
- npm or yarn package manager

## Installation

1. Clone the repository:
     git clone https://github.com/your-username/shipment-tracking-system.git


2. Change directory to backend and install dependencies:
     cd shipment-tracking-system/backend
     npm install


3. Change directory to frontend and install dependencies:
     cd ../frontend
     npm install


## Running the Project

### Backend
Start backend server (default port 3001):npm run start


### Frontend
Start frontend server (default port 3000):npm run start


## Usage

Send shipment status updates via webhook, example PowerShell command:
           Invoke-RestMethod -Uri http://localhost:3001/webhooks/shiplee -Method POST -ContentType "application/json" -Body '{"trackingNumber":"123456","status":"Sample Status"}'


Open the frontend URL in browser with your tracking number:http://localhost:3000/track/123456




Replace `123456` with your shipment tracking number.

## Contributing

Feel free to fork the repo, submit issues or pull requests.

## License

Specify your project license.

---

This content gives users clear guidance on what your project does, installation, running instructions, and usage examples. I can help you generate this as a ready-to-copy markdown file if needed.


