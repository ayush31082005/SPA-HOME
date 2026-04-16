import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-base overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-secondary sm:text-base">{question}</span>
        <ChevronDown size={18} className={`shrink-0 text-accentPink transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? <div className="border-t border-primary/10 px-5 py-4 text-sm leading-7 text-text">{answer}</div> : null}
    </div>
  );
}
