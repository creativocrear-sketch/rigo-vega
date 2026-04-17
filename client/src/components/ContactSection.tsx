import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor completa todos los campos requeridos');
      return;
    }
    toast.success('Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Ponte en Contacto
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Preguntas o sugerencias? Nos encantaria escucharte. Completa el formulario o comunicate directamente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Mail,
              title: 'Email',
              value: 'contacto@rigovalleducauca.com',
              description: 'Responderemos en 24 horas',
            },
            {
              icon: Phone,
              title: 'Telefono',
              value: '+57 (2) 2345-6789',
              description: 'Lunes a viernes, 8am - 6pm',
            },
            {
              icon: MapPin,
              title: 'Ubicacion',
              value: 'Cartago, Valle del Cauca',
              description: 'Siguenos en nuestras redes',
            },
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card key={index} className="p-8 text-center border border-border">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{contact.title}</h3>
                <p className="text-foreground font-semibold mb-2">{contact.value}</p>
                <p className="text-sm text-foreground/60">{contact.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-12 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Telefono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+57 3XX XXXXXXX"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuentanos tu pregunta o sugerencia..."
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 text-base"
              >
                Enviar Mensaje
              </Button>

              <p className="text-xs text-foreground/60 text-center">
                Respetamos tu privacidad. Tus datos solo seran usados para contactarte.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
