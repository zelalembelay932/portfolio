import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/data";
import { Code2, Heart, Github, Linkedin } from "lucide-react";
import { SiWhatsapp, SiTelegram } from "react-icons/si";

const LINKS = [
  { label: "About", id: "about" }, { label: "Skills", id: "skills" }, { label: "Projects", id: "projects" },
  { label: "Services", id: "services" }, { label: "Education", id: "education" }, { label: "Blog", id: "blog" }, { label: "Contact", id: "contact" },
];
const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold text-lg tracking-tight text-foreground"><span className="text-primary">Z</span>elalem Belay</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-sm">
              WordPress Developer & Full-Stack Web Developer based in Adama, Ethiopia. Building responsive, scalable, and professional digital experiences.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Github, href: PERSONAL.github, label: "GitHub" },
                { Icon: Linkedin, href: PERSONAL.linkedin, label: "LinkedIn" },
                { Icon: SiWhatsapp, href: PERSONAL.whatsapp, label: "WhatsApp" },
                { Icon: SiTelegram, href: PERSONAL.telegram, label: "Telegram" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border/60 bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {LINKS.map(l => (
                <li key={l.id}><button onClick={() => scrollTo(l.id)} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</button></li>
              ))}
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5">Services</h4>
            <ul className="space-y-3">
              {["WordPress Development", "WooCommerce Stores", "Web Applications", "Database Design", "Face Recognition", "Website Maintenance"].map(s => (
                <li key={s}><button onClick={() => scrollTo("services")} className="text-sm text-muted-foreground hover:text-primary transition-colors text-left">{s}</button></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Zelalem Belay. All rights reserved.</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">Built with <Heart className="w-3 h-3 text-red-500 fill-current" /> React & Tailwind CSS</p>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-medium">Available for hire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
