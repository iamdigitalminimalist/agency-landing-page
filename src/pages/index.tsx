import { Header } from "../components/Header";
import { BenefitsSection } from "../components/BenefitsSection";
import { benefits } from "../data/benefits";

export default function Home() {
  return (
    <div>
      <Header />
      {benefits.map((benefit) => (
        <BenefitsSection
          key={benefit.id}
          id={benefit.id}
          imgSrc={benefit.imgSrc}
          imgAlt={benefit.imgAlt}
          title={benefit.title}
          content={benefit.content}
        />
      ))}
    </div>
  );
}
