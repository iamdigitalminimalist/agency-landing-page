import { Container } from "./Container";
import Image from "next/image";

type Testimonial = {
  id: number;
  imgSrc: string;
  imgAlt: string;
  content: string;
  name: string;
  jobTitle: string;
};

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection = (props: TestimonialsSectionProps) => {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="my-16 sm:my-32"
    >
      <Container>
        <div className="flex items-center justify-center flex-col space-y-8">
          <h2 className="font-serif text-md uppercase tracking-[0.5rem] text-custom-grayish-blue">
            Client Testimonials
          </h2>
          <div className="flex flex-col sm:flex-row sm:flex-grow md:space-x-8">
            {props.testimonials.map((testimonial: Testimonial) => (
              <div key={testimonial.id} className=" max-w-xs text-center my-8">
                <div className="space-y-4 space-x-4">
                  <Image
                    src={testimonial.imgSrc}
                    alt={testimonial.imgAlt}
                    height={50}
                    width={50}
                    className="rounded-full mx-auto mb-6"
                  />
                  <p className="text-custom-extra-dark-grayish-blue font-sans">
                    {testimonial.content}
                  </p>
                  <div className="space-y-1">
                    <h3 className="font-serif font-black">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-custom-grayish-blue">
                      {testimonial.jobTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
