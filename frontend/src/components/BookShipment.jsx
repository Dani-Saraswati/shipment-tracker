import React, { useState } from 'react';
import axios from 'axios';

const BookShipment = ({ token }) => {
  const [formData, setFormData] = useState({
    order_number: '',
    payment_type: '',
    package_weight: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/book-shipment', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('Booking successful! AWB: ' + res.data.awb_number);
    } catch (err) {
      setMessage('Booking failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 shadow rounded mt-8">
      <h2 className="text-xl font-bold mb-4">Book Shipment</h2>
      {message && <p className="mb-4">{message}</p>}
      <input
        type="text"
        name="order_number"
        placeholder="Order Number"
        className="w-full mb-3 p-2 border rounded"
        value={formData.order_number}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="payment_type"
        placeholder="Payment Type (cod, prepaid)"
        className="w-full mb-3 p-2 border rounded"
        value={formData.payment_type}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="package_weight"
        placeholder="Package Weight (g)"
        className="w-full mb-4 p-2 border rounded"
        value={formData.package_weight}
        onChange={handleChange}
      />
      <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
        Book Shipment
      </button>
    </form>
  );
};

export default BookShipment;
