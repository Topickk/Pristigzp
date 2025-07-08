import { Mountain, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Mountain className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold">ПРЕСТИЖ</span>
            </div>
            <p className="text-slate-400">
              Комфортный отдых на природе в экологически чистом районе.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="hover:text-white transition-colors"
                >
                  Главная
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors"
                >
                  О нас
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors"
                >
                  Услуги
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="hover:text-white transition-colors"
                >
                  Галерея
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-slate-400">
              <li><span className="hover:text-white transition-colors cursor-pointer">Размещение</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Ресторан</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">SPA центр</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Активный отдых</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.12 5.32H17V2.14c-.32-.04-1.41-.14-2.68-.14-2.65 0-4.47 1.62-4.47 4.6v2.72H7v3.54h2.85V22h3.54v-9.14H16.7l.54-3.54h-4.08V7.05c0-1.05.29-1.77 1.8-1.77z"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 База отдыха "ПРЕСТИЖ". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
