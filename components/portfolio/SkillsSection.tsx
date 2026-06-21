"use client";

import React from "react";
import { Code2, Server, Wrench, Palette } from "lucide-react";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

const DEFAULT_SKILLS = {
  frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Redux"],
  backend: ["Node.js", "NestJS", "MySQL", "MongoDB", "RESTful API"],
  tools: ["Git", "GitHub",  "VS Code", "Postman", "Vercel", "Linux"],
  design: ["UI/UX Design", "Figma", "Responsive Web Design", "Wireframing", "Prototyping"],
};

export default function SkillsSection() {
  const isFrontendEmpty = !skills.frontend || skills.frontend.length === 0;
  const isBackendEmpty = !skills.backend || skills.backend.length === 0;
  const isToolsEmpty = !skills.tools || skills.tools.length === 0;
  const isDesignEmpty = !skills.design || skills.design.length === 0;

  const displaySkills = {
    frontend: isFrontendEmpty ? DEFAULT_SKILLS.frontend : skills.frontend,
    backend: isBackendEmpty ? DEFAULT_SKILLS.backend : skills.backend,
    tools: isToolsEmpty ? DEFAULT_SKILLS.tools : skills.tools,
    design: isDesignEmpty ? DEFAULT_SKILLS.design : skills.design,
  };

  const categories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      items: displaySkills.frontend,
    },
    {
      title: "Backend Development",
      icon: <Server className="w-5 h-5 text-blue-500" />,
      items: displaySkills.backend,
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-5 h-5 text-blue-500" />,
      items: displaySkills.tools,
    },
    {
      title: "Design & Creative",
      icon: <Palette className="w-5 h-5 text-blue-500" />,
      items: displaySkills.design,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#0f1117]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Keahlian <span className="text-blue-500">Teknis</span>
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* 4-Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-[#1a1d27] border border-[#2d3148] rounded-xl p-6 shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 border-b border-[#2d3148]/55 pb-3">
                <div className="w-9 h-9 rounded-lg bg-[#252836] group-hover:bg-[#2563eb]/10 flex items-center justify-center transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Badges Wrapper */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {cat.items.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-[#252836] text-white border border-[#2d3148] hover:border-blue-500/40 hover:bg-[#2563eb]/10 hover:text-blue-400 transition-all cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
