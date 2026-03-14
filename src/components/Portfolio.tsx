import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Muebles de Madera Personalizados",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1627417831791-0ebccf44076c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjB3b29kZW4lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzczMzM4NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Renovación del Hogar",
    category: "Renovación",
    image: "https://images.unsplash.com/photo-1767389193137-77d6f9b8b56a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMGNhcnBlbnRyeXxlbnwxfHx8fDE3NzM0MDgzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Estructuras Exteriores",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1690245268435-629719c24d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkZWNrJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzMzMzA1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Gabinetes de Cocina",
    category: "Cocina",
    image: "https://images.unsplash.com/photo-1598698628529-78863e5d4b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY2FiaW5ldHMlMjB3b29kfGVufDF8fHx8MTc3MzQwODM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Mesa de Madera Moderna",
    category: "Muebles",
    image: "https://images.unsplash.com/photo-1617638924751-cc232f82ecf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b29kZW4lMjB0YWJsZXxlbnwxfHx8fDE3NzM0MDgzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Gabinetes Personalizados",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1598698628529-78863e5d4b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY2FiaW5ldHMlMjB3b29kfGVufDF8fHx8MTc3MzQwODM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
              <div className="aspect-[4/3] overflow-hidden">
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
