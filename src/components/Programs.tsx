import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Wallet, Crown, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: MessageCircle,
    title: "Skill-uri Sociale",
    description: "Învață tehnici eficiente de comunicare verbală și non-verbală, care te ajută să te exprimi clar și să asculți activ.",
    colorClass: "bg-brand-blue/10 text-brand-blue",
    href: "/programe/skill-uri-sociale",
  },
  {
    icon: Wallet,
    title: "Educație Financiară",
    description: "Dezvoltă-ți abilitățile financiare și află cum să iei decizii financiare inteligente și să îți planifici viitorul fără stres.",
    colorClass: "bg-brand-orange/10 text-brand-orange",
    href: "/programe/educatie-financiara",
  },
  {
    icon: Crown,
    title: "Leadership",
    description: "Învață să conduci echipe, să gestionezi conflictele și să construiești relații productive în orice context.",
    colorClass: "bg-brand-green/10 text-brand-green",
    href: "/programe/leadership",
  },
  {
    icon: Users,
    title: "Lucru în Echipă",
    description: "Învață să lucrezi bine în echipă, să comunici clar și să colaborezi eficient.",
    colorClass: "bg-brand-purple/10 text-brand-purple",
    href: "/programe/lucru-in-echipa",
  },
];

export function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="py-24" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-4"
          >
            Cu ce ne ocupăm?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            <span className="text-brand-blue">Programe</span> și{" "}
            <span className="text-brand-orange">Workshop-uri</span>
            <br />
            <span className="text-foreground">de Dezvoltare</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Abilități sociale și educație financiară prin programe practice și interactive.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group border border-border/50"
            >
              <div className="flex items-start mb-6">
                <div className={`w-14 h-14 rounded-2xl ${program.colorClass} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <program.icon className="w-7 h-7" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {program.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {program.description}
              </p>

              <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:bg-transparent" asChild>
                <Link to={program.href}>
                  Vezi mai mult
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="default" asChild>
            <Link to="/proiecte" onClick={() => window.scrollTo(0, 0)}>
              Vezi Proiecte
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}