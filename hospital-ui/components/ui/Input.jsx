export default function Input({ value, onChange, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "var(--radius)"
      }}
    />
  );
}
