import { useState } from 'react';
import { User, Mail, Phone, CreditCard, Edit3, Settings, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [profile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    upiId: 'johndoe@paytm',
    avatar: ''
  });

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground">Profile</h1>
        <p className="text-muted-foreground">Manage your personal information</p>
      </div>

      {/* Profile Picture */}
      <Card>
        <CardContent className="flex flex-col items-center space-y-4 pt-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src={profile.avatar} />
            <AvatarFallback className="text-xl bg-gradient-primary text-white">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold">{profile.name}</h2>
        </CardContent>
      </Card>

      {/* User Information */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Your account details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3 p-3 border rounded-lg">
            <User className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Full Name</p>
              <p className="font-medium">{profile.name}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 border rounded-lg">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{profile.email}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 border rounded-lg">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Phone Number</p>
              <p className="font-medium">{profile.phone}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 border rounded-lg bg-muted/30">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">UPI ID / Account Linked</p>
              <p className="font-medium">{profile.upiId}</p>
              <p className="text-xs text-muted-foreground">(Read-only)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-3">
            <Button className="w-full fintech-button-primary" size="lg">
              <Edit3 className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full" 
              size="lg"
              onClick={() => navigate('/settings')}
            >
              <Settings className="mr-2 h-4 w-4" />
              Go to Settings
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full" 
              size="lg"
              onClick={() => navigate('/help')}
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              Need Help?
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
