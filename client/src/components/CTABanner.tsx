import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Message */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              El 8 de Marzo, Tu voto cuenta
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Vota por Rigo Alexander Vega para recuperar el liderazgo del Valle del Cauca en el Congreso de la Republica.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Formalizacion economica y empleo digno',
                'Infraestructura y conectividad regional',
                'Salud y educacion de calidad',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-accent flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-8 py-4"
            >
              Vota C113 - Rigo Alexander Vega
            </Button>
          </div>

          {/* Right: Voting Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Informacion de votacion</h3>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-white/80 mb-2">FECHA</p>
                <p className="text-3xl font-bold">8 de Marzo de 2026</p>
              </div>

              <div>
                <p className="text-sm text-white/80 mb-2">CARGO</p>
                <p className="text-2xl font-bold">Camara de Representantes</p>
              </div>

              <div>
                <p className="text-sm text-white/80 mb-2">CODIGO DE VOTO</p>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-4xl font-bold text-accent">C113</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-white/80 mb-2">CANDIDATO</p>
                <p className="text-xl font-bold">Rigo Alexander Vega Ortiz</p>
              </div>

              <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                <p className="text-sm text-white/80 mb-2">TERRITORIO</p>
                <p className="font-semibold">Valle del Cauca</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
