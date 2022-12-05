type Feature = {
  id: number;
  background: string;
  title: string;
  content: string;
};

interface FeaturesSectionProps {
  features: Feature[];
}

export const FeaturesSection = (props: FeaturesSectionProps) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2">
      {props.features.map((feature: Feature) => (
        <div
          key={feature.id}
          className={`h-[500px] xl: h-[600px] w-full flex justify-end flex-col md:mx-auto items-center text-center sm:text-left sm:items-start ${feature.background} bg-no-repeat bg-cover bg-center`}
        >
          <div className="flex flex-col items-center mx-auto flex-start space-y-8 mb-8 text-center">
            <h2 className="font-serif font-bold text-3xl font-bold max-w-[330px]">
              {feature.title}
            </h2>
            <p className="text-md font-sans font-normal max-w-[300px] sm:max-w-[350px]">
              {feature.content}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};
