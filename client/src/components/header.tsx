import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';
import { Link, useLocation } from 'wouter';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect theme-transition">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center relative">
              {/* Якорь */}
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2M12 7C10.34 7 9 8.34 9 10C9 11.66 10.34 13 12 13C13.66 13 15 11.66 15 10C15 8.34 13.66 7 12 7M12 8.5C12.83 8.5 13.5 9.17 13.5 10C13.5 10.83 12.83 11.5 12 11.5C11.17 11.5 10.5 10.83 10.5 10C10.5 9.17 11.17 8.5 12 8.5M6 14C6 18.41 8.69 22 12 22C15.31 22 18 18.41 18 14H16C16 17.31 14.21 20 12 20C9.79 20 8 17.31 8 14H6M12 13V22" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="relative">
                <div className="bg-primary text-white px-3 py-1 text-sm font-bold rounded-md transform -rotate-1 shadow-md">
                  ПРЕСТИЖ
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Главная
            </Link>
            <Link
              href="/gallery"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isActive('/gallery') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Галерея
            </Link>
            <Link
              href="/rules"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isActive('/rules') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Правила
            </Link>
            <Link
              href="/location"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isActive('/location') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Как добраться
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-in slide-in-from-top-5">
            <div className="flex flex-col space-y-3 py-4">
              <Link
                href="/"
                className={`text-sm font-medium hover:text-primary transition-colors text-left ${
                  isActive('/') ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link
                href="/gallery"
                className={`text-sm font-medium hover:text-primary transition-colors text-left ${
                  isActive('/gallery') ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Галерея
              </Link>
              <Link
                href="/rules"
                className={`text-sm font-medium hover:text-primary transition-colors text-left ${
                  isActive('/rules') ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Правила
              </Link>
              <Link
                href="/location"
                className={`text-sm font-medium hover:text-primary transition-colors text-left ${
                  isActive('/location') ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Как добраться
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
