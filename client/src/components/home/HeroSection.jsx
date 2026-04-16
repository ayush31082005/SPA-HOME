import { motion } from "framer-motion";
import Container from "../common/Container";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";
import TrustBadge from "../common/TrustBadge";
import heroData from "../../data/heroData";
import scrollToSection from "../../utils/scrollToSection";
import { WHATSAPP_LINK } from "../../utils/constants";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero-glow pb-10 pt-6 sm:pb-12 sm:pt-10">
      <Container>
        <div className="grid items-center gap-8 justify-center">
          <motion.div className="mx-auto max-w-4xl text-center" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="mt-5 mx-auto max-w-3xl text-3xl font-bold leading-tight text-heading sm:mt-6 sm:text-5xl lg:text-6xl">
              {heroData.title}
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-text sm:mt-5 sm:text-lg sm:leading-8">
              {heroData.description}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center">
              <PrimaryButton onClick={() => scrollToSection("booking")} className="w-full sm:w-auto">
                {heroData.primaryCta}
              </PrimaryButton>
              <SecondaryButton onClick={() => window.open(WHATSAPP_LINK, "_blank")} className="w-full sm:w-auto">
                {heroData.secondaryCta}
              </SecondaryButton>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8">
              {heroData.trustBadges.map((badge) => (
                <TrustBadge key={badge} text={badge} />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
