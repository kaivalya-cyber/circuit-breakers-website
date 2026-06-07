import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Wrench, Cpu, Users } from "lucide-react";

const members = [
  {
    name: "Ananya",
    role: "Team Captain",
    specialty: "leadership",
    image: "/team-photos/roster-member1.png",
    bio: "Leads QBIT with vision and energy. Focused on helping younger members master CAD and CNC using Fusion360 — building both robots and the next generation of engineers.",
    skills: ["Fusion 360", "CAD", "CNC", "Leadership"],
    social: { github: "#", linkedin: "#", email: "#" },
  },
  {
    name: "Ameya",
    role: "Programming Lead",
    specialty: "code",
    image: "/team-photos/roster-member2.png",
    bio: "Architects teleop and autonomous code. Pioneering PedroPathing curve generative software and building the smartest robot on the field.",
    skills: ["Java", "Autonomous", "PedroPathing", "Control Systems"],
    social: { github: "#", linkedin: "#", email: "#" },
  },
  {
    name: "Mahiya",
    role: "Design Lead",
    specialty: "mechanical",
    image: "/team-photos/roster-member3.png",
    bio: "Oversees technical build quality — from wiring and drilling to intake mechanisms. Teaches teammates clean, competition-ready robot construction.",
    skills: ["Fabrication", "Intake Design", "Wiring", "3D Printing"],
    social: { github: "#", linkedin: "#", email: "#" },
  },
  {
    name: "Anwia",
    role: "Design Lead",
    specialty: "electrical",
    image: "/team-photos/roster-member4.png",
    bio: "Designed and built QBIT's turret and shooting mechanism with integrated color sensors. Hands-on builder who turns ideas into competition hardware.",
    skills: ["Turret Design", "Color Sensors", "Shooting Mech", "Assembly"],
    social: { github: "#", linkedin: "#", email: "#" },
  },
  {
    name: "Reva",
    role: "Design Team",
    specialty: "mechanical",
    image: "/team-photos/roster-member5.png",
    bio: "Learning STEM skills across disciplines — shadows teammates in outreach, design, and CAD while building hands-on engineering experience.",
    skills: ["CAD", "Outreach", "Design", "STEM Learning"],
    social: { github: "#", linkedin: "#", email: "#" },
  },
  {
    name: "Miranda",
    role: "Outreach Team",
    specialty: "outreach",
    image: "/team-photos/roster-member6.png",
    bio: "Drives community engagement and events. Learning CNC machining while representing QBIT at farmers markets, summer camps, and qualifier events.",
    skills: ["Event Planning", "CNC", "Public Speaking", "Media"],
    social: { github: "#", linkedin: "#", email: "#" },
  },
  {
    name: "Srikari",
    role: "Software Developer",
    specialty: "code",
    image: "/team-photos/roster-member7.png",
    bio: "Develops computer vision pipelines and dashboard systems. Optimizes autonomous path planning and builds the team's digital infrastructure.",
    skills: ["Python", "OpenCV", "Path Planning", "React"],
    social: { github: "#", linkedin: "#", email: "#" },
  },
  {
    name: "Coach Shuhul",
    role: "Head Coach & Mentor",
    specialty: "leadership",
    image: "/team-photos/roster-member8.png",
    bio: "Guides the team with technical expertise and strategic vision. The backbone of QBIT's growth — from rookie season to hosting qualifiers.",
    skills: ["Mentoring", "Strategy", "Engineering", "Leadership"],
    social: { github: "#", linkedin: "#", email: "#" },
  },
];

const specialtyColors: Record<string, string> = {
  code: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
  mechanical: "bg-purple-500/10 border-purple-500/30 text-purple-400",
  electrical: "bg-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-400",
  outreach: "bg-teal-500/10 border-teal-500/30 text-teal-400",
  leadership: "bg-amber-500/10 border-amber-500/30 text-amber-400",
};

const specialtyIcons: Record<string, React.ElementType> = {
  code: Code2, mechanical: Wrench, electrical: Cpu, outreach: Users, leadership: Users,
};

const TeamMembers = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="team" className="section-padding relative bg-white/[0.01]">
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            The Crew
          </span>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            Meet <span className="gradient-text">QBIT</span>
          </h2>
          <div className="divider-glow mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Eight builders, coders, and dreamers — led by Captain Ananya and Coach Shuhul — united by a passion for robotics and community.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, i) => {
            const Icon = specialtyIcons[member.specialty];
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                onMouseEnter={() => setHoveredMember(i)}
                onMouseLeave={() => setHoveredMember(null)}
                className="group relative"
              >
                <div className="glass-card overflow-hidden card-hover h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                    <div className={`absolute inset-0 bg-gradient-to-t from-cyan-500/80 via-cyan-500/20 to-transparent flex items-end justify-center pb-4 transition-all duration-300 ${hoveredMember === i ? "opacity-100" : "opacity-0"}`}>
                      <div className="flex gap-3">
                        <a href={member.social.github} className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"><Github className="w-4 h-4 text-white" /></a>
                        <a href={member.social.linkedin} className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"><Linkedin className="w-4 h-4 text-white" /></a>
                        <a href={`mailto:${member.social.email}`} className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"><Mail className="w-4 h-4 text-white" /></a>
                      </div>
                    </div>
                    <span className={`absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${specialtyColors[member.specialty]}`}>
                      <Icon className="w-3 h-3" />{member.specialty.charAt(0).toUpperCase() + member.specialty.slice(1)}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">{member.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3">{member.bio}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <span key={skill} className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs text-muted-foreground">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
