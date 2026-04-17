import { Facebook, Instagram, Youtube, Music2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">RV</span>
              </div>
              <span className="font-bold text-lg">Rigo Vega</span>
            </div>
            <p className="text-white/80 text-sm">
              Candidato a la Camara de Representantes por el Valle del Cauca
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#inicio" className="hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre Rigo</a></li>
              <li><a href="#propuestas" className="hover:text-accent transition-colors">Propuestas</a></li>
              <li><a href="#contacto" className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4">Redes Sociales</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://www.facebook.com/rigoalexander.vega/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/rigoavega/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@rigoalexandervega" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Music2 size={20} />
              </a>
              <a href="https://www.youtube.com/channel/UCgow0ELc8krYfW_0fqKtHpQ" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
            <h3 className="font-normal text-white">
              Contactanos: +57 3133838764
            </h3>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-bold mb-4">Elecciones 2026</h3>
            <p className="text-sm text-white/80 mb-4">
              Vota el 8 de marzo. Tu voz importa.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-primary font-bold py-2 px-4 rounded-lg transition-colors text-sm w-full">
              Vota C113
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>
              &copy; {currentYear} Rigo Alexander Vega. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacidad</a>
              <a href="#" className="hover:text-accent transition-colors">Terminos</a>
              <a href="#" className="hover:text-accent transition-colors">Contacto</a>
            </div>
          </div>
        </div>

        {/* Election Info */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/80">
          <p>
            Campaña electoral autorizada. Partido Conservador Colombiano - Codigo C113
          </p>
        </div>
      </div>
    </footer>
  );
}
