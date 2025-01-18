import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../Components/card";
import { Button } from "../Components/button";
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const projects = [
    {
      title: "Real-Time Chat Application",
      description: "A full-stack real-time chat application with instant messaging functionality, powered by Socket.IO and MongoDB Atlas, featuring a modern React-based frontend.",
      tech: ["React", "Tailwind CSS", "Vite", "Axios", "Zustand", "Node.js", "Express", "MongoDB Atlas", "Socket.IO"],
      demoLink: "https://chat-application-1-zope.onrender.com/",
      githubLink: "https://github.com/Ust274/Chat-Application"
    },   
    {
      title: "Car Rental Website",
      description: "A car rental website with a sample database, modernized frontend and backend integration with database support.",
      tech: ["React", "JavaScript", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB Atlas"],
      demoLink: "https://car-rental-web-hazel.vercel.app/",
      githubLink: "https://github.com/Ust274/Car_Rental_web"
    },
    {
      title: "Movie Data-Base Project",
      description: "A dynamic web application that provides users with the latest information on movies using data from the TMDB API.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      demoLink: "https://cine-vert-2bwc.vercel.app/",
      githubLink: "https://github.com/Ust274/CineVert"
    },
    {
      title: "React Dictionary App",
      description: "A modern single-page dictionary application that allows users to search for word definitions, view phonetics, and listen to pronunciations. Features include persistent search history powered by local storage and a beautifully designed, responsive user interface.",
      tech: ["React", "Tailwind CSS", "Local Storage", "Free Dictionary API"],
      demoLink: "https://dictionary-app-kappa-topaz.vercel.app/",
      githubLink: "https://github.com/Ust274/Dictionary-App"
    }
];

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.main 
      className="min-h-screen text-white p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-blue-500 to-purple-500"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <h1 className="text-5xl font-bold relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
              Featured Projects
            </span>
            <motion.span 
              className="absolute -right-8 top-0"
              animate={{ 
                rotate: [0, 20, 0],
                y: [0, -4, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">Explore my latest work and side projects</p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="relative bg-slate-800/80 backdrop-blur-sm border-slate-700 overflow-hidden group hover:border-blue-500/50 transition-all duration-500">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
                  animate={hoveredIndex === index ? {
                    scale: [1, 1.2],
                    opacity: [0, 0.5]
                  } : {}}
                  transition={{ duration: 0.6 }}
                />
                <CardHeader>
                  <CardTitle className="text-2xl">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                      {project.title}
                    </span>
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-lg">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    {project.tech.map((tech) => (
                      <motion.span 
                        key={tech}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                        className="px-3 py-1 bg-slate-700/50 backdrop-blur-sm rounded-full text-sm text-blue-300 border border-blue-500/20 hover:border-blue-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  <div className="flex gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outline" 
                        className="flex gap-2 bg-slate-700/50 border-blue-500/20 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
                        onClick={() => window.open(project.demoLink, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outline"
                        className="flex gap-2 bg-slate-700/50 border-blue-500/20 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                        Source Code
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}

export default Projects;