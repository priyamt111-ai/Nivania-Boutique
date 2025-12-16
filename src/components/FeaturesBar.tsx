import { Truck, RotateCcw, Shield, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $100",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day return policy",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure checkout",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Dedicated assistance",
  },
];

const FeaturesBar = () => {
  return (
    <section className="py-12 bg-muted/50 border-y border-border">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3"
            >
              <feature.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
              <div>
                <h4 className="font-heading text-base font-medium">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
