import { Search } from 'lucide-react';

export function GallerySection() {
  const images = [
    {
      src: "",
      alt: "Пляж базы отдыха на озере Белё",
      placeholder: "Пляж"
    },
    {
      src: "",
      alt: "Территория базы отдыха Престиж",
      placeholder: "Территория базы"
    },
    {
      src: "",
      alt: "Баня на базе отдыха",
      placeholder: "Баня"
    },
    {
      src: "",
      alt: "Корпус базы отдыха Престиж",
      placeholder: "Корпус базы"
    },
    {
      src: "",
      alt: "Озеро Белё, Хакасия",
      placeholder: "Озеро Белё"
    },
    {
      src: "",
      alt: "Окрестности базы отдыха",
      placeholder: "Окрестности"
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Галерея</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Посмотрите на нашу прекрасную базу отдыха и убедитесь в качестве наших услуг
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden rounded-2xl">
              <div className="w-full h-64 bg-muted flex items-center justify-center transition-transform group-hover:scale-105">
                <p className="text-muted-foreground text-center">
                  [{image.placeholder}]<br/>
                  <span className="text-xs">Добавьте фото в файл фотографии_и_изображения.txt</span>
                </p>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Search className="text-white text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
