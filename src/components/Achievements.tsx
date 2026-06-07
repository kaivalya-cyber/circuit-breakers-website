import { motion } from "framer-motion";
import { Trophy, Star, Target, Users, GraduationCap, Heart, ChevronRight } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Hosted FTC Qualifier — PlaySpace #8",
    subtitle: "December 2024",
    description: "Partnered with Play At Learning to host an official FTC qualifier tournament. Organized fields, managed volunteers, and welcomed teams from across the region.",
    highlight: true,
    color: "from-purple-500 to-fuchsia-500",
    stats: [{ label: "Role", value: "Host" }, { label: "Teams", value: "12+" }],
  },
  {
    icon: GraduationCap,
    title: "QBIT Summer Camp",
    subtitle: "June–July 2025",
    description: "Designed and ran a comprehensive robotics summer camp. 17 students learned CAD, programming, and mechanical design over 6 weeks.",
    highlight: true,
    color: "from-cyan-500 to-teal-500",
    stats: [{ label: "Students", value: "17" }, { label: "Duration", value: "6 weeks" }],
  },
  {
    icon: Heart,
    title: "Mentored Rookie Team QTech",
    subtitle: "2024–2025 Season",
    description: "Took QTech #30569 under our wing — providing mentorship, sharing resources, and helping them compete in their first season.",
    highlight: false,
    color: "from-fuchsia-500 to-pink-500",
    stats: [{ label: "Team", value: "#30569" }, { label: "Status", value: "Active" }],
  },
  {
    icon: Users,
    title: "Farmers Market Community Demos",
    subtitle: "Ongoing — Monthly",
    description: "Regular robot demonstrations at Evergreen Village Square Farmers Market. Connected with hundreds of families and inspired future engineers.",
    highlight: false,
    color: "from-purple-500 to-violet-500",
    stats: [{ label: "Reach", value: "500+" }, { label: "Frequency", value: "Monthly" }],
  },
  {
    icon: Target,
    title: "Workshop Series Launch",
    subtitle: "2025",
    description: "Developed a robotics workshop curriculum covering mechanical design, Java programming, and sensor integration for beginners.",
    highlight: false,
    color: "from-teal-500 to-cyan-500",
    stats: [{ label: "Topics", value: "6" }, { label: "Level", value: "Beginner" }],
  },
  {
    icon: Star,
    title: "Play At Learning Partnership",
    subtitle: "Est. 2024",
    description: "Established an ongoing partnership with Play At Learning to set up fields and host events, expanding FTC access in the Bay Area.",
    highlight: false,
    color: "from-violet-500 to-purple-500",
    stats: [{ label: "Events", value: "Multiple" }, { label: "Status", value: "Ongoing" }],
  },
];

const Achievements = () => (
  <section id="achievements" className="section-padding relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/3 rounded-full blur-3xl" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-center mb-16">
        <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">🏆 Achievements</span>
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">Our <span className="gradient-text">Impact</span></h2>
        <div className="divider-glow mb-6" />
      </motion.div>

      {achievements.filter(a => a.highlight).map((achievement) => (
        <motion.div key={achievement.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.2, duration: 0.7 }} className="mb-12">
          <div className="glass-card p-8 md:p-10 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500">
            <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg`}>
                <achievement.icon className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${achievement.color} text-white`}>FEATURED</span>
                  <span className="text-sm text-muted-foreground">{achievement.subtitle}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{achievement.description}</p>
                <div className="flex gap-6">
                  {achievement.stats.map((stat) => (
                    <div key={stat.label}><div className="text-2xl font-orbitron font-bold gradient-text">{stat.value}</div><div className="text-xs text-muted-foreground mt-1">{stat.label}</div></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="grid sm:grid-cols-2 gap-6">
        {achievements.filter(a => !a.highlight).map((achievement, i) => (
          <motion.div key={achievement.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1, duration: 0.6 }}>
            <div className="glass-card p-6 h-full card-hover group">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-muted-foreground">{achievement.subtitle}</span>
              <h4 className="text-lg font-bold mt-1 mb-2 group-hover:text-cyan-400 transition-colors">{achievement.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{achievement.description}</p>
              <div className="flex gap-4">
                {achievement.stats.map((stat) => (
                  <div key={stat.label}><div className="text-lg font-orbitron font-bold text-cyan-400">{stat.value}</div><div className="text-xs text-muted-foreground">{stat.label}</div></div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <span className="inline-flex items-center gap-1 text-xs text-cyan-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">View Details <ChevronRight className="w-3 h-3" /></span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
