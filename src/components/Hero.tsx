import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const typewriterTexts = [
  { prefix: "Dezvoltăm", highlight: "ABILITĂȚI" },
  { prefix: "Construim", highlight: "VIITORUL" },
  { prefix: "Educăm", highlight: "NON-FORMAL" },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">("typing");

  const currentItem = typewriterTexts[currentIndex];
  const fullText = `${currentItem.prefix}\n${currentItem.highlight}`;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setPhase("waiting");
        }, 2000);
      }
    } else if (phase === "waiting") {
      timeout = setTimeout(() => {
        setPhase("deleting");
      }, 500);
    } else if (phase === "deleting") {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 40);
      } else {
        setCurrentIndex((prev) => (prev + 1) % typewriterTexts.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, phase, fullText]);

  // Split displayed text into prefix and highlight parts
  const newlineIndex = displayedText.indexOf("\n");
  const prefixPart = newlineIndex >= 0 ? displayedText.slice(0, newlineIndex) : displayedText;
  const highlightPart = newlineIndex >= 0 ? displayedText.slice(newlineIndex + 1) : "";

  // Determine if cursor should blink (when at the end of typing)
  const shouldBlink = phase === "waiting" || (phase === "typing" && displayedText.length === fullText.length);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Diverse group of people collaborating and connecting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Since 2022
            </span>
          </motion.div>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="min-h-[140px] md:min-h-[180px] mb-2"
          >
            <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-extrabold leading-tight whitespace-nowrap">
              <span className="text-primary-foreground">{prefixPart}</span>
              {highlightPart && (
                <>
                  <br />
                  <span className="text-brand-orange font-black">{highlightPart}</span>
                </>
              )}
              <span
                className={`inline-block w-1 h-10 md:h-12 lg:h-14 bg-primary-foreground ml-1 align-middle ${
                  shouldBlink ? "animate-cursor-blink" : ""
                }`}
              />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl"
          >
            Asociația Today Social Skills activează în domeniul educației non-formale, 
            concentrându-se pe dezvoltarea de social skills și soft skills ale tinerilor și adulților.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="accent" size="xl">
              Vezi Evenimente
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl" className="hidden md:inline-flex" asChild>
              <a href="/implica-te">
                <Users className="w-5 h-5" />
                Implică-te
              </a>
            </Button>
            <Button variant="default" size="lg" className="md:hidden" asChild>
              <a href="/implica-te">
                <Users className="w-5 h-5" />
                Implică-te
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator - Above Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2"
            >
              <motion.div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { value: "3+", label: "Ani de Activitate" },
              { value: "500+", label: "Workshops" },
              { value: "50+", label: "Communities" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}