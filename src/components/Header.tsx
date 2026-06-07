import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Team", id: "team" },
    { name: "Achievements", id: "achievements" },
    { name: "Stats", id: "stats" },
    { name: "Gallery", id: "gallery" },
    { name: "Sponsors", id: "sponsors" },
    { name: "Join", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-500 opacity-80 group-hover:opacity-100 transition-opacity animate-pulse-glow" />
              <div className="absolute inset-[2px] rounded-md bg-background flex items-center justify-center overflow-hidden">
                <img src="/team-logo.png" alt="QBIT" className="w-full h-full object-contain p-0.5" />
              </div>
            </div>
            <span className="hidden sm:block font-orbitron text-lg font-bold tracking-wider">
              <span className="text-purple-400">QBIT</span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-purple-400 bg-purple-500/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-500" />
                )}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,31,176,0.4)] btn-glow"
          >
            Join The Team
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="py-4 space-y-1 border-t border-white/[0.06]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-purple-400 bg-purple-500/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold text-sm transition-all duration-300"
            >
              Join The Team
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
