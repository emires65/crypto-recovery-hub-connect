import { Award, Cog, Users, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Industry Pioneers",
      description: "The first and most trusted name in cryptocurrency recovery with years of proven success."
    },
    {
      icon: Cog,
      title: "Proprietary Technology",
      description: "Exclusive recovery methods developed by our team of blockchain security experts."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Cryptographers, forensic specialists, and blockchain analysts with decades of combined experience."
    },
    {
      icon: DollarSign,
      title: "No Recovery, No Fee",
      description: "We only charge if we successfully recover your funds, guaranteeing our commitment to results."
    }
  ];

  return (
    <section className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Diman Associate Recovery
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center group"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;