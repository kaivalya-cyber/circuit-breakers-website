import { useEffect, useRef } from "react";
import { ArrowDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ThreeDLogo from "./ThreeDLogo";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string }[] = [];
    const colors = ["#00f0ff", "#ff00ff", "#a020f0", "#00f0ff88", "#ff00ff88"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const lines: { p1: number; p2: number }[] = [];
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        if (Math.random() < 0.03) lines.push({ p1: i, p2: j });
      }
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      lines.forEach(({ p1, p2 }) => {
        const a = particles[p1];
        const b = particles[p2];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `hsla(187, 100%, 50%, ${0.15 * (1 - dist / 180)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden scan-lines">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[scan-line_4s_linear_infinite]" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsla(187,100%,50%,0.15) 1px, transparent 1px), linear-gradient(90deg, hsla(187,100%,50%,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                FIRST Tech Challenge
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black tracking-tighter leading-[0.9]"
            >
              <span className="gradient-text">QBIT</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="font-orbitron text-2xl md:text-3xl text-muted-foreground/60 tracking-[0.3em]">
                TEAM #23642
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Empowering the next generation through robotics, mentorship, and community-driven STEM education.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative px-8 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 text-background font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_40px_hsl(187,100%,50%,0.5)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Meet The Team
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-fuchsia-300 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
              </button>
              <button
                onClick={() => document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 rounded-lg border border-white/10 hover:border-cyan-400/50 text-foreground font-semibold text-lg transition-all duration-300 hover:bg-cyan-500/5 hover:shadow-[0_0_30px_hsl(187,100%,50%,0.15)]"
              >
                Our Achievements
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-[400px] md:h-[500px] lg:h-[600px] relative"
          >
            <ThreeDLogo />
            <motion.img 
              src="/team-logo.png" 
              alt="QBIT Team Logo"
              className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 object-contain rounded-xl bg-background/60 backdrop-blur-sm border border-white/[0.08] p-1.5 shadow-[0_0_30px_hsl(187,100%,50%,0.3)]"
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, duration: 0.6, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 0 40px hsl(300,100%,50%,0.5)" }}
            />
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors group"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce group-hover:animate-none group-hover:translate-y-1 transition-transform" />
      </motion.button>
    </section>
  );
};

export default Hero;
