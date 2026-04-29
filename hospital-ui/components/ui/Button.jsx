
export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary"
}) {
  const styles = {
    primary: {
      background: "var(--secondary)",
      color: "#000"
    },
    danger: {
      background: "#ef4444",
      color: "#fff"
    },
    outline: {
      background: "transparent",
      border: "1px solid #ccc",
      color: "#333"
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "8px 12px",
        borderRadius: "var(--radius)",
        border: "none",
        cursor: "pointer",
        fontWeight: "600",
        ...styles[variant]
      }}
    >
      {children}
    </button>
  );
}
