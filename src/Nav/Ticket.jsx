import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ticket.css';

const Ticket = () => {
  const flights = [
    {
      airline: "Garuda INA",
      departure: "4:35 PM",
      arrival: "1:25 PM",
      price: "€678",
      aircraft: "Boeing 737",
      flightNumber: "SN 44029",
      ref: "KO-REF",
      gate: "A12",
      duration: "6h 50m",
      stops: "Non-stop"
    },
    {
      airline: "Virgin Atlantic",
      departure: "10:05 AM",
      arrival: "12:45 PM+1",
      price: "€720",
      aircraft: "Boeing 777",
      flightNumber: "SN 08383",
      ref: "JK-AAB",
      gate: "B7",
      duration: "8h 10m",
      stops: "1 Stop"
    },
    {
      airline: "Air India",
      departure: "6:00 AM",
      arrival: "9:00 AM",
      price: "€540",
      aircraft: "Airbus A320",
      flightNumber: "AI 2023",
      ref: "AI-REF",
      gate: "C3",
      duration: "3h 0m",
      stops: "Non-stop"
    },
    {
      airline: "IndiGo",
      departure: "2:15 PM",
      arrival: "4:45 PM",
      price: "€480",
      aircraft: "Airbus A321",
      flightNumber: "6E 7851",
      ref: "IG-4512",
      gate: "D5",
      duration: "2h 30m",
      stops: "Non-stop"
    },
    {
      airline: "Qatar Airways",
      departure: "11:30 PM",
      arrival: "7:20 AM+1",
      price: "€890",
      aircraft: "Boeing 787",
      flightNumber: "QR 744",
      ref: "QA-9823",
      gate: "E9",
      duration: "7h 50m",
      stops: "1 Stop"
    }
  ];

  return (
    <div className="container py-5 ticket-page">
      <h2 className="text-center mb-5">Available Flight Tickets</h2>
      <div className="row">
        {flights.map((flight, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card ticket-card shadow-lg">
              <div className="card-body">
                <h4 className="card-title text-primary">{flight.airline}</h4>
                <p className="card-text mb-1"><strong>Flight No:</strong> {flight.flightNumber}</p>
                <p className="card-text mb-1"><strong>Departure:</strong> {flight.departure} <span className="mx-2">|</span> <strong>Arrival:</strong> {flight.arrival}</p>
                <p className="card-text mb-1"><strong>Duration:</strong> {flight.duration} <span className="mx-2">|</span> <strong>Stops:</strong> {flight.stops}</p>
                <p className="card-text mb-1"><strong>Gate:</strong> {flight.gate} <span className="mx-2">|</span> <strong>Aircraft:</strong> {flight.aircraft}</p>
                <p className="card-text text-success h5"><strong>Price:</strong> {flight.price}</p>
                <p className="card-text"><strong>Reference:</strong> {flight.ref}</p>
                <button className="btn btn-outline-primary w-100 mt-3">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticket;
