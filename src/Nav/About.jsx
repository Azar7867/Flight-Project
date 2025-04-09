import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">AZ Flights</a>
        </div>
      </nav>

      {/* About Section */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 animate-left">
              <img
                src="https://media.istockphoto.com/id/986387152/photo/airplane-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=BdIuuFmsPvNGvct-7X2vz1C3YkgZ3SLUDr6W3ju72xc="
                alt="Flight"
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-md-6 animate-right">
              <h2 className="mb-3">About AZ Flights</h2>
              <p className="lead">
                FlyHigh is your trusted partner in booking flight tickets with ease. Whether you're
                planning a vacation or a business trip, we make it simple and fast to find and book
                the best flights.
              </p>
              <p>
                We use real-time data from airlines to help you compare prices, routes, and travel
                times. With a user-friendly interface and secure booking system, your journey starts
                here!
              </p>
              <ul>
                <li>Search flights by destination, airline, or price</li>
                <li>Get real-time availability and offers</li>
                <li>Secure and fast booking process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3">
        <p className="mb-0">© 2025 AZ Flights. All rights reserved.</p>
      </footer>
    </>
  );
};

export default About;
