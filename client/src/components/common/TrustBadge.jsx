import { ShieldCheck } from "lucide-react";

export default function TrustBadge({ text }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-white px-4 py-2 text-sm font-medium text-secondary shadow-soft">
      <ShieldCheck size={16} className="text-secondary" />
      <span>{text}</span>
    </div>
  );
}
