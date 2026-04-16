import Container from "../components/common/Container";

export default function PrivacyPolicy() {
  return (
    <section className="section-space">
      <Container>
        <div className="card-base p-8 sm:p-10">
          <h1 className="text-3xl font-bold text-heading sm:text-4xl">Privacy Policy</h1>
          <div className="mt-5 space-y-5 text-base leading-8 text-text">
            <p>We respect your privacy and only collect the information required to process bookings, provide support, and improve service quality.</p>
            <p>Your personal details are kept confidential and are never shared with third parties for unrelated marketing purposes.</p>
            <p>By using this website, you agree to the collection and use of basic booking information for service coordination.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
