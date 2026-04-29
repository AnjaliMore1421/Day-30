export default function Header({ onLogout }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1>Hospital Dashboard</h1>
      <button
        onClick={onLogout}
        style={{
          background: "#ef4444",
          color: "white",
          padding: "8px 12px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </div>
  );
}