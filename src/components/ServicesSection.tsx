import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";
import { Globe, ShoppingCart, Building2, Code2, ClipboardList, Database, Layout, Wrench, LayoutDashboard, Scan } from "lucide-react";

const ICONS: Record<string, React.ElementType> = { Globe, ShoppingCart, Building2, Code2, ClipboardList, ScanFace: Scan, Database, Layout, Wrench, LayoutDashboard };
const CM: Record<string, string> = {
  cyan: "oklch(0.70 0.18 195)", purple: "oklch(0.68 0.22 270)", blue: "oklch(0.68 0.18 230)",
  emerald: "oklch(0.68 0.20 160)", amber: "oklch(0.72 0.20 45)", pink: "oklch(0.72 0.20 330)",
  teal: "oklch(0.68 0.18 175)", violet: "oklch(0.68 0.24 290)", slate: "oklch(0.65 0.03 240)", orange: "oklch(0.72 0.20 55)",
};
const fiu = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-secondary/20 overflow-hidden">
      <div className="absolute left-1/4 top-1/4 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-primary/60" />
          <span className="text-primary text-sm font-mono font-medium tracking-wider uppercase">04. Services</span>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            What I{" "}
            <span style={{ background: "linear-gradient(135deg, oklch(0.70 0.18 195) 0%, oklch(0.68 0.22 270) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Offer
            </span>
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-lg">
            From WordPress development to AI-powered systems — end-to-end solutions that deliver real business value.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] || Code2;
            const c = CM[s.color] || CM.cyan;
            return (
              <motion.div key={s.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fiu} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative p-5 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 transition-all duration-300"
                style={{ backdropFilter: "blur(10px)" }}
                whileHover={{ y: -3 }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110" style={{ background: `${c}15`, border: `1px solid ${c}25` }}>
                  <Icon className="w-5 h-5" style={{ color: c }} />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: `inset 0 0 40px ${c}08` }} />
              </motion.div>
            );
          })}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5, delay: 0.3 }} className="mt-12 text-center">
          <p className="text-muted-foreground mb-5 text-lg">Ready to start a project? Let's discuss your requirements.</p>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_0_25px_rgba(112,214,255,0.25)] hover:scale-[1.02]">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
