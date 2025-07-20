import { Shield, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              About Diman Associate Recovery
            </h2>
            <h3 className="text-xl md:text-2xl text-primary font-semibold mb-8">
              The First & Best Cryptocurrency Recovery Service
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Diman Associate Recovery is the industry pioneer in cryptocurrency and banking funds recovery. 
                We've developed proprietary technology and methodologies to track, locate, and recover digital assets that have been:
              </p>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Stolen by sophisticated hackers
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Locked due to lost keys or passwords
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Transferred to incorrect addresses
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Compromised through scams or fraud
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Inaccessible due to exchange issues
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a team of blockchain security experts, cryptographers, and digital forensics specialists, 
                we've successfully recovered millions in digital assets for our clients worldwide.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-muted-foreground">Cases Resolved</div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-muted-foreground">Recovered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;