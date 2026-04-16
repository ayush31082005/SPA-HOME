import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import footerData from "../../data/footerData";
import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-white py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-secondary">Spa Home</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-text">
              Premium home and hotel spa services for women across Delhi NCR with safety, comfort, and professionalism at the center of every session.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-accentPink">Quick Links</h4>
            <div className="mt-4 flex flex-col gap-3">
              {footerData.quickLinks.map((link) => (
                <Link key={link.label} to={link.to} className="text-sm text-muted transition hover:text-accentPink">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-accentPink">Contact</h4>
            <div className="mt-4 space-y-3 text-sm text-text">
              <p className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 text-secondary" />Delhi NCR, India</p>
              <p className="flex items-start gap-3"><Phone size={18} className="mt-0.5 text-secondary" />+91 83840 73716</p>
              {/* <p className="flex items-start gap-3"><Mail size={18} className="mt-0.5 text-secondary" />pkspsh1ps@gmail.com</p> */}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary/10 pt-6 text-sm text-muted">
          © 2026 Velora Spa. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
