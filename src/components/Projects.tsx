import React, { useState } from 'react';
import { ExternalLink, Github, Database, Globe, Brain, ShoppingCart, Gamepad2, Zap, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('sistemas');

  const categories = [
    { id: 'juegos', label: 'Mis juegos', icon: <Gamepad2 className="w-5 h-5" /> },
    { id: 'sistemas', label: 'Sistemas', icon: <Zap className="w-5 h-5" /> },
    { id: 'landing', label: 'Landing pages', icon: <Globe className="w-5 h-5" /> },
    { id: 'institucionales', label: 'Sitios web institucionales', icon: <Code className="w-5 h-5" /> }
  ];

  const allProjects = {
    juegos: [
      {
        title: "Puzzle Master 3D",
        description: "Juego interactivo de puzzles 3D con niveles progresivos, sistema de puntuación y desafíos diarios. Implementa física realista y gráficos avanzados.",
        technologies: ["Three.js", "React", "Vite", "WebGL", "Zustand"],
        image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com",
        demo: "https://demo.com",
        icon: <Gamepad2 className="w-6 h-6" />
      },
      {
        title: "Lógica de Cartas",
        description: "Juego estratégico de cartas coleccionables con inteligencia artificial competitiva, sistema de batalla y progresión de niveles.",
        technologies: ["React", "Canvas API", "TypeScript", "Node.js", "Socket.io"],
        image: "https://images.pexels.com/photos/279365/pexels-photo-279365.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com",
        demo: "https://demo.com",
        icon: <Gamepad2 className="w-6 h-6" />
      },
      {
        title: "Aventura de Plataformas",
        description: "Juego 2D de plataformas con mecánicas innovadoras, enemigos inteligentes y secretos para descubrir. Desarrollo con control preciso y responsive.",
        technologies: ["Phaser 3", "React", "Webpack", "JavaScript", "Tiled"],
        image: "https://images.pexels.com/photos/714742/pexels-photo-714742.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com",
        demo: null,
        icon: <Gamepad2 className="w-6 h-6" />
      }
    ],
    sistemas: [
      {
        title: "E-commerce Analytics Dashboard",
        description: "Dashboard interactivo para análisis de ventas en tiempo real con visualizaciones avanzadas y predicciones de demanda usando machine learning.",
        technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Chart.js", "scikit-learn"],
        image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com",
        demo: "https://demo.com",
        icon: <ShoppingCart className="w-6 h-6" />
      },
      {
        title: "Sistema de Recomendaciones",
        description: "Aplicación web que utiliza algoritmos de filtrado colaborativo y content-based filtering para recomendar productos personalizados.",
        technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB", "Docker"],
        image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com",
        demo: "https://demo.com",
        icon: <Brain className="w-6 h-6" />
      },
      {
        title: "API REST para IoT",
        description: "API escalable para gestión de dispositivos IoT con autenticación JWT, documentación automática y monitoreo en tiempo real.",
        technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Socket.io"],
        image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com",
        demo: null,
        icon: <Database className="w-6 h-6" />
      },
      {
        title: "Sistema de Gestión de Inventario",
        description: "Solución empresarial para control de inventario en tiempo real con reportes analíticos, predicción de stock y gestión de proveedores.",
        technologies: ["React", "Node.js", "PostgreSQL", "Redux", "Express", "Sequelize"],
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com",
        demo: "https://demo.com",
        icon: <Database className="w-6 h-6" />
      }
    ],
    landing: [
      {
        title: "Landing - SaaS Fintech",
        description: "Landing page moderna para startup de soluciones fintech. Diseño responsivo con call-to-action estratégicos y conversión optimizada.",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com",
        demo: "https://demo.com",
        icon: <Globe className="w-6 h-6" />
      },
      {
        title: "Landing - Agencia Creativa",
        description: "Página de presentación para agencia de diseño digital con portfolio interactivo, animaciones fluidas y experiencia inmersiva.",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React Query", "TypeScript"],
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com",
        demo: "https://demo.com",
        icon: <Globe className="w-6 h-6" />
      },
      {
        title: "Landing - Software Educativo",
        description: "Landing page para plataforma de aprendizaje en línea con demostración de features, testimoniales y planes de precios dinámicos.",
        technologies: ["React", "Tailwind CSS", "Stripe", "Supabase", "TypeScript"],
        image: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com",
        demo: null,
        icon: <Globe className="w-6 h-6" />
      }
    ],
    institucionales: [
      {
        title: "Portfolio Web Responsive",
        description: "Sitio web moderno y totalmente responsive desarrollado con las mejores prácticas de SEO y optimización de performance.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com",
        demo: "https://demo.com",
        icon: <Globe className="w-6 h-6" />
      },
      {
        title: "Sitio Corporativo - Consultoría",
        description: "Sitio institucional para empresa de consultoría empresarial. Incluye gestión de contenido, formularios de contacto y CRM integrado.",
        technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Sendgrid"],
        image: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com",
        demo: "https://demo.com",
        icon: <Code className="w-6 h-6" />
      },
      {
        title: "Portal de Noticias",
        description: "Sitio de noticias con sistema de comentarios, suscripciones, archivos por categoría y integración con redes sociales.",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Zustand"],
        image: "https://images.pexels.com/photos/3184657/pexels-photo-3184657.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com",
        demo: "https://demo.com",
        icon: <Code className="w-6 h-6" />
      }
    ]
  };

  const currentProjects = allProjects[activeCategory as keyof typeof allProjects];

  return (
    <section id="projects" className="section section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">
            Proyectos Destacados
          </h2>
          <p className="section-subtitle">
            Una selección de mis trabajos más recientes que demuestran mis habilidades
            en desarrollo web y ciencia de datos.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.label}</span>
              {activeCategory === category.id && (
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-pink-600/10"
                  layoutId="categoryBg"
                  transition={{ type: "spring", bounce: 0.2 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="project-card group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <motion.div
                    className="absolute top-4 left-4 p-2 bg-white rounded-lg shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {project.icon}
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="badge badge-primary text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Código</span>
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;