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
                  <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2M12 7C10.34 7 9 8.34 9 10C9 11.66 10.34 13 12 13C13.66 13 15 11.66 15 10C15 8.34 13.66 7 12 7M12 8.5C12.83 8.5 13.5 9.17 13.5 10C13.5 10.83 12.83 11.5 12 11.5C11.17 11.5 10.5 10.83 10.5 10C10.5 9.17 11.17 8.5 12 8.5M6 14C6 18.41 8.69 22 12 22C15.31 22 18 18.41 18 14H16C16 17.31 14.21 20 12 20C9.79 20 8 17.31 8 14H6M12 13V22" />
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
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-slate-400">
              <li><span className="hover:text-white transition-colors cursor-pointer">Размещение</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Правила проживания</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Схема проезда</span></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
