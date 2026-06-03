import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code2, Database, Layers } from "lucide-react";
import { SiWordpress } from "react-icons/si";
import { PERSONAL, PROFILE_IMAGE } from "@/lib/data";

const fiu = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const HIGHLIGHTS = [
  { icon: SiWordpress, title: "WordPress Specialist", desc: "Custom themes, WooCommerce stores, and plugin development for real business clients.", color: "oklch(0.70 0.18 195)" },
  { icon: Code2, title: "Full-Stack Systems", desc: "Python Flask web applications, REST APIs, and database-driven systems built from scratch.", color: "oklch(0.68 0.22 270)" },
  { icon: Database, title: "Database-First Thinking", desc: "MySQL schema design, relational modeling, and optimized queries for reliable, fast data.", color: "oklch(0.68 0.20 160)" },
  { icon: Layers, title: "Clean & Maintainable Code", desc: "Every project is built with structure, documentation, and long-term maintainability in mind.", color: "oklch(0.72 0.20 45)" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-primary/60" />
          <span className="text-primary text-sm font-mono font-medium tracking-wider uppercase">01. About Me</span>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* LEFT — Photo + quick info */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6"
          >
            {/* Photo */}
            <div className="relative">
              <div
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden border-2"
                style={{ borderColor: "oklch(0.70 0.18 195 / 0.4)" }}
              >
                <img src={PROFILE_IMAGE} alt="Zelalem Belay" className="w-full h-full object-cover object-top" />
              </div>
              {/* Corner badge */}
              <div
                className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-xl border text-xs font-mono font-medium shadow-lg"
                style={{
                  background: "oklch(0.12 0.015 240)",
                  borderColor: "oklch(0.70 0.18 195 / 0.4)",
                  color: "oklch(0.70 0.18 195)",
                  backdropFilter: "blur(10px)",
                }}
              >
                Open to Work ✓
              </div>
            </div>

            {/* Quick info card */}
            <div className="w-full p-5 rounded-2xl border border-border/50 bg-card/50" style={{ backdropFilter: "blur(10px)" }}>
              <div className="space-y-3">
                {[
                  { label: "Name", value: PERSONAL.name },
                  { label: "Role", value: "WordPress & Full-Stack Dev" },
                  { label: "Location", value: PERSONAL.location, icon: MapPin },
                  { label: "Education", value: "Adama Polytechnic College", icon: GraduationCap },
                  { label: "Email", value: PERSONAL.email },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-start gap-2">
                    <span className="text-xs text-muted-foreground w-20 shrink-0 pt-0.5">{label}</span>
                    <div className="flex items-center gap-1">
                      {Icon && <Icon className="w-3 h-3 text-primary shrink-0" />}
                      <span className="text-xs font-medium text-foreground">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Text */}
          <div className="lg:col-span-3">
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Passionate About{" "}
              <span style={{ background: "linear-gradient(135deg, oklch(0.70 0.18 195) 0%, oklch(0.68 0.22 270) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Building Real Things
              </span>
            </motion.h2>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-muted-foreground leading-relaxed mb-8"
            >
              <p>
                I'm <strong className="text-foreground">Zelalem Belay</strong>, a WordPress Developer and Full-Stack Web Developer based in{" "}
                <span className="inline-flex items-center gap-1 text-foreground font-medium">
                  <MapPin className="w-3.5 h-3.5 text-primary" />Adama, Ethiopia
                </span>. I build user-friendly websites and web systems that are easy to manage, fast, and built to last.
              </p>
              <p>
                My work ranges from <strong className="text-foreground">custom WordPress websites</strong> corporate platforms, e-commerce stores, and business portfolios to <strong className="text-foreground">full-stack web applications</strong> built with Python Flask, MySQL, and Bootstrap. I've delivered real projects for real clients including a biotech company, a fashion brand, a martial arts club, and a college-level system.
              </p>
              <p>
                Beyond websites, I build data-driven backend systems, complaint management tools, and AI-powered attendance solutions. I care about <strong className="text-primary">clean code</strong>, <strong className="text-primary">reliable delivery</strong>, and projects that perform in the real world not just in demos.
              </p>
              <p>
                I'm currently open to freelance projects, long-term partnerships, and technical collaborations where I can contribute meaningful engineering work and grow alongside the team.
              </p>
            </motion.div>

            {/* Highlights grid */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {HIGHLIGHTS.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.title}
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fiu} transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="group p-4 rounded-xl border border-border/50 bg-card/40 hover:border-primary/25 transition-all duration-300"
                    style={{ backdropFilter: "blur(10px)" }}
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: `${h.color}18`, border: `1px solid ${h.color}28` }}>
                      <Icon className="w-4 h-4" style={{ color: h.color }} />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{h.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
