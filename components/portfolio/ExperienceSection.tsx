"use client";

import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";
import { motion } from "framer-motion";

const DEFAULT_EXPERIENCES = [
  {
    company: "Thunderlabs",
    role: "Mobile Developer Intern",
    period: "Feb 2025 - Jul 2025",
    description: "Mengembangkan aplikasi Point of Sale (POS) berbasis mobile secara end-to-end mulai dari awal (scratch). Merancang arsitektur, membangun UI/UX yang intuitif menggunakan Flutter, serta melakukan integrasi penuh dengan RESTful API dari backend untuk memastikan kelancaran transaksi data harian.",
    tech: ["Flutter", "Android SDK", "iOS Development", "RESTful API", "UI/UX Design"],
  },
  {
    company: "Bangkit Academy by Google, GoTo, Traveloka",
    role: "Mobile Development Cohort",
    period: "2024",
    description: "Mengikuti program inkubasi talenta digital intensif yang berfokus pada Mobile Development. Mengembangkan keahlian mendalam pada arsitektur perangkat lunak, manajemen state, penulisan clean code, serta sukses menyelesaikan Capstone Project standar industri dengan kolaborasi tim berbasis Agile/Scrum.",
    tech: ["Flutter", "Dart", "Android Studio", "Git & GitHub", "Agile Methodology"],
  }
];

export default function ExperienceSection() {
  // Check if data is empty or default empty template
  const isEmpty = 
    !experiences || 
    experiences.length === 0 || 
    (experiences.length === 1 && !experiences[0].company && !experiences[0].role);

  const displayExperiences = isEmpty ? DEFAULT_EXPERIENCES : experiences.map(exp => ({
    company: exp.company || "Nama Perusahaan",
    role: exp.role || "Posisi Pekerjaan",
    period: exp.period || "Periode Kerja",
    description: exp.description || "Deskripsi tugas dan tanggung jawab Anda di perusahaan ini.",
    tech: exp.tech && exp.tech.length > 0 ? exp.tech : ["Teknologi 1", "Teknologi 2"],
  }));

  return (
    <section id="experience" className="py-20 bg-[#0f1117]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Pengalaman <span className="text-blue-500">Kerja</span>
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[#2d3148] ml-4 sm:ml-6 space-y-12">
          {displayExperiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline Indicator Dot */}
              <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#1a1d27] border-2 border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              </span>

              {/* Card Container */}
              <div className="bg-[#1a1d27] border border-[#2d3148] rounded-xl p-6 shadow-xl hover:border-blue-500/30 transition-all duration-300 group">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{exp.role}</span>
                    </h3>
                    <p className="text-sm font-semibold text-gray-400 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs font-medium text-blue-400 bg-blue-500/5 border border-blue-500/10 px-2.5 py-1 rounded-full w-fit shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm text-[#9ca3af] leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#252836] text-white border border-[#2d3148] group-hover:border-[#2d3148]/80 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
