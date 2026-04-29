import { useEffect, useState } from "react";
import gsap from "gsap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Dashboard() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("patients") || "[]");
    setPatients(saved);

    gsap.fromTo(
      ".card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
    );
  }, []);

  // 📊 Chart Data (like image)
  const data = [
    { month: "Jan", recovered: 180, death: 150 },
    { month: "Feb", recovered: 160, death: 140 },
    { month: "Mar", recovered: 200, death: 120 },
    { month: "Apr", recovered: 190, death: 100 },
    { month: "May", recovered: 140, death: 130 },
    { month: "Jun", recovered: 150, death: 140 },
    { month: "Jul", recovered: 170, death: 110 },
    { month: "Aug", recovered: 180, death: 120 },
    { month: "Sep", recovered: 160, death: 140 },
    { month: "Oct", recovered: 140, death: 150 },
    { month: "Nov", recovered: 120, death: 130 },
    { month: "Dec", recovered: 160, death: 110 }
  ];

  return (
    <div>
      {/* 🔹 TOP CARDS */}
      <div className="top-cards">
        <div className="card stat">
          <h2>{patients.length}</h2>
          <p>New Patients</p>
        </div>

        <div className="card stat">
          <h2>23</h2>
          <p>Our Doctors</p>
        </div>

        <div className="card stat">
          <h2>14</h2>
          <p>Operation</p>
        </div>

        <div className="card stat">
          <h2>₹5,72,800</h2>
          <p>Income</p>
        </div>
      </div>

      {/* 🔹 MIDDLE */}
      <div className="middle">
        {/* 📊 CHART */}
        <div className="card chart">
          <h3>Patient Status</h3>

          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              {/* Blue line */}
              <Line
                type="monotone"
                dataKey="recovered"
                stroke="#2563eb"
                strokeWidth={3}
              />

              {/* Light blue line */}
              <Line
                type="monotone"
                dataKey="death"
                stroke="#38bdf8"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 👨‍⚕️ BEST DOCTOR */}
        <div className="card doctor-card">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="doctor"
          />

          <h3>Dr. Rajesh Mehta</h3>
          <p>Cardiologist - Apollo Hospital</p>

          <div className="doc-stats">
            <div>
              <strong>12 Years</strong>
              <p>Experience</p>
            </div>

            <div>
              <strong>2,598</strong>
              <p>Patients</p>
            </div>

            <div>
              <strong>1,537</strong>
              <p>Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 BOTTOM */}
      <div className="bottom">
        {/* Appointment */}
        <div className="card list">
          <h3>Appointment Request</h3>

          <ul>
            <li>Rohit Sharma - Fever</li>
            <li>Priya Patil - Diabetes</li>
            <li>Amit Kulkarni - Cancer</li>
            <li>Neha Joshi - Thyroid</li>
          </ul>
        </div>

        {/* Patients */}
        <div className="card list">
          <h3>Recent Patients</h3>

          <ul>
            {patients.slice(-5).map((p) => (
              <li key={p.id}>
                {p.name} - {p.age} yrs
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
