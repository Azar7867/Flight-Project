import React from 'react';
import './Ticket.css'; // We'll add styles in a moment

const Ticket = () => {
  const flights = [
    {
      airline: "Garuda INA",
      departure: "4:35 PM",
      arrival: "1:25 PM",
      price: "€678",
      aircraft: "Boeing 737",
      flightNumber: "SN 44029",
      ref: "KO-REF"
    },
    {
      airline: "Virgin Atlantic",
      departure: "10:05 AM",
      arrival: "12:45 PM+1",
      price: "€720",
      aircraft: "Boeing 777",
      flightNumber: "SN 08383",
      ref: "JK-AAB"
    }
  ];

  return (
    <div className="ticket-page">
      <h2>Flight Results</h2>
      <div className="ticket-container">
        {flights.map((flight, index) => (
          <div className="ticket-card" key={index}>
            <h3>{flight.airline}</h3>
            <p><strong>Departure:</strong> {flight.departure}</p>
            <p><strong>Arrival:</strong> {flight.arrival}</p>
            <p><strong>Price:</strong> {flight.price}</p>
            <p><strong>Aircraft:</strong> {flight.aircraft}</p>
            <p><strong>Flight No:</strong> {flight.flightNumber}</p>
            <p><strong>Ref:</strong> {flight.ref}</p>
            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticket;
