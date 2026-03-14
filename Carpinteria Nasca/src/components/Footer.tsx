import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl text-amber-500 mb-4">Carpinteria Nasca</h3>
            <p className="text-gray-400 mb-4">
              Servicios Profesionales de Carpintería para proyectos residenciales y comerciales. 
              Creando excelencia en madera desde 1968.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/p/Carpinter%C3%ADa-Nasca-100063639245024/?locale=es_LA" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/carpinteria_nasca_/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Instagram size={20} />
              </a>
              {/*<a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Linkedin size={20} />
              </a>*/}
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Links Rapidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-amber-500 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">Servicios</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-500 transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-500 transition-colors">Acerca de</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-500 transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li>(+54) 011 3842-7614</li>
              <li>info@carpinteer.com</li>
              <li>Calle 127 N°840</li>
              <li>Berazategui B1884, Bs As</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Carpinteer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
