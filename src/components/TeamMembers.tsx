import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Wrench, Cpu, Eye } from "lucide-react";

const members = [
  {
    name: "Alex Chen",
    role: "Team Captain & Lead Programmer",
    specialty: "code",
    image: "/portfolio/1.png",
    bio: "Senior — 3 years on the team. Expert in Java and robot control systems. Led our autonomous code to a top-20 worlds finish.",
    skills: ["Java", "ROS", "Computer Vision", "Control Systems"],
    social: { github: "#", linkedin: "#", email: "#" },
  },
  {
    name: "Sarah Martinez",
    role: "Lead Mechanical Engineer",
    specialty: "mechanical",
    image: "/portfolio/2.png",
    bio: "Junior — 2 years on the team. Designed our award-winning intake mechanism and drivetrain. CAD wizard.",
    skills: ["SolidWorks", "Fusion 360", "3D Printing", "FEA"],
    social: { github: "#", linkedin: "#", email: "#" },
  },
  {
    name: "Jordan Kim",
    role: "Electrical Lead",
    specialty: "electrical",
    image: "/portfolio/3.png",
    bio: "Senior — 3 years on the team. Handles all wiring, sensor integration, and power distribution. Built our custom LED system.",
    skills: ["Circuit Design", "Sensors", "Wiring", "Power Management"],
    social: { github: "#", linkedin: "#", email: "#" },
  },
  {
    name: "Maya Patel",
    role: "Strategy & Outreach Lead",
    specialty: "outreach",
    image: "/portfolio/4.png",
    bio: "Junior — 2 years on the team. Drives our community outreach program, match strategy, and scouting analytics.",
    skills: ["Scouting", "Data Analysis", "Public Speaking", "Event Planning"],
    social: { github: "#", linkedin: "#", email: "#" },
  },
  {
    name: "Ryan Thompson",
    role: "Software Developer",
    specialty: "code",
    image: "/portfolio/5.png",
    bio: "Sophomore — 1 year on the team. Develops teleop controls, dashboard UI, and computer vision pipelines.",
    skills: ["Python", "OpenCV", "React", "TypeScript"],
    social: { github: "#", linkedin: "#", email: "#" },
  },
  {
    name: "Priya Singh",
    role: "Design Engineer",
    specialty: "mechanical",
    image: "/portfolio/6.png",
    bio: "Sophomore — 1 year on the team. Creates CAD models, runs simulations, and manages our 3D printing farm.",
    skills: ["Onshape", "ANSYS", "Prototyping", "Manufacturing"],
    social: { github: "#", linkedin: "#", email: "#" },
  },
  {
    name: "David Park",
    role: "Programming Mentor",
    specialty: "code",
    image: "/portfolio/7.png",
    bio: "Alumni mentor — Former lead programmer. Now studying CS at MIT. Guides the team on software architecture.",
    skills: ["Architecture", "Mentoring", "C++", "Embedded Systems"],
    social: { github: "#", linkedin: "#", email: "#" },
  },
  {
    name: "Emma Wilson",
    role: "Media & Marketing",
    specialty: "media",
    image: "/portfolio/8.png",
    bio: "Junior — 2 years on the team. Runs our social media, creates our engineering portfolio, and produces team videos.",
    skills: ["Premiere Pro", "Photoshop", "Social Media", "Photography"],
    social: { github: "#", linkedin: "#", email: "#" },
  },
];

const specialtyColors: Record<string, string> = {
  code: "bg-blue-500/10 border-blue-500/30 text-blue-400",
  mechanical: "bg-red-500/10 border-red-500/30 text-red-400",
  electrical: "bg-amber-500/10 border-amber-500/30 text-amber-400",
  outreach: "bg-green-500/10 border-green-500/30 text-green-400",
  media: "bg-purple-500/10 border-purple-500/30 text-purple-400",
};

const specialtyIcons: Record<string, React.ElementType> = {
  code: Code2,
  mechanical: Wrench,
  electrical: Cpu,
  outreach: Eye,
  media: Eye,
};

const TeamMembers = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="team" className="section-padding relative bg-white/[0.01]">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            The Crew
          </span>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            Meet <span className="gradient-text">The Team</span>
          </h2>
          <div className="divider-glow mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse group of builders, coders, and dreamers united by a passion for robotics.
          </p>
        </motion.div>

        {/* Team Grid */}
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
                  {/* Member Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

                    {/* Hover overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-red-500/80 via-red-500/20 to-transparent flex items-end justify-center pb-4 transition-all duration-300 ${
                        hoveredMember === i ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="flex gap-3">
                        <a href={member.social.github} className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
                          <Github className="w-4 h-4 text-white" />
                        </a>
                        <a href={member.social.linkedin} className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
                          <Linkedin className="w-4 h-4 text-white" />
                        </a>
                        <a href={`mailto:${member.social.email}`} className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
                          <Mail className="w-4 h-4 text-white" />
                        </a>
                      </div>
                    </div>

                    {/* Specialty badge */}
                    <span
                      className={`absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${specialtyColors[member.specialty]}`}
                    >
                      <Icon className="w-3 h-3" />
                      {member.specialty.charAt(0).toUpperCase() + member.specialty.slice(1)}
                    </span>
                  </div>

                  {/* Member Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold group-hover:text-red-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs text-muted-foreground"
                        >
                          {skill}
                        </span>
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
