import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src={logo} alt="Diman Associate Recovery" className="w-10 h-10" />
                <span className="text-xl font-bold text-foreground">Diman Associate Recovery</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The premier solution for cryptocurrency recovery. We specialize in recovering stolen, 
                locked, or misplaced cryptocurrency funds with industry-leading success rates.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a 
                    href="mailto:dimanassociaterecovery@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    dimanassociaterecovery@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a 
                    href="tel:+13105698603" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (310) 569-8603
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li className="text-muted-foreground">Lost Key Recovery</li>
                <li className="text-muted-foreground">Theft Recovery</li>
                <li className="text-muted-foreground">Exchange Issues</li>
                <li className="text-muted-foreground">Scam Recovery</li>
                <li className="text-muted-foreground">Banking Recovery</li>
                <li className="text-muted-foreground">Forensic Analysis</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-muted-foreground text-sm mb-4 md:mb-0">
                © 2024 Diman Associate Recovery. All rights reserved.
              </div>
              <div className="text-muted-foreground text-sm">
                Professional Cryptocurrency Recovery Services
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;