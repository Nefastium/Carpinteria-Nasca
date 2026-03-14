import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Guillermo Moreira",
    role: "Google Review",
    content: "Si tuviese 10 estrellas, se lo pondría. Adrían, y su flia son carpinteros de los que no hay. Verdaderos artesanos apasionados por su trabajo. Atentos, diligentes, rápidos y en precio.",
    rating: 5,
  },
  {
    name: "Nicolas Guido Di Nucci",
    role: "Google Review",
    content: "Excelentes profesionales en su oficio, tanto padre como hijos unos capo Flia. NASCA! Hicimos todos los muebles de casa y negocio a medida, no le pongo 10 estrellas porque solo me deja 5 la app.!",
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Lo que dicen Nuestros Clientes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No solamente tomamos nuestra palabra - escuche de nuestros clientes satisfechos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-500 fill-amber-500" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
