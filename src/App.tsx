import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Shopping from "./pages/Shopping";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./components/DashboardLayout";
import SplitExpenses from "./pages/SplitExpenses"; // ✅ Import
import ExpenseTracking from "./pages/ExpenseTracking"; // ✅ Import
import VirtualCards from "./pages/VirtualCards";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import HelpSupport from "./pages/HelpSupport";
import CardholderDashboard from "./pages/CardholderDashboard";
import CardholderDashboardLayout from "./components/CardholderDashboardLayout"
import MyCard from "./pages/Mycard";
import Transactions from "./pages/Transactions";
import Earnings from "./pages/Earnings";
import Analytics from "./pages/Analytics";
import Payment from "./pages/Payment";
import QRCodeDisplay from "./pages/QRCodeDisplay";




// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider defaultTheme="light" storageKey="saathpay-theme">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
             <Routes>
  <Route path="/" element={<Index />} />
  <Route path="/shop" element={<Shopping />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/settings" element={<Settings />} />
  <Route path="/support" element={<HelpSupport />} />

  {/* Cardholder dashboard nested under layout */}
<Route path="/cardholder-dashboard" element={<CardholderDashboardLayout />}>
  <Route index element={<CardholderDashboard />} />
  <Route path="my-card" element={<MyCard />} />
  <Route path="transactions" element={<Transactions />} />
  <Route path="earnings" element={<Earnings />} />
  <Route path="analytics" element={<Analytics />} />
</Route>


  {/* Main user dashboard with its layout */}
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="payment" element={<Payment/>}/>
    <Route path="split-expenses" element={<SplitExpenses />} />
    <Route path="split-expenses/qr" element={<QRCodeDisplay />} />

    <Route path="expense-tracking" element={<ExpenseTracking />} />
    <Route path="virtual-cards" element={<VirtualCards />} />
    <Route path="offers" element={<Offers />} />
  </Route>

  

  {/* Catch-all */}
  <Route path="*" element={<NotFound />} />
</Routes>

            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
