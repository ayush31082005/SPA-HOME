export default function TextAreaField({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-secondary">{label}</span>
      <textarea className="input-base min-h-32 resize-none" {...props} />
    </label>
  );
}
