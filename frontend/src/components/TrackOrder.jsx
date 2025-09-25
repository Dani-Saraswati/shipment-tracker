import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TrackOrder = () => {
  const { trackingNumber } = useParams();
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/track/${trackingNumber}`)
      .then((res) => {
        setUpdates(res.data.updates);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [trackingNumber]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-lg text-gray-700">Loading shipment status...</p>
    </div>
  );

  if (updates.length === 0) return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-lg text-red-600">No tracking info found.</p>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-50 min-h-screen rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-700">Tracking Number: {trackingNumber}</h2>
      <ul className="space-y-4">
        {updates.map((update, index) => (
          <li key={index} className="border-l-4 pl-4 border-teal-500 bg-white p-4 rounded shadow-md">
            <p className="font-semibold text-teal-600">{update.status}</p>
            <p className="text-sm text-gray-500">
              {new Date(update.time).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackOrder;
