import { motion } from "framer-motion";
import { Cpu, Users, Globe, Lightbulb, Rocket, GraduationCap, Megaphone, Heart } from "lucide-react";

const values = [
  { icon: Cpu, title: "Innovation", description: "Building competitive robots with creative engineering and smart software." },
  { icon: Users, title: "Teamwork", description: "Eight members, one team — collaborating across mechanical, software, and outreach." },
  { icon: Lightbulb, title: "Learning", description: "Every build session is a chance to learn something new — no experience required." },
  { icon: Globe, title: "Community", description: "Hosting workshops, summer camps, and demos to spread STEM across San Jose." },
];

const timeline = [
  { year: "2023", event: "Team Founded", description: "QBIT #23642 formed with a vision to bring robotics to underserved students in San Jose." },
  { year: "2024", event: "Hosted First Qualifier", description: "Partnered with Play At Learning to host PlaySpace #8 Qualifier — our biggest event yet." },
  { year: "2024", event: "Summer Camp Launch", description: "Ran QBIT Summer Camp teaching 17 students robotics fundamentals over June-July." },
  { year: "2024", event: "Community Outreach", description: "Started regular demos at Evergreen Village Square Farmers Market, reaching hundreds of families." },
  { year: "2025", event: "Mentorship Program", description: "Began mentoring QTech #30569, helping a new team get started in FTC." },
  { year: "2025", event: "Growing Impact", description: "Expanded workshops and outreach — now a recognized name in the Bay Area FTC community." },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-500/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">Who We Are</span>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">About <span className="gradient-text">QBIT</span></h2>
          <div className="divider-glow mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're <span className="text-purple-400 font-semibold">FTC Team #23642</span> — a community-first robotics team based in San Jose, CA.
            We build robots, teach STEM, and create opportunities for the next generation of engineers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="glass-card p-8 md:p-12 relative overflow-hidden group hover:border-purple-500/20 transition-all duration-500">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 via-fuchsia-500 to-cyan-500" />
            <Rocket className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-4">Our <span className="text-purple-400">Mission</span></h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To make robotics accessible to every student — regardless of background or experience. Through hands-on building, mentorship, and community engagement, we inspire the innovators of tomorrow and prove that anyone can be an engineer.
            </p>
            <img 
              src="/team-photos/team-group.png" 
              alt="QBIT Team" 
              className="w-full rounded-lg border border-white/[0.06] object-cover max-h-64"
            />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, i) => (
            <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1, duration: 0.6 }}>
              <div className="glass-card p-6 h-full card-hover group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outreach Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-center mb-8">Community <span className="text-fuchsia-400">Impact</span></h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: GraduationCap, title: "QBIT Summer Camp", desc: "Taught 17 students robotics fundamentals in our June-July 2025 program.", stat: "17 students" },
              { icon: Megaphone, title: "Farmers Market Demos", desc: "Regular robot demos at Evergreen Village Square, reaching hundreds of families.", stat: "Monthly" },
              { icon: Heart, title: "Mentoring QTech", desc: "Guiding rookie team QTech #30569 through their first FTC season.", stat: "1 mentee team" },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }}>
                <div className="glass-card p-6 h-full card-hover text-center">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-lg font-orbitron font-bold text-fuchsia-400 mb-1">{item.stat}</div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-center mb-12">Our <span className="text-fuchsia-400">Journey</span></h3>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-fuchsia-500 to-cyan-500 md:-translate-x-px" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className={`relative flex items-start gap-6 mb-8 md:mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-[13px] md:left-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 border-2 border-background md:-translate-x-1/2 z-10 mt-1.5" />
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <span className="font-orbitron text-sm text-purple-400 font-bold">{item.year}</span>
                  <h4 className="text-lg font-bold mt-1">{item.event}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
