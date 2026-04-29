export default function Documents() {
  const docs = [
    {
      id: 1,
      name: "Blood Test Report",
      patient: "Rohit Patil",
      type: "Lab Report",
      doctor: "Dr. Rajesh Mehta",
      date: "12 Jan 2026"
    },
    {
      id: 2,
      name: "X-Ray Chest",
      patient: "Neha Joshi",
      type: "Radiology",
      doctor: "Dr. Anil Sharma",
      date: "10 Jan 2026"
    },
    {
      id: 3,
      name: "MRI Brain Scan",
      patient: "Amit Kulkarni",
      type: "Radiology",
      doctor: "Dr. Vivek Gupta",
      date: "08 Jan 2026"
    },
    {
      id: 4,
      name: "Prescription",
      patient: "Priya Deshmukh",
      type: "Doctor Note",
      doctor: "Dr. Sneha Patil",
      date: "07 Jan 2026"
    }
  ];

  return (
    <div>
      <h2>Documents</h2>

      <p style={{ fontSize: "12px", color: "#64748b" }}>
        * Sample data for demonstration purposes only
      </p>

      <div className="card">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Document</th>
              <th>Patient</th>
              <th>Type</th>
              <th>Doctor</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {docs.map((d) => (
              <tr key={d.id}>
                <td>📄 {d.name}</td>
                <td>{d.patient}</td>
                <td>{d.type}</td>
                <td>{d.doctor}</td>
                <td>{d.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}