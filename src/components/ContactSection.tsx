import { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL, PROFILE_IMAGE } from "@/lib/data";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { SiWhatsapp, SiTelegram } from "react-icons/si";

const fiu = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };
type Status = "idle" | "success" | "error";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-secondary/20 overflow-hidden">
      <div className="absolute left-1/4 bottom-0 w-[600px] h-[500px] rounded-full bg-primary/4 blur-[150px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-primary/60" />
          <span className="text-primary text-sm font-mono font-medium tracking-wider uppercase">08. Contact</span>
        </motion.div>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Let's Work{" "}
          <span style={{ background: "linear-gradient(135deg, oklch(0.70 0.18 195) 0%, oklch(0.68 0.22 270) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Together
          </span>
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5, delay: 0.15 }}
          className="text-muted-foreground text-lg mb-14 max-w-2xl">
          Have a project, idea, or opportunity? I'd love to hear from you — let's build something great together.
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* LEFT — info + photo */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2 space-y-7">
            {/* Profile */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 shrink-0" style={{ borderColor: "oklch(0.70 0.18 195 / 0.4)" }}>
                <img src={PROFILE_IMAGE} alt="Zelalem Belay" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <div className="font-bold text-foreground">{PERSONAL.name}</div>
                <div className="text-sm text-muted-foreground">{PERSONAL.role}</div>
                <div className="inline-flex items-center gap-1.5 mt-1 text-xs text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for projects
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { Icon: Mail, label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
                { Icon: Phone, label: "Phone", value: PERSONAL.phone, href: `tel:${PERSONAL.phone}` },
                { Icon: MapPin, label: "Location", value: PERSONAL.location, href: null },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">{label}</div>
                    {href ? <a href={href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">{value}</a>
                      : <span className="text-sm font-medium text-foreground">{value}</span>}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">Connect</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { Icon: Github, label: "GitHub", href: PERSONAL.github, color: "oklch(0.65 0.03 240)" },
                  { Icon: Linkedin, label: "LinkedIn", href: PERSONAL.linkedin, color: "oklch(0.68 0.18 230)" },
                  { Icon: SiWhatsapp, label: "WhatsApp", href: PERSONAL.whatsapp, color: "oklch(0.68 0.20 150)" },
                  { Icon: SiTelegram, label: "Telegram", href: PERSONAL.telegram, color: "oklch(0.68 0.18 205)" },
                ].map(({ Icon, label, href, color }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-border/50 bg-card/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                    style={{ backdropFilter: "blur(10px)" }}>
                    <Icon className="w-4 h-4" style={{ color }} />{label}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp button */}
            <a href={PERSONAL.whatsapp} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-green-500/30 bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-all font-medium text-sm">
              <SiWhatsapp className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fiu} transition={{ duration: 0.5, delay: 0.25 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl border border-border/50 bg-card/50 space-y-5" style={{ backdropFilter: "blur(15px)" }}>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                ].map(f => (
                  <div key={f.name}>
                    <label className="block text-xs font-medium text-muted-foreground mb-2">{f.label} <span className="text-primary">*</span></label>
                    <input type={f.type} name={f.name} value={(form as Record<string, string>)[f.name]} onChange={handleChange} required placeholder={f.placeholder}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-border/60 bg-secondary/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all" />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2">Subject <span className="text-primary">*</span></label>
                <select name="subject" value={form.subject} onChange={handleChange} required
                  className="w-full px-4 py-3 text-sm rounded-xl border border-border/60 bg-secondary/50 text-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all">
                  <option value="" disabled>Select topic...</option>
                  <option value="wordpress">WordPress Website</option>
                  <option value="woocommerce">WooCommerce / E-Commerce</option>
                  <option value="webapp">Web Application (Flask)</option>
                  <option value="database">Database Design</option>
                  <option value="ai">Face Recognition System</option>
                  <option value="maintenance">Website Maintenance</option>
                  <option value="other">Other / General</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2">Message <span className="text-primary">*</span></label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 text-sm rounded-xl border border-border/60 bg-secondary/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all resize-none" />
              </div>
              {status === "success" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" /> Message sent! I'll get back to you within 24 hours.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" /> Something went wrong. Please email me directly.
                </motion.div>
              )}
              <button type="submit" disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_0_25px_rgba(112,214,255,0.25)] hover:shadow-[0_0_35px_rgba(112,214,255,0.4)] hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100">
                {loading ? <><span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />Sending...</>
                  : <><Send className="w-4 h-4" />Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
