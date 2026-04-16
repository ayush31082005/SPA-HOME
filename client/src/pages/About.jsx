import Container from "../components/common/Container";

export default function About() {
  return (
    <section className="section-space">
      <Container>
        <div className="card-base p-8 sm:p-10">
          <h1 className="text-3xl font-bold text-heading sm:text-4xl">About Us</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-text">
            Velora Spa offers premium home and hotel spa services for women across Delhi NCR. Our mission is to make relaxation convenient, professional, and safe through verified therapists, premium materials, and a smooth doorstep service experience.
          </p>
        </div>
      </Container>
    </section>
  );
}
