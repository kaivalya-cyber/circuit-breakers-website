import { motion } from "framer-motion";
import { Trophy, Star, Medal, Target, Zap, Award, ChevronRight } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "FIRST Championship Qualifier",
    subtitle: "2023-24 Season",
    description: "Qualified for the FIRST Championship in Houston. Finished in the top 20 of our division — our best result ever.",
    highlight: true,
    color: "from-amber-400 to-yellow-500",
    stats: [
      { label: "Division Rank", value: "#18" },
      { label: "Win Rate", value: "73%" },
    ],
  },
  {
    icon: Award,
    title: "Innovate Award Winner",
    subtitle: "State Championship 2023",
    description: "Recognized for our unique 4-bar linkage intake mechanism with computer vision-assisted alignment.",
    highlight: true,
    color: "from-red-500 to-red-600",
    stats: [
      { label: "Category", value: "Design" },
      { label: "Level", value: "State" },
    ],
  },
  {
    icon: Medal,
    title: "Regional Finalists",
    subtitle: "NorCal Regional 2022",
    description: "Advanced to regional championship finals with our alliance partners. Set a new team scoring record.",
    highlight: false,
    color: "from-blue-500 to-blue-600",
    stats: [
      { label: "High Score", value: "187" },
      { label: "Alliance", value: "#2 Seed" },
    ],
  },
  {
    icon: Star,
    title: "Motivate Award",
    subtitle: "First Competition 2020",
    description: "Our very first award! Recognized for team spirit and enthusiasm at our debut competition.",
    highlight: false,
    color: "from-green-500 to-green-600",
    stats: [
      { label: "Event", value: "Qualifier" },
      { label: "Team Size", value: "6 members" },
    ],
  },
  {
    icon: Target,
    title: "Control Award",
    subtitle: "League Championship 2024",
    description: "Awarded for innovative sensor use — our custom PID controller and autonomous path planning.",
    highlight: false,
    color: "from-purple-500 to-purple-600",
    stats: [
      { label: "Category", value: "Software" },
      { label: "Autonomous", value: "98% reliable" },
    ],
  },
  {
    icon: Zap,
    title: "Think Award",
    subtitle: "Qualifier 2023",
    description: "Recognized for our engineering notebook and documentation — over 200 pages of design process.",
    highlight: false,
    color: "from-cyan-500 to-cyan-600",
    stats: [
      { label: "Notebook", value: "200+ pages" },
      { label: "Level", value: "Regional" },
    ],
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            🏆 Awards & Recognition
          </span>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            Our <span className="gradient-text">Achievements</span>
          </h2>
          <div className="divider-glow mb-6" />
        </motion.div>

        {/* Featured Achievement */}
        {achievements.filter(a => a.highlight).map((achievement, i) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-12"
          >
            <div className="glass-card p-8 md:p-10 relative overflow-hidden group hover:border-red-500/30 transition-all duration-500">
              {/* Glow effect */}
              <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg`}>
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${achievement.color} text-white`}>
                      FEATURED
                    </span>
                    <span className="text-sm text-muted-foreground">{achievement.subtitle}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{achievement.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    {achievement.description}
                  </p>
                  <div className="flex gap-6">
                    {achievement.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-orbitron font-bold gradient-text">{stat.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Achievements Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.filter(a => !a.highlight).map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="glass-card p-6 h-full card-hover group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-muted-foreground">{achievement.subtitle}</span>
                <h4 className="text-lg font-bold mt-1 mb-2 group-hover:text-red-400 transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {achievement.description}
                </p>
                <div className="flex gap-4">
                  {achievement.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-lg font-orbitron font-bold text-blue-400">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/[0.06]">
                  <span className="inline-flex items-center gap-1 text-xs text-red-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
