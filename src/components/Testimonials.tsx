import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // These testimonials can be updated from an admin area later
  const testimonials = [
    {
      id: 1,
      name: "Michael T.",
      location: "New York, USA",
      text: "After losing 5 BTC to a sophisticated phishing attack, I thought my funds were gone forever. Diman Associate Recovery tracked and recovered every coin within 3 weeks.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah L.",
      location: "London, UK", 
      text: "My exchange account was frozen with over $100,000 in assets. After months of no response, Diman Associate Recovery resolved the issue in just 10 days.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b942434?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "David K.",
      location: "Toronto, Canada",
      text: "I lost access to my hardware wallet containing my life savings in Ethereum. Diman Associate Recovery restored access without compromising security.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Jennifer R.",
      location: "Singapore",
      text: "After falling victim to a DeFi rug pull, Diman Associate Recovery traced the funds through multiple wallets and recovered 85% of my initial investment.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Robert M.",
      location: "Sydney, Australia",
      text: "I accidentally sent a large amount of USDT to the wrong address. Diman Associate Recovery not only traced the funds but negotiated the return with the recipient.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Thomas H.",
      location: "Berlin, Germany",
      text: "Our company lost significant funds in a business email compromise. Diman Associate Recovery worked with law enforcement to track and recover our assets.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Emily J.",
      location: "Chicago, USA",
      text: "After my father passed away, we couldn't access his crypto holdings. Diman Associate Recovery helped us recover the family inheritance with sensitivity and professionalism.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Carlos P.",
      location: "Madrid, Spain",
      text: "I invested in what turned out to be a fraudulent ICO. Diman Associate Recovery tracked down the operators and through legal pressure, recovered 70% of my investment.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Client Testimonials
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-lg border border-border relative">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted overflow-hidden">
                  <img 
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex justify-center mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-muted-foreground mb-6 italic leading-relaxed">
                  "{current.text}"
                </blockquote>

                <div className="text-center">
                  <h4 className="text-lg font-semibold text-foreground">{current.name}</h4>
                  <p className="text-muted-foreground">{current.location}</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;