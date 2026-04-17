import { Card } from '@/components/ui/card';

export default function GallerySection() {
  const galleryItems = [
    {
      title: 'Recorrido Territorial',
      description: 'Visitando municipios del Valle del Cauca',
      category: 'Campana',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663365918901/LpolMrtdTeUGkEDt.jpeg',
    },
    {
      title: 'Con Carlos Holguín Sardi',
      description: 'El Doctor Holguín ha sido Alcalde de Cali, Gobernador del Valle del Cauca, Ministro del Interior, Senador, entre otros.',
      category: 'Eventos',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663365918901/yPERMhIQWQomAzie.jpg',
    },
    {
      title: 'Propuestas Politicas',
      description: 'Presentando soluciones para el desarrollo regional',
      category: 'Propuestas',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663365918901/WEbzNSaWyuCmoEZz.jpeg',
    },
    {
      title: 'Movilizacion Electoral',
      description: 'Activacion de campaña en municipios clave',
      category: 'Campana',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663365918901/FCuRYndWJJzFvOYO.jpeg',
    },
    {
      title: 'Encuentro con Empresarios',
      description: 'Dialogando sobre formalizacion economica',
      category: 'Eventos',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663365918901/reGmeWiFwnVuhkKo.jpeg',
    },
    {
      title: 'Cierre de Campaña',
      description: 'Gran evento en Bello Horizonte',
      category: 'Campana',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663365918901/NYpzhmovSJXDpELQ.jpeg',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Galeria de campaña
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Momentos destacados de nuestra campana recorriendo el Valle del Cauca.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-border hover:shadow-xl transition-all group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 aspect-square flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center">
                    <div className="text-5xl mb-2">📸</div>
                    <p className="text-sm text-primary/60">{item.category}</p>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-foreground/70 mb-6">
            Mas fotos y videos en nuestras redes sociales
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.facebook.com/rigoalexander.vega/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
              Facebook
            </a>
            <a href="https://www.instagram.com/rigoavega/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold transition-colors">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@rigoalexandervega" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-900 hover:bg-black text-white rounded-lg font-semibold transition-colors">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
