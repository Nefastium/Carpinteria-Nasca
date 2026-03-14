import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1590880795696-20c7dfadacde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b3Jrc2hvcCUyMHRvb2xzfGVufDF8fHx8MTc3MzQwODM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Carpentry workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-7xl mb-6">
          Creando Excelencia en Madera
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Carpinteria Profesional para Proyectos Residenciales y Comerciales. Desde 1968, Dedicados a la Artesanía de Calidad.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="bg-amber-700 text-white px-8 py-4 rounded-md hover:bg-amber-800 transition-colors flex items-center justify-center gap-2"
          >
            Contáctanos
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-white text-gray-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors"
          >
            Nuestro Trabajo
          </button>
        </div>
      </div>
    </section>
  );
}
