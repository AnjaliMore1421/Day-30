import { useState } from "react";

export default function Settings() {
  const [hospital, setHospital] = useState("City Care Hospital");
  const [email, setEmail] = useState("admin@hospital.com");
  const [phone, setPhone] = useState("9876543210");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div>
      <h2>Settings</h2>

      {/* 🔹 PROFILE SETTINGS */}
      <div className="card settings-card">
        <h3>🏥 Hospital Profile</h3>

        <label>Hospital Name</label>
        <input
          value={hospital}
          onChange={(e) => setHospital(e.target.value)}
        />

        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Contact Number</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      {/* 🔹 SYSTEM SETTINGS */}
      <div className="card settings-card">
        <h3>⚙️ System Preferences</h3>

        <div className="toggle-row">
          <span>Enable Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>

        <div className="toggle-row">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
      </div>

      {/* 🔹 SECURITY SETTINGS */}
      <div className="card settings-card">
        <h3>🔐 Security</h3>

        <label>Change Password</label>
        <input type="password" placeholder="New Password" />

        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Password" />
      </div>

      {/* 🔹 SAVE BUTTON */}
      <button
        className="primary"
        style={{ marginTop: "20px" }}
        onClick={handleSave}
      >
        Save All Settings
      </button>
    </div>
  );
}