import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Контакты</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Свяжитесь с нами для бронирования или получения дополнительной информации
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">
                  Республика Хакасия, Ширинский район, озеро Белё
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Телефоны</h3>
                <p className="text-muted-foreground">
                  8950-965-5555<br/>
                  8902-467-5000<br/>
                  8902-468-9999
                </p>
              </div>
            </div>
            

            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
                <p className="text-muted-foreground">
                  Телефоны работают с 9:00 до 21:00
                </p>
              </div>
            </div>
          </div>
          
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Написать нам</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя</Label>
                <Input id="name" placeholder="Введите ваше имя" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Введите ваш email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea id="message" rows={4} placeholder="Ваше сообщение" />
              </div>
              
              <Button className="w-full" size="lg">
                Отправить сообщение
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
