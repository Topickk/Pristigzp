import { useState } from 'react';
import { Menu, Mountain, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect theme-transition">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Mountain className="text-white text-xl" />
            </div>
            <span className="text-xl font-bold">ПРЕСТИЖ</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Галерея
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Контакты
            </button>
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
              <button
                onClick={() => scrollToSection('home')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Контакты
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
