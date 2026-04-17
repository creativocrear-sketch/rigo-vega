import { Card } from '@/components/ui/card';
import { Facebook, Instagram, Youtube, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SocialMediaSection() {
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      followers: '10.9K',
      description: 'Síguenos para actualizaciones diarias de campaña',
      url: 'https://www.facebook.com/rigoalexander.vega/',
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      followers: '1K+',
      description: 'Contenido visual de eventos y propuestas',
      url: 'https://www.instagram.com/rigoavega/',
      color: 'from-pink-500 to-purple-600',
    },
    {
      name: 'TikTok',
      icon: Music2,
      followers: '3.7K',
      description: 'Videos cortos y contenido dinámico',
      url: 'https://www.tiktok.com/@rigoalexandervega',
      color: 'from-gray-900 to-black',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      followers: '36',
      description: 'Videos completos de campaña y propuestas',
      url: 'https://www.youtube.com/channel/UCgow0ELc8krYfW_0fqKtHpQ',
      color: 'from-red-600 to-red-700',
    },
  ];

  return (
    <section id="contacto" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Síguenos en redes sociales
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Mantente conectado con las últimas noticias, eventos y propuestas de la campaña. Comparte y amplifica nuestro mensaje.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPlatforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full p-8 border border-border hover:shadow-xl transition-all hover:border-primary/30 cursor-pointer">
                  <div className={`bg-gradient-to-br ${platform.color} w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-2">{platform.name}</h3>

                  <p className="text-3xl font-bold text-accent mb-4">{platform.followers}</p>

                  <p className="text-foreground/70 text-sm mb-6">{platform.description}</p>

                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Seguir
                  </Button>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Engagement Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">15.6K+</p>
              <p className="text-foreground/70">Seguidores totales</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">38.1K</p>
              <p className="text-foreground/70">Likes acumulados</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-foreground/70">Compromiso diario</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
