import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Shield, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    recoveryType: '',
    amount: '',
    description: '',
    agreed: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreed) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the confidentiality terms to proceed.",
        variant: "destructive"
      });
      return;
    }

    // Create email content
    const emailContent = `
New Recovery Request from ${formData.name}

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Recovery Details:
- Recovery Type: ${formData.recoveryType}
- Amount Lost: ${formData.amount}
- Description: ${formData.description}

The client has agreed to confidentiality terms.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:dimanassociaterecovery@gmail.com?subject=Recovery Request from ${formData.name}&body=${encodeURIComponent(emailContent)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    toast({
      title: "Request Submitted",
      description: "Your recovery request has been prepared. Please send the email that opened in your email client.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      recoveryType: '',
      amount: '',
      description: '',
      agreed: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Start Your Recovery
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our team of recovery specialists is ready to evaluate your case and provide a confidential consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Email</p>
                    <a 
                      href="mailto:dimanassociaterecovery@gmail.com" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      dimanassociaterecovery@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Phone</p>
                    <a 
                      href="tel:+13105698603" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      +1 (310) 569-8603
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Secure & Confidential Process</p>
                    <p className="text-muted-foreground">All information protected</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">24/7 Emergency Response</p>
                    <p className="text-muted-foreground">Available when you need us</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Request Recovery Consultation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label>Select Recovery Type *</Label>
                  <Select value={formData.recoveryType} onValueChange={(value) => handleInputChange('recoveryType', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select recovery type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="theft">Theft Recovery</SelectItem>
                      <SelectItem value="lost-access">Lost Access/Keys</SelectItem>
                      <SelectItem value="scam">Scam Recovery</SelectItem>
                      <SelectItem value="exchange">Exchange Issues</SelectItem>
                      <SelectItem value="banking">Banking Fraud</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="amount">Amount Lost (USD)</Label>
                  <Input
                    id="amount"
                    placeholder="e.g., $50,000"
                    value={formData.amount}
                    onChange={(e) => handleInputChange('amount', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Describe Your Situation *</Label>
                  <Textarea
                    id="description"
                    placeholder="Please provide details about how you lost your funds, including dates, amounts, and any relevant information..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    required
                    className="mt-1 min-h-[120px]"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreed"
                    checked={formData.agreed}
                    onCheckedChange={(checked) => handleInputChange('agreed', checked as boolean)}
                  />
                  <Label htmlFor="agreed" className="text-sm leading-relaxed">
                    I understand that all information will be kept confidential and I consent to Diman Associate Recovery evaluating my case.
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                  disabled={!formData.agreed}
                >
                  Submit Recovery Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;