import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../Components/card";
import { Button } from "../Components/button";
import { ExternalLink } from 'lucide-react';

const projects = [
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
    title: "AI Content Generator(NOT REAL)",
    description: "An AI-powered platform that helps content creators generate high-quality, SEO-optimized content using advanced language models.",
    tech: ["React", "Python", "FastAPI", "OpenAI"],
    demoLink: "https://example-ai-content.com",
    githubLink: "https://github.com/example/ai-content"
  },
  {
    title: "Project Management Dashboard (NOT REAL)",
    description: "A comprehensive project management tool with real-time collaboration features, task tracking, and automated reporting capabilities.",
    tech: ["React", "Firebase", "Material-UI", "Chart.js"],
    demoLink: "https://example-pm-dashboard.com",
    githubLink: "https://github.com/example/pm-dashboard"
  }
];

function Projects() {
  return (
    <main className="text-white p-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Featured Projects
        </motion.h1>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-400">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-slate-700 rounded-full text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="flex gap-2 hover:text-blue-400 transition-colors"
                      onClick={() => window.open(project.demoLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex gap-2 hover:text-blue-400 transition-colors"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;