import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<'user' | 'cardholder'>('user');

  const { toast } = useToast();
  const navigate = useNavigate();

 const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    toast({
      variant: 'destructive',
      title: "Passwords don't match",
      description: 'Please make sure both passwords match.',
    });
    return;
  }

  if (!acceptTerms) {
    toast({
      variant: 'destructive',
      title: 'Terms and Conditions',
      description: 'Please accept the Terms and Conditions to continue.',
    });
    return;
  }

  setLoading(true);

  try {
    // Simulated signup logic without backend
    const userData = {
      username: name,
      email,
      password,
      role,
      isAuthenticated: true,
    };

    localStorage.setItem('saathpay_user', JSON.stringify(userData));

    toast({
      title: 'Account created successfully',
      description: 'Welcome to SaathPay!',
    });

    // ✅ Role-based redirection
    if (role === 'user') {
      navigate('/dashboard');
    } else if (role === 'cardholder') {
      navigate('/cardholder-dashboard');
    }

  } catch (err: unknown) {
    toast({
      variant: 'destructive',
      title: 'Signup failed',
      description: 'Something went wrong.',
    });
  } finally {
    setLoading(false);
  }
};

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-cyan-600">Saath</span>
                <span className="text-foreground">Pay</span>
              </span>
            </Link>
          </div>

          <div className="flex justify-center space-x-4 mb-4">
            <Button
              variant={role === 'user' ? 'default' : 'outline'}
              onClick={() => setRole('user')}
              className="w-1/2"
            >
              I'm a User
            </Button>
            <Button
              variant={role === 'cardholder' ? 'default' : 'outline'}
              onClick={() => setRole('cardholder')}
              className="w-1/2"
            >
              I'm a Cardholder
            </Button>
          </div>

          <CardTitle className="text-2xl text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            {role === 'user'
              ? 'Enter your information to create a SaathPay user account'
              : 'Enter your information to register as a SaathPay cardholder'}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Full Name"
                  className="pl-10"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="pl-10 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-muted-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  className="pl-10"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I accept the{' '}
                <Link to="/terms" className="text-cyan-600 hover:text-cyan-500">
                  Terms and Conditions
                </Link>
              </label>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Create account'}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="text-cyan-600 hover:text-cyan-500">
              Login
            </Link>
          </div>

          {role === 'user' && (
            <div className="text-center text-sm">
              Want to register as a cardholder?{' '}
              <button
                onClick={() => setRole('cardholder')}
                className="text-cyan-600 hover:text-cyan-500 underline"
              >
                Create a cardholder account
              </button>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
