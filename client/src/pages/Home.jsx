import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import SafetyTrustSection from "../components/home/SafetyTrustSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CoverageAreaSection from "../components/home/CoverageAreaSection";
import BookingFormSection from "../components/home/BookingFormSection";
import OfferSection from "../components/home/OfferSection";
import FAQSection from "../components/home/FAQSection";
import FinalCTASection from "../components/home/FinalCTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <SafetyTrustSection />
      <TestimonialsSection />
      <CoverageAreaSection />
      <BookingFormSection />
      <OfferSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
