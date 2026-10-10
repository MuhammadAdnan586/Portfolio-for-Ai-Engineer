import { certifications } from "@/data/certifications";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CertCard from "./CertCard";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Certifications"
          title="Verified learning"
          subtitle="Internship and job-simulation credentials. Use Verify to check them at the source."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.id} delay={(i % 2) * 0.08}>
              <CertCard cert={c} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}