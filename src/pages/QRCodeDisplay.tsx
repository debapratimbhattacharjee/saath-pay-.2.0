import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { QrCode, ArrowLeft, Share2, Download, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const QRCodeDisplay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const qrData = location.state;

  useEffect(() => {
    if (!qrData) {
      navigate('/dashboard/split-expenses'); // Fixed path
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [qrData, navigate]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`Pay ₹${qrData.amountPerPerson} for ${qrData.description}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log('Failed to copy');
    }
  };

  if (!qrData) return null;

  return (
    <div className="min-h-screen bg-fintech-dark p-4 flex items-center justify-center">
      <div className="w-full max-w-md space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <Link to="/dashboard/split-expenses" className="flex items-center text-fintech-primary hover:text-fintech-primary/80 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Split
          </Link>
        </div>

        {/* QR Code Card with Animation */}
        <Card className={`fintech-card transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 transform translate-y-0 scale-100' 
            : 'opacity-0 transform translate-y-8 scale-95'
        }`}>
          <CardContent className="p-8 text-center space-y-6">

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">Split Payment QR</h1>
              <p className="text-muted-foreground">Share this QR code with your friends</p>
            </div>

            {/* QR Code Box */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-50'
            }`}>
              <div className="w-64 h-64 bg-white border-4 border-fintech-primary/20 rounded-2xl flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                <div className="text-center">
                  <QrCode size={120} className="mx-auto mb-4 text-fintech-dark animate-bounce" />
                  <div className="space-y-1">
                    <div className="w-24 h-2 bg-fintech-dark/20 rounded mx-auto"></div>
                    <div className="w-32 h-2 bg-fintech-dark/20 rounded mx-auto"></div>
                    <div className="w-20 h-2 bg-fintech-dark/20 rounded mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className={`space-y-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-4'
            }`}>
              <div className="bg-fintech-dark-card rounded-lg p-4 space-y-2">
                <p className="text-foreground font-semibold text-lg">
                  {qrData.description || 'Split Payment'}
                </p>
                <p className="text-muted-foreground text-sm">
                  Total: ₹{qrData.totalAmount} ÷ {qrData.numberOfPeople} people
                </p>
                <div className="bg-fintech-primary/10 rounded-lg p-3 border border-fintech-primary/20">
                  <p className="text-fintech-primary font-bold text-2xl">
                    ₹{qrData.amountPerPerson} per person
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={`grid grid-cols-3 gap-3 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}>
              <Button 
                variant="outline" 
                className="flex-col h-auto py-3 space-y-1"
                onClick={handleCopyLink}
              >
                <Copy size={20} />
                <span className="text-xs">{copied ? 'Copied!' : 'Copy'}</span>
              </Button>
              <Button 
                variant="outline" 
                className="flex-col h-auto py-3 space-y-1"
              >
                <Share2 size={20} />
                <span className="text-xs">Share</span>
              </Button>
              <Button 
                variant="outline" 
                className="flex-col h-auto py-3 space-y-1"
              >
                <Download size={20} />
                <span className="text-xs">Save</span>
              </Button>
            </div>

            {/* Status Message */}
            <div className={`text-center space-y-2 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <p className="text-muted-foreground text-sm">
                Ask your friends to scan this QR code to pay their share
              </p>
              <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-fintech-success rounded-full animate-pulse"></div>
                <span>QR Code is ready to share</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Navigation Buttons */}
        <div className={`space-y-3 transition-all duration-1000 delay-1100 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}>
          <Button className="w-full fintech-button-primary">
            <Share2 size={20} className="mr-2" />
            Share QR Code
          </Button>
          <Link to="/dashboard/split-expenses">
            <Button variant="outline" className="w-full">
              Create Another Split
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QRCodeDisplay;
