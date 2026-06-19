"use client";

import React from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { educations } from "@/lib/data";
import { motion } from "framer-motion";

const DEFAULT_EDUCATIONS = [
  {
    school: "Institut Teknologi Nasional Malang",
    major: "Teknik Informatika",
    degree: "Sarjana Komputer (S.Kom)",
    period: "2022 - 2026",
    description: "Lulusan Teknik Komputer dari Institut Teknologi Nasional Malang dengan IPK 3,74 yang memiliki dedikasi tinggi dalam mengembangkan solusi digital. Saya adalah pengembang (developer) yang memiliki keahlian spesifik di bidang Mobile Development dan Teknologi Web.",
  },
];

export default function EducationSection() {
  const isEmpty = 
    !educations || 
    educations.length === 0 || 
    (educations.length === 1 && !educations[0].school && !educations[0].major);

  const displayEducations = isEmpty ? DEFAULT_EDUCATIONS : educations.map(edu => ({
    school: edu.school || "Institut Teknologi Nasional Malang",
    major: edu.major || "Teknik Informatika",
    degree: edu.degree || "Sarjana Komputer (S.Kom)",
    period: edu.period || "2022 - 2026",
    description: edu.description || "Lulusan Teknik Komputer dari Institut Teknologi Nasional Malang dengan IPK 3,74 yang memiliki dedikasi tinggi dalam mengembangkan solusi digital. Saya adalah pengembang (developer) yang memiliki keahlian spesifik di bidang Mobile Development dan Teknologi Web.",
  }));

  return (
    <section id="education" className="py-20 bg-[#0f1117] border-t border-[#2d3148]/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Pendidikan <span className="text-blue-500">Terakhir</span>
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayEducations.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#1a1d27] border border-[#2d3148] rounded-xl p-6 shadow-xl hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-bl-full pointer-events-none" />

              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#252836] border border-[#2d3148] flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-[#2563eb]/10 group-hover:text-blue-400 transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 bg-blue-500/5 border border-blue-500/10 px-2.5 py-1 rounded-full w-fit shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Info Text */}
                <div className="space-y-1 mb-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {edu.school}
                  </h3>
                  <p className="text-sm font-semibold text-gray-300">
                    {edu.degree} &bull; <span className="text-[#9ca3af] font-medium">{edu.major}</span>
                  </p>
                </div>

                <p className="text-sm text-[#9ca3af] leading-relaxed">
                  {edu.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
