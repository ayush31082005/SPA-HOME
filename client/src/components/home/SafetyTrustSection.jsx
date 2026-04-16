import { Shield, BadgeCheck } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import safetyData from "../../data/safetyData";

export default function SafetyTrustSection() {
  return (
    <section id="safety" className="section-space bg-white">
      <Container>
        <SectionHeading
          label="Safety & Trust"
          title="Your safety is our highest priority"
          description="Every booking is supported by professional standards, verified staff, and transparent service policies."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">

          {/* LEFT SIDE */}
          <div className="card-base overflow-hidden bg-gradient-to-br from-secondary to-accentGreen p-6 sm:p-8 text-white flex flex-col">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Shield size={28} />
            </div>

            <h3 className="mt-6 text-2xl sm:text-3xl font-bold">
              Trusted by women across Delhi NCR
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-7 text-white/80">
              We focus on privacy, punctuality, hygiene, and respectful service so every client
              can relax with confidence and peace of mind.
            </p>

            {/* IMAGE ADD HERE */}
            <div className="mt-6 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
                alt="Massage Service"
                className="w-full h-48 sm:h-56 object-cover rounded-2xl hover:scale-105 transition duration-500"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="grid gap-4 sm:grid-cols-2">
            {safetyData.map((item) => (
              <div key={item} className="card-base flex items-start gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <BadgeCheck size={22} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-secondary">
                    {item}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-text">
                    Clear procedures are in place to make every booking secure and comfortable.
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
