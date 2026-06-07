import { motion } from "framer-motion";
import { ExternalLink, Heart } from "lucide-react";

const sponsors = [
  {
    name: "FIRST",
    tier: "Platinum",
    logo: "/sponsors/first-logo.svg",
    description: "For Inspiration and Recognition of Science and Technology — the global robotics organization we compete under.",
  },
  {
    name: "SainSmart",
    tier: "Platinum",
    logo: "/sponsors/sainsmart-logo.png",
    description: "Provided CNC machine and 3D printers — vital hardware that powers our entire build process.",
  },
  {
    name: "Play At Learning",
    tier: "Gold",
    logo: "/sponsors/play-at-learning-logo.png",
    description: "Community partner helping us host FTC qualifiers, manage field setup, and run events.",
  },
  {
    name: "PayPal",
    tier: "Gold",
    logo: "/sponsors/paypal-logo.svg",
    description: "Technology partner — Senior Engineer Sanjay Singh mentored the team on projectile motion physics.",
  },
  {
    name: "Caltech",
    tier: "Silver",
    logo: "/sponsors/caltech-logo.svg",
    description: "Academic partner — Caltech alumni presented on FIRST's mission and recruited judges for our events.",
  },
  {
    name: "SLAC",
    tier: "Silver",
    logo: "/sponsors/slac-logo.png",
    description: "Stanford's National Accelerator Lab — CAD expert Chethana Gowda taught Fusion360 and design principles.",
  },
  {
    name: "Makers Grant",
    tier: "Bronze",
    logo: "/sponsors/makers-grant-logo.svg",
    description: "Awarded a $600 grant supporting our build season and competition expenses.",
  },
  {
    name: "Community Fundraisers",
    tier: "Bronze",
    logo: "/sponsors/makers-grant-logo.svg",
    description: "Raised $3,000+ through community fundraisers — fueling our robots and outreach programs.",
    isFundraiser: true,
  },
];

const tierBadgeStyles: Record<string, string> = {
  Platinum: "from-amber-400 to-yellow-500 text-amber-950",
  Gold: "from-yellow-400 to-amber-500 text-amber-950",
  Silver: "from-gray-300 to-gray-400 text-gray-800",
  Bronze: "from-amber-600 to-amber-700 text-amber-100",
};

const Sponsors = () => {
  return (
    <section id="sponsors" className="section-padding relative bg-white/[0.01]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            <Heart className="w-3.5 h-3.5" /> Our Supporters
          </span>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="gradient-text">Sponsors</span> & Partners
          </h2>
          <div className="divider-glow mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We couldn't build robots, host events, or run camps without the generous support of these organizations and individuals.
          </p>
        </motion.div>

        {/* Sponsor Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <div className="glass-card p-5 text-center h-full card-hover group flex flex-col items-center gap-3">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden border border-white/[0.06] group-hover:border-purple-500/30 transition-all duration-300 ${sponsor.isFundraiser ? "bg-purple-500/10" : "bg-white/[0.02]"}`}>
                  {sponsor.isFundraiser ? (
                    <Heart className="w-7 h-7 text-purple-400" />
                  ) : (
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm mb-1 group-hover:text-purple-400 transition-colors">{sponsor.name}</h4>
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r border ${tierBadgeStyles[sponsor.tier]}`}
                  >
                    {sponsor.tier}
                  </span>
                </div>
                <div className="relative mt-1"><p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2 absolute left-0 right-0 opacity-0 group-hover:opacity-100 group-hover:relative transition-all duration-300">
                  {sponsor.description}
                </p></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Thanks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="glass-card p-6">
            <p className="text-sm text-muted-foreground mb-1">
              Special thanks to our individual mentors:
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {[
                { name: "Shuhul Mujoo", role: "Coach & FIRST Alumni" },
                { name: "Sanjay Singh", role: "Sr. Engineer, PayPal" },
                { name: "Chethana Gowda", role: "CAD Expert, SLAC" },
                { name: "Adarsh", role: "Caltech Alumni" },
                { name: "Prof. Celso", role: "Academic Advisor" },
                { name: "Prof. Gurti", role: "Academic Advisor" },
              ].map((mentor) => (
                <span
                  key={mentor.name}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-500/5 border border-purple-500/10 text-xs text-muted-foreground hover:border-purple-500/30 hover:text-purple-400 transition-all duration-300"
                >
                  {mentor.name}
                  <span className="text-[10px] opacity-50">· {mentor.role}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
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
