const express = require('express');
const app = express();
const port = 3000;

const flights = [
  {
    flight_id: "AI202",
    airline: "Air India",
    departure: {
      airport: "DEL",
      city: "New Delhi",
      country: "India",
      date: "2025-03-19",
      time: "06:30"
    },
    arrival: {
      airport: "BOM",
      city: "Mumbai",
      country: "India",
      date: "2025-03-19",
      time: "08:00"
    },
    status: "On Time",
    aircraft: {
      model: "Boeing 787",
      capacity: 256
    },
    cabin_class: "Economy",
    price: {
      currency: "INR",
      amount: 5000
    },
    flight_duration: "1h 30m",
    baggage_allowance: {
      carry_on: "1 bag (7 kg)",
      checked: "1 bag (20 kg)"
    }
  },
  {
    flight_id: "6E202",
    airline: "IndiGo",
    departure: {
      airport: "DEL",
      city: "New Delhi",
      country: "India",
      date: "2025-03-19",
      time: "08:30"
    },
    arrival: {
      airport: "BOM",
      city: "Mumbai",
      country: "India",
      date: "2025-03-19",
      time: "10:00"
    },
    status: "On Time",
    aircraft: {
      model: "Airbus A320",
      capacity: 180
    },
    cabin_class: "Economy",
    price: {
      currency: "INR",
      amount: 4500
    },
    flight_duration: "1h 30m",
    baggage_allowance: {
      carry_on: "1 bag (7 kg)",
      checked: "1 bag (20 kg)"
    }
  }
];

// Route to get all flights
app.get('/api/flights', (req, res) => {
  res.json(flights);
});

app.listen(port, () => {
  console.log(`Flight API running at http://localhost:${port}`);
});
