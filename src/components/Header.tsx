import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="https://github.com/Nefastium/Carpinteria-Nasca/blob/main/images/nasca-logo.png?raw=true" alt="Carpinteria Nasca" className="h-10 w-10 mr-3" />
            <span className="text-2xl text-amber-700">Carpinteria Nasca</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-amber-700 transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-amber-700 transition-colors">
                Servicios
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-gray-700 hover:text-amber-700 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-amber-700 transition-colors">
              Acerca de
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-amber-700 transition-colors">
              Contacto
            </button>
          </nav>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block bg-amber-700 text-white px-6 py-2 rounded-md hover:bg-amber-800 transition-colors"
          >
            Solicitar Presupuesto
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-amber-700 transition-colors text-left">
              Inicio
            </button>
            <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-amber-700 transition-colors text-left">
              Servicios
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-gray-700 hover:text-amber-700 transition-colors text-left">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-amber-700 transition-colors text-left">
              Acerca de
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-amber-700 transition-colors text-left">
              Contacto
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-amber-700 text-white px-6 py-2 rounded-md hover:bg-amber-800 transition-colors text-left"
            >
              Solicitar Presupuesto
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
