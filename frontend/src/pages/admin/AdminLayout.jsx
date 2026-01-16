import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../../context/AdminAuthContext';
import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  Users,
  Calendar,
  FileText,
  Award,
  Settings,
  LogOut,
  ChevronRight,
  Bell,
  Menu,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../../components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '../../components/ui/sheet';

const AdminLayout = ({ children }) => {
  const { admin, logout } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const menuItems = [
    { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Proqramlar', path: '/admin/programs', icon: BookOpen },
    { label: 'Təlimçilər', path: '/admin/instructors', icon: Users },
    { label: 'Müraciətlər', path: '/admin/applications', icon: FileText },
    { label: 'Tədbirlər', path: '/admin/events', icon: Calendar },
    { label: 'Məzunlar', path: '/admin/alumni', icon: Award },
    { label: 'Parametrlər', path: '/admin/settings', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const isActive = (path) => location.pathname === path;

  const Sidebar = ({ mobile = false }) => (
    <div className={cn('flex flex-col h-full', mobile ? 'pt-4' : '')}>
      {/* Logo */}
      {!mobile && (
        <div className="p-6 border-b border-slate-200">
          <Link to="/admin/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-brand-dark block">Admin Panel</span>
              <span className="text-xs text-brand-muted">Marketinq Akademiyası</span>
            </div>
          </Link>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => mobile && setIsMobileMenuOpen(false)}
            className={cn(
              'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all',
              isActive(item.path)
                ? 'bg-gradient-to-r from-brand-primary to-brand-accent text-white shadow-lg shadow-brand-primary/20'
                : 'text-brand-muted hover:bg-brand-light hover:text-brand-dark'
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
            {isActive(item.path) && <ChevronRight className="w-4 h-4 ml-auto" />}
          </Link>
        ))}
      </nav>

      {/* User & Logout */}
      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center gap-3 px-4 py-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold">
            {admin?.name?.charAt(0) || 'A'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-brand-dark truncate">{admin?.name}</p>
            <p className="text-xs text-brand-muted truncate">{admin?.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Çıxış
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-72 bg-white border-r border-slate-200 flex-col fixed h-full">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-72">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="flex items-center justify-between px-4 lg:px-8 h-16">
            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0">
                <SheetTitle className="sr-only">Admin Menu</SheetTitle>
                <Sidebar mobile />
              </SheetContent>
            </Sheet>

            {/* Page Title */}
            <h1 className="text-lg font-semibold text-brand-dark hidden lg:block">
              {menuItems.find((item) => item.path === location.pathname)?.label || 'Dashboard'}
            </h1>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <Link to="/" target="_blank">
                <Button variant="outline" size="sm" className="hidden sm:flex">
                  Saytı gör
                </Button>
              </Link>
              <button className="relative p-2 rounded-xl hover:bg-brand-light transition-colors">
                <Bell className="w-5 h-5 text-brand-muted" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;