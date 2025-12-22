import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { MapIcon, BookOpenIcon, Github, Moon, Sun, Globe, Menu, Briefcase } from 'lucide-react';
import { useTheme } from '../lib/theme-provider';
import { useLanguage } from '../lib/i18n/language-context';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import ReactCountryFlag from "react-country-flag"

export default function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLanguage();

  const navLinks = [
    { href: '/', label: t.nav.home, icon: MapIcon },
    { href: '/demo', label: t.nav.demo, icon: Globe },
    { href: '/business-examples', label: t.nav.business, icon: Briefcase },
    { href: '/docs', label: t.nav.docs, icon: BookOpenIcon },
  ];

  const languages = [
    { code: 'en', label: 'EN', flag: <ReactCountryFlag countryCode="us" /> },
    { code: 'fi', label: 'FI', flag: <ReactCountryFlag countryCode="fi" /> },
    { code: 'pt-BR', label: 'BR', flag: <ReactCountryFlag countryCode="br" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition-opacity">
            <div className="text-2xl animate-spin-slow"><ReactCountryFlag countryCode="br" /></div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-foreground leading-tight">Brazil States</h1>
              <p className="text-[10px] text-primary font-black uppercase tracking-widest">Premium Toolkit</p>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const isActive = location.pathname === href;
              return (
                <Link
                  key={href}
                  to={href}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300',
                    isActive
                      ? 'text-primary bg-primary/5 shadow-[0_0_20px_rgba(var(--primary),0.1)]'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2">
            {/* Language Switcher - Compact */}
            <div className="flex bg-secondary/30 p-1 rounded-xl border border-border/50 shadow-inner mr-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLocale(lang.code as any)}
                  className={cn(
                    "px-2 py-1 rounded-lg text-[10px] font-black transition-all",
                    locale === lang.code
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  )}
                  title={lang.label}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <div className="h-6 w-[1px] bg-border/50 mx-1 hidden sm:block" />

            <button
              onClick={toggleTheme}
              className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-xl transition-all hover:scale-110 active:scale-95 shadow-sm"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-xl transition-all hover:scale-110 shadow-sm"
              title="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* Mobile Menu */}
            <div className="md:hidden ml-1">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-secondary/50">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl">
                  <SheetHeader className="pb-8 pt-4">
                    <SheetTitle className="flex items-center gap-3 text-2xl font-black italic tracking-tighter">
                      <span className="text-3xl animate-bounce">🇧🇷</span>
                      BR STATES
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-3">
                    {navLinks.map(({ href, label, icon: Icon }) => {
                      const isActive = location.pathname === href;
                      return (
                        <Link
                          key={href}
                          to={href}
                          className={cn(
                            'flex items-center gap-4 px-6 py-4 rounded-2xl text-base font-black transition-all duration-300',
                            isActive
                              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 -translate-x-1'
                              : 'text-muted-foreground hover:bg-secondary hover:text-foreground hover:-translate-x-1'
                          )}
                        >
                          <Icon className="w-5 h-5" />
                          {label}
                        </Link>
                      );
                    })}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
