export default function PrimaryButton({ children, className = "", type = "button", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-primary ${className}`}
    >
      {children}
    </button>
  );
}
