import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { loadContent } from '@/lib/content-loader';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

interface GalleryCategory {
  title: string;
  photos: string[];
}

export default function Gallery() {
  const [photos, setPhotos] = useState<{
    beach: string[];
    territory: string[];
    sauna: string[];
    building: string[];
  }>({
    beach: [],
    territory: [],
    sauna: [],
    building: []
  });
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string>('beach');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContent().then(content => {
      setPhotos(content.photos.gallery);
      setLoading(false);
    });
  }, []);

  const categories: GalleryCategory[] = [
    { title: 'Пляж', photos: photos.beach },
    { title: 'Территория', photos: photos.territory },
    { title: 'Баня', photos: photos.sauna },
    { title: 'Корпус', photos: photos.building }
  ];

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Загрузка галереи...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Галерея</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Посмотрите на нашу прекрасную базу отдыха и убедитесь в качестве наших услуг
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.title}
                variant={currentCategory === category.title.toLowerCase() ? "default" : "outline"}
                onClick={() => setCurrentCategory(category.title.toLowerCase())}
                className="mb-2"
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.find(cat => cat.title.toLowerCase() === currentCategory)?.photos.map((photo, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleImageClick(photo)}
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo}
                    alt={`${currentCategory} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedImage}
                alt="Увеличенное изображение"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}