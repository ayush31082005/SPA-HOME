import { PhoneCall, MessageCircle, FileText } from "lucide-react";
import Container from "../common/Container";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";
import scrollToSection from "../../utils/scrollToSection";
import { PHONE_NUMBER, WHATSAPP_LINK } from "../../utils/constants";

export default function FinalCTASection() {
  const callLink = `tel:${PHONE_NUMBER.replace(/\s+/g, "")}`;

  return (
    <section className="section-space">
      <Container>
        <div className="card-base p-6 sm:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="soft-chip">Ready to Relax?</span>
            <h2 className="mt-5 text-2xl sm:text-4xl font-bold text-heading">Book your spa session today</h2>
            <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-text">
              Choose the booking option that works best for you and enjoy premium relaxation at home or at your hotel.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <PrimaryButton onClick={() => scrollToSection("booking")} className="w-full sm:w-auto">
                <span className="inline-flex items-center justify-center gap-2"><FileText size={18} />Fill Form</span>
              </PrimaryButton>
              {/* <SecondaryButton onClick={() => window.location.href = callLink} className="w-full sm:w-auto">
                <span className="inline-flex items-center justify-center gap-2"><PhoneCall size={18} />Call Now</span>
              </SecondaryButton> */}
              <SecondaryButton onClick={() => window.open(WHATSAPP_LINK, "_blank")} className="w-full sm:w-auto">
                <span className="inline-flex items-center justify-center gap-2"><MessageCircle size={18} />WhatsApp Booking</span>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
