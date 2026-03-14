import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Ama de Casa",
    content: "Los gabinetes de cocina personalizados que construyeron para nosotros son absolutamente impresionantes. La atención al detalle y el arte de la artesanía es incomparable. ¡Altamente recomendado!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Arquitecto de Propiedades",
    content: "Hemos trabajado con Carpinteria Nasca en varios proyectos de renovación. Su profesionalismo, calidad del trabajo y capacidad para cumplir con plazos hacen que sean nuestro equipo de carpintería de elección.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Diseñadora de Interiores",
    content: "Regularmente recomiendo Carpinteria Nasca a mis clientes. Ellos dan vida a los diseños con artesanía excepcional y siempre entregan más de lo esperado.",
    rating: 5,
  },
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
