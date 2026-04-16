import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingWhatsAppButton from "../components/layout/FloatingWhatsAppButton";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
