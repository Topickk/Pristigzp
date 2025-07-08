import { Leaf, Home, Users } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">О нас</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            База отдыха "ПРЕСТИЖ" – это место, где сочетаются комфорт современной жизни 
            и красота нетронутой природы
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Уютный интерьер базы отдыха" 
              className="rounded-2xl shadow-xl w-full h-auto" 
            />
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Leaf className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Экологически чистый район</h3>
                <p className="text-muted-foreground">
                  Наша база отдыха расположена в живописном месте, окруженном лесом и озером, 
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
                  Все номера оборудованы современной мебелью, кондиционерами, 
                  Wi-Fi и всеми необходимыми удобствами для комфортного проживания.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Профессиональный сервис</h3>
                <p className="text-muted-foreground">
                  Наша команда профессионалов готова обеспечить вам незабываемый отдых 
                  и помочь с любыми вопросами 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
