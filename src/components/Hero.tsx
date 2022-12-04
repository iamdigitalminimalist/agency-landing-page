import { Container } from "./Container";

const ArrowDown = () => {
  return (
    <div className="absolute left-1/2 mt-16">
      <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
        <g
          stroke="#FFF"
          strokeWidth="6"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 3v100M3 95.484l15 15 15-15" />
        </g>
      </svg>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="h-96">
      <Container>
        <>
          <h1 className="font-serif font-black tracking-[0.5rem] text-custom-white text-4xl text-center mt-16 max-w-xs mx-auto sm:max-w-xl">
            WE ARE CREATIVES
          </h1>
          <ArrowDown />
        </>
      </Container>
    </section>
  );
};
