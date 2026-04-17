import { Card } from '@/components/ui/card';
import { Briefcase, Users, TrendingUp, Leaf, Building2, Heart } from 'lucide-react';

export default function ProposalsSection() {
  const proposals = [
    {
      icon: Briefcase,
      title: 'Formalización Económica',
      description: 'Políticas claras para pasar del sector informal al formal, generando empleo digno y seguridad social para los vallecaucanos.',
    },
    {
      icon: Users,
      title: 'Inclusión Social',
      description: 'Programas de capacitación y emprendimiento que beneficien a las comunidades más vulnerables del Valle del Cauca.',
    },
    {
      icon: TrendingUp,
      title: 'Desarrollo Económico',
      description: 'Atracción de inversión nacional e internacional para impulsar el crecimiento económico regional sostenible.',
    },
    {
      icon: Leaf,
      title: 'Sostenibilidad',
      description: 'Protección del medio ambiente y los recursos naturales del Valle, asegurando desarrollo para futuras generaciones.',
    },
    {
      icon: Building2,
      title: 'Infraestructura',
      description: 'Mejora de vías, servicios públicos y conectividad digital en todos los municipios del Valle del Cauca.',
    },
    {
      icon: Heart,
      title: 'Salud y Educación',
      description: 'Fortalecimiento de sistemas de salud y educación de calidad accesible para todos los vallecaucanos.',
    },
  ];

  return (
    <section id="propuestas" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nuestras Propuestas
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Un plan integral para recuperar el liderazgo del Valle del Cauca y mejorar la calidad de vida de todos sus habitantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proposals.map((proposal, index) => {
            const Icon = proposal.icon;
            return (
              <Card
                key={index}
                className="p-8 border border-border hover:shadow-xl transition-all hover:border-primary/30 group"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{proposal.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{proposal.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-primary text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Juntos vamos a recuperar el liderazgo
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Estas propuestas son el resultado de escuchar a los vallecaucanos en cada municipio, vereda y barrio. Tu voto el 8 de marzo es tu voz en el Congreso.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-lg transition-colors">
            Vota C113 - Rigo Alexander Vega
          </button>
        </div>
      </div>
    </section>
  );
}
