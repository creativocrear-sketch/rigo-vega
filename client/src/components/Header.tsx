import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre Rigo', href: '#sobre' },
    { label: 'Propuestas', href: '#propuestas' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">RV</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-primary">Rigo Alexander Vega</h1>
            <p className="text-xs text-muted-foreground">Cámara de Representantes - C113</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Vota C113
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
              Vota C113
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
