
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface PhoneOtpVerificationProps {
  phoneNumber: string;
  onBack: () => void;
  onVerified: () => void;
}

const PhoneOtpVerification = ({ phoneNumber, onBack, onVerified }: PhoneOtpVerificationProps) => {
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleVerifyOtp = () => {
    if (otp.length !== 6) {
      toast({
        variant: "destructive",
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP",
      });
      return;
    }

    setIsVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      
      // For demo purposes, any 6-digit OTP is accepted
      toast({
        title: "Verification successful",
        description: "Your phone number has been verified",
      });

      // Store user info in localStorage
      localStorage.setItem('saathpay_user', JSON.stringify({ 
        phoneNumber, 
        isAuthenticated: true 
      }));
      
      onVerified();
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border border-gray-200 dark:bg-gray-900/70 dark:border-gray-800">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Verify your phone</CardTitle>
        <CardDescription className="text-center">
          We've sent a verification code to {phoneNumber}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center py-4">
          <InputOTP maxLength={6} value={otp} onChange={setOtp}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          Didn't receive a code? <button className="text-cyan-600 hover:text-cyan-500">Resend code</button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="flex w-full gap-2">
          <Button 
            variant="outline"
            className="flex-1"
            onClick={onBack}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button 
            className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
            onClick={handleVerifyOtp}
            disabled={otp.length !== 6 || isVerifying}
          >
            {isVerifying ? "Verifying..." : "Verify & Continue"}
            {!isVerifying && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PhoneOtpVerification;
