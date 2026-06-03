import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILL_GROUPS } from "@/lib/data";
import { SiWordpress } from "react-icons/si";

const colorMap: Record<string, string> = {
  cyan: "oklch(0.70 0.18 195)", purple: "oklch(0.68 0.22 270)",
  blue: "oklch(0.68 0.18 230)", emerald: "oklch(0.68 0.20 160)",
  amber: "oklch(0.72 0.20 45)", slate: "oklch(0.65 0.03 240)",
};
const fiu = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

function SkillIcon({ icon, color, size = "md" }: { icon: string; color: string; size?: "md" | "lg" }) {
  const iconSize = size === "lg" ? "w-7 h-7" : "w-6 h-6";

  if (icon === "WordPress") {
    return <SiWordpress className={iconSize} style={{ color }} aria-label="WordPress" />;
  }

  return <span className={size === "lg" ? "text-3xl" : "text-2xl"}>{icon}</span>;
}

export function SkillsSection() {
  const [active, setActive] = useState(0);
  const group = SKILL_GROUPS[active];
  const color = colorMap[group.color];

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-secondary/20 overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-accent/4 blur-[130px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-primary/60" />
          <span className="text-primary text-sm font-mono font-medium tracking-wider uppercase">02. Skills</span>
        </motion.div>

        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Technical{" "}
          <span style={{ background: "linear-gradient(135deg, oklch(0.70 0.18 195) 0%, oklch(0.68 0.22 270) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Expertise
          </span>
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5, delay: 0.15 }}
          className="text-muted-foreground text-lg mb-12 max-w-2xl">
          A solid technical foundation built through real-world projects from WordPress development and Python backends to AI-powered systems.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category buttons */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-2">
            {SKILL_GROUPS.map((g, i) => {
              const c = colorMap[g.color];
              return (
                <button key={g.category} onClick={() => setActive(i)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${active === i ? "border-primary/50 bg-primary/10" : "border-border/50 bg-card/40 hover:border-primary/25"}`}
                  style={{ backdropFilter: "blur(10px)" }}
                >
                  <div className="flex items-center gap-3">
                    <SkillIcon icon={g.icon} color={c} />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{g.category}</div>
                      <div className="text-xs text-muted-foreground">{g.skills.length} skills</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Skill detail */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 p-6 rounded-2xl border border-border/50 bg-card/50" style={{ backdropFilter: "blur(12px)" }}>
            <AnimatePresence mode="wait">
              <motion.div key={group.category} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.3 }}>
                <div className="flex items-center gap-3 mb-6">
                  <SkillIcon icon={group.icon} color={color} size="lg" />
                  <div>
                    <h3 className="text-xl font-bold" style={{ background: `linear-gradient(135deg, ${color}, oklch(0.68 0.22 270))`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      {group.category}
                    </h3>
                    <p className="text-xs text-muted-foreground">{group.skills.length} technologies</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {group.skills.map((s, i) => (
                    <motion.div key={s.name} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06, duration: 0.3 }}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-foreground">{s.name}</span>
                        <span className="text-xs font-mono text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div className="h-full rounded-full" initial={{ width: 0 }} animate={{ width: `${s.level}%` }} transition={{ duration: 0.8, delay: i * 0.06 + 0.2, ease: "easeOut" }} style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* All skills cloud */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5, delay: 0.4 }} className="mt-12">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">All Technologies</p>
          <div className="flex flex-wrap gap-2">
            {SKILL_GROUPS.flatMap(g => g.skills.map(s => s.name)).map(t => (
              <span key={t} className="px-3 py-1.5 text-xs font-mono rounded-lg border border-border/50 bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200 cursor-default">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
