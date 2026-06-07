import { Github, Instagram, Youtube, Twitter, ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-red-500 to-blue-500 opacity-80" />
                <div className="absolute inset-[2px] rounded-md bg-background flex items-center justify-center">
                  <span className="font-orbitron text-xs font-bold gradient-text">CB</span>
                </div>
              </div>
              <span className="font-orbitron text-lg font-bold tracking-wider">
                <span className="text-red-400">CIRCUIT</span>{" "}
                <span className="text-blue-400">BREAKERS</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              FIRST Tech Challenge robotics team based in San Jose, CA.
              Building robots, breaking barriers, and inspiring the next generation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Team", "Achievements", "Stats", "Gallery", "Sponsors", "Join"].map((link) => (
                <button
                  key={link}
                  onClick={() =>
                    document
                      .getElementById(link.toLowerCase() === "join" ? "contact" : link.toLowerCase())
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-muted-foreground hover:text-red-400 transition-colors text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
                { icon: Twitter, label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-muted-foreground hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:team@circuitbreakers.org" className="hover:text-red-400 transition-colors">
                team@circuitbreakers.org
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> by FTC Team Circuit Breakers
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Circuit Breakers. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.06] text-muted-foreground hover:text-red-400 hover:border-red-500/30 transition-all duration-300 text-xs"
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
