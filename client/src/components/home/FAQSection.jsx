import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import FAQItem from "../common/FAQItem";
import faqData from "../../data/faqData";

export default function FAQSection() {
  return (
    <section id="faq" className="section-space bg-white">
      <Container>
        <SectionHeading
          label="FAQ"
          title="Common questions before booking"
          description="Everything you may want to know before scheduling your spa session."
        />

        <div className="mx-auto grid max-w-4xl gap-4">
          {faqData.map((item) => (
            <FAQItem key={item.question} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
