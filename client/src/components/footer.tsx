import React from 'react';

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
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1L9 7V9H11V14H13V9H21M12 10C8.69 10 6 12.69 6 16C6 19.31 8.69 22 12 22C15.31 22 18 19.31 18 16C18 12.69 15.31 10 12 10M12 12C14.21 12 16 13.79 16 16C16 18.21 14.21 20 12 20C9.79 20 8 18.21 8 16C8 13.79 9.79 12 12 12Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="relative">
                  <div className="bg-primary text-white px-2 py-1 text-xs font-bold rounded transform -rotate-1">
                    ПРЕСТИЖ
                  </div>
                </div>
              </div>
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
        </div>

      </div>
    </footer>
  );
}
