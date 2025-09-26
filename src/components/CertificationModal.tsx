import React from 'react';
import { X, ExternalLink, Calendar, Shield, Award } from 'lucide-react';

interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  certification: {
    title: string;
    institution: string;
    image: string;
    date: string;
    description: string;
    skills?: string[];
    credentialId?: string;
    verificationUrl?: string;
  } | null;
}

const CertificationModal: React.FC<CertificationModalProps> = ({ 
  isOpen, 
  onClose, 
  certification 
}) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleBackdropClick}
    >
      {certification && (
        <div className={`relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300 ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
              <Award size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{certification.title}</h3>
              <p className="text-blue-600 font-medium">{certification.institution}</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
            title="Cerrar"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certificate Image */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-4 border">
                <img 
                  src={certification.image} 
                  alt={`${certification.title} - ${certification.institution}`}
                  className="w-full h-auto object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
              
              {/* Verification Badge */}
              <div className="flex items-center justify-center space-x-2 text-green-600 bg-green-50 rounded-lg p-3">
                <Shield size={20} />
                <span className="font-medium">Certificación Verificada</span>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="space-y-6">
              {/* Basic Info */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Información del Programa</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2 text-blue-500" />
                    <span>Completado en {certification.date}</span>
                  </div>
                  {certification.credentialId && (
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">ID de Credencial:</span> {certification.credentialId}
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Descripción del Programa</h4>
                <p className="text-gray-600 leading-relaxed">
                  {certification.description}
                </p>
              </div>

              {/* Skills */}
              {certification.skills && certification.skills.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Habilidades Adquiridas</h4>
                  <div className="flex flex-wrap gap-2">
                    {certification.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Verification Link */}
              {certification.verificationUrl && (
                <div>
                  <a
                    href={certification.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Verificar Certificación</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default CertificationModal;