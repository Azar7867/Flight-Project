import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Setting.css';

const Settings = () => {
  return (
    <div className="container py-5 settings-page animate__animated animate__fadeIn">
      <div className="text-center mb-5">
        <h2 className="text-primary display-5 fw-bold">Settings</h2>
        <p className="text-muted">Customize your flight booking preferences</p>
      </div>
      <form className="bg-white p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Preferred Language</label>
          <select className="form-select">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Currency</label>
          <select className="form-select">
            <option>USD - US Dollar</option>
            <option>EUR - Euro</option>
            <option>INR - Indian Rupee</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Time Format</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="timeFormat" id="12hr" defaultChecked />
            <label className="form-check-label" htmlFor="12hr">12-hour</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="timeFormat" id="24hr" />
            <label className="form-check-label" htmlFor="24hr">24-hour</label>
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label">Notifications</label>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="emailNotify" defaultChecked />
            <label className="form-check-label" htmlFor="emailNotify">Email Alerts</label>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="smsNotify" />
            <label className="form-check-label" htmlFor="smsNotify">SMS Alerts</label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
