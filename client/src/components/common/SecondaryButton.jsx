export default function SecondaryButton({ children, className = "", type = "button", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-secondary ${className}`}
    >
      {children}
    </button>
  );
}
