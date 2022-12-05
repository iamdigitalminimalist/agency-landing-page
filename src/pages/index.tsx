import { Header } from "../components/Header";
import { BenefitsSection } from "../components/BenefitsSection";
import { benefits, features, testimonials } from "../data";
import { FeaturesSection } from "../components/FeaturesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <BenefitsSection benefits={benefits} />
        <FeaturesSection features={features} />
        <TestimonialsSection testimonials={testimonials} />
      </main>
    </div>
  );
}
