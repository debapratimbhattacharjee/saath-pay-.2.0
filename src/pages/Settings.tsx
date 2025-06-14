import { useState } from 'react';
import { Moon, Sun, Globe, Shield, Bell, CreditCard, User, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/components/ThemeProvider';

const Settings = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [settings, setSettings] = useState({
    language: 'en',
    notifications: true,
    emailNotifications: true,
    pushNotifications: false
  });

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences</p>
      </div>

      {/* Account Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User size={20} />
            Account
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Dark Mode</Label>
              <p className="text-sm text-muted-foreground">Toggle between light and dark theme</p>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              />
              <Moon className="h-4 w-4" />
            </div>
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Language</Label>
              <p className="text-sm text-muted-foreground">Change app language</p>
            </div>
            <Select
              value={settings.language}
              onValueChange={(value) => updateSetting('language', value)}
            >
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
                <SelectItem value="fr">French</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield size={20} />
            Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            Change Password
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Set Passcode
          </Button>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell size={20} />
            Notification Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive notifications via email</p>
            </div>
            <Switch
              checked={settings.emailNotifications}
              onCheckedChange={(checked) => updateSetting('emailNotifications', checked)}
            />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Push Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive push notifications</p>
            </div>
            <Switch
              checked={settings.pushNotifications}
              onCheckedChange={(checked) => updateSetting('pushNotifications', checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Linked Accounts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard size={20} />
            Linked Accounts
          </CardTitle>
          <CardDescription>Manage your connected UPI and card accounts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">UPI Account</p>
              <p className="text-sm text-muted-foreground">johndoe@paytm</p>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
          
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">Credit Cards</p>
              <p className="text-sm text-muted-foreground">2 cards linked</p>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1" 
              onClick={() => navigate('/profile')}
            >
              <User className="mr-2 h-4 w-4" />
              Go to Profile
            </Button>
            
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => navigate('/help')}
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
