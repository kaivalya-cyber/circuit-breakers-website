import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const sponsors = [
  { name: "TechCorp Industries", tier: "Platinum", logo: "/portfolio/9.png" },
  { name: "RoboWorks Foundation", tier: "Gold", logo: "/portfolio/10.png" },
  { name: "InnovateHub", tier: "Gold", logo: "/portfolio/11.png" },
  { name: "STEMForward", tier: "Silver", logo: "/portfolio/12.png" },
  { name: "MakerSpace Labs", tier: "Silver", logo: "/portfolio/13.png" },
  { name: "Circuit Solutions", tier: "Bronze", logo: "/portfolio/14.png" },
];

const tierStyles: Record<string, string> = {
  Platinum: "from-amber-300 to-yellow-500 text-amber-900",
  Gold: "from-yellow-400 to-amber-500 text-amber-900",
  Silver: "from-gray-300 to-gray-400 text-gray-800",
  Bronze: "from-amber-600 to-amber-700 text-amber-100",
};

const Sponsors = () => {
  return (
    <section id="sponsors" className="section-padding relative bg-white/[0.01]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            🤝 Partners
          </span>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            Our <span className="gradient-text">Sponsors</span>
          </h2>
          <div className="divider-glow mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We couldn't do what we do without the generous support of our sponsors. Interested in sponsoring?
          </p>
        </motion.div>

        {/* Sponsor Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="glass-card p-6 text-center h-full card-hover group">
                <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center overflow-hidden group-hover:border-red-500/30 transition-all duration-300">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h4 className="font-bold text-sm">{sponsor.name}</h4>
                <span
                  className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r ${tierStyles[sponsor.tier]}`}
                >
                  {sponsor.tier}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-3">Become a Sponsor</h3>
            <p className="text-muted-foreground mb-6">
              Help us build the next generation of engineers. Get your brand in front of students,
              parents, and the FIRST community.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,31,176,0.4)]"
            >
              Sponsor Us
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
