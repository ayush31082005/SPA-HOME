export default function InputField({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-secondary">{label}</span>
      <input className="input-base" {...props} />
    </label>
  );
}
