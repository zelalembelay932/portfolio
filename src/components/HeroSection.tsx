import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, MessageCircle, Zap, Download } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { PERSONAL, PROFILE_IMAGE, STATS } from "@/lib/data";

const ROLE_COLORS: Record<string, string> = {
  "WordPress Developer": "oklch(0.70 0.18 195)",
  "Full-Stack Developer": "oklch(0.68 0.22 270)",
  "Web Developer": "oklch(0.68 0.20 160)",
  "Database & Systems Developer": "oklch(0.72 0.20 45)",
};

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let t = 0;
    let id: number;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const sp = 45;
      for (let i = 0; i <= Math.ceil(canvas.width / sp); i++) {
        for (let j = 0; j <= Math.ceil(canvas.height / sp); j++) {
          const x = i * sp, y = j * sp;
          const d = Math.sqrt((x - canvas.width / 2) ** 2 + (y - canvas.height / 2) ** 2);
          const max = Math.sqrt((canvas.width / 2) ** 2 + (canvas.height / 2) ** 2);
          const a = (1 - d / max) * 0.3 + Math.sin(t * 0.015 + d * 0.008) * 0.08;
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `oklch(0.70 0.18 195 / ${Math.max(0, a)})`;
          ctx.fill();
        }
      }
      t++;
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" aria-hidden />;
}

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      <AnimatedBackground />

      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Content */}
          <div className="order-2 lg:order-1">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-foreground">Hi, I'm</span>
              <span
                className="block mt-1"
                style={{
                  background: "linear-gradient(135deg, oklch(0.70 0.18 195) 0%, oklch(0.68 0.22 270) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Zelalem Belay
              </span>
            </motion.h1>

            {/* Role tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-5"
            >
              {PERSONAL.roles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-full border"
                  style={{
                    borderColor: `${ROLE_COLORS[role] || "oklch(0.70 0.18 195)"}40`,
                    background: `${ROLE_COLORS[role] || "oklch(0.70 0.18 195)"}12`,
                    color: ROLE_COLORS[role] || "oklch(0.70 0.18 195)",
                  }}
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl sm:text-2xl font-semibold text-foreground mb-3"
            >
              {PERSONAL.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="text-base text-muted-foreground leading-relaxed mb-8 max-w-lg"
            >
              {PERSONAL.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-[0_0_25px_rgba(112,214,255,0.3)] hover:shadow-[0_0_40px_rgba(112,214,255,0.5)] hover:scale-[1.02]"
              >
                <Zap className="w-4 h-4" />
                View Projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl border border-border/60 bg-secondary/50 text-foreground hover:bg-secondary hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                Contact Me
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">Connect</span>
              <div className="h-px w-10 bg-border" />
              {[
                { Icon: Github, href: PERSONAL.github, label: "GitHub" },
                { Icon: Linkedin, href: PERSONAL.linkedin, label: "LinkedIn" },
                { Icon: SiWhatsapp, href: PERSONAL.whatsapp, label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border/60 bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Profile photo + stats */}
          <div className="order-1 lg:order-2 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-8"
            >
              {/* Outer glow ring */}
              <div
                className="absolute -inset-3 rounded-full"
                style={{
                  background: "linear-gradient(135deg, oklch(0.70 0.18 195 / 0.3), oklch(0.68 0.22 270 / 0.2))",
                  filter: "blur(8px)",
                }}
              />
              {/* Ring border */}
              <div
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-1"
                style={{
                  background: "linear-gradient(135deg, oklch(0.70 0.18 195), oklch(0.68 0.22 270))",
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Zelalem Belay — WordPress & Full-Stack Developer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="absolute -top-2 -right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/30 bg-background/90 text-xs font-medium text-primary shadow-lg"
                style={{ backdropFilter: "blur(10px)" }}
              >
                🔵 WordPress Expert
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.4 }}
                className="absolute -bottom-2 -left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent/30 bg-background/90 text-xs font-medium shadow-lg"
                style={{ backdropFilter: "blur(10px)", color: "oklch(0.68 0.22 270)" }}
              >
                🐍 Python Flask Dev
              </motion.div>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="grid grid-cols-2 gap-3 w-full max-w-xs"
            >
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="p-3 rounded-xl border border-border/50 bg-card/50 text-center"
                  style={{ backdropFilter: "blur(10px)" }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{
                      background: "linear-gradient(135deg, oklch(0.70 0.18 195), oklch(0.68 0.22 270))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tech ticker */}
      <div className="relative z-10 border-t border-border/30 py-3 overflow-hidden">
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {Array(3).fill(null).flatMap((_, ri) =>
            ["WordPress", "WooCommerce", "Python", "Flask", "MySQL", "PHP", "HTML5", "CSS3", "JavaScript", "Bootstrap", "OpenCV", "Git", "Responsive Design"].map((t, i) => (
              <span key={`${ri}-${i}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-primary/60" />
                {t}
              </span>
            ))
          )}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
      `}</style>
    </section>
  );
}
