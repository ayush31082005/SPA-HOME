import { useEffect, useRef } from "react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "../common/ServiceCard";
import servicesData from "../../data/servicesData";
import SectionLabel from "../common/SectionLabel";

function AutoSlidingRow({ services, variant }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return undefined;

    const intervalId = window.setInterval(() => {
      const firstCard = slider.querySelector("[data-service-slide]");

      if (!firstCard) return;

      const cardWidth = firstCard.getBoundingClientRect().width;
      const styles = window.getComputedStyle(slider);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");
      const nextPosition = slider.scrollLeft + cardWidth + gap;
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

      if (nextPosition >= maxScrollLeft - 4) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      slider.scrollTo({ left: nextPosition, behavior: "smooth" });
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div
      ref={sliderRef}
      className="mt-3 flex gap-4 overflow-x-auto scroll-smooth pb-3 scrollbar-hide snap-x snap-mandatory"
    >
      {services.map((service) => (
        <div
          key={service.title}
          data-service-slide
          className="w-[270px] sm:w-[300px] lg:w-[320px] flex-shrink-0 snap-start"
        >
          <ServiceCard {...service} variant={variant} />
        </div>
      ))}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-space overflow-hidden">
      <Container>
        <SectionHeading
          label="Services & Pricing"
          title="Choose a spa experience that fits your mood"
          description="From relaxing massages to full luxury spa packages, every session is crafted to feel calm, safe, and professionally delivered."
        />

        <SectionLabel>Massage Services</SectionLabel>
        <AutoSlidingRow services={servicesData.massageServices} />

        <div className="mt-8">
          <SectionLabel>Spa & Combo Packages</SectionLabel>
          <AutoSlidingRow
            services={servicesData.comboPackages}
            variant="highlight"
          />
        </div>

        <div className="card-base mt-8 p-5 sm:p-6">
          <h3 className="text-2xl font-semibold text-secondary">
            Service Details
          </h3>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {servicesData.serviceDetails.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-secondary/10 bg-[#fff1f4] px-5 py-4 text-sm font-medium text-secondary"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
