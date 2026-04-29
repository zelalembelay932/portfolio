import { motion } from "framer-motion";
import { EDUCATION } from "@/lib/data";
import { GraduationCap, MapPin, CheckCircle2, BookOpen } from "lucide-react";

const fiu = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[400px] rounded-full bg-primary/3 blur-[130px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-primary/60" />
          <span className="text-primary text-sm font-mono font-medium tracking-wider uppercase">05. Education</span>
        </motion.div>

        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Academic{" "}
          <span style={{ background: "linear-gradient(135deg, oklch(0.70 0.18 195) 0%, oklch(0.68 0.22 270) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Background
          </span>
        </motion.h2>

        <div className="max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 rounded-2xl border border-primary/25 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(15px)" }}>
            {/* Accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, oklch(0.70 0.18 195), oklch(0.68 0.22 270), transparent)" }} />
            <div className="absolute top-0 left-0 w-0.5 h-full" style={{ background: "linear-gradient(180deg, oklch(0.70 0.18 195), transparent)" }} />

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: institution */}
              <div className="lg:col-span-1">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: "oklch(0.70 0.18 195 / 0.12)", border: "1px solid oklch(0.70 0.18 195 / 0.25)" }}>
                  <GraduationCap className="w-7 h-7" style={{ color: "oklch(0.70 0.18 195)" }} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {EDUCATION.institution}
                </h3>
                <p className="text-sm font-semibold mb-3" style={{ color: "oklch(0.70 0.18 195)" }}>{EDUCATION.degree}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{EDUCATION.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{EDUCATION.location}</span>
                  </div>
                </div>
              </div>

              {/* Right: details */}
              <div className="lg:col-span-2">
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{EDUCATION.description}</p>
                <div>
                  <p className="text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground mb-3">Areas of Study</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {EDUCATION.highlights.map(h => (
                      <div key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "oklch(0.68 0.20 160)" }} />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: "inset 0 0 60px oklch(0.70 0.18 195 / 0.04)" }} />
          </motion.div>

          {/* Self-taught note */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 p-5 rounded-xl border border-border/40 bg-card/40 flex items-start gap-4" style={{ backdropFilter: "blur(10px)" }}>
            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "oklch(0.68 0.22 270 / 0.12)", border: "1px solid oklch(0.68 0.22 270 / 0.25)" }}>
              <span className="text-lg">🚀</span>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-1">Continuous Self-Development</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Beyond formal education, I continuously expand my skills through real projects, online learning, and hands-on experimentation currently deepening knowledge in Deep Learning, Kubernetes, and DevOps workflows.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
