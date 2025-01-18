import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '../Components/button';
import racoon from '../assets/racoon.webp'
import { Card, CardContent, CardHeader, CardTitle } from '../Components/card';
import { Input } from '../Components/input';
import { Textarea } from '../Components/textarea';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Home = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen text-white p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-8 py-16">
          {/* Text Content */}
          <motion.div 
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
                Utsav Banerjee
              </h1>
            </motion.div>
            <motion.p 
              className="text-2xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack Developer building exceptional digital experiences
            </motion.p>
            <motion.p 
              className="text-gray-400 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Passionate about creating robust applications with clean architecture and optimal user experience, 
              specializing in React and Node.js.
            </motion.p>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative w-72 h-72 group"
          >
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-300"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10">
              <img src={racoon} alt="Profile" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </div>
          </motion.div>
        </section>

        {/* Social Links */}
        <motion.section 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="flex justify-center gap-6"
        >
          {[
            { href: "https://www.linkedin.com/in/utsav-banerjee-844a3a303/", Icon: Linkedin },
            { href: "https://github.com/Ust274", Icon: Github },
            { href: "mailto:utv4484@gmail.com", Icon: Mail }
          ].map(({ href, Icon }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-slate-800/50 border-slate-600 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300"
              >
                <Icon className="h-5 w-5" />
              </Button>
            </motion.a>
          ))}
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl" />
          <Card className="relative bg-slate-800/80 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.ul 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300"
                initial="initial"
                animate="animate"
                variants={{
                  animate: {
                    transition: { staggerChildren: 0.1 }
                  }
                }}
              >
                {[
                  { title: "Languages", content: "Python, C, C#, JS" },
                  { title: "Front-End", content: "HTML, CSS, JavaScript, ReactJS" },
                  { title: "Backend", content: "NodeJS, ExpressJs" },
                  { title: "Database", content: "MySQL, MongoDB" },
                  { title: "Tools", content: "Vite, Tailwind, axios, Zustand, Vercel, Git" }
                ].map(({ title, content }) => (
                  <motion.li
                    key={title}
                    variants={{
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 }
                    }}
                    className="p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors duration-300"
                  >
                    <strong className="text-blue-400">{title}</strong>: {content}
                  </motion.li>
                ))}
              </motion.ul>
            </CardContent>
          </Card>
        </motion.section>

        {/* Contact Form */}
        <motion.section 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                {[
                  { type: "text", placeholder: "Your Name" },
                  { type: "email", placeholder: "Your Email" }
                ].map((input) => (
                  <motion.div
                    key={input.type}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <Input 
                      type={input.type}
                      placeholder={input.placeholder}
                      className="bg-slate-900/50 border-slate-700 focus:border-blue-400 transition-colors duration-300"
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <Textarea 
                    placeholder="Your Message" 
                    className="bg-slate-900/50 border-slate-700 focus:border-blue-400 transition-colors duration-300"
                    rows={4}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </motion.main>
  );
};

export default Home;