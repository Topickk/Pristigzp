import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function ServicesSection() {
  const services = [
    {
      title: "Стандартный номер",
      description: "Уютный номер для двоих с современными удобствами и красивым видом на природу.",
      price: "от 3500₽",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Люкс номер",
      description: "Просторный номер повышенной комфортности с отдельной гостиной и балконом.",
      price: "от 5500₽",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Семейный номер",
      description: "Большой номер для семейного отдыха с дополнительными спальными местами.",
      price: "от 6500₽",
      image: "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Ресторан",
      description: "Изысканная кухня с блюдами из местных продуктов и прекрасным видом на озеро.",
      price: "08:00 - 23:00",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      isService: true
    },
    {
      title: "SPA центр",
      description: "Полный спектр SPA-услуг: массаж, сауна, бассейн и косметические процедуры.",
      price: "10:00 - 22:00",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      isService: true
    },
    {
      title: "Активный отдых",
      description: "Велосипеды, лодки, пешие прогулки и множество других активностей на природе.",
      price: "24/7",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      isService: true
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Услуги и номера</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы предлагаем широкий спектр услуг для комфортного и незабываемого отдыха
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <CardHeader className="p-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover" 
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold mb-3">{service.title}</CardTitle>
                <p className="text-muted-foreground mb-4">{service.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between items-center">
                <span className={`${service.isService ? 'text-sm text-muted-foreground' : 'text-2xl font-bold text-primary'}`}>
                  {service.price}
                </span>
                <Button className={service.isService ? 'bg-accent hover:bg-accent/90' : ''}>
                  {service.isService ? 'Подробнее' : 'Забронировать'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
