import { motion } from 'framer-motion';
import {Mail,Linkedin ,Github } from 'lucide-react';
import racoon from '../assets/racoon.webp';
import { Button } from '../Components/button';
import { Card, CardContent, CardHeader, CardTitle } from '../Components/card';
import { Input } from '../Components/input';
import { Textarea } from '../Components/textarea';

function Home() {
  return (
    <main className="text-white p-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-8 py-16">
          {/* Text Content */}
          <motion.div 
            className="flex-1 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
             Utsav Banerjee
            </h1>
            <p className="text-xl text-gray-300">
              Full Stack Developer building exceptional digital experiences
            </p>
            <p className="text-gray-400">
            Passionate about creating robust applications with clean architecture and optimal user experience, specializing in React and Node.js.
            </p>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-xl"
          >
            <img src={racoon} alt="Profile" className="w-full h-full object-cover" />
            <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
            

          </motion.div>
        </section>

        {/* Social Links */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4"
        >
         <a href="https://www.linkedin.com/in/utsav-banerjee-844a3a303/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>

            <a href="https://github.com/Ust274" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
              </Button>
            </a>

            <a href="mailto:utv4484@gamil.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
        </motion.section>

       {/* Skill Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-slate-800/50 border-slate-700 text-gray-50">
              <CardHeader> 
                <CardTitle className="text-2xl text-white">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-4 text-gray-300">
                  <li><strong>Languages</strong>: Python, C, C#, JS</li>
                  <li><strong>Front-End</strong>: HTML, CSS, JavaScript, ReactJS</li>
                  <li><strong>Backend</strong>: NodeJS,ExpressJs</li>
                  <li><strong>Database</strong>: MySQL,MongoDB</li>
                  <li><strong>Tools</strong>: Vite, Tailwind, Vercel,Git</li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>


        {/* Contact Form */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-slate-800/50 border-slate-700 text-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl text-white"> Get in Touch </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input 
                    type="text" 
                    placeholder="Your Name" 
                    className="bg-slate-900/50 border-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-slate-900/50 border-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea 
                    placeholder="Your Message" 
                    className="bg-slate-900/50 border-slate-700"
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </main>
  );
}

export default Home;