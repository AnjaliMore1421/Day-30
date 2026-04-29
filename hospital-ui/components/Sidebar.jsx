export default function Sidebar({ page, setPage }) {
  const menu = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "doctors", label: "Doctors", icon: "👨‍⚕️" },
    { id: "patients", label: "Patients", icon: "🧑" },
    { id: "messages", label: "Messages", icon: "💬" },
    { id: "medications", label: "Medications", icon: "💊" },
    { id: "documents", label: "Documents", icon: "📄" },
    { id: "settings", label: "Settings", icon: "⚙️" }
  ];

  return (
    <nav className="sidebar">
      <h2>🏥 MediCare</h2>

      <ul>
        {menu.map((item) => (
          <li
            key={item.id}
            className={page === item.id ? "active" : ""}
            onClick={() => setPage(item.id)}
          >
            <span className="icon">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}