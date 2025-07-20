import { useState } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CustomerSupportWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openJivoChat = () => {
    // Open JivoChat widget or simulate it
    window.open('https://app.jivosite.com/simulate_widget.html?code_host=code.jivosite.com&locale=en&site=dimanassociaterecovery-gmail.com-site&widget_id=GgFino1fjp', '_blank');
  };

  return (
    <>
      {/* Floating Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className={`transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} mb-4`}>
          <div className="bg-card border border-border rounded-lg shadow-lg p-4 w-64">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-semibold text-foreground">Need Help?</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={16} />
              </button>
            </div>
            
            <p className="text-xs text-muted-foreground mb-4">
              Get instant support for your recovery case
            </p>
            
            <div className="space-y-2">
              <Button 
                onClick={openJivoChat}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs py-2"
                size="sm"
              >
                <MessageCircle size={14} className="mr-2" />
                Live Chat
              </Button>
              
              <div className="flex gap-2">
                <Button 
                  onClick={() => window.location.href = 'tel:+13105698603'}
                  variant="outline" 
                  className="flex-1 text-xs py-2"
                  size="sm"
                >
                  <Phone size={14} className="mr-1" />
                  Call
                </Button>
                
                <Button 
                  onClick={() => window.location.href = 'mailto:dimanassociaterecovery@gmail.com'}
                  variant="outline" 
                  className="flex-1 text-xs py-2"
                  size="sm"
                >
                  <Mail size={14} className="mr-1" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg animate-glow-pulse"
          size="lg"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <MessageCircle size={24} />
          )}
        </Button>
      </div>
    </>
  );
};

export default CustomerSupportWidget;