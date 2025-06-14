
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Bell, 
  Menu as MenuIcon, 
  X, 
  User, 
  Settings,
  LogOut
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import DashboardSidebar from './DashboardSidebar';
import { ThemeToggle } from './ThemeToggle';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState<{name: string; email: string} | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is authenticated
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
    } catch (error) {
      navigate('/login');
    }
    
    // Handle resize events for responsive sidebar
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('saathpay_user');
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    navigate('/login');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      toast({
        title: "Search initiated",
        description: `Searching for "${searchTerm}"`,
      });
      // In a real app, implement actual search functionality here
    }
  };

  if (!user) return null; // Don't render until authentication check completes

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="h-16 border-b bg-card fixed top-0 left-0 right-0 z-30 flex items-center px-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              {sidebarOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </Button>
            <div className="font-bold text-xl">
              <span className="text-cyan-600">Saath</span>
              <span>Pay</span>
            </div>
          </div>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for products, services, or offers..."
                className="pl-10 pr-4 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
            </Button>
            
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
          </div>
        </div>
      </header>
      
      {/* Mobile Search */}
      <div className="md:hidden pt-16 px-4 pb-2 bg-background border-b">
        <form onSubmit={handleSearch} className="relative w-full">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10 pr-4 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
      
      {/* Main Content Area */}
      <div className={cn("flex flex-1 pt-16 md:pt-16 overflow-hidden")}>
        {/* Sidebar */}
        <DashboardSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        {/* Main Content */}
        <main className={cn(
          "flex-1 overflow-y-auto p-4 transition-all duration-300",
          isMobile && sidebarOpen ? "opacity-30 lg:opacity-100" : "opacity-100"
        )}>
          <div className="container mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
