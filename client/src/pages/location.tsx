import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Car, Train, Phone } from 'lucide-react';
import { loadContent } from '@/lib/content-loader';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Location() {
  const [contacts, setContacts] = useState<{
    address: string;
    phones: string[];
    coordinates: {
      latitude: string;
      longitude: string;
    };
  }>({
    address: '',
    phones: [],
    coordinates: { latitude: '', longitude: '' }
  });
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContent().then(data => {
      setContacts(data.contacts);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Загрузка карты...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Как добраться</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Подробная схема проезда и контактная информация
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Адрес и местоположение
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">{contacts.address}</p>
              
              <div className="w-full h-96 bg-muted rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    Интерактивная карта Яндекс будет добавлена здесь
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Для интеграции необходимо добавить API ключ Яндекс.Карт
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Координаты:</h4>
                  <p className="text-sm text-muted-foreground">
                    Широта: {contacts.coordinates.latitude || 'Не указано'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Долгота: {contacts.coordinates.longitude || 'Не указано'}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Контакты:</h4>
                  {contacts.phones.map((phone, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{phone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5 text-primary" />
                На автомобиле
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Из Москвы:</h4>
                  <p className="text-sm text-muted-foreground">
                    1. По трассе М-54 "Енисей" до Абакана (примерно 3400 км)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2. Из Абакана в сторону Ширы (40 км)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    3. Далее по указателям к озеру Белё
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Из Новосибирска:</h4>
                  <p className="text-sm text-muted-foreground">
                    1. По трассе Р-255 "Сибирь" до Кемерово
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2. Далее по М-54 до Абакана
                  </p>
                  <p className="text-sm text-muted-foreground">
                    3. Из Абакана в сторону Ширы и озера Белё
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Train className="h-5 w-5 text-primary" />
                На поезде
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Железнодорожный транспорт:</h4>
                  <p className="text-sm text-muted-foreground">
                    1. Поезд до станции Абакан
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2. Из Абакана на автобусе или такси до Ширы
                  </p>
                  <p className="text-sm text-muted-foreground">
                    3. Далее трансфер до базы отдыха
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Трансфер:</h4>
                  <p className="text-sm text-muted-foreground">
                    Возможна организация трансфера от станции Абакан
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Уточняйте стоимость и условия по телефону
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle>Важная информация</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  • Рекомендуем уточнить актуальные условия проезда перед поездкой
                </p>
                <p className="text-sm text-muted-foreground">
                  • В зимний период возможны ограничения движения по некоторым дорогам
                </p>
                <p className="text-sm text-muted-foreground">
                  • Навигатор может не показывать точное местоположение базы - звоните для уточнения
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}