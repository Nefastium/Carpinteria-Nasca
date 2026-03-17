import { Award, Users, Clock, CheckCircle } from "lucide-react";

const stats = [
  { icon: Award, value: "+50", label: "Años de Experiencia" },
  { icon: Users, value: "+500", label: "Clientes Satisfechos" },
  { icon: Clock, value: "+1000", label: "Proyectos Completados" },
  { icon: CheckCircle, value: "100%", label: "Tasa de Satisfacción" },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">Sobre Nosotros</h2>
            <p className="text-lg text-gray-600 mb-6">
              Con mas de 50 años de experiencia en carpintería fina y trabajos de madera, Carpinteria Nasca se ha convertido en un nombre confiable en muebles personalizados y proyectos de renovación del hogar.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Nuestros equipos combinan técnicas tradicionales de trabajos de madera con innovación moderna para ofrecer resultados excepcionales que resisten la prueba del tiempo.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Tenemos orgullo en cada proyecto, tratando su hogar con la misma dedicación y atención al detalle que tendríamos en el nuestro. Desde la consulta inicial hasta la instalación final, nos comprometemos a superar sus expectativas.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="text-amber-700" size={20} />
                <span>Certificado & Asegurado</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="text-amber-700" size={20} />
                <span>Garantía de Calidad</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="text-amber-700" size={20} />
                <span>Consultas Gratuitas</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-amber-700" size={24} />
                </div>
                <div className="text-4xl text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
