import { motion } from "framer-motion";
import { Cpu, Users, Globe, Lightbulb, Rocket } from "lucide-react";

const values = [
  {
    icon: Cpu,
    title: "Innovation",
    description: "Pushing boundaries with creative engineering solutions and cutting-edge technology.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaborating across disciplines to achieve what no individual could alone.",
  },
  {
    icon: Lightbulb,
    title: "Learning",
    description: "Embracing every challenge as an opportunity to grow and develop new skills.",
  },
  {
    icon: Globe,
    title: "Community",
    description: "Giving back through STEM outreach, mentoring, and inspiring the next generation.",
  },
];

const timeline = [
  { year: "2019", event: "Team Founded", description: "Circuit Breakers assembled for the first time with 6 founding members." },
  { year: "2020", event: "First Competition", description: "Competed in our first FTC qualifier — won the Motivate Award." },
  { year: "2021", event: "Regional Finalists", description: "Advanced to regional championships with our innovative intake mechanism." },
  { year: "2022", event: "Innovate Award", description: "Recognized for our unique drivetrain design at state competition." },
  { year: "2023", event: "Worlds Qualifier", description: "Qualified for FIRST Championship — top 20 finish in our division." },
  { year: "2024", event: "Growing Strong", description: "Expanded to 15 members, launched community STEM program reaching 200+ kids." },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            About{" "}
            <span className="gradient-text">Circuit Breakers</span>
          </h2>
          <div className="divider-glow mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're a passionate <span className="text-red-400 font-semibold">FIRST Tech Challenge</span> team dedicated to
            building competitive robots while fostering a love for STEM. From CAD design to code, from strategy to
            community outreach — we do it all.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="glass-card p-8 md:p-12 relative overflow-hidden group hover:border-red-500/20 transition-all duration-500">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 via-blue-500 to-amber-500" />
            <Rocket className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-4">
              Our <span className="text-red-400">Mission</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To inspire and empower the next generation of innovators through competitive robotics. We believe that
              every student deserves the opportunity to explore STEM, develop leadership skills, and discover their
              potential — all while having fun building really cool robots.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="glass-card p-6 h-full card-hover group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-red-400" />
                </div>
                <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-center mb-12">
            Our <span className="text-blue-400">Journey</span>
          </h3>
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500 via-blue-500 to-amber-500 md:-translate-x-px" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className={`relative flex items-start gap-6 mb-8 md:mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[13px] md:left-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-red-500 to-blue-500 border-2 border-background md:-translate-x-1/2 z-10 mt-1.5" />

                {/* Content - offset for dot */}
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <span className="font-orbitron text-sm text-red-400 font-bold">{item.year}</span>
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
