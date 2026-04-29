import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/lib/data";
import { Clock, ArrowRight } from "lucide-react";
const CM: Record<string, string> = { cyan: "oklch(0.70 0.18 195)", purple: "oklch(0.68 0.22 270)", emerald: "oklch(0.68 0.20 160)" };
const fiu = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

export function BlogSection() {
  return (
    <section id="blog" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/3 blur-[130px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-primary/60" />
          <span className="text-primary text-sm font-mono font-medium tracking-wider uppercase">07. Blog & Insights</span>
        </motion.div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Technical{" "}
            <span style={{ background: "linear-gradient(135deg, oklch(0.70 0.18 195) 0%, oklch(0.68 0.22 270) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Writings
            </span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => {
            const c = CM[post.color] || CM.cyan;
            return (
              <motion.div key={post.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fiu} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-border/50 bg-card/50 overflow-hidden hover:border-primary/30 transition-all duration-300 cursor-pointer"
                style={{ backdropFilter: "blur(10px)" }} whileHover={{ y: -3 }}>
                <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${c}, transparent)` }} />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium" style={{ background: `${c}15`, color: c }}>{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="w-3.5 h-3.5" />{post.readTime}</div>
                    <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: c }}>
                      Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/40">
                    {post.tags.map(t => <span key={t} className="px-2 py-0.5 text-xs font-mono rounded border border-border/50 text-muted-foreground">#{t}</span>)}
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: `inset 0 0 40px ${c}08` }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
