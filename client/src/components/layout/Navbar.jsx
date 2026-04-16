import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import navLinks from "../../data/navLinks";
import scrollToSection from "../../utils/scrollToSection";
import MobileMenu from "./MobileMenu";
import PrimaryButton from "../common/PrimaryButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (href) => {
    const id = href.replace("#", "");
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 50);
      return;
    }
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-white/95 backdrop-blur-lg">
      <div className="container-padded flex h-16 sm:h-20 items-center justify-between gap-3">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img
            src="/logo.jpeg"
            alt="Velora Spa"
            className="h-10 sm:h-12 w-auto object-contain"
          />

          {/* <div>
            <h1 className="text-base sm:text-lg font-bold text-secondary">
              Velora Spa
            </h1>
            <p className="text-[10px] sm:text-xs text-muted">
              Luxury wellness at your doorstep
            </p>
          </div> */}
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => goToSection(item.href)}
              className="text-sm font-medium text-secondary transition hover:text-accentPink"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* BUTTON */}
        <div className="hidden lg:block">
          <PrimaryButton onClick={() => goToSection("#booking")}>
            Book Appointment
          </PrimaryButton>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/15 text-secondary lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        onNavigate={goToSection}
      />
    </header>
  );
}