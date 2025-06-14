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
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<'user' | 'cardholder'>('user');

  const { toast } = useToast();
  const navigate = useNavigate();

const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  setTimeout(() => {
    setLoading(false);

    if (email && password.length >= 6) {
      localStorage.setItem(
        'saathpay_user',
        JSON.stringify({
          email,
          name: email.split('@')[0],
          role,
          isAuthenticated: true,
        })
      );

      toast({
        title: 'Login successful',
        description: `Welcome back to SaathPay (${role})!`,
      });

      // 👇 Navigate to different dashboards based on role
      if (role === 'cardholder') {
        navigate('/cardholder-dashboard');
      } else {
        navigate('/dashboard');
      }

    } else {
      toast({
        variant: 'destructive',
        title: 'Login failed',
        description: 'Please check your credentials and try again.',
      });
    }
  }, 1500);
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
              User Login
            </Button>
            <Button
              variant={role === 'cardholder' ? 'default' : 'outline'}
              onClick={() => setRole('cardholder')}
              className="w-1/2"
            >
              Cardholder Login
            </Button>
          </div>

          <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
          <CardDescription className="text-center">
            {role === 'user'
              ? 'Login to your SaathPay user account'
              : 'Login to your SaathPay cardholder account'}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <form onSubmit={handleLogin} className="space-y-4">
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
            <div className="flex items-center justify-end">
              <Link to="/forgot-password" className="text-sm text-cyan-600 hover:text-cyan-500">
                Forgot password?
              </Link>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-cyan-600 hover:text-cyan-500">
              Sign up
            </Link>
          </div>

          {role === 'user' && (
            <div className="text-center text-sm">
              Want to login as a cardholder?{' '}
              <button
                onClick={() => setRole('cardholder')}
                className="text-cyan-600 hover:text-cyan-500 underline"
              >
                Switch to Cardholder
              </button>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
