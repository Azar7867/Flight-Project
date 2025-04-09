import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Schedule.css';

const Schedule = () => {
  const schedules = [
    {
      airline: "Garuda INA",
      date: "2025-04-15",
      departure: "4:35 PM",
      arrival: "1:25 PM",
      route: "Jakarta (CGK) → Singapore (SIN)",
      terminal: "T1",
      status: "On Time"
    },
    {
      airline: "Virgin Atlantic",
      date: "2025-04-15",
      departure: "10:05 AM",
      arrival: "12:45 PM+1",
      route: "London (LHR) → New York (JFK)",
      terminal: "T3",
      status: "Delayed"
    },
    {
      airline: "Air India",
      date: "2025-04-16",
      departure: "6:00 AM",
      arrival: "9:00 AM",
      route: "Delhi (DEL) → Mumbai (BOM)",
      terminal: "T2",
      status: "On Time"
    },
    {
      airline: "IndiGo",
      date: "2025-04-16",
      departure: "2:15 PM",
      arrival: "4:45 PM",
      route: "Chennai (MAA) → Bengaluru (BLR)",
      terminal: "T1",
      status: "Scheduled"
    },
    {
      airline: "Qatar Airways",
      date: "2025-04-17",
      departure: "11:30 PM",
      arrival: "7:20 AM+1",
      route: "Doha (DOH) → Frankfurt (FRA)",
      terminal: "T4",
      status: "Scheduled"
    },
    {
      airline: "Emirates",
      date: "2025-04-17",
      departure: "8:45 AM",
      arrival: "2:15 PM",
      route: "Dubai (DXB) → Zurich (ZRH)",
      terminal: "T3",
      status: "On Time"
    },
    {
      airline: "Lufthansa",
      date: "2025-04-18",
      departure: "1:30 PM",
      arrival: "5:50 PM",
      route: "Munich (MUC) → Rome (FCO)",
      terminal: "T2",
      status: "Scheduled"
    },
    {
      airline: "Singapore Airlines",
      date: "2025-04-18",
      departure: "9:20 AM",
      arrival: "11:40 AM",
      route: "Singapore (SIN) → Kuala Lumpur (KUL)",
      terminal: "T1",
      status: "Delayed"
    }
  ];

  return (
    <div className="container py-5 schedule-page bg-light">
      <div className="text-center mb-5">
        <h2 className="display-5 text-primary fw-bold">Flight Schedules</h2>
        <p className="text-muted">Check the latest flight timings and status</p>
      </div>
      <div className="table-responsive rounded-4 overflow-hidden">
        <table className="table table-bordered table-hover align-middle shadow-sm">
          <thead className="table-primary">
            <tr className="text-center">
              <th>Airline</th>
              <th>Date</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>Route</th>
              <th>Terminal</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((flight, index) => (
              <tr key={index} className="text-center">
                <td>{flight.airline}</td>
                <td>{flight.date}</td>
                <td>{flight.departure}</td>
                <td>{flight.arrival}</td>
                <td>{flight.route}</td>
                <td>{flight.terminal}</td>
                <td>
                  <span className={`badge rounded-pill px-3 py-2 ${
                    flight.status === 'Delayed' ? 'bg-danger' :
                    flight.status === 'On Time' ? 'bg-success' :
                    'bg-warning text-dark'
                  }`}>
                    {flight.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
