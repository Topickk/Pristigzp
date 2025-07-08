import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shield, AlertCircle, Calendar, DollarSign } from 'lucide-react';
import { loadContent } from '@/lib/content-loader';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Rules() {
  const [content, setContent] = useState<{
    rules: string[];
    cancellation: string[];
    penalties: string[];
  }>({
    rules: [],
    cancellation: [],
    penalties: []
  });
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContent().then(data => {
      setContent(data.texts.rules);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Загрузка правил...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Правила проживания</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ознакомьтесь с правилами для комфортного и безопасного отдыха
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Основные правила
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {content.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Условия отмены бронирования
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {content.cancellation.map((condition, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Штрафы и дополнительные платежи
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {content.penalties.map((penalty, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{penalty}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                Важная информация
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  • Администрация базы отдыха оставляет за собой право внести изменения в правила проживания
                </p>
                <p className="text-sm text-muted-foreground">
                  • При заселении необходимо предоставить документ, удостоверяющий личность
                </p>
                <p className="text-sm text-muted-foreground">
                  • Гости несут материальную ответственность за причиненный ущерб имуществу
                </p>
                <p className="text-sm text-muted-foreground">
                  • За нарушение правил пожарной безопасности взимается штраф согласно действующему законодательству
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