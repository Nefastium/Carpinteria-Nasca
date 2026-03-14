import { Hammer, Home, Sofa, TreePine, Wrench, Building } from "lucide-react";

const services = [
  {
    icon: Sofa,
    title: "Muebles Personalizados",
    description: "Muebles a medida diseñados y elaborados según sus especificaciones exactas, desde mesas de comedor hasta estanterías.",
  },
  {
    icon: Home,
    title: "Gabinetes de Cocina",
    description: "Gabinetes de cocina a medida que combinan funcionalidad con una apariencia impresionante.",
  },
  {
    icon: Building,
    title: "Renovaciones del Hogar",
    description: "Soluciones completas de carpintería para sus proyectos de renovación, desde el marco hasta los últimos detalles.",
  },
  {
    icon: TreePine,
    title: "Estructuras Exteriores",
    description: "Estructuras exteriores duraderos y hermosos, pergolas y estructuras de madera para su espacio exterior.",
  },
  {
    icon: Wrench,
    title: "Reparación de Muebles",
    description: "Servicios expertos de reparación y restauración para traer su mueble de madera de vuelta a la vida."
  },
  {
    icon: Hammer,
    title: "Carpintería de Alta Calidad",
    description: "Trabajo de carpintería preciso para detalles intrincados, acabados y proyectos de carpintería especializada.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desde el concepto hasta la finalización, ofrecemos servicios integrales de carpintería para proyectos residenciales y comerciales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <service.icon className="text-amber-700" size={32} />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
