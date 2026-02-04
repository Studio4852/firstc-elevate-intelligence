import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Accounts from "./pages/Accounts";
import AccountDetail from "./pages/AccountDetail";
import Portfolio from "./pages/Portfolio";
import Governance from "./pages/Governance";
import MicroLoans from "./pages/MicroLoans";
import AICommandCenter from "./pages/AICommandCenter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import { RoleProvider } from "./context/RoleContext";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RoleProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ai-command" element={<AICommandCenter />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/accounts/:id" element={<AccountDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/micro-loans" element={<MicroLoans />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </RoleProvider>
  </QueryClientProvider>
);

export default App;
