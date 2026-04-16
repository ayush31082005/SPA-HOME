export default function SelectField({ label, children, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-secondary">{label}</span>
      <select className="input-base" {...props}>{children}</select>
    </label>
  );
}
