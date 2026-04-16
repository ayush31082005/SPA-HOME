import Container from "../components/common/Container";

export default function Contact() {
  return (
    <section className="section-space">
      <Container>
        <div className="card-base p-8 sm:p-10">
          <h1 className="text-3xl font-bold text-heading sm:text-4xl">Contact</h1>
          <div className="mt-5 space-y-4 text-base leading-8 text-text">
            <p>Email: pkspsh1ps@gmail.com</p>
            <p>Phone: +91 83840 73716</p>
            <p>Location: Delhi NCR, India</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
