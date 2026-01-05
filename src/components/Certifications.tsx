import React, { useEffect } from 'react';
import { Award, Calendar, ExternalLink, Shield, Star, Trophy, GraduationCap, Brain, Zap, Code, Database, Cloud, BookOpen, Users, Target, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
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
      icon: <Database className="w-6 h-6" />,
      image:
"https://res.cloudinary.com/df5jie5rz/image/upload/v1758860009/eCertificate_spo0n3.png",
      title: "AWS Data Engineer",
      description: "AWS Data Engineer - Associate",
      date: "2025",
      color: "blue",
      verified: true
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      image:
        "https://res.cloudinary.com/df5jie5rz/image/upload/v1767414031/Captura_de_pantalla_2026-01-02_a_la_s_19.27.00_zjltmf.png",
      title: "Amazon EMR",
      description: "Certified Professional",
      date: "2025",
      color: "green",
      verified: true
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Microsoft Azure AI Foundry",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1767413974/Captura_de_pantalla_2026-01-02_a_la_s_22.13.34_uc5kyx.png",
      description: "Choosing and implementing models from the model catalog in the Azure AI Foundry portal",
      date: "2025",
      color: "purple",
      verified: true
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Microsoft Azure AI",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1767414030/Captura_de_pantalla_2026-01-02_a_la_s_22.16.22_r4ux4t.png",
      description: "Running a training script as a command job in Azure Machine Learning",
      date: "2025",
      color: "blue",
      verified: true
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Microsft AI Services",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1767414021/Captura_de_pantalla_2026-01-02_a_la_s_22.13.53_tnpon3.png",
      description: "Creation and consumption of Azure AI services .pdf",
      date: "2025",
      color: "blue",
      verified: true
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Microsoft Azure AI Foundry",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1767414021/Captura_de_pantalla_2026-01-02_a_la_s_22.14.53_iblri0.png",
      description: "Introduction to the prompt flow for developing linguistic modeling applications in Azure AI Foundry",
      date: "2025",
      color: "green",
      verified: true
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Microsoft Azure AI Foundry",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1767414021/Captura_de_pantalla_2026-01-02_a_la_s_22.16.28_knm5qn.png",
      description: "Tuning a language model with Azure AI Foundry",
      date: "2025",
      color: "blue",
      verified: true
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "AWS Serverless Analytics",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1767413975/Captura_de_pantalla_2026-01-02_a_la_s_22.12.48_ztk9mg.png",
      description: "AWS Serverless Analytics",
      date: "2025",
      color: "green",
      verified: true
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "AWS Fundamentals",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1767413975/Captura_de_pantalla_2026-01-02_a_la_s_22.12.38_pbmqa0.png",
      description: "AWS Fundamentals",
      date: "2025",
      color: "purple",
      verified: true
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Microsoft Azure AI Foundry",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1767413974/Captura_de_pantalla_2026-01-02_a_la_s_22.13.34_uc5kyx.png",
      description: "Choosing and implementing models from the model catalog in the Azure AI Foundry portal",
      date: "2025",
      color: "orange",
      verified: true
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Vue.js Professional",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1767414020/Captura_de_pantalla_2026-01-02_a_la_s_22.15.34_cqau17.png",
      description: "Frontend Framework Expertise",
      date: "2023",
      color: "green",
      verified: false
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Scrum Master Certified",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1758859501/Logros_-_csarbetancourth-8949___Microsoft_Learn_lu3krs.png",
      description: "Agile Project Management",
      date: "2023",
      color: "blue",
      verified: true
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "MongoDB Advanced",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1758859501/Logros_-_csarbetancourth-8949___Microsoft_Learn_lu3krs.png",
      description: "NoSQL Database Design",
      date: "2024",
      color: "green",
      verified: true
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "API Design Best Practices",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1758859501/Logros_-_csarbetancourth-8949___Microsoft_Learn_lu3krs.png",
      description: "RESTful & GraphQL APIs",
      date: "2024",
      color: "purple",
      verified: true
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Kubernetes Administration",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1758859501/Logros_-_csarbetancourth-8949___Microsoft_Learn_lu3krs.png",
      description: "Container Orchestration",
      date: "2023",
      color: "blue",
      verified: false
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Web Security Essentials",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1758859501/Logros_-_csarbetancourth-8949___Microsoft_Learn_lu3krs.png",
      description: "Application Security",
      date: "2024",
      color: "orange",
      verified: true
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Node.js Backend Development",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1758859501/Logros_-_csarbetancourth-8949___Microsoft_Learn_lu3krs.png",
      description: "Server-Side JavaScript",
      date: "2024",
      color: "green",
      verified: true
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Cloud Architecture",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1758859501/Logros_-_csarbetancourth-8949___Microsoft_Learn_lu3krs.png",
      description: "Scalable System Design",
      date: "2023",
      color: "blue",
      verified: true
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Technical Leadership",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1758859501/Logros_-_csarbetancourth-8949___Microsoft_Learn_lu3krs.png",
      description: "Team Management Skills",
      date: "2024",
      color: "purple",
      verified: true
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Linux Professional Institute",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1758859501/Logros_-_csarbetancourth-8949___Microsoft_Learn_lu3krs.png",
      description: "Linux System Administration",
      date: "2023",
      color: "orange",
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
      icon: <Database className="w-6 h-6" />,
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-card p-6 relative overflow-hidden group rounded-2xl"
              >
                {/* Prestige indicator */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  style={{ originX: 0 }}
                ></motion.div>

                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-orange-400/10 opacity-0 group-hover:opacity-100 rounded-2xl"
                  transition={{ duration: 0.3 }}
                ></motion.div>

                <div className="relative z-10 flex flex-col lg:flex-row gap-6">
                  {/* Certificate Image */}
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full lg:w-48 h-32 lg:h-36 rounded-xl overflow-hidden shadow-lg bg-white p-2 group-hover:shadow-2xl transition-shadow duration-300">
                      <motion.img
                        src={cert.image}
                        alt={`${cert.title} - ${cert.institution}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>

                  {/* Certificate Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <motion.div
                        className={`p-2 rounded-xl border ${colorClasses[cert.color as keyof typeof colorClasses]}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {cert.icon}
                      </motion.div>
                      <motion.div
                        className="flex items-center text-green-600 text-xs bg-green-50 px-2 py-1 rounded-full"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                      >
                        <Shield size={14} className="mr-1" />
                        <span>Verificada</span>
                      </motion.div>
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <p className="text-blue-600 font-semibold mb-3 group-hover:text-blue-700 transition-colors duration-300">
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
                      <motion.button
                        onClick={() => handleCertificationClick(cert)}
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        title="Ver certificación completa"
                      >
                        <ExternalLink size={18} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Featured AWS Certification with Credly Badge */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Certificación AWS Destacada
          </h3>
          <motion.div
            className="glass-card p-8 text-center max-w-2xl mx-auto relative overflow-hidden group rounded-2xl"
            whileHover={{ boxShadow: "0 20px 60px rgba(59, 130, 246, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 rounded-2xl"
              transition={{ duration: 0.3 }}
            ></motion.div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Credly Badge Container */}
              <motion.div
                className="certification-badge-container"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div
                  data-iframe-width="150"
                  data-iframe-height="270"
                  data-share-badge-id="0ac08a2f-fdfa-4067-8875-835719ad6b84"
                  data-share-badge-host="https://www.credly.com"
                  className="credly-badge"
                ></div>
              </motion.div>

              {/* Certification Details */}
              <motion.div
                className="flex-1 text-left"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="flex items-center mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl flex items-center justify-center mr-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Shield size={24} />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      AWS Certified
                    </h4>
                    <p className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                      Solutions Architect Associate
                    </p>
                  </div>
                </motion.div>

                <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  Certificación que valida mi experiencia en el diseño de sistemas distribuidos
                  escalables y seguros en Amazon Web Services, incluyendo arquitecturas de alta
                  disponibilidad y mejores prácticas de seguridad.
                </p>

                <motion.div
                  className="flex items-center text-sm text-gray-500 gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Calendar size={16} />
                  <span>Obtenida en 2024</span>
                  <span>•</span>
                  <motion.span
                    className="flex items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Shield size={16} className="mr-1 text-green-500" />
                    Verificada
                  </motion.span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Certifications Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Otras Certificaciones y Logros
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleAchievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
                className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 shadow-lg overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 rounded-xl"
                  transition={{ duration: 0.3 }}
                ></motion.div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className={`p-3 rounded-2xl border ${colorClasses[item.color as keyof typeof colorClasses]}`}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                    {item.verified && (
                      <motion.div
                        className="flex items-center text-green-600 text-xs bg-green-50 px-2 py-1 rounded-full"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 + 0.1 }}
                      >
                        <Shield size={14} className="mr-1" />
                        <span>Verificada</span>
                      </motion.div>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span>{item.date}</span>
                    </div>
                    <motion.button
                      onClick={() => handleCertificationClick({...item, fullDescription: item.description, skills: []})}
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      title="Ver detalles"
                    >
                      <ExternalLink size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {hasMoreAchievements && (
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                onClick={() => setShowAllAchievements(!showAllAchievements)}
                className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-expanded={showAllAchievements}
                aria-label={showAllAchievements ? 'Mostrar menos certificaciones' : 'Mostrar más certificaciones'}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                ></motion.div>

                <div className="relative flex items-center justify-center gap-2">
                  <span className="transition-all duration-300">
                    {showAllAchievements ? 'Ver menos' : 'Ver más'}
                  </span>
                  <motion.div
                    animate={{ rotate: showAllAchievements ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>
              </motion.button>
            </motion.div>
          )}
        </div>

        {/* Future Certifications Placeholder */}
        <motion.div
          className="relative glass-card p-8 text-center border-2 border-dashed border-gray-300 rounded-2xl overflow-hidden group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ borderColor: "rgb(59, 130, 246)", boxShadow: "0 20px 60px rgba(59, 130, 246, 0.15)" }}
        >
          {/* Animated dashed border glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 rounded-2xl"
            transition={{ duration: 0.3 }}
          ></motion.div>

          <motion.div
            className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4"
            initial={{ rotate: 0 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            whileHover={{ rotate: 0, scale: 1.1 }}
          >
            <Award size={32} />
          </motion.div>

          <h4 className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            Próximas Certificaciones
          </h4>
          <p className="text-gray-500 mb-4 group-hover:text-gray-600 transition-colors duration-300">
            Actualmente preparándome para obtener nuevas certificaciones en:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Kubernetes (CKA)",
              "Docker Certified Associate",
              "Terraform Associate",
              "Google Cloud Professional"
            ].map((cert, index) => (
              <motion.span
                key={index}
                className="badge"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgb(59, 130, 246)", color: "white" }}
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>

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