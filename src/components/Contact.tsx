import { Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const message = `Hola! soy ${formData.name}. Quiero hacer una consulta por Carpinteria Nasca.

  ${formData.message}`;

    const phoneNumber = "541138427614";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Contáctanos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Listo para comenzar tu proyecto? Contáctanos hoy para una consulta y cotización gratuitas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl mb-6 text-gray-900">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-amber-700" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Numero de Teléfono</h4>
                  <p className="text-gray-600">WhatsApp / Llamada</p>
                  <p className="text-gray-600">(+54) 011 3842-7614</p>
                  <p className="text-gray-600">Lunes - Sabado: 8am - 12am</p>
                  <p className="text-gray-600">Lunes - Viernes: 2pm - 5pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-amber-700" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Ubicación</h4>
                  <p className="text-gray-600">Calle 127 N°840</p>
                  <p className="text-gray-600">Berazategui B1884, Bs As</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 text-white px-8 py-4 rounded-md hover:bg-amber-800 transition-colors flex items-center justify-center gap-2"
              >
                Enviar consulta por WhatsApp
                <FaWhatsapp className="text-white" size={24} />
              </button>
              <div className="text-sm text-gray-600 mt-2">
                Respondemos rapidamente a través de WhatsApp, así que no dudes en contactarnos para cualquier consulta o cotización. Estamos aquí para ayudarte a hacer realidad tu proyecto de carpintería.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
