import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Muebles de Madera Personalizados",
    category: "Residencial",
    image: "https://github.com/Nefastium/Carpinteria-Nasca/blob/main/images/Personalizados.jpg?raw=true",
  },
  {
    title: "Renovación del Hogar",
    category: "Renovación",
    image: "https://github.com/Nefastium/Carpinteria-Nasca/blob/main/images/Renovacion.jpg?raw=true",
  },
  {
    title: "Estructuras Exteriores",
    category: "Exterior",
    image: "https://github.com/Nefastium/Carpinteria-Nasca/blob/main/images/Exterior.jpg?raw=true",
  },
  {
    title: "Gabinetes de Cocina",
    category: "Cocina",
    image: "https://github.com/Nefastium/Carpinteria-Nasca/blob/main/images/Cocina.jpg?raw=true",
  },
  {
    title: "Mesa de Madera Moderna",
    category: "Muebles",
    image: "https://github.com/Nefastium/Carpinteria-Nasca/blob/main/images/Mesa.jpg?raw=true",
  },
  {
    title: "Gabinetes Personalizados",
    category: "Comercial",
    image: "https://github.com/Nefastium/Carpinteria-Nasca/blob/main/images/Gabinete.jpg?raw=true",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Nuestro Portafolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora nuestros proyectos recientes y descubre la calidad de artesanía que aportamos a cada trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="aspect-[4/4] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <p className="text-sm text-amber-400 mb-1">{project.category}</p>
                  <h3 className="text-2xl">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
