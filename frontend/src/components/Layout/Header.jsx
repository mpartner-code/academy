import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '../ui/sheet';
import {
  Menu,
  GraduationCap,
  Globe,
  ChevronDown,
  Building2,
  BookOpen,
  Users,
  Award,
  Trophy,
  FileCheck,
  Brain,
  Target,
  Briefcase,
  Calendar,
  Star,
  Shield,
  Lightbulb,
  TrendingUp,
  BarChart3,
  Megaphone,
  Layers,
} from 'lucide-react';
import { cn } from '../../lib/utils';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navGroups = [
    {
      id: 'academy',
      label: t.nav.academy,
      icon: Building2,
      items: [
        { label: t.nav.about, path: '/about', icon: Building2 },
        { label: t.nav.philosophy, path: '/philosophy', icon: Lightbulb },
        { label: t.nav.instructors, path: '/instructors', icon: Users },
        { label: t.nav.academicPartners, path: '/partners', icon: GraduationCap },
        { label: t.nav.careerPartners, path: '/corporate', icon: Briefcase },
        { label: t.nav.alumni, path: '/alumni', icon: Trophy },
      ],
    },
    {
      id: 'education',
      label: t.nav.education,
      icon: BookOpen,
      items: [
        { label: t.nav.marketingBasics, path: '/programs/digital-marketing', icon: Target },
        { label: t.nav.digitalMarketing, path: '/programs/digital-marketing', icon: Megaphone },
        { label: t.nav.brandManagement, path: '/programs/brand-management', icon: Award },
        { label: t.nav.marketingStrategy, path: '/programs/marketing-mba', icon: TrendingUp },
        { label: t.nav.salesGrowth, path: '/programs/social-media-marketing', icon: BarChart3 },
        { label: t.nav.practicalProjects, path: '/programs', icon: Layers },
        { label: t.nav.syllabus, path: '/syllabus', icon: BookOpen },
      ],
    },
    {
      id: 'club',
      label: t.nav.club,
      icon: Users,
      items: [
        { label: t.nav.freeMembers, path: '/community', icon: Star },
        { label: t.nav.events, path: '/events', icon: Calendar },
      ],
    },
    {
      id: 'certification',
      label: t.nav.certification,
      icon: Shield,
      items: [
        { label: t.nav.cmi, path: '/certification', icon: Shield },
        { label: t.nav.otherPartners, path: '/certification', icon: Globe },
        { label: t.nav.certPrograms, path: '/certification', icon: FileCheck },
        { label: t.nav.accreditation, path: '/certification', icon: Award },
      ],
    },
    {
      id: 'quiz',
      label: t.nav.quiz,
      icon: Brain,
      items: [
        { label: t.nav.freeTest, path: '/quiz', icon: Brain },
        { label: t.nav.levelAssessment, path: '/quiz', icon: Target },
        { label: t.nav.recommendedPath, path: '/quiz', icon: Lightbulb },
      ],
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-brand-primary to-brand-accent flex items-center justify-center transition-transform group-hover:scale-105">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-brand-dark leading-tight block">
                Marketinq
              </span>
              <span className="text-xs text-brand-muted -mt-1 block">
                Akademiyası
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navGroups.map((group) => (
                  <NavigationMenuItem key={group.id}>
                    <NavigationMenuTrigger className="text-sm font-medium text-brand-dark hover:text-brand-primary bg-transparent hover:bg-brand-light/50 data-[state=open]:bg-brand-light/50 h-10 px-3">
                      {group.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[280px] gap-1 p-3">
                        {group.items.map((item, i) => (
                          <li key={i}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.path}
                                className={cn(
                                  'flex items-center gap-3 select-none rounded-xl px-4 py-3 text-sm leading-none no-underline outline-none transition-all',
                                  isActive(item.path)
                                    ? 'bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 text-brand-primary'
                                    : 'text-brand-dark hover:bg-brand-light'
                                )}
                              >
                                <item.icon className="w-4 h-4 text-brand-muted" />
                                <span>{item.label}</span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-brand-muted hover:text-brand-dark hover:bg-brand-light/50 transition-colors"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </button>

            {/* Apply Button */}
            <Link to="/apply" className="hidden sm:block">
              <Button className="bg-gradient-to-r from-brand-primary to-brand-accent hover:opacity-90 text-white px-5 shadow-lg shadow-brand-primary/20">
                {t.nav.apply}
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="xl:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white p-0 overflow-y-auto">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-4 border-b border-brand-border">
                    <Link
                      to="/"
                      className="flex items-center gap-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-brand-primary to-brand-accent flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-brand-dark">
                        Marketinq Akademiyası
                      </span>
                    </Link>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 p-4 space-y-2">
                    {navGroups.map((group) => (
                      <div key={group.id} className="mb-2">
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === group.id ? null : group.id)
                          }
                          className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-brand-dark hover:bg-brand-light rounded-xl transition-colors"
                        >
                          <span className="flex items-center gap-3">
                            <group.icon className="w-5 h-5 text-brand-primary" />
                            {group.label}
                          </span>
                          <ChevronDown
                            className={cn(
                              'w-4 h-4 transition-transform text-brand-muted',
                              openDropdown === group.id && 'rotate-180'
                            )}
                          />
                        </button>
                        {openDropdown === group.id && (
                          <div className="mt-1 ml-4 space-y-1 border-l-2 border-brand-primary/20 pl-4">
                            {group.items.map((item, i) => (
                              <Link
                                key={i}
                                to={item.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
                                  isActive(item.path)
                                    ? 'text-brand-primary bg-brand-primary/10'
                                    : 'text-brand-muted hover:text-brand-dark hover:bg-brand-light'
                                )}
                              >
                                <item.icon className="w-4 h-4" />
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Mobile Footer */}
                  <div className="p-4 border-t border-brand-border space-y-3">
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center gap-2 w-full px-4 py-3 rounded-xl text-sm text-brand-muted hover:bg-brand-light transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      <span>
                        {language === 'az' ? 'English' : 'Azərbaycanca'}
                      </span>
                    </button>
                    <Link
                      to="/apply"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block"
                    >
                      <Button className="w-full bg-gradient-to-r from-brand-primary to-brand-accent hover:opacity-90 text-white">
                        {t.nav.apply}
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
