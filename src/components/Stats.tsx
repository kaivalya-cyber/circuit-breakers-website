import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Activity, Crosshair } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

// Mock FTC season stats
const seasonData = [
  { season: "19-20", matches: 24, winRate: 58, opr: 42, highScore: 134 },
  { season: "20-21", matches: 18, winRate: 61, opr: 48, highScore: 156 },
  { season: "21-22", matches: 30, winRate: 67, opr: 56, highScore: 178 },
  { season: "22-23", matches: 32, winRate: 72, opr: 64, highScore: 196 },
  { season: "23-24", matches: 36, winRate: 73, opr: 71, highScore: 215 },
];

const winLossData = [
  { name: "Wins", value: 128, color: "#8b1fb0" },
  { name: "Losses", value: 48, color: "#c020b0" },
  { name: "Ties", value: 4, color: "#00bcd4" },
];

const CountUp = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(end * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-orbitron font-bold gradient-text">
      {count}{suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="section-padding relative">
      <div className="absolute inset-0 mesh-bg opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            📊 By The Numbers
          </span>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            Season <span className="gradient-text">Stats</span>
          </h2>
          <div className="divider-glow mb-6" />
        </motion.div>

        {/* Stat Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Activity, label: "Total Matches", value: 180, suffix: "+" },
            { icon: Crosshair, label: "Win Rate", value: 71, suffix: "%" },
            { icon: TrendingUp, label: "Best OPR", value: 71, suffix: "" },
            { icon: BarChart3, label: "High Score", value: 215, suffix: "" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-card p-6 text-center card-hover">
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <CountUp end={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* OPR & Win Rate Trend */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-6">OPR & Win Rate Trend</h3>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={seasonData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="season" stroke="rgba(255,255,255,0.3)" fontSize={12} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(225 25% 8%)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                  <Line type="monotone" dataKey="opr" stroke="#8b1fb0" strokeWidth={2} dot={{ fill: "#8b1fb0", r: 4 }} name="OPR" />
                  <Line type="monotone" dataKey="winRate" stroke="#c020b0" strokeWidth={2} dot={{ fill: "#c020b0", r: 4 }} name="Win Rate %" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* High Score Trend */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-6">High Score Per Season</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={seasonData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="season" stroke="rgba(255,255,255,0.3)" fontSize={12} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(225 25% 8%)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                  <Bar dataKey="highScore" fill="url(#highScoreGradient)" radius={[4, 4, 0, 0]} name="High Score" />
                  <defs>
                    <linearGradient id="highScoreGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b1fb0" />
                      <stop offset="100%" stopColor="#c020b0" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Win/Loss Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-6">Win / Loss Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={winLossData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {winLossData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "hsl(225 25% 8%)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-2">
                {winLossData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: item.color }} />
                    <span className="text-sm text-muted-foreground">{item.name}: {item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Matches Per Season */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-6">Matches Per Season</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={seasonData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis type="number" stroke="rgba(255,255,255,0.3)" fontSize={12} />
                  <YAxis type="category" dataKey="season" stroke="rgba(255,255,255,0.3)" fontSize={12} width={50} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(225 25% 8%)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                  <Bar dataKey="matches" fill="url(#matchesGradient)" radius={[0, 4, 4, 0]} name="Matches" />
                  <defs>
                    <linearGradient id="matchesGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#8b1fb0" />
                      <stop offset="100%" stopColor="#00bcd4" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
