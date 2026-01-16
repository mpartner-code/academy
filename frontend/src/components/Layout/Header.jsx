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
  X,
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
      label: t.nav.about,
      items: [
        { label: t.nav.about, path: '/about' },
        { label: t.nav.philosophy, path: '/philosophy' },
        { label: t.nav.instructors, path: '/instructors' },
      ],
    },
    {
      label: t.nav.programs,
      items: [
        { label: t.nav.programs, path: '/programs' },
        { label: t.nav.syllabus, path: '/syllabus' },
        { label: t.nav.scholarship, path: '/scholarship' },
      ],
    },
    {
      label: t.nav.community,
      items: [
        { label: t.nav.community, path: '/community' },
        { label: t.nav.events, path: '/events' },
        { label: t.nav.alumni, path: '/alumni' },
      ],
    },
    {
      label: t.nav.partners,
      items: [
        { label: t.nav.corporate, path: '/corporate' },
        { label: t.nav.partners, path: '/partners' },
      ],
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
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
            <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center transition-transform group-hover:scale-105">
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
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={cn(
                'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                isActive('/')
                  ? 'text-brand-accent bg-brand-accent/10'
                  : 'text-brand-dark hover:text-brand-accent hover:bg-brand-light'
              )}
            >
              {t.nav.home}
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                {navGroups.map((group, idx) => (
                  <NavigationMenuItem key={idx}>
                    <NavigationMenuTrigger className="text-sm font-medium text-brand-dark hover:text-brand-accent bg-transparent hover:bg-brand-light data-[state=open]:bg-brand-light">
                      {group.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-48 gap-1 p-2">
                        {group.items.map((item, i) => (
                          <li key={i}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.path}
                                className={cn(
                                  'block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors',
                                  isActive(item.path)
                                    ? 'bg-brand-accent/10 text-brand-accent'
                                    : 'text-brand-dark hover:bg-brand-light hover:text-brand-accent'
                                )}
                              >
                                {item.label}
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

            <Link
              to="/quiz"
              className={cn(
                'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                isActive('/quiz')
                  ? 'text-brand-accent bg-brand-accent/10'
                  : 'text-brand-dark hover:text-brand-accent hover:bg-brand-light'
              )}
            >
              {t.nav.quiz}
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-brand-muted hover:text-brand-dark hover:bg-brand-light transition-colors"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </button>

            {/* Apply Button */}
            <Link to="/apply" className="hidden sm:block">
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-5">
                {t.nav.apply}
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-4 border-b border-brand-border">
                    <Link
                      to="/"
                      className="flex items-center gap-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-brand-dark">
                        Marketinq Akademiyası
                      </span>
                    </Link>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 overflow-y-auto p-4">
                    <Link
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'block px-3 py-2.5 rounded-md text-sm font-medium mb-1 transition-colors',
                        isActive('/')
                          ? 'bg-brand-accent/10 text-brand-accent'
                          : 'text-brand-dark hover:bg-brand-light'
                      )}
                    >
                      {t.nav.home}
                    </Link>

                    {navGroups.map((group, idx) => (
                      <div key={idx} className="mb-2">
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === idx ? null : idx)
                          }
                          className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-brand-dark hover:bg-brand-light rounded-md transition-colors"
                        >
                          {group.label}
                          <ChevronDown
                            className={cn(
                              'w-4 h-4 transition-transform',
                              openDropdown === idx && 'rotate-180'
                            )}
                          />
                        </button>
                        {openDropdown === idx && (
                          <div className="ml-3 mt-1 space-y-1 border-l-2 border-brand-border pl-3">
                            {group.items.map((item, i) => (
                              <Link
                                key={i}
                                to={item.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                  'block px-3 py-2 rounded-md text-sm transition-colors',
                                  isActive(item.path)
                                    ? 'text-brand-accent bg-brand-accent/10'
                                    : 'text-brand-muted hover:text-brand-dark hover:bg-brand-light'
                                )}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}

                    <Link
                      to="/quiz"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'block px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
                        isActive('/quiz')
                          ? 'bg-brand-accent/10 text-brand-accent'
                          : 'text-brand-dark hover:bg-brand-light'
                      )}
                    >
                      {t.nav.quiz}
                    </Link>
                  </nav>

                  {/* Mobile Footer */}
                  <div className="p-4 border-t border-brand-border space-y-3">
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm text-brand-muted hover:bg-brand-light transition-colors"
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
                      <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white">
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