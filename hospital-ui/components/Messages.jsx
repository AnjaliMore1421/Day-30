import { useState } from "react";

export default function Messages() {
  const [messages] = useState([
    { id: 1, sender: "Dr. Rajesh Mehta", msg: "Patient in ICU is stable.", time: "10:30 AM" },
    { id: 2, sender: "Lab Dept", msg: "Blood reports uploaded.", time: "09:15 AM" },
    { id: 3, sender: "Reception", msg: "New patient admitted.", time: "Yesterday" }
  ]);

  return (
    <div>
      <h2>Messages</h2>

      <div className="card">
        {messages.map((m) => (
          <div key={m.id} className="message-item">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>{m.sender}</strong>
              <span style={{ fontSize: "12px", color: "#64748b" }}>{m.time}</span>
            </div>
            <p>{m.msg}</p>
          </div>
        ))}
      </div>
    </div>
  );
}