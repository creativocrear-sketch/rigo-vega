import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Maria Gonzalez',
      role: 'Empresaria, Cartago',
      text: 'Rigo entiende los desafios que enfrentamos los emprendedores. Sus propuestas sobre formalizacion economica son exactamente lo que necesitamos.',
      rating: 5,
    },
    {
      name: 'Juan Carlos Rodriguez',
      role: 'Agricultor, Alcala',
      text: 'Es un candidato que realmente camina el territorio y escucha. Creo que puede hacer una diferencia real en el Valle del Cauca.',
      rating: 5,
    },
    {
      name: 'Ana Maria Lopez',
      role: 'Docente, Cali',
      text: 'Me impresiona su compromiso con la educacion y la salud. Necesitamos representantes que prioricen el bienestar de nuestras comunidades.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Lo que dicen los Vallecaucanos
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Testimonios de ciudadanos que creen en el proyecto de recuperar el liderazgo del Valle del Cauca.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border border-border hover:shadow-lg transition-shadow">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
