import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download } from 'lucide-react';
import CVButton from './CVButton';
import { sendContactEmail, validateField, ContactFormData } from '../services/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitMessageType, setSubmitMessageType] = useState<'success' | 'error'>('success');
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Actualizar el valor del formulario
    setFormData({
      ...formData,
      [name]: value
    });

    // Validar el campo en tiempo real
    const error = validateField(name, value);
    setFieldErrors(prev => ({
      ...prev,
      [name]: error
    }));

    // Limpiar mensaje de envío si el usuario está editando
    if (submitMessage) {
      setSubmitMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar todos los campos antes del envío
    const errors: {[key: string]: string} = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) errors[key] = error;
    });

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setSubmitMessage('Por favor, corrige los errores en el formulario.');
      setSubmitMessageType('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');
    setFieldErrors({});
    
    try {
      const response = await sendContactEmail(formData as ContactFormData);
      
      if (response.success) {
        setSubmitMessage(response.message);
        setSubmitMessageType('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitMessage(response.message);
        setSubmitMessageType('error');
      }
    } catch (error) {
      setSubmitMessage('Error inesperado. Por favor, intenta nuevamente.');
      setSubmitMessageType('error');
    } finally {
      setIsSubmitting(false);
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">
            Contacto
          </h2>
          <p className="section-subtitle">
            ¿Tienes un proyecto en mente? ¡Me encantaría colaborar contigo! 
            Envíame un mensaje y hablemos sobre cómo puedo ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Información de Contacto
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mr-4 hover-lift">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-900 font-medium">jungjibetancourth@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mr-4 hover-lift">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Teléfono</p>
                  <p className="text-gray-900 font-medium">(+504)9277-5352</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mr-4 hover-lift">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ubicación</p>
                  <p className="text-gray-900 font-medium">Tegucigalpa, Honduras</p>
                </div>
              </div>
            </div>

            {/* Social Links and CV Download */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Sígueme en redes
              </h4>
              <div className="flex flex-wrap gap-4 mb-6">
                <a 
                  href="https://github.com/jungji777" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-button px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center gap-2"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/jungji-betancourth-49bba1345" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-button px-4 py-2 text-blue-600 hover:text-blue-700 flex items-center gap-2"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* CV Download Button */}
              <CVButton variant="primary" size="md" />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Envíame un mensaje
            </h3>
            
            <div className="glass-card p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input w-full"
                    placeholder="Tu nombre"
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input w-full"
                    placeholder="tu@email.com"
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input w-full"
                  placeholder="Asunto del mensaje"
                />
                {fieldErrors.subject && (
                  <p className="mt-1 text-sm text-red-600">{fieldErrors.subject}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-input w-full resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
                {fieldErrors.message && (
                  <p className="mt-1 text-sm text-red-600">{fieldErrors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
              </button>
              </form>
            </div>

            {submitMessage && (
              <div className={`mt-4 p-4 glass-card ${
                submitMessageType === 'success' 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {submitMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;