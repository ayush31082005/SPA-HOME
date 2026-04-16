import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import TestimonialCard from "../common/TestimonialCard";
import testimonialsData from "../../data/testimonialsData";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-space overflow-hidden">
      <Container>
        <SectionHeading
          label="Testimonials"
          title="What our clients say"
          description="Real feedback from women who booked our home and hotel spa sessions across Delhi NCR."
        />

        {/* SCROLL CONTAINER */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-[350px]"
            >
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}