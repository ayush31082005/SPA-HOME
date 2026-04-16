import Container from "../common/Container";
import PrimaryButton from "../common/PrimaryButton";
import scrollToSection from "../../utils/scrollToSection";

export default function OfferSection() {
  return (
    <section className="section-space">
      <Container>
        <div className="card-base overflow-hidden bg-cta-gradient p-8 text-white sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">First Booking Offer</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Flat Rs. 200 OFF on your first booking</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                Limited slots available today. Book your premium spa session now and enjoy a refreshing experience at a special introductory price.
              </p>
            </div>

            <div>
              <PrimaryButton
                onClick={() => scrollToSection("booking")}
                className="min-w-[170px] border border-white/60 !bg-white !px-7 !py-3.5 !text-secondary shadow-[0_14px_30px_rgba(0,0,0,0.14)] hover:!bg-[#fff5f7] hover:!opacity-100"
              >
                Claim Offer
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
