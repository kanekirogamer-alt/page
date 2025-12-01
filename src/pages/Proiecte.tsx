import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, X, Globe, Users, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

import erasmusImg from "@/assets/erasmus.jpg";
import workshopImg from "@/assets/workshop.jpeg";
import parteneriateImg from "@/assets/parteneriate.jpg";

const projects = [
  {
    id: "erasmus",
    icon: Globe,
    title: "ERASMUS+",
    subtitle: "Mobilități Internaționale",
    description: "Programe de mobilitate europeană pentru studenți și profesori",
    fullDescription: "Proiecte de mobilitate și schimburi internaționale pentru tineri și adulți, finanțate de Uniunea Europeană prin programul Erasmus+. Oferim oportunități de dezvoltare personală și profesională în diverse țări europene.",
    bgColorClass: "bg-brand-blue",
    features: [
      "Schimburi de tineri în diverse țări europene",
      "Training-uri internaționale pentru facilitatori",
      "Proiecte de voluntariat european",
      "Parteneriate strategice pentru educație"
    ],
    image: erasmusImg
  },
  {
    id: "workshops",
    icon: Users,
    title: "Workshop-uri",
    subtitle: "Sesiuni Interactive",
    description: "Sesiuni interactive de învățare practică și dezvoltare creativă",
    fullDescription: "Workshop-uri practice și interactive pe teme precum comunicare, leadership, educație financiară și dezvoltare personală. Fiecare sesiune este adaptată nevoilor participanților.",
    bgColorClass: "bg-brand-orange",
    features: [
      "Workshop-uri de comunicare eficientă",
      "Sesiuni de educație financiară",
      "Training-uri de leadership",
      "Ateliere de dezvoltare personală"
    ],
    image: workshopImg
  },
  {
    id: "parteneriate",
    icon: Handshake,
    title: "Parteneriate",
    subtitle: "Colaborări Strategice",
    description: "Colaborări strategice pentru un impact pozitiv în comunitate",
    fullDescription: "Colaborări cu organizații, instituții și companii pentru a aduce valoare comunităților și a crea oportunități de dezvoltare durabilă pentru tineri și adulți.",
    bgColorClass: "bg-brand-green",
    features: [
      "Parteneriate cu instituții de învățământ",
      "Colaborări cu ONG-uri naționale și internaționale",
      "Proiecte comune cu companii private",
      "Rețele de organizații pentru tineret"
    ],
    image: parteneriateImg
  }
];

function ProjectCard({ project, index, onOpen }: { 
  project: typeof projects[0]; 
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative h-[450px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer"
      onClick={onOpen}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
        <motion.h3 
          className="text-3xl md:text-4xl font-bold mb-2 text-white transition-transform duration-300 group-hover:-translate-y-1"
        >
          {project.title}
        </motion.h3>
        
        <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors">
          <span className="text-sm font-medium">Descoperă mai mult</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300`} />
    </motion.div>
  );
}

function ProjectModal({ project, isOpen, onClose }: {
  project: typeof projects[0] | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen || !project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative h-64 md:h-80">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          
          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 md:left-8">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${project.bgColorClass}/20 backdrop-blur-sm mb-3`}>
              <project.icon className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">{project.subtitle}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Features */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-foreground mb-4">Ce oferim:</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50"
                >
                  <div className={`w-2 h-2 rounded-full ${project.bgColorClass}`} />
                  <span className="text-foreground text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Button 
            size="lg" 
            className={`${project.bgColorClass} text-white hover:opacity-90 w-full sm:w-auto`}
            onClick={() => window.location.href = '/#contact'}
          >
            Contactează-ne
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Proiecte() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-28 pb-6 md:pb-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden"
      >
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              <span className="text-brand-blue">Proiectele</span>{" "}
              Noastre
            </h1>
          </motion.div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
      </section>

      {/* Projects Cards Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onOpen={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Footer />
    </main>
  );
}
