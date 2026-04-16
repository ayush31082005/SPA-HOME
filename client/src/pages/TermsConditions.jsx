import Container from "../components/common/Container";

export default function TermsConditions() {
  return (
    <section className="section-space">
      <Container>
        <div className="card-base p-8 sm:p-10">
          <h1 className="text-3xl font-bold text-heading sm:text-4xl">Terms & Conditions</h1>
          <div className="mt-5 space-y-5 text-base leading-8 text-text">
            <p>Bookings are subject to therapist availability, service area, and confirmation by our support team.</p>
            <p>Clients are requested to provide accurate address and contact details for a smooth booking experience.</p>
            <p>We reserve the right to decline service in cases involving unsafe environments, incorrect booking details, or policy violations.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
