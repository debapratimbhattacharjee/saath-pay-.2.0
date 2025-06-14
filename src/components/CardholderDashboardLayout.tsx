import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut, User, Settings } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import CardholderDashboardsidebar from '@/components/CardholderDashboardsidebar';

const CardholderLayout = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const userData = localStorage.getItem('saathpay_user');
    if (!userData) {
      navigate('/login');
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      if (!parsedUser.isAuthenticated) {
        navigate('/login');
        return;
      }

      setUser(parsedUser);
    } catch {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('saathpay_user');
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="h-16 bg-card border-b flex items-center justify-between px-4 lg:pl-72">
        <div className="text-xl font-bold">
          <span className="text-cyan-600">Saath</span>Pay - Cardholder
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="font-medium">{user.name}</p>
                <p className="text-xs text-muted-foreground truncate">{user.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => navigate('/profile')}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => navigate('/settings')}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* Sidebar + Main */}
      <div className="flex flex-1">
        <CardholderDashboardsidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <main className="flex-1 bg-background p-4 lg:ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CardholderLayout;
