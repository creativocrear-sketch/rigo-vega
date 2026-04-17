import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const achievements = [
    'Administrador de Empresas con experiencia empresarial comprobada',
    'Docente Universitario en la Universidad del Valle',
    'Ex Concejal de Cartago con gestión reconocida',
    'Ex Diputado del Valle del Cauca',
    'Empresario generador de empleo en la región',
    'Reconocido como Personaje del Año en Política por Revista Graffiti',
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative -mt-10">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663365918901/VPeZvTlwwzTfAtax.jpg" 
              alt="Rigo Alexander Vega" 
              className="rounded-2xl aspect-square object-cover border-2 border-primary/20 w-full h-full"
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full"></div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Rigo Alexander Vega Ortiz
            </h2>

            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Soy un empresario cartagüeño comprometido con el desarrollo del Valle del Cauca. Con formación en Administración de Empresas y experiencia en docencia universitaria, he dedicado mi vida a generar oportunidades de empleo y a servir a mi comunidad.
            </p>

            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Mi trayectoria política incluye experiencia como Concejal y Diputado, donde he trabajado por políticas que beneficien a los vallecaucanos. Creo firmemente que el Partido Conservador tiene la capacidad de recuperar su liderazgo y llevar al Valle del Cauca a la grandeza que merece.
            </p>

            {/* Achievements */}
            <div className="space-y-3">
              <p className="font-semibold text-primary mb-4">Trayectoria y logros:</p>
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground/80">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Liderazgo',
              description: 'Recuperar el protagonismo del Valle del Cauca en las decisiones nacionales',
            },
            {
              title: 'Gestión',
              description: 'Aplicar principios empresariales a la administración pública',
            },
            {
              title: 'Compromiso',
              description: 'Trabajar sin descanso por el bienestar de los vallecaucanos',
            },
          ].map((value, index) => (
            <Card key={index} className="p-8 text-center border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
              <p className="text-foreground/70">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
