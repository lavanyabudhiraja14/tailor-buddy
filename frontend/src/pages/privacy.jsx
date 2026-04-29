import { useState } from "react";
import "./privacy.css";

export default function Privacy() {
  const [twoFA, setTwoFA] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);
  const [dataShare, setDataShare] = useState(false);
  const [measureStore, setMeasureStore] = useState(true);

  return (
    <div className="privacy-container">

      {/* CHANGE PASSWORD */}
      <div className="card">
        <h3>Change Password</h3>

        <input placeholder="Enter Current Password" />
        <input placeholder="Enter New Password" />
        <input placeholder="Confirm new password" />

        <p className="error">Password must be 8 characters long</p>

        <button className="primary-btn">Save changes</button>
      </div>

      {/* 2FA + EMAIL */}
      <div className="card">
        <h3>Two Factor Authentication</h3>

        <label>
          <input
            type="checkbox"
            checked={twoFA}
            onChange={() => setTwoFA(!twoFA)}
          />
          Enable extra verification
        </label>

        <h4>Email & Phone</h4>

        <div className="info-row">
          <span>anyname@gmail.com</span>
          <button>Change</button>
        </div>

        <div className="info-row">
          <span>7845XXXXX</span>
          <button>Change</button>
        </div>
      </div>

      {/* PRIVACY SETTINGS */}
      <div className="card">
        <h3>Privacy Preferences</h3>

        <label>
          <input
            type="checkbox"
            checked={emailNotif}
            onChange={() => setEmailNotif(!emailNotif)}
          />
          Receive emails and promotional calls
        </label>

        <label>
          <input
            type="checkbox"
            checked={dataShare}
            onChange={() => setDataShare(!dataShare)}
          />
          Share data for personalised recommendations
        </label>

        <label>
          <input
            type="checkbox"
            checked={measureStore}
            onChange={() => setMeasureStore(!measureStore)}
          />
          Allow product measurement storage
        </label>
      </div>

      {/* DEVICES + DELETE */}
      <div className="card">
        <h3>All Devices</h3>

        <p>Macbook Air</p>
        <p>Iphone XS</p>

        <button className="secondary-btn">
          Logout from all devices
        </button>

        <button className="danger-btn">
          Delete Account
        </button>
      </div>

    </div>
  );
}