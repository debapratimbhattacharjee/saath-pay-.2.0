import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CreditCard, 
  Receipt, 
  DollarSign, 
  BarChart3, 
  Star, 
  Shield, 
  Settings, 
  HelpCircle, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/cardholder-dashboard' }, // ✅
  { name: 'My Card', icon: CreditCard, path: '/cardholder-dashboard/my-card' }, // ✅
  { name: 'Transactions', icon: Receipt, path: '/cardholder-dashboard/transactions' }, // ✅
  { name: 'Earnings', icon: DollarSign, path: '/cardholder-dashboard/earnings' },
  
];

const accountItems = [
  { name: 'Security Settings', icon: Shield, path: '/cardholder-dashboard/security' },
  { name: 'Account Settings', icon: Settings, path: '/cardholder-dashboard/account' },
  { name: 'Help & Support', icon: HelpCircle, path: '/cardholder-dashboard/support' },
  { name: 'Logout', icon: LogOut, path: '/logout' }, // logout can remain outside
];


const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    // TODO: Implement logout functionality
    console.log('Logout clicked');
  };

  return (
    <div className={cn(
      "bg-fintech-dark border-r border-fintech-dark-card transition-all duration-300 flex flex-col",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-fintech-dark-card">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SP</span>
              </div>
              <span className="text-xl font-bold text-fintech-primary">SplitPay</span>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-fintech-dark-card rounded-lg transition-colors"
          >
            {isCollapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 p-4">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            {!isCollapsed && "MAIN"}
          </div>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200",
                  isActive 
                    ? "bg-fintech-primary text-white shadow-lg" 
                    : "text-muted-foreground hover:bg-fintech-dark-card hover:text-foreground",
                  isCollapsed && "justify-center"
                )}
              >
                <item.icon size={20} />
                {!isCollapsed && <span className="font-medium">{item.name}</span>}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Account Section */}
      <div className="p-4 border-t border-fintech-dark-card">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            {!isCollapsed && "ACCOUNT"}
          </div>
          {accountItems.map((item) => {
            const isActive = location.pathname === item.path;
            const isLogout = item.path === '/logout';
            
            if (isLogout) {
              return (
                <button
                  key={item.name}
                  onClick={handleLogout}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 w-full text-left",
                    "text-red-400 hover:bg-red-500/10 hover:text-red-300",
                    isCollapsed && "justify-center"
                  )}
                >
                  <item.icon size={20} />
                  {!isCollapsed && <span className="font-medium">{item.name}</span>}
                </button>
              );
            }
            
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200",
                  isActive 
                    ? "bg-fintech-primary text-white" 
                    : "text-muted-foreground hover:bg-fintech-dark-card hover:text-foreground",
                  isCollapsed && "justify-center"
                )}
              >
                <item.icon size={20} />
                {!isCollapsed && <span className="font-medium">{item.name}</span>}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
