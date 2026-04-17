import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-20 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Text Content */}
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <p className="text-sm font-medium text-white">Elecciones 8 de Marzo de 2026</p>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Sí es posible recuperar el liderazgo
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Rigo Alexander Vega te invita a ser parte de un proyecto que recupera la grandeza del Valle del Cauca a nivel nacional. Juntos, vamos a demostrar que el Partido Conservador sigue siendo la mejor opción.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-bold text-base px-8"
              >
                Vota C113 - Rigo Alexander Vega
                <ArrowRight className="ml-2" size={20} />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-bold text-base px-8"
              >
                Conoce las Propuestas
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <p className="text-4xl font-bold mb-2">14</p>
                <p className="text-white/80">Días para Votar</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">32</p>
                <p className="text-white/80">Municipios del Valle</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">+15K</p>
                <p className="text-white/80">Seguidores en Redes</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden md:flex justify-center items-start mt-0">
            <div className="w-full max-w-md aspect-square rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl flex-shrink-0 mt-20">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663365918901/KEdWCUyQDpkShtKw.jpg"
                alt="Rigo Alexander Vega - Candidato a la Cámara"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
