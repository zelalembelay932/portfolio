import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, type Project } from "@/lib/data";
import { ExternalLink, Github, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";

const CM: Record<string, string> = {
  cyan: "oklch(0.70 0.18 195)", purple: "oklch(0.68 0.22 270)",
  emerald: "oklch(0.68 0.20 160)", blue: "oklch(0.68 0.18 230)",
  amber: "oklch(0.72 0.20 45)",
};
const fiu = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const c = CM[project.color] || CM.cyan;
  return (
    <motion.div layout className="group relative rounded-2xl border overflow-hidden transition-all duration-300"
      style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(15px)", borderColor: open ? `${c}40` : "oklch(0.22 0.02 240 / 0.6)" }}
      whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      {/* Top accent */}
      <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${c}, transparent)` }} />
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: `${c}15`, border: `1px solid ${c}30` }}>
            {project.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-mono font-medium mb-1.5" style={{ background: `${c}15`, color: c }}>
              {project.badge}
            </div>
            <h3 className="text-base font-bold text-foreground leading-tight">{project.title}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{project.client}</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.summary}</p>

        {/* Techs */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techs.map(t => (
            <span key={t} className="px-2 py-0.5 text-xs font-mono rounded border" style={{ background: `${c}08`, borderColor: `${c}25`, color: "oklch(0.65 0.03 240)" }}>{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
                style={{ color: c }}>
                <ExternalLink className="w-3.5 h-3.5" /> Live Site
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            )}
          </div>
          <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-xs font-medium transition-colors" style={{ color: open ? c : "oklch(0.65 0.03 240)" }}>
            {open ? <><ChevronUp className="w-3.5 h-3.5" />Hide</> : <><ChevronDown className="w-3.5 h-3.5" />Details</>}
          </button>
        </div>

        {/* Expandable */}
        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
              <div className="pt-4 mt-4 border-t border-border/40 space-y-4">
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Description</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Key Features</p>
                  <ul className="space-y-1.5">
                    {project.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: c }} />{f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Outcome</p>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: c }}>{project.outcome}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: `inset 0 0 40px ${c}08` }} />
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute right-1/4 top-1/3 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[130px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-primary/60" />
          <span className="text-primary text-sm font-mono font-medium tracking-wider uppercase">03. Projects</span>
        </motion.div>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Featured{" "}
          <span style={{ background: "linear-gradient(135deg, oklch(0.70 0.18 195) 0%, oklch(0.68 0.22 270) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Work
          </span>
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5, delay: 0.15 }}
          className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Real projects delivered for real clients — WordPress platforms, e-commerce stores, Flask systems, and AI-powered tools.
        </motion.p>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fiu} transition={{ duration: 0.5, delay: i * 0.09 }}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-4">
          <a href="https://github.com/zelalembelay932" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border border-border/60 bg-secondary/50 text-foreground hover:border-primary/40 hover:bg-primary/10 transition-all duration-200">
            <Github className="w-4 h-4" /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
