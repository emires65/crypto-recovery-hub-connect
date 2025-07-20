import { Button } from '@/components/ui/button';
import { Shield, Bitcoin, Lock, Zap } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 39, 46, 0.8), rgba(30, 39, 46, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Floating Crypto Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Bitcoin className="absolute top-20 right-20 w-8 h-8 text-primary/30 animate-bounce" style={{animationDelay: '0s'}} />
        <Zap className="absolute top-32 right-80 w-6 h-6 text-primary/20 animate-bounce" style={{animationDelay: '1s'}} />
        <Shield className="absolute bottom-32 right-40 w-10 h-10 text-primary/25 animate-bounce" style={{animationDelay: '2s'}} />
        <Lock className="absolute top-40 left-20 w-7 h-7 text-primary/30 animate-bounce" style={{animationDelay: '1.5s'}} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Recover Your Lost{' '}
            <span className="text-primary">Cryptocurrency</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-semibold mb-8">
            The Premier Solution for Cryptocurrency Recovery
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            We specialize in recovering stolen, locked, or misplaced cryptocurrency funds with industry-leading success rates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg crypto-glow animate-glow-pulse"
            >
              RECOVER MY FUNDS
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('about')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;