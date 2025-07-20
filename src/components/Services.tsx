import { Key, ShieldAlert, Building2, AlertCircle, Banknote, Search } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Key,
      title: "Lost Key Recovery",
      description: "Recover access to wallets with lost or forgotten private keys and passwords."
    },
    {
      icon: ShieldAlert,
      title: "Theft Recovery",
      description: "Track and recover cryptocurrency stolen through hacks, phishing, or other malicious activities."
    },
    {
      icon: Building2,
      title: "Exchange Issues",
      description: "Resolve issues with exchanges including frozen accounts and failed transactions."
    },
    {
      icon: AlertCircle,
      title: "Scam Recovery",
      description: "Specialized techniques to recover funds lost to investment scams and fraudulent schemes."
    },
    {
      icon: Banknote,
      title: "Banking Recovery",
      description: "Recover traditional banking funds lost through wire fraud or unauthorized transfers."
    },
    {
      icon: Search,
      title: "Forensic Analysis",
      description: "Advanced blockchain forensics to trace and recover misplaced or stolen digital assets."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex justify-center mb-6">
                  <service.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;