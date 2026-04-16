import navLinks from "../../data/navLinks";

export default function MobileMenu({ open, onClose, onNavigate }) {
  if (!open) return null;

  return (
    <div className="border-t border-primary/10 bg-white lg:hidden">
      <div className="container-padded py-4">
        <div className="flex flex-col gap-3">
          {navLinks.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => onNavigate(item.href)}
              className="rounded-2xl border border-primary/10 px-4 py-3 text-left text-sm font-medium text-secondary"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl bg-secondary px-4 py-3 text-sm font-medium text-white"
          >
            Close Menu
          </button>
        </div>
      </div>
    </div>
  );
}
