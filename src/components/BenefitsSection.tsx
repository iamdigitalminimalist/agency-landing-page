import Image from "next/image";
import Link from "next/link";
import { Benefit, BenefitsSectionProps } from "../../types";

export const BenefitsSection = (props: BenefitsSectionProps) => {
  return (
    <div>
      {props.benefits.map((benefit: Benefit) => (
        <section key={benefit.id} className="grid grid-cols-1 sm:grid-cols-2">
          <div className="w-full sm:order-last">
            <Image
              src={benefit.imgSrc}
              alt={benefit.imgAlt}
              width={700}
              height={700}
              className="w-full h-full"
            />
          </div>
          <div
            className={`flex justify-center flex-col sm:mx-8 md:mx-auto space-y-4 md:space-y-8 items-center text-center my-16 sm:my-4 sm:text-left sm:items-start ${
              benefit.id % 2 === 0 ? "order-last" : null
            }`}
          >
            <h2 className="font-serif font-bold text-3xl font-bold max-w-[330px]">
              {benefit.title}
            </h2>
            <p className="text-md font-sans font-normal max-w-[300px] sm:max-w-[350px] md:max-w-[400px]">
              {benefit.content}
            </p>
            <Link
              href="#"
              className="font-serif text-sm underline underline-offset-1 decoration-4 w-28 border-opacity-40 decoration-custom-yellow/50 uppercase"
            >
              Learn more
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
};
