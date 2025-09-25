import React from 'react';
import { Link } from 'react-router-dom';

// Sample order data - replace with dynamic data as needed
const orders = [
  { id: 1, title: 'Phone X', trackingNumber: '123456' },
  { id: 2, title: 'Laptop Pro', trackingNumber: '654321' },
];

const Orders = () => (
  <div className="max-w-3xl mx-auto p-8 bg-gray-100 min-h-screen rounded-lg shadow-lg">
    <h1 className="text-4xl font-extrabold mb-8 text-gray-800 flex justify-between items-center">
      My Orders
      <Link
        to="/book-shipment"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Book Shipment
      </Link>
    </h1>
    <ul>
      {orders.map((order) => (
        <li
          key={order.id}
          className="bg-white p-6 mb-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">{order.title}</span>
            <Link
              to={`/track/${order.trackingNumber}`}
              className="text-teal-600 font-semibold hover:text-teal-800"
            >
              Track Order
            </Link>
          </div>
          <div className="text-gray-500 mt-2">Tracking Number: {order.trackingNumber}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default Orders;
