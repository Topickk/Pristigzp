import { Star, Bed } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              База отдыха
              <span className="text-primary block">ПРЕСТИЖ</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Комфортный отдых на природе в экологически чистом районе. 
              Современные номера, развитая инфраструктура и незабываемые впечатления.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={scrollToContact} className="px-8 py-4">
                Забронировать номер
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToAbout} className="px-8 py-4">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Современная база отдыха ПРЕСТИЖ" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            
            {/* Floating info cards */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Star className="text-white" />
                </div>
                <div>
                  <p className="font-semibold">4.9/5</p>
                  <p className="text-sm text-muted-foreground">Рейтинг гостей</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-xl border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Bed className="text-white" />
                </div>
                <div>
                  <p className="font-semibold">25+</p>
                  <p className="text-sm text-muted-foreground">Номеров</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
