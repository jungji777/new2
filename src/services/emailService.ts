import emailjs from 'emailjs-com';

// Configuración de EmailJS
const EMAILJS_SERVICE_ID = 'service_jjm10ln'; // Reemplazar con tu Service ID
const EMAILJS_TEMPLATE_ID = 'template_bhmull3'; // Reemplazar con tu Template ID
const EMAILJS_PUBLIC_KEY = 'z1DcePmMwdnOpDZnH'; // Reemplazar con tu Public Key

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

// Inicializar EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    // Validar datos del formulario
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return {
        success: false,
        message: 'Todos los campos son obligatorios.'
      };
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: 'Por favor, ingresa un email válido.'
      };
    }

    // Preparar los parámetros para el template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'César Betancourth', // Tu nombre
      reply_to: formData.email,
      // Información adicional
      timestamp: new Date().toLocaleString('es-ES', {
        timeZone: 'America/Tegucigalpa',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    // Enviar email usando EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: '¡Mensaje enviado exitosamente! Te contactaré pronto.'
      };
    } else {
      throw new Error('Error en el envío');
    }

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Mensajes de error específicos
    if (error instanceof Error) {
      if (error.message.includes('network')) {
        return {
          success: false,
          message: 'Error de conexión. Por favor, verifica tu conexión a internet.'
        };
      }
      if (error.message.includes('rate limit')) {
        return {
          success: false,
          message: 'Has enviado muchos mensajes. Por favor, espera unos minutos.'
        };
      }
    }

    return {
      success: false,
      message: 'Error al enviar el mensaje. Por favor, intenta nuevamente o contáctame directamente por email.'
    };
  }
};

// Función para validar formulario en tiempo real
export const validateField = (fieldName: string, value: string): string => {
  switch (fieldName) {
    case 'name':
      if (!value.trim()) return 'El nombre es obligatorio';
      if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres';
      return '';
    
    case 'email':
      if (!value.trim()) return 'El email es obligatorio';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Formato de email inválido';
      return '';
    
    case 'subject':
      if (!value.trim()) return 'El asunto es obligatorio';
      if (value.trim().length < 5) return 'El asunto debe tener al menos 5 caracteres';
      return '';
    
    case 'message':
      if (!value.trim()) return 'El mensaje es obligatorio';
      if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres';
      if (value.trim().length > 1000) return 'El mensaje no puede exceder 1000 caracteres';
      return '';
    
    default:
      return '';
  }
};