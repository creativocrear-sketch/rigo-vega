import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function EventsSection() {
  const events = [
    {
      date: '21 de Febrero',
      title: 'Cierre de Campana - Bello Horizonte',
      time: '3:00 PM',
      location: 'Balneario Bello Horizonte, Cartago',
      description: 'Gran evento de cierre de campana con artistas invitados y presencia de figuras politicas importantes.',
      status: 'Proximo',
    },
    {
      date: '24 de Febrero',
      title: 'Dialogo con Emprendedores',
      time: '10:00 AM',
      location: 'Camara de Comercio, Cartago',
      description: 'Conversatorio sobre formalizacion economica y generacion de empleo en el Valle del Cauca.',
      status: 'Proximo',
    },
    {
      date: '26 de Febrero',
      title: 'Recorrido Territorial - Norte del Valle',
      time: '8:00 AM',
      location: 'Municipios del norte del Valle',
      description: 'Visita a municipios para escuchar directamente las necesidades de los vallecaucanos.',
      status: 'Proximo',
    },
    {
      date: '1 de Marzo',
      title: 'Foro de Propuestas Politicas',
      time: '2:00 PM',
      location: 'Auditorio Municipal, Cali',
      description: 'Presentacion de propuestas ante candidatos y ciudadania interesada en debatir el futuro del Valle.',
      status: 'Proximo',
    },
    {
      date: '5 de Marzo',
      title: 'Activacion Electoral - Municipios Clave',
      time: '9:00 AM',
      location: 'Varios municipios del Valle',
      description: 'Campana de activacion electoral en municipios estrategicos para movilizar votantes.',
      status: 'Proximo',
    },
    {
      date: '8 de Marzo',
      title: 'Dia de Elecciones',
      time: 'Todo el dia',
      location: 'Toda la Republica',
      description: 'Vota por Rigo Alexander Vega - Camara de Representantes - Codigo C113',
      status: 'Elecciones',
    },
  ];

  return (
    <section id="eventos" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Recuerda votar por Rigo
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            
          </p>
        </div>

        <div className="space-y-6">
          {events.filter(event => event.date === '8 de Marzo').map((event, index) => (
            <Card
              key={index}
              className="p-8 border border-border hover:shadow-lg transition-all hover:border-primary/30 group"
            >
              <div className="grid md:grid-cols-4 gap-6 items-start">
                {/* Date */}
                <div className="md:col-span-1">
                  <div className="bg-primary/10 rounded-lg p-4 text-center group-hover:bg-accent/10 transition-colors">
                    <p className="text-sm font-semibold text-primary mb-2"></p>
                    <p className="text-2xl font-bold text-primary">{event.date}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-primary mb-3">{event.title}</h3>
                  <p className="text-foreground/70 mb-4">{event.description}</p>

                  <div className="space-y-2 text-sm text-foreground/60">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-accent" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="md:col-span-1 flex items-center justify-end">
                  <div className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${
                    event.status === 'Elecciones'
                      ? 'bg-accent text-primary'
                      : 'bg-primary'
                  }`}>
                    {event.status}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Calendar Info */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12 text-center">
          <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-2">
            Mantente informado
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Suscribete a nuestras redes sociales para recibir actualizaciones en tiempo real sobre eventos, noticias de campana y propuestas.
          </p>
          <a href="#contacto" className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Seguir en Redes Sociales
          </a>
        </div>
      </div>
    </section>
  );
}
