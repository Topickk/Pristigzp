import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Home, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { loadContent } from '@/lib/content-loader';

export default function HomePage() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContent().then(data => {
      setContent(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Загрузка...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative section-padding bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                  {content.texts.hero.title.split(' ').slice(0, 2).join(' ')}
                  <span className="text-primary block">
                    {content.texts.hero.title.split(' ').slice(2).join(' ')}
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {content.texts.hero.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/gallery">
                    <Button size="lg" className="w-full sm:w-auto">
                      Посмотреть галерею
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/location">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Как добраться
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <img
                    src={content.photos.hero}
                    alt="База отдыха Престиж на озере Белё"
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section-padding bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">{content.texts.about.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {content.texts.about.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {content.texts.about.features.map((feature: any, index: number) => {
                const icons = [Leaf, Home, MapPin];
                const Icon = icons[index];
                const colors = ['bg-primary', 'bg-accent', 'bg-secondary'];
                
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${colors[index]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">{content.texts.gallery.title}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                {content.texts.gallery.description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {content.photos.gallery.beach.slice(0, 4).map((photo: string, index: number) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={photo}
                      alt={`Фото ${index + 1}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/gallery">
                <Button size="lg">
                  Посмотреть все фото
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Контакты</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Свяжитесь с нами для бронирования или получения дополнительной информации
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                      <p className="text-muted-foreground">{content.contacts.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Телефоны</h3>
                      <div className="space-y-1">
                        {content.contacts.phones.map((phone: string, index: number) => (
                          <p key={index} className="text-muted-foreground">
                            <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-primary transition-colors">
                              {phone}
                            </a>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
