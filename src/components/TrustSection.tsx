import { motion } from "framer-motion";
import { TRUST_METRICS } from "@/lib/data";
import { ShieldCheck, Clock, Zap, Users } from "lucide-react";

const fiu = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };
const PILLARS = [
  { icon: ShieldCheck, title: "Quality-First Delivery", desc: "Every project is built with clean code, proper structure, and thorough testing before delivery.", color: "oklch(0.70 0.18 195)" },
  { icon: Clock, title: "Reliable & On-Time", desc: "I take deadlines seriously. Projects are planned, communicated, and delivered as agreed.", color: "oklch(0.68 0.22 270)" },
  { icon: Zap, title: "Real-World Experience", desc: "Live sites, production systems, and GitHub repositories proving practical skills — not just theory.", color: "oklch(0.68 0.20 160)" },
  { icon: Users, title: "Client-Centered", desc: "I work to understand your goals first, then build solutions that genuinely serve your needs.", color: "oklch(0.72 0.20 45)" },
];

export function TrustSection() {
  return (
    <section id="trust" className="relative py-24 lg:py-32 bg-secondary/20 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[130px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-primary/60" />
          <span className="text-primary text-sm font-mono font-medium tracking-wider uppercase">06. Why Work With Me</span>
        </motion.div>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Proven{" "}
          <span style={{ background: "linear-gradient(135deg, oklch(0.70 0.18 195) 0%, oklch(0.68 0.22 270) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Credibility
          </span>
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5, delay: 0.15 }}
          className="text-muted-foreground text-lg mb-14 max-w-2xl">
          Backed by real projects, live websites, and hands-on technical experience across multiple domains.
        </motion.p>

        {/* Metrics */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5, delay: 0.2 }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {TRUST_METRICS.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
              className="p-4 rounded-xl border border-border/50 bg-card/50 text-center hover:border-primary/30 transition-all duration-300" style={{ backdropFilter: "blur(10px)" }}>
              <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ background: "linear-gradient(135deg, oklch(0.70 0.18 195), oklch(0.68 0.22 270))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {m.value}
              </div>
              <div className="text-xs font-semibold text-foreground mb-1">{m.label}</div>
              <div className="text-[10px] text-muted-foreground leading-tight hidden sm:block">{m.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fiu} transition={{ duration: 0.4, delay: i * 0.09 }}
                className="p-5 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/20 transition-all duration-300" style={{ backdropFilter: "blur(10px)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${p.color}15`, border: `1px solid ${p.color}25` }}>
                  <Icon className="w-5 h-5" style={{ color: p.color }} />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
