import { Leaf, Home, MapPin } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">О нас</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            База отдыха "ПРЕСТИЖ" – это место, где сочетаются комфорт современной жизни 
            и красота нетронутой природы Хакасии
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-2xl shadow-xl w-full h-80 bg-muted flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                [ФОТО ТЕРРИТОРИИ]<br/>
                <span className="text-sm">Добавьте ссылку в файл фотографии_и_изображения.txt</span>
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Leaf className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Экологически чистый район</h3>
                <p className="text-muted-foreground">
                  Наша база отдыха расположена в живописном месте на берегу озера Белё, 
                  вдали от городской суеты и загрязнения.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Home className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Современный комфорт</h3>
                <p className="text-muted-foreground">
                  Все номера оборудованы современными удобствами для комфортного проживания.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Отличное расположение</h3>
                <p className="text-muted-foreground">
                  Прямо на берегу красивейшего озера Белё в Республике Хакасия.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
