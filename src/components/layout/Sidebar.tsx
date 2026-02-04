import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Wallet,
  Zap,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRole } from "@/context/RoleContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

const allNavigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard, roles: ["MANAGER", "AGENT", "ANALYST"] },
  { name: "AI Command Center", href: "/ai-command", icon: Zap, roles: ["MANAGER"] },
  { name: "Portfolio Intelligence", href: "/portfolio", icon: TrendingUp, roles: ["MANAGER", "ANALYST"] },
  { name: "SME Accounts", href: "/accounts", icon: Building2, roles: ["MANAGER", "AGENT"] },
  { name: "Micro Business Loans", href: "/micro-loans", icon: Wallet, roles: ["MANAGER"] },
  { name: "Governance & Compliance", href: "/governance", icon: ShieldCheck, roles: ["MANAGER", "ANALYST"] },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { role } = useRole();
  const { logout, username } = useAuth();

  const navigation = allNavigation.filter(item => item.roles.includes(role));

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar flex flex-col transition-all duration-300 z-50",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-glow">
          <Sparkles className="w-5 h-5 text-primary-foreground" />
        </div>
        {!collapsed && (
        <div className="animate-fade-in">
            <h1 className="font-display font-bold text-lg text-sidebar-foreground">COLLECTION</h1>
            <p className="text-xs text-sidebar-primary font-medium tracking-wide">INTELLIGENCE</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={cn(
                "nav-item group",
                isActive && "active"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5 flex-shrink-0 transition-colors",
                isActive ? "text-sidebar-primary-foreground" : "text-sidebar-foreground/60 group-hover:text-sidebar-foreground"
              )} />
              {!collapsed && (
                <span className="truncate animate-fade-in">{item.name}</span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border">
        <div className={cn(
          "flex items-center gap-3",
          collapsed && "justify-center"
        )}>
          <div className="relative">
            <Avatar className="w-10 h-10 border-2 border-sidebar-primary/30">
              <AvatarFallback className="bg-sidebar-accent text-sidebar-foreground font-semibold">
                {username ? username.slice(0, 2).toUpperCase() : "JD"}
              </AvatarFallback>
            </Avatar>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-success rounded-full border-2 border-sidebar" />
          </div>
          {!collapsed && (
            <div className="animate-fade-in flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">{username || "User"}</p>
              <p className="text-xs text-sidebar-primary font-medium">{role} MODE</p>
            </div>
          )}
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleLogout}
          className={cn(
            "mt-3 w-full text-sidebar-foreground/70 hover:text-destructive hover:bg-destructive/10",
            collapsed && "p-2"
          )}
        >
          <LogOut className="w-4 h-4" />
          {!collapsed && <span className="ml-2">Logout</span>}
        </Button>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 w-6 h-6 bg-card border border-border rounded-full flex items-center justify-center shadow-md hover:bg-muted transition-colors"
      >
        {collapsed ? (
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
    </aside>
  );
}