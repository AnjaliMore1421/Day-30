export default function Medications() {
  const medicines = [
    { name: "Paracetamol", patient: "Rohit Patil", dose: "500mg", time: "Morning" },
    { name: "Insulin", patient: "Priya Deshmukh", dose: "10 units", time: "Before Meal" },
    { name: "Amoxicillin", patient: "Amit Kulkarni", dose: "250mg", time: "Evening" }
  ];

  return (
    <div>
      <h2>Medications</h2>

      <div className="card">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Medicine</th>
              <th>Patient</th>
              <th>Dosage</th>
              <th>Schedule</th>
            </tr>
          </thead>

          <tbody>
            {medicines.map((m, i) => (
              <tr key={i}>
                <td>{m.name}</td>
                <td>{m.patient}</td>
                <td>{m.dose}</td>
                <td>{m.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}