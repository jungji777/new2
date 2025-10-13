import React, { useEffect } from 'react';
import { Award, Calendar, ExternalLink, Shield, Star, Trophy, GraduationCap, Brain } from 'lucide-react';
import CertificationModal from './CertificationModal';

const Certifications = () => {
  const [selectedCertification, setSelectedCertification] = React.useState<any>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [showAllAchievements, setShowAllAchievements] = React.useState(false);

  // Load Credly embed script when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    script.type = 'text/javascript';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const achievements = [
    {
      icon: <Shield className="w-6 h-6" />,
      image:
"https://res.cloudinary.com/df5jie5rz/image/upload/v1758860009/eCertificate_spo0n3.png",
      title: "AWS Certified",
      description: "Solutions Architect Associate",
      date: "2025",
      color: "blue",
      verified: true
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Google Analytics",
      description: "Certified Professional",
      date: "2023",
      color: "green",
      verified: true
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "GitHub Copilot",
      description: "Early Adopter Program",
      date: "2023",
      color: "purple",
      verified: false
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Microsoft Azure",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1758859501/Logros_-_csarbetancourth-8949___Microsoft_Learn_lu3krs.png",
      description: "Fundamentals Certified",
      date: "2024",
      color: "blue",
      verified: true
    }
  ];

  const premiumCertifications = [
    {
      title: "Oxford Artificial Intelligence Programme",
      institution: "University of Oxford",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1753313880/Artificial_inteligence_programe_woj5fs.png",
      date: "2024",
      description: "Programa avanzado en Inteligencia Artificial que cubre machine learning, deep learning, ética en IA y aplicaciones empresariales.",
      fullDescription: "Programa integral de 8 semanas de la Universidad de Oxford que abarca los fundamentos y aplicaciones avanzadas de la Inteligencia Artificial. El programa incluye módulos sobre machine learning, deep learning, procesamiento de lenguaje natural, visión por computadora, ética en IA, y estrategias de implementación empresarial. Los participantes desarrollan proyectos prácticos y casos de estudio reales, trabajando con las últimas tecnologías y frameworks de IA.",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "NLP", "Computer Vision", "AI Ethics", "TensorFlow", "PyTorch", "AI Strategy"],
      credentialId: "OX-AI-2024-CB-001",
      verificationUrl: "https://www.sbs.ox.ac.uk/programmes/executive-education/online-learning/oxford-artificial-intelligence-programme",
      icon: <Brain className="w-6 h-6" />,
      color: "blue",
      verified: true,
      prestige: "high"
    },
    {
      title: "Applied Generative AI for Digital Transformation",
      institution: "MIT (Massachusetts Institute of Technology)",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1753313881/MIT-Applied_generative_AI_oelgg9.png",
      date: "2023",
      description: "Programa especializado en IA Generativa aplicada a la transformación digital, incluyendo GPT, LLMs y aplicaciones empresariales.",
      fullDescription: "Programa ejecutivo de 6 semanas del MIT enfocado en la aplicación práctica de la Inteligencia Artificial Generativa para la transformación digital empresarial. Cubre arquitecturas de modelos generativos, implementación de GPT y otros LLMs, fine-tuning, prompt engineering, y estrategias de adopción organizacional. Los participantes desarrollan casos de uso específicos y aprenden a evaluar el ROI de implementaciones de IA generativa.",
      skills: ["Generative AI", "Large Language Models", "GPT", "Prompt Engineering", "Fine-tuning", "Digital Transformation", "AI Implementation", "Business Strategy"],
      credentialId: "MIT-GAI-2023-CB-002",
      verificationUrl: "https://professional.mit.edu/course-catalog/inteligencia-artificial-generativa-aplicada-la-transformacion-digital-spanish",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "purple",
      verified: true,
      prestige: "high"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      institution: "Oracle University",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1758874417/Sin_ti%CC%81tulo_dw9zgo.png",
      date: "2025",
      description: "Programa avanzado en Inteligencia Artificial que cubre machine learning, deep learning, ética en IA y aplicaciones empresariales.",
      fullDescription: "Certificación oficial de Oracle que valida conocimientos avanzados en ciencia de datos utilizando Oracle Cloud Infrastructure (OCI). El programa cubre técnicas de machine learning, análisis predictivo, procesamiento de datos a gran escala, y automatización de flujos de trabajo en entornos cloud. Los profesionales certificados demuestran dominio en el uso de herramientas como OCI Data Science, Jupyter Notebooks, y Python para el desarrollo, entrenamiento y despliegue de modelos de machine learning en la nube. La certificación incluye casos prácticos centrados en la resolución de problemas empresariales reales mediante inteligencia artificial.",
      skills: ["Machine Learning", "Oracle Cloud Infrastructure (OCI)", "Python for data science", "Jupyter Notebooks in the Cloud", "Big Data", "Model Deployment", "TensorFlow", "PyTorch", "pipelines"],
      credentialId: "102000968OCI25DSOCP",
      verificationUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6D6208211CE34E7E8BFB77FF8C1E9EB81E27FAD1BBAFC556E001E974D9DA6512",
      icon: <Brain className="w-6 h-6" />,
      color: "blue",
      verified: true,
      prestige: "high"
    },
  ];

  const handleCertificationClick = (certification: any) => {
    setSelectedCertification({
      ...certification,
      description: certification.fullDescription || certification.description
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertification(null);
  };

  const visibleAchievements = showAllAchievements ? achievements : achievements.slice(0, 4);
  const hasMoreAchievements = achievements.length > 4;

  const colorClasses = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    green: "bg-green-100 text-green-700 border-green-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200"
  };

  return (
    <section id="certifications" className="section section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">
            Certificaciones & Logros
          </h2>
          <p className="section-subtitle">
            Certificaciones profesionales y reconocimientos que validan mi experiencia 
            y compromiso con el aprendizaje continuo en tecnología.
          </p>
        </div>

        {/* Premium Certifications from Top Universities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Certificaciones de Universidades de Prestigio
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {premiumCertifications.map((cert, index) => (
              <div 
                key={index}
                className="glass-card p-6 hover-lift animate-fadeInUp relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Prestige indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"></div>
                
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Certificate Image */}
                  <div className="flex-shrink-0">
                    <div className="w-full lg:w-48 h-32 lg:h-36 rounded-xl overflow-hidden shadow-lg bg-white p-2">
                      <img 
                        src={cert.image} 
                        alt={`${cert.title} - ${cert.institution}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  {/* Certificate Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-xl border ${colorClasses[cert.color as keyof typeof colorClasses]}`}>
                        {cert.icon}
                      </div>
                      <div className="flex items-center text-green-600 text-xs">
                        <Shield size={14} className="mr-1" />
                        <span>Verificada</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-blue-600 font-semibold mb-3">
                      {cert.institution}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        <span>{cert.date}</span>
                      </div>
                      <button 
                        onClick={() => handleCertificationClick(cert)}
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200 hover:scale-110"
                        title="Ver certificación completa"
                      >
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Featured AWS Certification with Credly Badge */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Certificación AWS Destacada
          </h3>
          <div className="glass-card p-8 text-center max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Credly Badge Container */}
              <div className="certification-badge-container">
                <div 
                  data-iframe-width="150" 
                  data-iframe-height="270" 
                  data-share-badge-id="0ac08a2f-fdfa-4067-8875-835719ad6b84" 
                  data-share-badge-host="https://www.credly.com"
                  className="credly-badge"
                ></div>
              </div>
              
              {/* Certification Details */}
              <div className="flex-1 text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mr-4">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">AWS Certified</h4>
                    <p className="text-blue-600 font-medium">Solutions Architect Associate</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Certificación que valida mi experiencia en el diseño de sistemas distribuidos 
                  escalables y seguros en Amazon Web Services, incluyendo arquitecturas de alta 
                  disponibilidad y mejores prácticas de seguridad.
                </p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={16} className="mr-2" />
                  <span>Obtenida en 2024</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Shield size={16} className="mr-1 text-green-500" />
                    Verificada
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Certifications Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Otras Certificaciones y Logros
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleAchievements.map((achievement, index) => (
              <div
                key={index}
                className="glass-card p-6 hover-lift animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-2xl border ${colorClasses[achievement.color as keyof typeof colorClasses]}`}>
                    {achievement.icon}
                  </div>
                  {achievement.verified && (
                    <div className="flex items-center text-green-600 text-xs">
                      <Shield size={14} className="mr-1" />
                      <span>Verificada</span>
                    </div>
                  )}
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 mb-3">
                  {achievement.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    <span>{achievement.date}</span>
                  </div>
                  <button
                    onClick={() => handleCertificationClick({...achievement, fullDescription: achievement.description, skills: []})}
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200 hover:scale-110"
                    title="Ver detalles"
                  >
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {hasMoreAchievements && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllAchievements(!showAllAchievements)}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-expanded={showAllAchievements}
                aria-label={showAllAchievements ? 'Mostrar menos certificaciones' : 'Mostrar más certificaciones'}
              >
                {showAllAchievements ? 'Ver menos' : 'Ver más'}
              </button>
            </div>
          )}
        </div>

        {/* Future Certifications Placeholder */}
        <div className="glass-card p-8 text-center border-2 border-dashed border-gray-300">
          <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Award size={32} />
          </div>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            Próximas Certificaciones
          </h4>
          <p className="text-gray-500 mb-4">
            Actualmente preparándome para obtener nuevas certificaciones en:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="badge">Kubernetes (CKA)</span>
            <span className="badge">Docker Certified Associate</span>
            <span className="badge">Terraform Associate</span>
            <span className="badge">Google Cloud Professional</span>
          </div>
        </div>

        {/* Certification Modal */}
        <CertificationModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          certification={selectedCertification}
        />
      </div>
    </section>
  );
};

export default Certifications;