import { MapPin } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import coverageData from "../../data/coverageData";

export default function CoverageAreaSection() {
  return (
    <section id="coverage" className="section-space bg-white">
      <Container>
        <SectionHeading
          label="Coverage Area"
          title="Serving major locations across Delhi NCR"
          description="Same-day bookings are available in most locations, based on slot and therapist availability."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {coverageData.map((city) => (
            <div key={city} className="card-base flex items-center gap-3 px-5 py-4 text-sm font-semibold text-secondary">
              <MapPin size={18} className="text-secondary" />
              {city}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
